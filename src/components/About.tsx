
import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatsCard = ({ icon, value, label }: StatsCardProps) => (
  <div className="cyber-card p-6 flex flex-col items-center text-center">
    <div className="mb-4 text-cyber-accent">{icon}</div>
    <h3 className="text-3xl font-bold mb-2">{value}</h3>
    <p className="text-slate-600">{label}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <h2 className="mb-4">公司簡介</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          安全視界科技成立於2010年，是領先的網絡安全服務提供商，專注於為企業提供全方位的資訊安全解決方案。
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl mb-4 text-cyber-blue-light">我們的使命</h3>
          <p className="mb-6">
            我們致力於為客戶提供最先進的網絡安全防護，確保他們的數據資產和業務運營不受網絡威脅的干擾。在當今不斷變化的網絡威脅環境中，我們是您可靠的安全夥伴。
          </p>
          
          <h3 className="text-2xl mb-4 text-cyber-blue-light">我們的價值觀</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Shield className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
              <p><span className="font-semibold">專業誠信</span> - 以最高的道德標準和專業精神服務每一位客戶</p>
            </li>
            <li className="flex items-start">
              <Shield className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
              <p><span className="font-semibold">持續創新</span> - 不斷研發和應用最新的安全技術和方法</p>
            </li>
            <li className="flex items-start">
              <Shield className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
              <p><span className="font-semibold">以客為本</span> - 深入理解客戶需求，提供定制化的安全解決方案</p>
            </li>
            <li className="flex items-start">
              <Shield className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
              <p><span className="font-semibold">協作共贏</span> - 與客戶建立長期合作關係，共同應對安全挑戰</p>
            </li>
          </ul>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-cyber-gradient opacity-10 rounded-xl blur-md"></div>
          <div className="cyber-card p-8 relative">
            <h3 className="text-2xl mb-6 text-center">公司成就</h3>
            <div className="grid grid-cols-2 gap-4">
              <StatsCard 
                icon={<Clock size={36} />} 
                value="10+" 
                label="年行業經驗" 
              />
              <StatsCard 
                icon={<Users size={36} />} 
                value="100+" 
                label="資深安全專家" 
              />
              <StatsCard 
                icon={<Award size={36} />} 
                value="50+" 
                label="行業認證" 
              />
              <StatsCard 
                icon={<Shield size={36} />} 
                value="1000+" 
                label="成功客戶案例" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
