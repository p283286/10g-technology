
import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CertificationBlock = ({ title, items }: { title: string, items: string[] }) => (
  <div className="cyber-card p-6">
    <h3 className="text-xl font-bold mb-4 text-cyber-blue-light">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TechLogo = ({ name }: { name: string }) => (
  <div className="cyber-card p-4 flex items-center justify-center h-20">
    <span className="font-semibold text-cyber-blue-light">{name}</span>
  </div>
);

const Certifications = () => {
  const { language } = useLanguage();
  
  const content = {
    zh: {
      title: '技術與專業認證',
      description: '我們擁有行業領先的專業資質和先進安全技術，確保為客戶提供最高品質的安全服務。',
      personalCertifications: {
        title: '專業人員認證',
        items: [
          'CISSP (Certified Information Systems Security Professional)',
          'CEH (Certified Ethical Hacker)',
          'CISM (Certified Information Security Manager)',
          'OSCP (Offensive Security Certified Professional)',
          'CCSP (Certified Cloud Security Professional)',
          'Security+',
          'CASP+ (CompTIA Advanced Security Practitioner)'
        ]
      },
      companyCertifications: {
        title: '公司認證與合規',
        items: [
          'ISO 27001認證 (資訊安全管理系統)',
          'SOC 2 Type II合規',
          'CMMC (網絡安全成熟度模型認證)',
          'CSA STAR認證 (雲安全聯盟)',
          'PCI DSS合規'
        ]
      },
      techTools: {
        title: '我們使用的安全技術',
        items: [
          'AI驅動的威脅檢測系統',
          'SIEM平台',
          '威脅情報平台',
          '漏洞掃描工具',
          '密碼管理解決方案',
          '數據加密技術',
          '多因素認證系統',
          '區塊鏈安全技術'
        ]
      },
      whyUs: {
        title: '為什麼選擇我們？',
        description: '我們的技術專長、行業認證和以客戶為中心的方法，使我們成為您可信賴的安全合作夥伴。我們不僅提供安全解決方案，還幫助您建立長期的安全策略。',
        features: [
          {
            title: '頂尖專業認證',
            description: '我們的團隊持有業界最權威的安全認證'
          },
          {
            title: '先進安全技術',
            description: '採用最新的安全工具和技術'
          },
          {
            title: '實戰經驗',
            description: '豐富的實戰經驗，成功應對各類安全挑戰'
          }
        ]
      }
    },
    en: {
      title: 'Technical and Professional Certifications',
      description: 'We possess industry-leading professional qualifications and advanced security technologies, ensuring the highest quality security services for our clients.',
      personalCertifications: {
        title: 'Professional Personnel Certifications',
        items: [
          'CISSP (Certified Information Systems Security Professional)',
          'CEH (Certified Ethical Hacker)',
          'CISM (Certified Information Security Manager)',
          'OSCP (Offensive Security Certified Professional)',
          'CCSP (Certified Cloud Security Professional)',
          'Security+',
          'CASP+ (CompTIA Advanced Security Practitioner)'
        ]
      },
      companyCertifications: {
        title: 'Company Certifications and Compliance',
        items: [
          'ISO 27001 Certification (Information Security Management System)',
          'SOC 2 Type II Compliance',
          'CMMC (Cybersecurity Maturity Model Certification)',
          'CSA STAR Certification (Cloud Security Alliance)',
          'PCI DSS Compliance'
        ]
      },
      techTools: {
        title: 'Security Technologies We Use',
        items: [
          'AI-driven Threat Detection Systems',
          'SIEM Platforms',
          'Threat Intelligence Platforms',
          'Vulnerability Scanning Tools',
          'Password Management Solutions',
          'Data Encryption Technologies',
          'Multi-factor Authentication Systems',
          'Blockchain Security Technologies'
        ]
      },
      whyUs: {
        title: 'Why Choose Us?',
        description: 'Our technical expertise, industry certifications, and customer-centric approach make us your trusted security partner. We not only provide security solutions but also help you establish long-term security strategies.',
        features: [
          {
            title: 'Top Professional Certifications',
            description: 'Our team holds the industry\'s most authoritative security certifications'
          },
          {
            title: 'Advanced Security Technologies',
            description: 'Employ the latest security tools and technologies'
          },
          {
            title: 'Practical Experience',
            description: 'Rich practical experience, successfully addressing various security challenges'
          }
        ]
      }
    },
    ja: {
      title: '技術と専門認証',
      description: '私たちは業界をリードする専門的な資格と先進的なセキュリティ技術を持ち、クライアントに最高品質のセキュリティサービスを提供しています。',
      personalCertifications: {
        title: '専門家認証',
        items: [
          'CISSP (Certified Information Systems Security Professional)',
          'CEH (Certified Ethical Hacker)',
          'CISM (Certified Information Security Manager)',
          'OSCP (Offensive Security Certified Professional)',
          'CCSP (Certified Cloud Security Professional)',
          'Security+',
          'CASP+ (CompTIA Advanced Security Practitioner)'
        ]
      },
      companyCertifications: {
        title: '企業認証とコンプライアンス',
        items: [
          'ISO 27001認証（情報セキュリティマネジメントシステム）',
          'SOC 2 Type IIコンプライアンス',
          'CMMC（サイバーセキュリティ成熟度モデル認証）',
          'CSA STAR認証（クラウドセキュリティアライアンス）',
          'PCI DSSコンプライアンス'
        ]
      },
      techTools: {
        title: '当社が使用するセキュリティ技術',
        items: [
          'AI駆動の脅威検出システム',
          'SIEMプラットフォーム',
          '脅威インテリジェンスプラットフォーム',
          '脆弱性スキャンツール',
          'パスワード管理ソリューション',
          'データ暗号化技術',
          '多要素認証システム',
          'ブロックチェーンセキュリティ技術'
        ]
      },
      whyUs: {
        title: '当社を選ぶ理由',
        description: '私たちの技術的専門知識、業界認証、お客様中心のアプローチにより、信頼できるセキュリティパートナーとなっています。セキュリティソリューションを提供するだけでなく、長期的なセキュリティ戦略の確立をサポートします。',
        features: [
          {
            title: '一流の専門認証',
            description: '当社のチームは業界で最も権威のあるセキュリティ認証を保有しています'
          },
          {
            title: '先進的なセキュリティ技術',
            description: '最新のセキュリティツールと技術を採用'
          },
          {
            title: '実践経験',
            description: '豊富な実践経験により、様々なセキュリティ課題に成功裏に対応'
          }
        ]
      }
    }
  };
  
  const currentContent = language === 'zh' ? content.zh : 
                         language === 'ja' ? content.ja : 
                         content.en;

  return (
    <section id="certifications" className="section-container bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="mb-4">{currentContent.title}</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          {currentContent.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <CertificationBlock 
          title={currentContent.personalCertifications.title} 
          items={currentContent.personalCertifications.items} 
        />
        <CertificationBlock 
          title={currentContent.companyCertifications.title} 
          items={currentContent.companyCertifications.items} 
        />
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl text-center mb-8">{currentContent.techTools.title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentContent.techTools.items.map((tech, index) => (
            <TechLogo key={index} name={tech} />
          ))}
        </div>
      </div>
      
      <div className="bg-cyber-blue p-8 rounded-xl text-center">
        <div className="flex justify-center mb-6">
          <Award className="h-16 w-16 text-cyber-accent" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{currentContent.whyUs.title}</h3>
        <p className="text-white/90 max-w-2xl mx-auto mb-6">
          {currentContent.whyUs.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {currentContent.whyUs.features.map((feature, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-lg">
              <Shield className="h-8 w-8 text-cyber-accent mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
