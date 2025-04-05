
import React from 'react';
import { 
  Shield, Search, Lock, AlertTriangle, Activity, 
  Database, UserCheck, File, Monitor, Users, Key, BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

const ServiceCard = ({ icon, title, description, path }: ServiceCardProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const handleLearnMore = () => {
    navigate(path);
  };
  
  return (
    <div className="cyber-card p-6 h-full hover:border-cyber-accent transition-all duration-300 hover:shadow-lg flex flex-col">
      <div className="text-cyber-accent mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 flex-grow">{description}</p>
      <Button 
        variant="ghost" 
        className="mt-4 text-cyber-accent hover:text-cyber-blue-light hover:bg-slate-100"
        onClick={handleLearnMore}
      >
        {language === 'zh' ? '了解更多' : 'Learn More'}
      </Button>
    </div>
  );
};

const Services = () => {
  const { language } = useLanguage();
  
  const services = [
    {
      icon: <Search size={32} />,
      title: language === 'zh' ? '網絡威脅檢測與防禦' : 'Network Threat Detection and Defense',
      description: language === 'zh' 
        ? '利用先進的AI技術，實時監控並識別潛在的網絡威脅，提供主動防禦策略。' 
        : 'Utilize advanced AI technology to monitor and identify potential cyber threats in real-time, providing proactive defense strategies.',
      path: '/threat-detection'
    },
    {
      icon: <Lock size={32} />,
      title: language === 'zh' ? '數據加密與隱私保護' : 'Data Encryption and Privacy Protection',
      description: language === 'zh'
        ? '實施強大的加密解決方案，確保您的敏感數據在傳輸和存儲過程中得到全面保護。'
        : 'Implement robust encryption solutions to ensure your sensitive data is fully protected during transmission and storage.',
      path: '/data-encryption'
    },
    {
      icon: <AlertTriangle size={32} />,
      title: language === 'zh' ? '漏洞評估與滲透測試' : 'Vulnerability Assessment and Penetration Testing',
      description: language === 'zh'
        ? '全面評估您的系統安全狀況，識別潛在漏洞，並提供針對性的修復建議。'
        : 'Comprehensive assessment of your system security status, identification of potential vulnerabilities, and provision of targeted remediation recommendations.',
      path: '/vulnerability-assessment'
    },
    {
      icon: <Activity size={32} />,
      title: language === 'zh' ? '應急響應與事件管理' : 'Emergency Response and Incident Management',
      description: language === 'zh'
        ? '提供快速有效的安全事件響應服務，最大限度地減少安全事件的影響和損失。'
        : 'Provide rapid and effective security incident response services to minimize the impact and loss of security incidents.',
      path: '/emergency-response'
    },
    {
      icon: <Database size={32} />,
      title: language === 'zh' ? 'SIEM解決方案' : 'SIEM Solutions',
      description: language === 'zh'
        ? '安全信息和事件管理系統，集中收集和分析來自網絡環境的安全數據，提供全面的威脅可視性。'
        : 'Security Information and Event Management system that centrally collects and analyzes security data from the network environment, providing comprehensive threat visibility.',
      path: '/siem-solutions'
    },
    {
      icon: <UserCheck size={32} />,
      title: language === 'zh' ? '內部滲透測試' : 'Internal Penetration Testing',
      description: language === 'zh'
        ? '模擬內部威脅，評估組織內部安全控制的有效性，發現內部安全漏洞。'
        : 'Simulate internal threats, assess the effectiveness of internal security controls, and discover internal security vulnerabilities.',
      path: '/internal-penetration'
    },
    {
      icon: <Shield size={32} />,
      title: language === 'zh' ? '外部滲透測試' : 'External Penetration Testing',
      description: language === 'zh'
        ? '從外部攻擊者的角度評估組織的安全邊界，識別可能被利用的入侵點。'
        : 'Assess the organization\'s security perimeter from the perspective of an external attacker, identifying potential points of entry that could be exploited.',
      path: '/external-penetration'
    },
    {
      icon: <File size={32} />,
      title: language === 'zh' ? '漏洞掃描' : 'Vulnerability Scanning',
      description: language === 'zh'
        ? '定期掃描系統和應用程序，識別已知的安全漏洞，並提供修復指導。'
        : 'Regularly scan systems and applications to identify known security vulnerabilities and provide remediation guidance.',
      path: '/vulnerability-scanning'
    },
    {
      icon: <Monitor size={32} />,
      title: language === 'zh' ? '配置評估' : 'Configuration Assessment',
      description: language === 'zh'
        ? '審查系統和網絡配置，確保符合最佳安全實踐和合規要求。'
        : 'Review system and network configurations to ensure compliance with best security practices and compliance requirements.',
      path: '/configuration-assessment'
    },
    {
      icon: <Users size={32} />,
      title: language === 'zh' ? '物理安全評估' : 'Physical Security Assessment',
      description: language === 'zh'
        ? '評估物理設施的安全性，識別可能的入侵風險，提供改進建議。'
        : 'Assess the security of physical facilities, identify potential intrusion risks, and provide recommendations for improvement.',
      path: '/physical-security'
    },
    {
      icon: <Key size={32} />,
      title: language === 'zh' ? '門禁卡克隆防護' : 'Access Card Cloning Protection',
      description: language === 'zh'
        ? '評估和加強門禁系統安全性，防止未授權的門禁卡複製和使用。'
        : 'Assess and enhance the security of access control systems to prevent unauthorized copying and use of access cards.',
      path: '/access-card-protection'
    },
    {
      icon: <BookOpen size={32} />,
      title: language === 'zh' ? '安全意識培訓' : 'Security Awareness Training',
      description: language === 'zh'
        ? '為員工提供全面的安全意識培訓，建立強大的人員安全防線，預防社會工程攻擊。'
        : 'Provide comprehensive security awareness training for employees, building a strong human security defense line to prevent social engineering attacks.',
      path: '/security-training'
    }
  ];

  return (
    <section id="services" className="section-container bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="mb-4">{language === 'zh' ? '服務與解決方案' : 'Services & Solutions'}</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          {language === 'zh'
            ? '我們提供全面的網絡安全服務，幫助企業識別、防禦和應對各類網絡威脅，保障業務持續運營。'
            : 'We provide comprehensive cybersecurity services to help businesses identify, defend against, and respond to various cyber threats, ensuring business continuity.'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            path={service.path}
          />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl mb-6">{language === 'zh' ? '行業解決方案' : 'Industry Solutions'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card p-6 bg-cyber-gradient-light">
            <h4 className="text-white mb-4">{language === 'zh' ? '金融行業' : 'Financial Industry'}</h4>
            <p className="text-white/90 mb-4">
              {language === 'zh'
                ? '針對銀行、保險和金融機構的特定安全需求，提供符合監管要求的安全解決方案。'
                : 'Provide security solutions that meet regulatory requirements for specific security needs of banks, insurance, and financial institutions.'}
            </p>
            <Button 
              variant="secondary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {language === 'zh' ? '聯繫專家顧問' : 'Contact Expert Advisors'}
            </Button>
          </div>
          
          <div className="cyber-card p-6 bg-cyber-gradient-light">
            <h4 className="text-white mb-4">{language === 'zh' ? '醫療健康' : 'Healthcare'}</h4>
            <p className="text-white/90 mb-4">
              {language === 'zh'
                ? '保護患者敏感數據，確保醫療系統和設備的安全，滿足HIPAA等合規要求。'
                : 'Protect sensitive patient data, ensure the security of medical systems and devices, and meet compliance requirements such as HIPAA.'}
            </p>
            <Button 
              variant="secondary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {language === 'zh' ? '聯繫專家顧問' : 'Contact Expert Advisors'}
            </Button>
          </div>
          
          <div className="cyber-card p-6 bg-cyber-gradient-light">
            <h4 className="text-white mb-4">{language === 'zh' ? '科技行業' : 'Tech Industry'}</h4>
            <p className="text-white/90 mb-4">
              {language === 'zh'
                ? '為科技企業提供數據保護、知識產權保護和開發安全的綜合解決方案。'
                : 'Provide comprehensive solutions for data protection, intellectual property protection, and development security for technology companies.'}
            </p>
            <Button 
              variant="secondary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {language === 'zh' ? '聯繫專家顧問' : 'Contact Expert Advisors'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
