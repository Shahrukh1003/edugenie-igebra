
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Star, Book, Calendar } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    {
      title: "Learning Streak",
      value: "7 Days",
      subtitle: "Keep it going! 🔥",
      icon: Calendar,
      progress: 70,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Courses Completed",
      value: "12",
      subtitle: "3 this month",
      icon: Book,
      progress: 85,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Study Time Today",
      value: "2h 34m",
      subtitle: "Goal: 3 hours",
      icon: Clock,
      progress: 84,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Achievement Points",
      value: "2,450",
      subtitle: "Level 15",
      icon: Star,
      progress: 65,
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <IconComponent className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stat.subtitle}
                  </p>
                </div>
                <div className="space-y-1">
                  <Progress 
                    value={stat.progress} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{stat.progress}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
