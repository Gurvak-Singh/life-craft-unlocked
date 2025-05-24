import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Skills from "./pages/Skills";
import Community from "./pages/Community";
import Tracks from "./pages/Tracks";
import Tutorial from "./pages/Tutorial";
import LeakyFaucet from "./pages/tutorials/LeakyFaucet";
import MonthlyBudget from "./pages/tutorials/MonthlyBudget";
import CarOilChange from "./pages/tutorials/CarOilChange";
import CookingTechniques from "./pages/tutorials/CookingTechniques";
import NotFound from "./pages/NotFound";

// Legal and company pages - Required by sitemap.md
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Skill category pages
import HomeRepair from "./pages/skills/HomeRepair";
import CarMaintenance from "./pages/skills/CarMaintenance";
import Budgeting from "./pages/skills/Budgeting";
import Digital from "./pages/skills/Digital";
import Cooking from "./pages/skills/Cooking";
import DIY from "./pages/skills/DIY";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/community" element={<Community />} />
          <Route path="/tracks" element={<Tracks />} />

          {/* Legal and company pages - Required by sitemap.md */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Skill category pages */}
          <Route path="/skills/home-repair" element={<HomeRepair />} />
          <Route path="/skills/car-maintenance" element={<CarMaintenance />} />
          <Route path="/skills/budgeting" element={<Budgeting />} />
          <Route path="/skills/digital" element={<Digital />} />
          <Route path="/skills/cooking" element={<Cooking />} />
          <Route path="/skills/diy" element={<DIY />} />

          {/* Tutorial pages */}
          <Route path="/tutorial/:id" element={<Tutorial />} />
          <Route path="/tutorials/leaky-faucet" element={<LeakyFaucet />} />
          <Route path="/tutorials/monthly-budget" element={<MonthlyBudget />} />
          <Route path="/tutorials/car-oil-change" element={<CarOilChange />} />
          <Route path="/tutorials/cooking-techniques" element={<CookingTechniques />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
