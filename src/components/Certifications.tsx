
import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

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
  const personalCertifications = [
    'CISSP (Certified Information Systems Security Professional)',
    'CEH (Certified Ethical Hacker)',
    'CISM (Certified Information Security Manager)',
    'OSCP (Offensive Security Certified Professional)',
    'CCSP (Certified Cloud Security Professional)',
    'Security+',
    'CASP+ (CompTIA Advanced Security Practitioner)'
  ];
  
  const companyCertifications = [
    'ISO 27001認證 (資訊安全管理系統)',
    'SOC 2 Type II合規',
    'CMMC (網絡安全成熟度模型認證)',
    'CSA STAR認證 (雲安全聯盟)',
    'PCI DSS合規'
  ];
  
  const techTools = [
    'AI驅動的威脅檢測系統',
    'SIEM平台',
    '威脅情報平台',
    '漏洞掃描工具',
    '密碼管理解決方案',
    '數據加密技術',
    '多因素認證系統',
    '區塊鏈安全技術'
  ];

  return (
    <section id="certifications" className="section-container bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="mb-4">技術與專業認證</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          我們擁有行業領先的專業資質和先進安全技術，確保為客戶提供最高品質的安全服務。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <CertificationBlock 
          title="專業人員認證" 
          items={personalCertifications} 
        />
        <CertificationBlock 
          title="公司認證與合規" 
          items={companyCertifications} 
        />
      </div>
      
      <div className="mb-16">
        <h3 className="text-2xl text-center mb-8">我們使用的安全技術</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techTools.map((tech, index) => (
            <TechLogo key={index} name={tech} />
          ))}
        </div>
      </div>
      
      <div className="bg-cyber-blue p-8 rounded-xl text-center">
        <div className="flex justify-center mb-6">
          <Award className="h-16 w-16 text-cyber-accent" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">為什麼選擇我們？</h3>
        <p className="text-white/90 max-w-2xl mx-auto mb-6">
          我們的技術專長、行業認證和以客戶為中心的方法，使我們成為您可信賴的安全合作夥伴。我們不僅提供安全解決方案，還幫助您建立長期的安全策略。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/10 p-4 rounded-lg">
            <Shield className="h-8 w-8 text-cyber-accent mx-auto mb-2" />
            <h4 className="text-white font-semibold mb-2">頂尖專業認證</h4>
            <p className="text-white/80 text-sm">我們的團隊持有業界最權威的安全認證</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <Shield className="h-8 w-8 text-cyber-accent mx-auto mb-2" />
            <h4 className="text-white font-semibold mb-2">先進安全技術</h4>
            <p className="text-white/80 text-sm">採用最新的安全工具和技術</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <Shield className="h-8 w-8 text-cyber-accent mx-auto mb-2" />
            <h4 className="text-white font-semibold mb-2">實戰經驗</h4>
            <p className="text-white/80 text-sm">豐富的實戰經驗，成功應對各類安全挑戰</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
