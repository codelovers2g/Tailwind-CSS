import * as React from "react";

interface SkillCardProps {
  title: string;
  description: string;
  level: number;
  icon: React.ReactNode;
}

export function SkillCard({ title, description, level, icon }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
      {/* Animated Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10 group-hover:scale-150" />
      
      <div className="relative z-10 space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary animate-float">
          {icon}
        </div>
        
        <div>
          <h3 className="text-lg font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span>Efficiency</span>
            <span>{level}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div 
              className="h-full bg-primary transition-all duration-1000 ease-out group-hover:animate-pulse" 
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
      </div>

      {/* Glassmorphism Border Effect */}
      <div className="absolute inset-0 rounded-xl border border-white/0 transition-all group-hover:border-white/10" />
    </div>
  );
}
