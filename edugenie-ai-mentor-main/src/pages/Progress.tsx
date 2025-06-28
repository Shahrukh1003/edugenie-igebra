
import React from 'react';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Target, Calendar, TrendingUp, Book, Clock, Star, Award } from 'lucide-react';

const ProgressPage = () => {
  const progressData = {
    overallProgress: 68,
    weeklyGoal: 85,
    streak: 12,
    totalHours: 156,
    completedCourses: 8,
    certificates: 5
  };

  const subjects = [
    { name: 'React Development', progress: 85, hours: 42, color: 'bg-blue-500' },
    { name: 'UI/UX Design', progress: 72, hours: 28, color: 'bg-purple-500' },
    { name: 'JavaScript', progress: 90, hours: 35, color: 'bg-yellow-500' },
    { name: 'Node.js', progress: 45, hours: 18, color: 'bg-green-500' },
    { name: 'Database Design', progress: 60, hours: 24, color: 'bg-red-500' }
  ];

  const achievements = [
    { name: 'First Course Complete', icon: Trophy, earned: true, date: '2024-01-15' },
    { name: 'Week Warrior', icon: Target, earned: true, date: '2024-01-20' },
    { name: 'Knowledge Seeker', icon: Book, earned: true, date: '2024-01-25' },
    { name: 'Time Master', icon: Clock, earned: false, date: null },
    { name: 'Star Student', icon: Star, earned: false, date: null },
    { name: 'Certificate Collector', icon: Award, earned: true, date: '2024-02-01' }
  ];

  const weeklyActivity = [
    { day: 'Mon', hours: 2.5, completed: true },
    { day: 'Tue', hours: 1.8, completed: true },
    { day: 'Wed', hours: 3.2, completed: true },
    { day: 'Thu', hours: 2.1, completed: true },
    { day: 'Fri', hours: 1.5, completed: true },
    { day: 'Sat', hours: 2.8, completed: true },
    { day: 'Sun', hours: 0.8, completed: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold font-heading mb-4 gradient-text">
            Your Learning Progress
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Track your journey and celebrate your achievements
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <Card className="card-interactive text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{progressData.overallProgress}%</div>
              <p className="text-sm text-muted-foreground">Overall Progress</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">{progressData.streak}</div>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">{progressData.totalHours}</div>
              <p className="text-sm text-muted-foreground">Total Hours</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{progressData.completedCourses}</div>
              <p className="text-sm text-muted-foreground">Courses Done</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">{progressData.certificates}</div>
              <p className="text-sm text-muted-foreground">Certificates</p>
            </CardContent>
          </Card>
          
          <Card className="card-interactive text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">{progressData.weeklyGoal}%</div>
              <p className="text-sm text-muted-foreground">Weekly Goal</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Subject Progress */}
          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Subject Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {subjects.map((subject, index) => (
                <div key={subject.name} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{subject.name}</span>
                    <span className="text-sm text-muted-foreground">{subject.hours}h</span>
                  </div>
                  <div className="flex space-x-2 items-center">
                    <Progress value={subject.progress} className="flex-1" />
                    <span className="text-sm font-medium w-12">{subject.progress}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Activity */}
          <Card className="card-interactive">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-secondary" />
                <span>Weekly Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyActivity.map((day, index) => (
                  <div key={day.day} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${day.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className="font-medium">{day.day}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{day.hours}h</div>
                      <div className="text-xs text-muted-foreground">
                        {day.completed ? 'Completed' : 'In Progress'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="card-interactive">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-accent" />
              <span>Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={achievement.name}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      achievement.earned 
                        ? 'border-primary bg-primary/5 achievement-glow' 
                        : 'border-border bg-muted/30'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        achievement.earned ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{achievement.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {achievement.earned ? `Earned on ${achievement.date}` : 'Not earned yet'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProgressPage;
