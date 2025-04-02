
import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-cyber-gradient opacity-95 z-0"></div>
      
      {/* Circuit Board Pattern Overlay */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10 z-0"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-white mb-6 leading-tight">
              保護您的數字資產<br />
              <span className="text-cyber-accent">專業網絡安全解決方案</span>
            </h1>
            <p className="text-slate-200 mb-8 text-lg md:text-xl max-w-xl">
              全方位的網絡安全服務，從威脅檢測到事件響應，我們幫助企業構建堅固的安全防線，防範各類網絡威脅。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-cyber-accent hover:bg-cyber-blue-light text-white">
                了解我們的服務
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                聯繫專家顧問
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyber-accent" />
                <span className="text-white">資深專家團隊</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyber-accent" />
                <span className="text-white">國際安全認證</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyber-accent" />
                <span className="text-white">24/7全天候支援</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-cyber-accent/20 rounded-full blur-xl animate-pulse"></div>
              <div className="bg-cyber-dark rounded-full p-12 relative animate-float">
                <Shield className="w-32 h-32 md:w-40 md:h-40 text-cyber-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
