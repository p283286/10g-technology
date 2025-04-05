
import React, { useEffect } from 'react';
import { BookOpen, Shield, Bell, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const SecurityTraining = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: '安全意識培訓',
      subtitle: '為員工提供全面的安全意識培訓，建立強大的人員安全防線，預防社會工程攻擊。',
      description: '我們提供專業的安全意識培訓計劃，幫助您的員工了解和識別各種網絡安全威脅，如釣魚攻擊、社交工程和密碼安全等。通過互動式培訓和模擬演練，提高員工的安全意識和應對能力。',
      benefits: [
        {
          title: '提高意識',
          description: '釣魚測試提高員工對釣魚風險和技術的認識，讓他們能夠識別並正確應對潛在的釣魚攻擊。',
          icon: <BookOpen className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '降低風險',
          description: '測試幫助將針對員工的釣魚攻擊成功率降低高達90%，顯著減少組織遭受網絡攻擊的可能性。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '合規要求',
          description: '測試幫助組織滿足安全意識培訓的合規要求，確保符合行業標準和法規要求。',
          icon: <Bell className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '釣魚演示視頻',
          description: '這段視頻展示了黑客如何竊取您的Office 365帳戶，即使您啟用了雙因素認證(2FA)。',
          icon: <Video className="h-10 w-10 text-cyber-accent" />,
          videoUrl: 'https://10gtechnology.com/videos/phishing_office_365.mp4'
        }
      ],
      features: [
        '釣魚模擬訓練',
        '社會工程防禦培訓',
        '密碼安全最佳實踐',
        '移動設備安全培訓',
        '數據隱私意識教育',
        '定制化安全培訓計劃'
      ],
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Security Awareness Training',
      subtitle: 'Provide comprehensive security awareness training for employees, building a strong human security defense line to prevent social engineering attacks.',
      description: 'We provide professional security awareness training programs to help your employees understand and identify various cyber security threats, such as phishing attacks, social engineering, and password security. Through interactive training and simulated drills, we improve employees\' security awareness and response capabilities.',
      benefits: [
        {
          title: 'Awareness',
          description: 'Phishing tests raise employee awareness of phishing risks and tactics, enabling them to identify and correctly respond to potential phishing attacks.',
          icon: <BookOpen className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Risk Reduction',
          description: 'Tests help to reduce staff phishing attacks up to 90%, significantly decreasing the likelihood of successful cyber attacks against your organization.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Compliance',
          description: 'Tests help organizations meet compliance requirements for security awareness training, ensuring adherence to industry standards and regulations.',
          icon: <Bell className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Phishing Demo Video',
          description: 'This video shows you how hackers steal your Office 365 account even when you have two-factor authentication (2FA) enabled.',
          icon: <Video className="h-10 w-10 text-cyber-accent" />,
          videoUrl: 'https://10gtechnology.com/videos/phishing_office_365.mp4'
        }
      ],
      features: [
        'Phishing simulation training',
        'Social engineering defense training',
        'Password security best practices',
        'Mobile device security training',
        'Data privacy awareness education',
        'Customized security training programs'
      ],
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    }
  };
  
  const icons = [
    <BookOpen className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Bell className="h-10 w-10 text-cyber-accent" />,
    <Video className="h-10 w-10 text-cyber-accent" />
  ];

  return (
    <ServicePageTemplate 
      content={content}
      language={language}
      icons={icons}
    />
  );
};

export default SecurityTraining;
