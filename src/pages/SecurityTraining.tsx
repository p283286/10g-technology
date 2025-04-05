
import React, { useEffect } from 'react';
import { BookOpen, Shield, Users, AlertTriangle } from 'lucide-react';
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
      description: '我們的安全意識培訓項目旨在教育您的員工識別和防範各種網絡安全威脅。通過實用的培訓內容和模擬練習，我們幫助您的團隊建立安全意識，成為組織安全防線的重要組成部分。',
      benefits: [
        {
          title: '員工安全意識提升',
          description: '通過定期培訓提高員工的安全意識和警覺性，使其能夠識別潛在的安全威脅和攻擊嘗試。',
          icon: <BookOpen className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '社會工程防禦能力',
          description: '增強員工防範社會工程攻擊的能力，如釣魚郵件、偽裝電話和其他欺騙手段。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '安全文化建設',
          description: '在組織內培養積極的安全文化，鼓勵員工主動報告安全問題和可疑活動。',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '安全事件減少',
          description: '通過預防性培訓減少由人為錯誤引起的安全事件，如點擊惡意鏈接、泄露憑證或濫用權限等。',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '釣魚郵件識別培訓',
        '安全密碼實踐培訓',
        '社交媒體安全使用指導',
        '移動設備安全管理',
        '安全事件報告程序培訓',
        '定制化的行業特定安全培訓'
      ],
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Security Awareness Training',
      subtitle: 'Provide comprehensive security awareness training for employees, building a strong human security defense line to prevent social engineering attacks.',
      description: 'Our Security Awareness Training programs are designed to educate your employees on identifying and preventing various cybersecurity threats. Through practical training content and simulated exercises, we help your team build security awareness, becoming an important part of your organization\'s security defense.',
      benefits: [
        {
          title: 'Employee Security Awareness Enhancement',
          description: 'Increase employee security awareness and vigilance through regular training, enabling them to identify potential security threats and attack attempts.',
          icon: <BookOpen className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Social Engineering Defense Capability',
          description: 'Enhance employee ability to defend against social engineering attacks, such as phishing emails, pretexting calls, and other deception techniques.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Security Culture Building',
          description: 'Cultivate a positive security culture within the organization, encouraging employees to actively report security issues and suspicious activities.',
          icon: <Users className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Security Incident Reduction',
          description: 'Reduce security incidents caused by human errors through preventive training, such as clicking malicious links, leaking credentials, or abusing privileges.',
          icon: <AlertTriangle className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Phishing email identification training',
        'Secure password practices training',
        'Social media safety usage guidance',
        'Mobile device security management',
        'Security incident reporting procedure training',
        'Customized industry-specific security training'
      ],
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    }
  };
  
  const icons = [
    <BookOpen className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Users className="h-10 w-10 text-cyber-accent" />,
    <AlertTriangle className="h-10 w-10 text-cyber-accent" />
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
