import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Volunteers from "./pages/Volunteers";
import Merch from "./pages/Merch";
import NotFound from "./pages/NotFound";
import { initGA, trackPageView } from "./lib/analytics";

const queryClient = new QueryClient();

// Sayfa değişikliklerini takip eden component
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Google Analytics'i başlat
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <RouteTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gonullu" element={<Volunteers />} />
            <Route path="/merch" element={<Merch />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
