
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, Star, CheckCircle, Lock } from 'lucide-react';

const LearningPath = () => {
  const learningModules = [
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the fundamentals of React components and JSX",
      progress: 100,
      status: "completed",
      duration: "2 hours",
      difficulty: "Beginner",
      xp: 250,
      lessons: 8,
      locked: false
    },
    {
      id: 2,
      title: "State Management with Hooks",
      description: "Master useState, useEffect, and custom hooks",
      progress: 75,
      status: "in-progress",
      duration: "3 hours",
      difficulty: "Intermediate",
      xp: 400,
      lessons: 12,
      locked: false
    },
    {
      id: 3,
      title: "Advanced React Patterns",
      description: "Context API, Higher-Order Components, and Render Props",
      progress: 30,
      status: "in-progress",
      duration: "4 hours",
      difficulty: "Advanced",
      xp: 600,
      lessons: 15,
      locked: false
    },
    {
      id: 4,
      title: "Testing React Applications",
      description: "Unit testing, integration testing, and E2E testing",
      progress: 0,
      status: "locked",
      duration: "3 hours",
      difficulty: "Intermediate",
      xp: 450,
      lessons: 10,
      locked: true
    },
    {
      id: 5,
      title: "React Performance Optimization",
      description: "Memoization, lazy loading, and performance best practices",
      progress: 0,
      status: "locked",
      duration: "2.5 hours",
      difficulty: "Advanced",
      xp: 500,
      lessons: 9,
      locked: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'in-progress':
        return 'text-blue-600 bg-blue-50';
      case 'locked':
        return 'text-gray-500 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-700 bg-green-100';
      case 'Intermediate':
        return 'text-yellow-700 bg-yellow-100';
      case 'Advanced':
        return 'text-red-700 bg-red-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">Your Learning Path</CardTitle>
            <p className="text-muted-foreground mt-1">
              React Development Mastery • 5 modules • 14.5 hours total
            </p>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            40% Complete
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {learningModules.map((module, index) => (
            <div key={module.id} className="relative">
              {/* Connection Line */}
              {index < learningModules.length - 1 && (
                <div className="absolute left-4 top-16 w-0.5 h-12 bg-border z-0"></div>
              )}
              
              <Card className={`transition-all duration-300 ${
                module.locked 
                  ? 'opacity-60 bg-muted/30' 
                  : 'hover:shadow-md hover:-translate-y-1 cursor-pointer'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Status Icon */}
                    <div className={`p-2 rounded-full ${
                      module.status === 'completed' 
                        ? 'bg-green-100 text-green-600' 
                        : module.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {module.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : module.locked ? (
                        <Lock className="h-5 w-5" />
                      ) : (
                        <BookOpen className="h-5 w-5" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{module.title}</h3>
                          <p className="text-muted-foreground text-sm mt-1">
                            {module.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant="outline" 
                            className={getDifficultyColor(module.difficulty)}
                          >
                            {module.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-accent bg-accent/10">
                            <Star className="h-3 w-3 mr-1" />
                            {module.xp} XP
                          </Badge>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {!module.locked && (
                        <div className="space-y-2">
                          <Progress value={module.progress} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{module.progress}% complete</span>
                            <span>{module.lessons} lessons</span>
                          </div>
                        </div>
                      )}

                      {/* Module Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{module.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{module.lessons} lessons</span>
                          </div>
                        </div>

                        <Button 
                          size="sm" 
                          disabled={module.locked}
                          variant={module.status === 'completed' ? 'outline' : 'default'}
                        >
                          {module.status === 'completed' 
                            ? 'Review' 
                            : module.status === 'in-progress' 
                            ? 'Continue' 
                            : module.locked 
                            ? 'Locked' 
                            : 'Start'
                          }
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Overall Progress */}
        <div className="mt-6 p-4 rounded-lg bg-muted/50">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Overall Progress</span>
            <span className="text-sm text-muted-foreground">2 of 5 modules completed</span>
          </div>
          <Progress value={40} className="h-3" />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>40% complete</span>
            <span>1,250 XP earned • 1,800 XP remaining</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningPath;
