import { AdminSidebar } from "@/components/layout/AdminSidebar";

export const metadata = {
  title: "Admin Dashboard | Himalayan Frames",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-app-bg text-app-text">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-8 relative">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-app-surface/50 via-app-bg to-app-bg pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
