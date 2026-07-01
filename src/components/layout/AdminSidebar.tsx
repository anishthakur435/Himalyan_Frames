import Link from "next/link";
import { 
  LayoutDashboard, 
  Film, 
  List, 
  MessageSquare, 
  HelpCircle,
  LogOut,
  Image as ImageIcon
} from "lucide-react";

import { logoutAction } from "@/actions/auth";

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-app-card border-r border-app-border/40 min-h-screen flex flex-col hidden md:flex">
      <div className="p-6 border-b border-app-border/40">
        <h2 className="font-display text-lg font-bold tracking-widest uppercase text-app-text">
          HF Basecamp
        </h2>
        <p className="text-xs font-mono text-app-accent mt-1 uppercase">Admin Portal</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <SidebarLink href="/admin" icon={<LayoutDashboard size={18} />} label="Dashboard" />
        <div className="pt-4 pb-2">
          <p className="px-3 text-xs font-mono text-app-sec/60 uppercase tracking-wider">Content</p>
        </div>
        <SidebarLink href="/admin/projects" icon={<Film size={18} />} label="Projects" />
        <SidebarLink href="/admin/services" icon={<List size={18} />} label="Services" />
        <SidebarLink href="/admin/media" icon={<ImageIcon size={18} />} label="Media Library" />
        
        <div className="pt-4 pb-2">
          <p className="px-3 text-xs font-mono text-app-sec/60 uppercase tracking-wider">Engagement</p>
        </div>
        <SidebarLink href="/admin/inquiries" icon={<MessageSquare size={18} />} label="Inquiries" />
        <SidebarLink href="/admin/testimonials" icon={<MessageSquare size={18} />} label="Testimonials" />
        <SidebarLink href="/admin/faqs" icon={<HelpCircle size={18} />} label="FAQs" />
      </nav>

      <div className="p-4 border-t border-app-border/40">
        <form action={logoutAction}>
          <button type="submit" className="flex items-center gap-3 px-3 py-2 text-sm text-app-sec hover:text-destructive w-full rounded-md transition-colors font-mono">
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </form>
      </div>
    </aside>
  );
}

function SidebarLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center gap-3 px-3 py-2 text-sm text-app-text hover:bg-app-surface rounded-md transition-colors font-mono"
    >
      <span className="text-app-accent">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
