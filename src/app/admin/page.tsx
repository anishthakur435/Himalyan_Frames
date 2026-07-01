import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Film, List, Users } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  await createClient();
  
  // In a real app we'd fetch actual counts here:
  // const { count: projectCount } = await supabase.from('projects').select('*', { count: 'exact', head: true });
  // For the prototype phase, we'll use placeholder metrics until data is populated.
  
  const stats = [
    { title: "Total Projects", value: "12", icon: Film },
    { title: "Active Services", value: "4", icon: List },
    { title: "Unread Inquiries", value: "3", icon: MessageSquare, alert: true },
    { title: "Testimonials", value: "8", icon: Users },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold tracking-wider text-app-text">Dashboard</h1>
        <p className="text-app-sec font-mono text-sm mt-2">Overview of Himalayan Frames Basecamp operations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-app-card border-app-border/40">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-mono font-medium text-app-sec">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.alert ? 'text-destructive' : 'text-app-accent'}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-app-text">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-app-card border-app-border/40">
          <CardHeader>
            <CardTitle className="font-display text-lg">Recent Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-app-sec font-mono">No recent inquiries to display.</p>
          </CardContent>
        </Card>

        <Card className="bg-app-card border-app-border/40">
          <CardHeader>
            <CardTitle className="font-display text-lg">Draft Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-app-sec font-mono">No draft projects to display.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
