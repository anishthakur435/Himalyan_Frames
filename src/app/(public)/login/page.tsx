import { LoginForm } from "@/components/modules/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | Himalayan Frames",
  description: "Secure login portal for Himalayan Frames administration.",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-app-bg text-app-text p-4 relative overflow-hidden">
      {/* Background decoration matching cinematic theme */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-app-surface via-app-bg to-app-bg opacity-50" />
      
      <div className="relative z-10 w-full max-w-md space-y-8 p-8 bg-app-card/80 backdrop-blur-md rounded-2xl border border-app-border/40 shadow-2xl">
        <div className="text-center space-y-2">
          <h1 className="font-display text-2xl font-bold tracking-[0.25em] uppercase text-app-text">
            Himalayan Frames
          </h1>
          <p className="text-sm font-mono tracking-widest text-app-accent uppercase">
            Basecamp Portal
          </p>
        </div>

        <LoginForm />
        
        <div className="text-center mt-6">
          <p className="text-xs text-app-sec/60 font-mono">
            Authorized personnel only. All access is logged.
          </p>
        </div>
      </div>
    </main>
  );
}
