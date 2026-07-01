import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Edit, Trash2 } from "lucide-react";

export default async function ProjectsCMS() {
  const supabase = await createClient();
  const { data: projects } = await supabase.from('projects').select('*').order('created_at', { ascending: false }) as unknown as { data: any[] | null };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-display text-2xl font-bold text-app-text">Projects</h1>
          <p className="text-app-sec font-mono text-sm mt-1">Manage cinematic portfolios and featured films.</p>
        </div>
        <Button className="bg-brand-accent hover:bg-brand-gold text-white font-mono text-xs uppercase tracking-wider">
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      <div className="bg-app-card border border-app-border/40 rounded-md">
        <Table>
          <TableHeader className="bg-app-surface/50">
            <TableRow className="border-app-border/40 hover:bg-transparent">
              <TableHead className="text-app-sec font-mono uppercase text-xs">Title</TableHead>
              <TableHead className="text-app-sec font-mono uppercase text-xs">Status</TableHead>
              <TableHead className="text-app-sec font-mono uppercase text-xs">Featured</TableHead>
              <TableHead className="text-app-sec font-mono uppercase text-xs text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <TableRow key={project.id} className="border-app-border/40 hover:bg-app-surface/30">
                  <TableCell className="font-medium text-app-text">{project.title}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-mono bg-app-surface text-app-sec">
                      {project.status}
                    </span>
                  </TableCell>
                  <TableCell>{project.is_featured ? 'Yes' : 'No'}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="sm" className="text-app-accent hover:text-brand-gold">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive/80">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="border-app-border/40 hover:bg-transparent">
                <TableCell colSpan={4} className="h-24 text-center text-app-sec font-mono text-sm">
                  No projects found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
