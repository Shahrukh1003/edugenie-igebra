
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import StatsCards from '@/components/dashboard/StatsCards';
import LearningPath from '@/components/dashboard/LearningPath';
import Achievements from '@/components/dashboard/Achievements';
import AIMentorChat from '@/components/chat/AIMentorChat';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Book, Users, MessageCircle, Star, TrendingUp, BookOpen } from 'lucide-react';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const mainContentAnimation = useScrollAnimation();
  const sidebarAnimation = useScrollAnimation();

  const upcomingClasses = [
    {
      title: "Advanced React Patterns",
      time: "2:00 PM - 3:30 PM",
      instructor: "Dr. Sarah Chen",
      students: 24,
      type: "Live Session"
    },
    {
      title: "JavaScript Fundamentals Quiz",
      time: "4:00 PM - 4:45 PM", 
      instructor: "AI Mentor",
      students: 1,
      type: "Assessment"
    }
  ];

  const recentActivity = [
    {
      action: "Completed lesson",
      subject: "React Hooks Fundamentals", 
      time: "2 hours ago",
      xp: 150
    },
    {
      action: "Earned achievement",
      subject: "Week Warrior",
      time: "1 day ago", 
      xp: 200
    },
    {
      action: "Started course",
      subject: "Advanced React Patterns",
      time: "2 days ago",
      xp: 0
    },
    {
      action: "Completed quiz",
      subject: "State Management Quiz",
      time: "3 days ago",
      xp: 100
    }
  ];

  return (
    <div className="min-h-screen bg-background page-transition">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div 
          ref={heroAnimation.ref}
          className={`bg-hero-gradient rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-700 ${
            heroAnimation.isVisible ? 'slide-in-left' : 'scroll-animate'
          }`}
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold font-heading mb-2">
                  Welcome back, Alex! 👋
                </h1>
                <p className="text-white/90 text-lg mb-4">
                  Ready to continue your learning journey? You're doing amazing!
                </p>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span>7-day streak active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>2,450 XP earned</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Book className="h-4 w-4" />
                    <span>Level 15</span>
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                  <Link to="/courses">
                    <Button className="neon-button">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Browse Courses
                    </Button>
                  </Link>
                  <Link to="/progress">
                    <Button variant="outline" className="animated-button bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Progress
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center text-6xl animate-bounce-soft">
                  🎓
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5"></div>
        </div>

        {/* Stats Cards */}
        <div 
          ref={statsAnimation.ref}
          className={`transition-all duration-700 delay-200 ${
            statsAnimation.isVisible ? 'slide-in-right' : 'scroll-animate'
          }`}
        >
          <StatsCards />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Learning Path */}
          <div 
            ref={mainContentAnimation.ref}
            className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-300 ${
              mainContentAnimation.isVisible ? 'slide-in-left' : 'scroll-animate'
            }`}
          >
            <LearningPath />

            {/* Recent Activity */}
            <Card className="card-interactive">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors animated-button"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{activity.action}</span>
                          <span className="text-primary font-medium">{activity.subject}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                          <span>{activity.time}</span>
                          {activity.xp > 0 && (
                            <>
                              <span>•</span>
                              <Badge variant="secondary" className="text-xs">
                                <Star className="h-3 w-3 mr-1" />
                                +{activity.xp} XP
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div 
            ref={sidebarAnimation.ref}
            className={`space-y-6 transition-all duration-700 delay-400 ${
              sidebarAnimation.isVisible ? 'slide-in-right' : 'scroll-animate'
            }`}
          >
            {/* Upcoming Classes */}
            <Card className="card-interactive">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>Today's Schedule</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingClasses.map((class_, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border hover:border-primary/30 transition-colors animated-button">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{class_.title}</h4>
                      <Badge 
                        variant={class_.type === 'Live Session' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {class_.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{class_.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-3 w-3" />
                        <span>{class_.instructor} • {class_.students} students</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-3 neon-button">
                      {class_.type === 'Live Session' ? 'Join Class' : 'Start Quiz'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Achievements />

            {/* Quick Actions */}
            <Card className="card-interactive">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start animated-button"
                  onClick={() => setIsChatOpen(true)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Ask AI Mentor
                </Button>
                <Link to="/courses" className="block">
                  <Button variant="outline" className="w-full justify-start animated-button">
                    <Book className="h-4 w-4 mr-2" />
                    Browse Courses
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start animated-button">
                  <Users className="h-4 w-4 mr-2" />
                  Study Groups
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* AI Mentor Chat */}
      <AIMentorChat 
        isOpen={isChatOpen} 
        onToggle={() => setIsChatOpen(!isChatOpen)} 
      />
    </div>
  );
};

export default Index;
