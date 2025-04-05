
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import Index from "./pages/Index";
import ThreatDetection from "./pages/ThreatDetection";
import NotFound from "./pages/NotFound";
import RansomwareService from "./pages/RansomwareService";
import VulnerabilityAssessment from "./pages/VulnerabilityAssessment";
import EmergencyResponse from "./pages/EmergencyResponse";
import SIEMSolutions from "./pages/SIEMSolutions";
import InternalPenetrationTesting from "./pages/InternalPenetrationTesting";
import ExternalPenetrationTesting from "./pages/ExternalPenetrationTesting";
import VulnerabilityScanning from "./pages/VulnerabilityScanning";
import ConfigurationAssessment from "./pages/ConfigurationAssessment";
import PhysicalSecurity from "./pages/PhysicalSecurity";
import AccessCardProtection from "./pages/AccessCardProtection";
import SecurityTraining from "./pages/SecurityTraining";
import KnowledgeCenter from "./pages/KnowledgeCenter";
import SecurityResources from "./pages/SecurityResources";

// ScrollToTop component to ensure all pages start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/threat-detection" element={<ThreatDetection />} />
            <Route path="/ransomware-service" element={<RansomwareService />} />
            <Route path="/vulnerability-assessment" element={<VulnerabilityAssessment />} />
            <Route path="/emergency-response" element={<EmergencyResponse />} />
            <Route path="/siem-solutions" element={<SIEMSolutions />} />
            <Route path="/internal-penetration" element={<InternalPenetrationTesting />} />
            <Route path="/external-penetration" element={<ExternalPenetrationTesting />} />
            <Route path="/vulnerability-scanning" element={<VulnerabilityScanning />} />
            <Route path="/configuration-assessment" element={<ConfigurationAssessment />} />
            <Route path="/physical-security" element={<PhysicalSecurity />} />
            <Route path="/access-card-protection" element={<AccessCardProtection />} />
            <Route path="/security-training" element={<SecurityTraining />} />
            <Route path="/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="/security-resources" element={<SecurityResources />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
