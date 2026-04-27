import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SkillCard } from "@/components/ui/SkillCard";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Activity,
  Plus,
  ArrowUpRight,
  MoreHorizontal,
  Layers
} from "lucide-react";

const stats = [
  { name: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: TrendingUp },
  { name: "Active Users", value: "2,350", change: "+180.1%", icon: Users },
  { name: "Sales Velocity", value: "+12.5%", change: "+19%", icon: Target },
  { name: "System Uptime", value: "99.98%", change: "+0.01%", icon: Activity },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Executive Overview</h1>
          <p className="text-muted-foreground">Welcome back, here's what's happening today.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">System Intelligence</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <SkillCard 
            title="Neural Processing" 
            description="AI-driven workload optimization and predictive scaling."
            level={94}
            icon={<Activity className="h-6 w-6" />}
          />
          <SkillCard 
            title="Data Synthesis" 
            description="Real-time multi-source data aggregation and cleaning."
            level={88}
            icon={<Layers className="h-6 w-6" />}
          />
          <SkillCard 
            title="Global Edge" 
            description="Low-latency delivery via 240+ global points of presence."
            level={99}
            icon={<Target className="h-6 w-6" />}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Global Operations</CardTitle>
            <CardDescription>Real-time performance across all regions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full rounded-md bg-accent/50 flex items-center justify-center border border-dashed">
              <span className="text-muted-foreground">Interactive Performance Chart Placeholder</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>You have 12 new updates since yesterday.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">System Deployment</p>
                    <p className="text-sm text-muted-foreground">Version 4.2.0 deployed to production.</p>
                  </div>
                  <div className="ml-auto font-medium text-xs text-muted-foreground">2h ago</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Active Strategic Projects</CardTitle>
              <CardDescription>High-priority initiatives currently in progress.</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Project Name</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Lead</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Timeline</th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Budget</th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {[
                  { name: "Project Horizon", lead: "Sarah Chen", status: "In Progress", timeline: "Q2 2026", budget: "$1.2M" },
                  { name: "Cyber Armor", lead: "Marcus Thorne", status: "Planning", timeline: "Q3 2026", budget: "$850k" },
                  { name: "Zenith Core", lead: "Alex Rivera", status: "On Track", timeline: "Q2 2026", budget: "$2.4M" },
                ].map((project) => (
                  <tr key={project.name} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle font-medium">{project.name}</td>
                    <td className="p-4 align-middle">{project.lead}</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        {project.status}
                      </span>
                    </td>
                    <td className="p-4 align-middle text-muted-foreground">{project.timeline}</td>
                    <td className="p-4 align-middle text-right font-mono">{project.budget}</td>
                    <td className="p-4 align-middle text-right">
                      <button className="text-muted-foreground hover:text-foreground">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
