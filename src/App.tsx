
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import CreateExperience from "./pages/CreateExperience";
import Feed from "./pages/Feed";
import Pods from "./pages/Pods";
import PodsFeed from "./pages/PodsFeed";
import PodPlayer from "./pages/PodPlayer";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-soft-purple-50 text-charcoal">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="/create" element={<CreateExperience />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/pods" element={<Pods />} />
              <Route path="/pods-feed" element={<PodsFeed />} />
              <Route path="/pod/:podId" element={<PodPlayer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
