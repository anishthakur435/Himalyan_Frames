import { createClient } from "@/lib/supabase/server";
import { MediaUploader } from "@/components/modules/media-uploader";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Film, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function MediaLibrary() {
  const supabase = await createClient();
  
  // We fetch metadata from our 'media' tracking table
  const { data: mediaItems } = await supabase.from('media').select('*').order('created_at', { ascending: false }) as unknown as { data: any[] | null };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-app-text">Media Library</h1>
        <p className="text-app-sec font-mono text-sm mt-1">Upload and manage high-resolution assets.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Upload Interface */}
        <div className="lg:col-span-1">
          <MediaUploader />
        </div>

        {/* Right Col: Asset Tracker */}
        <div className="lg:col-span-2 bg-app-card border border-app-border/40 rounded-md">
          <div className="p-4 border-b border-app-border/40">
            <h3 className="font-display text-sm uppercase tracking-wider text-app-text flex items-center gap-2">
              <Film size={16} className="text-app-accent" /> Recent Assets
            </h3>
          </div>
          
          <Table>
            <TableHeader className="bg-app-surface/50">
              <TableRow className="border-app-border/40 hover:bg-transparent">
                <TableHead className="text-app-sec font-mono uppercase text-[10px]">File path</TableHead>
                <TableHead className="text-app-sec font-mono uppercase text-[10px]">Bucket</TableHead>
                <TableHead className="text-app-sec font-mono uppercase text-[10px]">Size</TableHead>
                <TableHead className="text-app-sec font-mono uppercase text-[10px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mediaItems && mediaItems.length > 0 ? (
                mediaItems.map((item) => (
                  <TableRow key={item.id} className="border-app-border/40 hover:bg-app-surface/30">
                    <TableCell className="font-medium text-app-text text-xs max-w-[200px] truncate">
                      {item.storage_path}
                    </TableCell>
                    <TableCell className="text-app-sec font-mono text-xs">
                      {item.bucket}
                    </TableCell>
                    <TableCell className="text-app-sec font-mono text-xs">
                      {(item.size_bytes / (1024 * 1024)).toFixed(1)} MB
                    </TableCell>
                    <TableCell className="text-right space-x-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-app-accent hover:text-brand-gold">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive/80">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow className="border-app-border/40 hover:bg-transparent">
                  <TableCell colSpan={4} className="h-24 text-center text-app-sec font-mono text-xs">
                    No media assets indexed yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

      </div>
    </div>
  );
}
