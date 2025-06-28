
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  BookOpen, 
  Trophy, 
  Star,
  Plus,
  Search,
  Filter,
  TrendingUp,
  Clock,
  ThumbsUp,
  Eye
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();

  const communityStats = [
    { label: 'Active Members', value: '12.5K', icon: Users, color: 'text-blue-500' },
    { label: 'Discussions', value: '8.2K', icon: MessageCircle, color: 'text-green-500' },
    { label: 'Study Groups', value: '450', icon: BookOpen, color: 'text-purple-500' },
    { label: 'Success Stories', value: '1.8K', icon: Trophy, color: 'text-yellow-500' }
  ];

  const discussions = [
    {
      id: 1,
      title: "How to stay motivated while learning React?",
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      category: "JavaScript",
      replies: 24,
      likes: 156,
      views: 1200,
      timeAgo: "2 hours ago",
      isHot: true
    },
    {
      id: 2,
      title: "Best practices for Python beginners",
      author: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      category: "Python",
      replies: 18,
      likes: 89,
      views: 850,
      timeAgo: "4 hours ago",
      isHot: false
    },
    {
      id: 3,
      title: "Study group for Data Science bootcamp",
      author: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      category: "Data Science",
      replies: 32,
      likes: 203,
      views: 1500,
      timeAgo: "6 hours ago",
      isHot: true
    }
  ];

  const studyGroups = [
    {
      id: 1,
      name: "React Masters",
      members: 45,
      description: "Advanced React patterns and best practices",
      tags: ["React", "JavaScript", "Advanced"],
      nextMeeting: "Tomorrow 2:00 PM",
      isJoined: false
    },
    {
      id: 2,
      name: "Python Beginners Circle",
      members: 78,
      description: "Learn Python fundamentals together",
      tags: ["Python", "Beginner", "Fundamentals"],
      nextMeeting: "Friday 6:00 PM",
      isJoined: true
    },
    {
      id: 3,
      name: "Data Science Enthusiasts",
      members: 92,
      description: "Exploring data science concepts and tools",
      tags: ["Data Science", "Machine Learning", "Analytics"],
      nextMeeting: "Monday 7:00 PM",
      isJoined: false
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Thompson", points: 2450, avatar: "AT", badge: "🏆" },
    { rank: 2, name: "Maria Garcia", points: 2380, avatar: "MG", badge: "🥈" },
    { rank: 3, name: "David Kim", points: 2250, avatar: "DK", badge: "🥉" },
    { rank: 4, name: "Sarah Wilson", points: 2100, avatar: "SW", badge: "⭐" },
    { rank: 5, name: "John Doe", points: 1950, avatar: "JD", badge: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-background page-transition">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div 
          ref={heroAnimation.ref}
          className={`bg-hero-gradient rounded-2xl p-8 text-white relative overflow-hidden transition-all duration-700 ${
            heroAnimation.isVisible ? 'slide-in-left' : 'scroll-animate'
          }`}
        >
          <div className="relative z-10">
            <h1 className="text-3xl font-bold font-heading mb-2">
              Welcome to EduGenie Community 🌟
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Connect, learn, and grow together with fellow learners from around the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-primary hover:bg-white/90 neon-button">
                <Plus className="h-4 w-4 mr-2" />
                Start Discussion
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 animated-button">
                <Users className="h-4 w-4 mr-2" />
                Join Study Group
              </Button>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div 
          ref={statsAnimation.ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${
            statsAnimation.isVisible ? 'slide-in-right' : 'scroll-animate'
          }`}
        >
          {communityStats.map((stat, index) => (
            <Card key={index} className="card-interactive">
              <CardContent className="p-6 text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div 
          ref={contentAnimation.ref}
          className={`grid grid-cols-1 lg:grid-cols-4 gap-8 transition-all duration-700 delay-300 ${
            contentAnimation.isVisible ? 'slide-in-left' : 'scroll-animate'
          }`}
        >
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-muted rounded-lg p-1">
              {[
                { id: 'discussions', label: 'Discussions', icon: MessageCircle },
                { id: 'groups', label: 'Study Groups', icon: Users },
                { id: 'events', label: 'Events', icon: Clock }
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'ghost'}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex-1 animated-button"
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </Button>
              ))}
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search discussions, groups, or topics..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <Button variant="outline" className="animated-button">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'discussions' && (
              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <Card key={discussion.id} className="card-interactive">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={discussion.avatar} alt={discussion.author} />
                          <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {discussion.isHot && (
                              <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
                                🔥 Hot
                              </Badge>
                            )}
                            <Badge variant="secondary">{discussion.category}</Badge>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 hover:text-primary cursor-pointer transition-colors">
                            {discussion.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>by {discussion.author}</span>
                            <span>{discussion.timeAgo}</span>
                          </div>
                          <div className="flex items-center space-x-6 mt-4">
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span className="text-sm">{discussion.replies}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span className="text-sm">{discussion.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span className="text-sm">{discussion.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'groups' && (
              <div className="space-y-4">
                {studyGroups.map((group, index) => (
                  <Card key={group.id} className="card-interactive">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold">{group.name}</h3>
                            {group.isJoined && (
                              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                                Joined
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-3">{group.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {group.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{group.members} members</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>Next: {group.nextMeeting}</span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant={group.isJoined ? "outline" : "default"}
                          className="animated-button"
                        >
                          {group.isJoined ? "Joined" : "Join Group"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card className="card-interactive">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span>Leaderboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {leaderboard.map((user, index) => (
                  <div key={user.rank} className="flex items-center space-x-3">
                    <div className="text-lg">{user.badge}</div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">{user.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.points} XP</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-interactive">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start animated-button">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Discussion
                </Button>
                <Button variant="outline" className="w-full justify-start animated-button">
                  <Users className="h-4 w-4 mr-2" />
                  Find Study Group
                </Button>
                <Button variant="outline" className="w-full justify-start animated-button">
                  <Heart className="h-4 w-4 mr-2" />
                  Help Someone
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
