
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import AuthModal from '@/components/auth/AuthModal';
import { Bell, Search, Menu, User, Settings, Star, BookOpen, TrendingUp, Users } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const location = useLocation();

  // Mock user data - replace with actual auth context
  const user = {
    name: "Alex Johnson",
    avatar: "/placeholder.svg",
    level: 15,
    xp: 2450,
    streak: 7,
    isLoggedIn: false // Set to true when user is authenticated
  };

  const navigationItems = [
    { label: 'Dashboard', href: '/dashboard', icon: BookOpen },
    { label: 'Courses', href: '/courses', icon: BookOpen },
    { label: 'Progress', href: '/progress', icon: TrendingUp },
    { label: 'Community', href: '/community', icon: Users },
  ];

  const isActiveRoute = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2 animated-button">
            <div className="h-8 w-8 rounded-lg bg-hero-gradient flex items-center justify-center">
              <span className="text-white font-bold text-sm">EG</span>
            </div>
            <span className="hidden sm:inline font-heading font-bold text-xl gradient-text">
              EduGenie
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium transition-colors duration-200 flex items-center space-x-1 animated-button px-3 py-2 rounded-lg ${
                isActiveRoute(item.href)
                  ? 'text-primary bg-primary/10 border border-primary/20'
                  : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses, topics, or ask AI mentor..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-200 ${
                isSearchFocused 
                  ? 'border-primary ring-2 ring-primary/20' 
                  : 'border-border hover:border-primary/50'
              }`}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {user.isLoggedIn ? (
            <>
              {/* Notification Bell */}
              <Button variant="ghost" size="sm" className="relative animated-button">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-accent">
                  3
                </Badge>
              </Button>

              {/* User Profile */}
              <div className="hidden sm:flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center space-x-2">
                    <span>Level {user.level}</span>
                    <span>•</span>
                    <span className="text-accent font-medium">{user.streak} day streak 🔥</span>
                  </div>
                </div>
                <Avatar className="h-10 w-10 ring-2 ring-primary/20 animated-button">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                onClick={() => setAuthModalOpen(true)}
                className="animated-button"
              >
                Log In
              </Button>
              <Button 
                onClick={() => setAuthModalOpen(true)}
                className="neon-button"
              >
                Sign Up
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden animated-button">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-heading font-bold text-lg gradient-text">EduGenie</span>
                </div>
                
                {/* Mobile User Info */}
                {user.isLoggedIn && (
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Level {user.level} • {user.xp} XP
                        </div>
                        <Badge variant="secondary" className="text-xs mt-1">
                          🔥 {user.streak} day streak
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile Navigation */}
                <nav className="flex-1 p-4">
                  <div className="space-y-2">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActiveRoute(item.href)
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile Actions */}
                <div className="p-4 border-t space-y-2">
                  {user.isLoggedIn ? (
                    <>
                      <Button variant="ghost" className="w-full justify-start">
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Button>
                      <Button variant="outline" className="w-full">
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="ghost" 
                        className="w-full"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setAuthModalOpen(true);
                        }}
                      >
                        Log In
                      </Button>
                      <Button 
                        className="w-full neon-button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setAuthModalOpen(true);
                        }}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </header>
  );
};

export default Header;
