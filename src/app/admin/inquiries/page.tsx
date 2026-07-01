import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Mail, CheckCircle2 } from "lucide-react";

export default async function InquiriesCMS() {
  const supabase = await createClient();
  const { data: inquiries } = await supabase.from('inquiries').select('*').order('created_at', { ascending: false }) as unknown as { data: any[] | null };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-app-text">Inquiries</h1>
          <p className="text-app-sec font-mono text-sm mt-1">Review and manage client leads.</p>
        </div>
      </div>

      <div className="bg-app-card border border-app-border/40 rounded-md">
        <Table>
          <TableHeader className="bg-app-surface/50">
            <TableRow className="border-app-border/40 hover:bg-transparent">
              <TableHead className="text-app-sec font-mono uppercase text-xs">Date</TableHead>
              <TableHead className="text-app-sec font-mono uppercase text-xs">Client Info</TableHead>
              <TableHead className="text-app-sec font-mono uppercase text-xs">Status</TableHead>
              <TableHead className="text-app-sec font-mono uppercase text-xs text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries && inquiries.length > 0 ? (
              inquiries.map((inquiry) => (
                <TableRow key={inquiry.id} className={`border-app-border/40 hover:bg-app-surface/30 ${inquiry.status === 'unread' ? 'bg-app-surface/20' : ''}`}>
                  <TableCell className="font-mono text-xs text-app-sec">
                    {new Date(inquiry.created_at || '').toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-app-text">{inquiry.client_name}</div>
                    <div className="text-xs text-app-sec">{inquiry.email}</div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-mono ${
                      inquiry.status === 'unread' ? 'bg-brand-accent/20 text-brand-accent' : 'bg-app-surface text-app-sec'
                    }`}>
                      {inquiry.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="sm" className="text-app-accent hover:text-brand-gold">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-app-sec hover:text-white">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="border-app-border/40 hover:bg-transparent">
                <TableCell colSpan={4} className="h-24 text-center text-app-sec font-mono text-sm">
                  No inquiries found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
