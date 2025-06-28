
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Star, Calendar, Book, Clock, Bell } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: "🎯",
      earned: true,
      earnedDate: "2024-01-15",
      xp: 50,
      rarity: "common"
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "Maintain a 7-day learning streak",
      icon: "🔥",
      earned: true,
      earnedDate: "2024-01-22",
      xp: 200,
      rarity: "uncommon"
    },
    {
      id: 3,
      title: "Knowledge Seeker",
      description: "Complete 10 lessons in a single day",
      icon: "📚",
      earned: true,
      earnedDate: "2024-01-20",
      xp: 300,
      rarity: "rare"
    },
    {
      id: 4,
      title: "Speed Learner",
      description: "Complete a course in under 3 days",
      icon: "⚡",
      earned: false,
      progress: 65,
      xp: 400,
      rarity: "rare"
    },
    {
      id: 5,
      title: "Master Student",
      description: "Achieve 95% average on all quizzes",
      icon: "🏆",
      earned: false,
      progress: 78,
      xp: 500,
      rarity: "legendary"
    },
    {
      id: 6,
      title: "Consistency King",
      description: "Study for 30 consecutive days",
      icon: "👑",
      earned: false,
      progress: 23,
      xp: 1000,
      rarity: "legendary"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'text-gray-600 bg-gray-100';
      case 'uncommon':
        return 'text-green-600 bg-green-100';
      case 'rare':
        return 'text-blue-600 bg-blue-100';
      case 'legendary':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const totalXP = achievements.filter(a => a.earned).reduce((sum, a) => sum + a.xp, 0);
  const earnedCount = achievements.filter(a => a.earned).length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center space-x-2">
            <Star className="h-5 w-5 text-accent" />
            <span>Achievements</span>
          </CardTitle>
          <Badge variant="secondary" className="bg-accent/10 text-accent">
            {earnedCount} / {achievements.length}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          {totalXP} XP earned from achievements
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                achievement.earned
                  ? 'bg-muted/30 border-primary/20 achievement-glow'
                  : 'bg-muted/10 border-border hover:border-primary/30'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`text-2xl p-2 rounded-lg ${
                  achievement.earned ? 'bg-primary/10' : 'bg-muted grayscale'
                }`}>
                  {achievement.icon}
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className={`font-medium ${
                        achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <Badge 
                        variant="outline" 
                        className={getRarityColor(achievement.rarity)}
                      >
                        {achievement.rarity}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        {achievement.xp} XP
                      </Badge>
                    </div>
                  </div>

                  {achievement.earned ? (
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Earned on {new Date(achievement.earnedDate!).toLocaleDateString()}</span>
                    </div>
                  ) : achievement.progress !== undefined ? (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-muted-foreground">{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Bell className="h-3 w-3" />
                      <span>Not started</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Achievement Progress</span>
            <span className="text-sm text-muted-foreground">
              {earnedCount} of {achievements.length} unlocked
            </span>
          </div>
          <Progress value={(earnedCount / achievements.length) * 100} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>{Math.round((earnedCount / achievements.length) * 100)}% complete</span>
            <span>{totalXP} XP earned</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;
