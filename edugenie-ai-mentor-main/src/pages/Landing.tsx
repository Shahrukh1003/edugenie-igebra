
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Play, 
  Users, 
  Brain, 
  Trophy, 
  Zap, 
  BookOpen, 
  Star, 
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const Landing = () => {
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const videoAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized learning paths adapted to your pace and style",
      color: "text-blue-500"
    },
    {
      icon: Trophy,
      title: "Gamification",
      description: "Earn badges, maintain streaks, and compete with friends",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Connect with learners worldwide and study together",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate responses and corrections from AI mentors",
      color: "text-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      content: "EduGenie transformed my learning experience. The AI mentor feels like having a personal tutor available 24/7!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      content: "The adaptive learning system helped me master React in just 3 weeks. Highly recommend!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      content: "Perfect for busy professionals. The bite-sized lessons fit perfectly into my schedule.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          ref={heroAnimation.ref}
          className={`relative container mx-auto px-4 py-20 lg:py-32 transition-all duration-1000 ${
            heroAnimation.isVisible ? 'slide-in-left' : 'scroll-animate'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Sparkles className="h-4 w-4 mr-2" />
                  AI-Powered Education
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Learn Smarter with
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
                    EduGenie
                  </span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg">
                  Your personal AI mentor that adapts to your learning style, tracks your progress, 
                  and helps you achieve your educational goals faster than ever.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button size="lg" className="neon-button group">
                    Start Learning Free
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>Free Forever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>Community Driven</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                  alt="Students learning together"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Active Learners</span>
                    <span className="text-2xl font-bold">50K+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Courses Available</span>
                    <span className="text-2xl font-bold">200+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Success Rate</span>
                    <span className="text-2xl font-bold">95%</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full blur-xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={featuresAnimation.ref}
            className={`text-center mb-16 transition-all duration-700 delay-200 ${
              featuresAnimation.isVisible ? 'slide-in-right' : 'scroll-animate'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose EduGenie?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of education with our cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`card-interactive transition-all duration-700 ${
                  featuresAnimation.isVisible ? 'slide-in-left' : 'scroll-animate'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            ref={videoAnimation.ref}
            className={`transition-all duration-700 ${
              videoAnimation.isVisible ? 'slide-in-left' : 'scroll-animate'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  See EduGenie in Action
                </h2>
                <p className="text-xl text-muted-foreground">
                  Watch how our AI mentor adapts to different learning styles and 
                  provides personalized feedback in real-time.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Personalized learning paths</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Real-time progress tracking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Interactive AI conversations</span>
                  </li>
                </ul>
                <Button className="neon-button">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Full Demo
                </Button>
              </div>
              
              <div className="relative">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                    alt="EduGenie Demo"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16 neon-button">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={testimonialsAnimation.ref}
            className={`transition-all duration-700 ${
              testimonialsAnimation.isVisible ? 'slide-in-right' : 'scroll-animate'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                What Our Learners Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of successful learners who've transformed their education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-interactive">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div 
            ref={ctaAnimation.ref}
            className={`transition-all duration-700 ${
              ctaAnimation.isVisible ? 'slide-in-left' : 'scroll-animate'
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already experiencing the future of education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                <Users className="h-5 w-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
