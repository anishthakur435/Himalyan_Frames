"use client";

import { useState } from "react";
import * as tus from "tus-js-client";
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/database.types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud, CheckCircle2, AlertCircle } from "lucide-react";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export function MediaUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [bucket, setBucket] = useState<string>("hero-videos");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const supabase = createBrowserClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

  const handleUpload = async () => {
    if (!file) return;

    try {
      setUploading(true);
      setStatus("idle");
      setProgress(0);

      // Validate naming convention strictly
      // e.g. zanskar-winter_hero-reel_4k_2026-01.mp4
      const nameParts = file.name.split('_');
      if (nameParts.length < 4 && bucket !== "avatars" && bucket !== "testimonials") {
        throw new Error("Invalid naming convention. Must be: {project-slug}_{content-type}_{resolution}_{YYYY-MM}.{ext}");
      }

      const { data: { session } } = await supabase.auth.getSession();
      
      const upload = new tus.Upload(file, {
        endpoint: `${SUPABASE_URL}/storage/v1/upload/resumable`,
        retryDelays: [0, 3000, 5000, 10000, 20000],
        headers: {
          authorization: `Bearer ${session?.access_token ?? SUPABASE_ANON_KEY}`,
          'x-upsert': 'true',
        },
        uploadDataDuringCreation: true,
        removeFingerprintOnSuccess: true,
        metadata: {
          bucketName: bucket,
          objectName: file.name,
          contentType: file.type,
          cacheControl: '3600',
        },
        chunkSize: 6 * 1024 * 1024, // 6MB
        onError: (error) => {
          console.error("Failed because: " + error);
          setStatus("error");
          setErrorMsg(error.message);
          setUploading(false);
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
          setProgress(Number(percentage));
        },
        onSuccess: () => {
          console.log("Download %s from %s", (upload.file as any).name, upload.url);
          setStatus("success");
          setUploading(false);
          setFile(null);
        },
      });

      // Check if there are any previous uploads to continue.
      upload.findPreviousUploads().then((previousUploads) => {
        // Found previous uploads so we select the first one. 
        if (previousUploads.length) {
          upload.resumeFromPreviousUpload(previousUploads[0]);
        }
        upload.start();
      });

    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
      setUploading(false);
    }
  };

  return (
    <div className="bg-app-card border border-app-border/40 p-6 rounded-md space-y-6">
      <div>
        <h2 className="text-lg font-display text-app-text">Resumable Upload</h2>
        <p className="text-xs text-app-sec font-mono mt-1">Supports files up to 500MB via TUS protocol.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-xs font-mono uppercase tracking-wider text-app-sec">Target Bucket</Label>
          <select 
            className="w-full bg-app-surface border border-app-border/40 rounded px-3 py-2 text-sm text-app-text font-mono focus:outline-none focus:border-app-accent"
            value={bucket}
            onChange={(e) => setBucket(e.target.value)}
            disabled={uploading}
          >
            <option value="hero-videos">Hero Videos</option>
            <option value="project-videos">Project Videos</option>
            <option value="project-images">Project Images</option>
            <option value="avatars">Avatars</option>
            <option value="testimonials">Testimonials</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-mono uppercase tracking-wider text-app-sec">Media File</Label>
          <div className="flex items-center gap-4">
            <Input 
              type="file" 
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="bg-app-surface border-app-border/40 text-app-text file:text-app-accent file:bg-transparent file:border-0 font-mono text-xs"
              disabled={uploading}
            />
          </div>
          <p className="text-[10px] text-app-sec/60 font-mono">Format: {'{project-slug}_{content-type}_{resolution}_{YYYY-MM}.{ext}'}</p>
        </div>

        {uploading && (
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-app-accent">Uploading...</span>
              <span className="text-app-text">{progress}%</span>
            </div>
            <div className="w-full bg-app-surface h-1.5 rounded-full overflow-hidden">
              <div className="bg-brand-accent h-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {status === "success" && (
          <div className="flex items-center gap-2 text-sm text-green-500 font-mono bg-green-500/10 p-3 rounded border border-green-500/20">
            <CheckCircle2 size={16} />
            <span>Upload successful!</span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 text-sm text-destructive font-mono bg-destructive/10 p-3 rounded border border-destructive/20">
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        <Button 
          onClick={handleUpload} 
          disabled={!file || uploading} 
          className="w-full bg-brand-accent hover:bg-brand-gold text-white font-mono uppercase tracking-widest text-xs h-10"
        >
          {uploading ? "Processing..." : (
            <><UploadCloud size={16} className="mr-2" /> Start Upload</>
          )}
        </Button>
      </div>
    </div>
  );
}
