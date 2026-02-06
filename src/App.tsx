import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ComputerRepair from "./pages/ComputerRepair";
import LaptopRepair from "./pages/LaptopRepair";
import DataRecovery from "./pages/DataRecovery";
import VirusRemoval from "./pages/VirusRemoval";
import PartsReplacement from "./pages/PartsReplacement";
import Upgrade from "./pages/Upgrade";
import Prices from "./pages/Prices";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Team from "./pages/Team";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import Booking from "./pages/Booking";
import Calculator from "./pages/Calculator";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Career from "./pages/Career";
import Partners from "./pages/Partners";
import Warranty from "./pages/Warranty";
import Diagnostics from "./pages/Diagnostics";
import Emergency from "./pages/Emergency";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="pc-repair-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/computer-repair" element={<ComputerRepair />} />
              <Route path="/services/laptop-repair" element={<LaptopRepair />} />
              <Route path="/services/data-recovery" element={<DataRecovery />} />
              <Route path="/services/virus-removal" element={<VirusRemoval />} />
              <Route path="/services/parts-replacement" element={<PartsReplacement />} />
              <Route path="/services/upgrade" element={<Upgrade />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/career" element={<Career />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/warranty" element={<Warranty />} />
              <Route path="/diagnostics" element={<Diagnostics />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
