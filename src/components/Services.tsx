
import React from 'react';
import { 
  Shield, Search, Lock, AlertTriangle, Activity, 
  Database, UserCheck, File, Monitor, Users, Key, DoorOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="cyber-card p-6 h-full hover:border-cyber-accent transition-all duration-300 hover:shadow-lg flex flex-col">
    <div className="text-cyber-accent mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 flex-grow">{description}</p>
    <Button variant="ghost" className="mt-4 text-cyber-accent hover:text-cyber-blue-light hover:bg-slate-100">
      了解更多
    </Button>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Search size={32} />,
      title: '網絡威脅檢測與防禦',
      description: '利用先進的AI技術，實時監控並識別潛在的網絡威脅，提供主動防禦策略。'
    },
    {
      icon: <Lock size={32} />,
      title: '數據加密與隱私保護',
      description: '實施強大的加密解決方案，確保您的敏感數據在傳輸和存儲過程中得到全面保護。'
    },
    {
      icon: <AlertTriangle size={32} />,
      title: '漏洞評估與滲透測試',
      description: '全面評估您的系統安全狀況，識別潛在漏洞，並提供針對性的修復建議。'
    },
    {
      icon: <Activity size={32} />,
      title: '應急響應與事件管理',
      description: '提供快速有效的安全事件響應服務，最大限度地減少安全事件的影響和損失。'
    },
    {
      icon: <Database size={32} />,
      title: 'SIEM解決方案',
      description: '安全信息和事件管理系統，集中收集和分析來自網絡環境的安全數據，提供全面的威脅可視性。'
    },
    {
      icon: <UserCheck size={32} />,
      title: '內部滲透測試',
      description: '模擬內部威脅，評估組織內部安全控制的有效性，發現內部安全漏洞。'
    },
    {
      icon: <Shield size={32} />,
      title: '外部滲透測試',
      description: '從外部攻擊者的角度評估組織的安全邊界，識別可能被利用的入侵點。'
    },
    {
      icon: <File size={32} />,
      title: '漏洞掃描',
      description: '定期掃描系統和應用程序，識別已知的安全漏洞，並提供修復指導。'
    },
    {
      icon: <Monitor size={32} />,
      title: '配置評估',
      description: '審查系統和網絡配置，確保符合最佳安全實踐和合規要求。'
    },
    {
      icon: <Users size={32} />,
      title: '物理安全評估',
      description: '評估物理設施的安全性，識別可能的入侵風險，提供改進建議。'
    },
    {
      icon: <Key size={32} />,
      title: '門禁卡克隆防護',
      description: '評估和加強門禁系統安全性，防止未授權的門禁卡複製和使用。'
    },
    {
      icon: <DoorOpen size={32} />,
      title: '電子門鎖安全評估',
      description: '測試電子門鎖系統的安全性，識別潛在漏洞，提供加固方案。'
    }
  ];

  return (
    <section id="services" className="section-container bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="mb-4">服務與解決方案</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          我們提供全面的網絡安全服務，幫助企業識別、防禦和應對各類網絡威脅，保障業務持續運營。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl mb-6">行業解決方案</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card p-6 bg-cyber-gradient-light">
            <h4 className="text-white mb-4">金融行業</h4>
            <p className="text-white/90 mb-4">針對銀行、保險和金融機構的特定安全需求，提供符合監管要求的安全解決方案。</p>
            <Button variant="secondary">了解詳情</Button>
          </div>
          
          <div className="cyber-card p-6 bg-cyber-gradient-light">
            <h4 className="text-white mb-4">醫療健康</h4>
            <p className="text-white/90 mb-4">保護患者敏感數據，確保醫療系統和設備的安全，滿足HIPAA等合規要求。</p>
            <Button variant="secondary">了解詳情</Button>
          </div>
          
          <div className="cyber-card p-6 bg-cyber-gradient-light">
            <h4 className="text-white mb-4">科技行業</h4>
            <p className="text-white/90 mb-4">為科技企業提供數據保護、知識產權保護和開發安全的綜合解決方案。</p>
            <Button variant="secondary">了解詳情</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
