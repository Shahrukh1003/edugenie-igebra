
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import ProgressPage from "./pages/Progress";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Mock user authentication state
const useAuth = () => {
  // This would typically come from your auth context/provider
  const isLoggedIn = false; // Set to true to simulate logged-in user
  const isNewUser = true; // Set to false to simulate returning user
  
  return { isLoggedIn, isNewUser };
};

const App = () => {
  const { isLoggedIn, isNewUser } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="edugenie-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Landing page for new users */}
              <Route 
                path="/" 
                element={
                  isLoggedIn ? (
                    isNewUser ? <Landing /> : <Navigate to="/dashboard" replace />
                  ) : (
                    <Landing />
                  )
                } 
              />
              {/* Dashboard for returning users */}
              <Route path="/dashboard" element={<Index />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/community" element={<Community />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
