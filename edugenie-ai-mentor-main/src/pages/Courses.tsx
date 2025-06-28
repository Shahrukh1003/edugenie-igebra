
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Star, Clock, Users, BookOpen, Play, Filter } from 'lucide-react';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Courses', count: 24 },
    { id: 'programming', name: 'Programming', count: 8 },
    { id: 'design', name: 'Design', count: 6 },
    { id: 'business', name: 'Business', count: 5 },
    { id: 'marketing', name: 'Marketing', count: 5 }
  ];

  const courses = [
    {
      id: 1,
      title: "Complete React Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12543,
      duration: "42 hours",
      price: "$89",
      originalPrice: "$129",
      category: "programming",
      level: "Intermediate",
      image: "/placeholder.svg",
      progress: 65,
      enrolled: true
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Michael Chen",
      rating: 4.9,
      students: 8432,
      duration: "28 hours",
      price: "$79",
      originalPrice: "$119",
      category: "design",
      level: "Beginner",
      image: "/placeholder.svg",
      progress: 0,
      enrolled: false
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Emma Wilson",
      rating: 4.7,
      students: 9876,
      duration: "35 hours",
      price: "$69",
      originalPrice: "$99",
      category: "marketing",
      level: "Advanced",
      image: "/placeholder.svg",
      progress: 30,
      enrolled: true
    },
    {
      id: 4,
      title: "Business Analytics & Data Science",
      instructor: "David Brown",
      rating: 4.6,
      students: 6543,
      duration: "45 hours",
      price: "$99",
      originalPrice: "$149",
      category: "business",
      level: "Intermediate",
      image: "/placeholder.svg",
      progress: 0,
      enrolled: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold font-heading mb-4 gradient-text">
            Discover Your Next Learning Adventure
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore thousands of courses from expert instructors worldwide
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses, instructors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-lg rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
              <Button className="absolute right-2 top-2 neon-button">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="animated-button"
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <Card key={course.id} className="card-interactive course-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                  {course.level}
                </Badge>
                {course.enrolled && (
                  <div className="absolute bottom-2 left-2 right-2">
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-xs text-white mt-1">{course.progress}% Complete</p>
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold line-clamp-2">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{course.instructor}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-primary">{course.price}</span>
                    <span className="text-sm line-through">{course.originalPrice}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {course.enrolled ? (
                    <Button className="flex-1 neon-button">
                      <Play className="h-4 w-4 mr-2" />
                      Continue Learning
                    </Button>
                  ) : (
                    <Button className="flex-1 animated-button">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Enroll Now
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
