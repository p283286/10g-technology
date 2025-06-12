
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import ThreatDetection from "./pages/ThreatDetection";
import SIEMSolutions from "./pages/SIEMSolutions";
import TeamViewerReplacement from "./pages/TeamViewerReplacement";
import VulnerabilityAssessment from "./pages/VulnerabilityAssessment";
import EmergencyResponse from "./pages/EmergencyResponse";
import VulnerabilityScanning from "./pages/VulnerabilityScanning";
import ConfigurationAssessment from "./pages/ConfigurationAssessment";
import PhysicalSecurity from "./pages/PhysicalSecurity";
import AccessCardProtection from "./pages/AccessCardProtection";
import SecurityTraining from "./pages/SecurityTraining";
import RansomwareService from "./pages/RansomwareService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/threat-detection" element={<ThreatDetection />} />
            <Route path="/siem-solutions" element={<SIEMSolutions />} />
            <Route path="/teamviewer-replacement" element={<TeamViewerReplacement />} />
            <Route path="/vulnerability-assessment" element={<VulnerabilityAssessment />} />
            <Route path="/emergency-response" element={<EmergencyResponse />} />
            <Route path="/vulnerability-scanning" element={<VulnerabilityScanning />} />
            <Route path="/configuration-assessment" element={<ConfigurationAssessment />} />
            <Route path="/physical-security" element={<PhysicalSecurity />} />
            <Route path="/access-card-protection" element={<AccessCardProtection />} />
            <Route path="/security-training" element={<SecurityTraining />} />
            <Route path="/ransomware-service" element={<RansomwareService />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
