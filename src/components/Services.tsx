import React from 'react';
import { 
  Shield, Search, Lock, AlertTriangle, Activity, 
  Database, UserCheck, File, Monitor, Users, Key, BookOpen, Video, FileText
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
        {language === 'zh' ? '了解更多' : language === 'ja' ? '詳細を見る' : 'Learn More'}
      </Button>
    </div>
  );
};

const Services = () => {
  const { language } = useLanguage();
  
  const services = [
    {
      icon: <Monitor size={32} />,
      title: language === 'zh' ? 'TeamViewer替代方案' : language === 'ja' ? 'TeamViewer代替ソリューション' : 'TeamViewer Replacement',
      description: language === 'zh' 
        ? '超低成本的遠程桌面解決方案，固定月費無限用戶，支援Google/Microsoft/Telegram雙重認證，H.265視頻壓縮技術，專屬中國頻寬伺服器，保護企業隱私，支援會話錄製防止數據丟失。' 
        : language === 'ja'
        ? '無制限ユーザー対応の固定月額制による超低コストのリモートデスクトップソリューション。Google/Microsoft/Telegram 2FA認証、H.265ビデオ圧縮技術、中国帯域幅専用サーバー、プライバシー保護、データ損失防止のためのセッション記録をサポート。'
        : 'Ultra-low cost remote desktop solution with fixed monthly pricing for unlimited users. Features 2FA with Google/Microsoft/Telegram authenticators, H.265 video compression, dedicated server with China bandwidth, privacy protection, and session recording to prevent data loss.',
      path: '/teamviewer-replacement'
    },
    {
      icon: <Lock size={32} />,
      title: language === 'zh' ? 'Ransomware急救服務' : language === 'ja' ? 'Ransomware緊急サービス' : 'Ransomware Emergency Service',
      description: language === 'zh'
        ? '專業的勒索軟件應急響應和數據恢復服務，幫助企業快速處理勒索軟件攻擊事件。'
        : language === 'ja'
        ? 'ランサムウェア攻撃事件を迅速に処理するための専門的な緊急対応およびデータ復旧サービス。'
        : 'Professional ransomware emergency response and data recovery services to help enterprises quickly handle ransomware attack incidents.',
      path: '/ransomware-service'
    },
    {
      icon: <AlertTriangle size={32} />,
      title: language === 'zh' ? '漏洞評估與滲透測試' : language === 'ja' ? '脆弱性評価と侵入テスト' : 'Vulnerability Assessment and Penetration Testing',
      description: language === 'zh'
        ? '全面評估您的系統安全狀況，識別潛在漏洞，並提供針對性的修復建議。'
        : language === 'ja'
        ? 'システムのセキュリティ状態を包括的に評価し、潜在的な脆弱性を特定し、対象を絞った修復推奨事項を提供します。'
        : 'Comprehensive assessment of your system security status, identification of potential vulnerabilities, and provision of targeted remediation recommendations.',
      path: '/vulnerability-assessment'
    },
    {
      icon: <Activity size={32} />,
      title: language === 'zh' ? '應急響應與事件管理' : language === 'ja' ? '緊急対応とインシデント管理' : 'Emergency Response and Incident Management',
      description: language === 'zh'
        ? '提供快速有效的安全事件響應服務，最大限度地減少安全事件的影響和損失。'
        : language === 'ja'
        ? 'セキュリティインシデントの影響と損失を最小限に抑える迅速で効果的なセキュリティインシデント対応サービスを提供します。'
        : 'Provide rapid and effective security incident response services to minimize the impact and loss of security incidents.',
      path: '/emergency-response'
    },
    {
      icon: <Database size={32} />,
      title: language === 'zh' ? 'SIEM解決方案' : language === 'ja' ? 'SIEMソリューション' : 'SIEM Solutions',
      description: language === 'zh'
        ? '安全信息和事件管理系統，集中收集和分析來自網絡環境的安全數據，提供全面的威脅可視性。'
        : language === 'ja'
        ? 'ネットワーク環境からのセキュリティデータを一元的に収集・分析し、包括的な脅威の可視性を提供するセキュリティ情報およびイベント管理システム。'
        : 'Security Information and Event Management system that centrally collects and analyzes security data from the network environment, providing comprehensive threat visibility.',
      path: '/siem-solutions'
    },
    {
      icon: <UserCheck size={32} />,
      title: language === 'zh' ? '內部滲透測試' : language === 'ja' ? '内部侵入テスト' : 'Internal Penetration Testing',
      description: language === 'zh'
        ? '模擬內部威脅，評估組織內部安全控制的有效性，發現內部安全漏洞。'
        : language === 'ja'
        ? '内部脅威をシミュレートし、組織の内部セキュリティ制御の有効性を評価し、内部セキュリティ脆弱性を発見します。'
        : 'Simulate internal threats, assess the effectiveness of internal security controls, and discover internal security vulnerabilities.',
      path: '/internal-penetration'
    },
    {
      icon: <Shield size={32} />,
      title: language === 'zh' ? '外部滲透測試' : language === 'ja' ? '外部侵入テスト' : 'External Penetration Testing',
      description: language === 'zh'
        ? '從外部攻擊者的角度評估組織的安全邊界，識別可能被利用的入侵點。'
        : language === 'ja'
        ? '外部攻撃者の視点から組織のセキュリティ境界を評価し、悪用される可能性のある侵入ポイントを特定します。'
        : 'Assess the organization\'s security perimeter from the perspective of an external attacker, identifying potential points of entry that could be exploited.',
      path: '/external-penetration'
    },
    {
      icon: <File size={32} />,
      title: language === 'zh' ? '漏洞掃描' : language === 'ja' ? '脆弱性スキャン' : 'Vulnerability Scanning',
      description: language === 'zh'
        ? '定期掃描系統和應用程序，識別已知的安全漏洞，並提供修復指導。'
        : language === 'ja'
        ? 'システムとアプリケーションを定期的にスキャンして既知のセキュリティ脆弱性を特定し、修復ガイダンスを提供します。'
        : 'Regularly scan systems and applications to identify known security vulnerabilities and provide remediation guidance.',
      path: '/vulnerability-scanning'
    },
    {
      icon: <Monitor size={32} />,
      title: language === 'zh' ? '配置評估' : language === 'ja' ? '構成評価' : 'Configuration Assessment',
      description: language === 'zh'
        ? '審查系統和網絡配置，確保符合最佳安全實踐和合規要求。'
        : language === 'ja'
        ? 'システムおよびネットワーク構成をレビューして、最良のセキュリティプラクティスとコンプライアンス要件への準拠を確保します。'
        : 'Review system and network configurations to ensure compliance with best security practices and compliance requirements.',
      path: '/configuration-assessment'
    },
    {
      icon: <FileText size={32} />,
      title: language === 'zh' ? '保護關鍵基礎設施（電腦系統）條例' : language === 'ja' ? '重要インフラ（コンピュータシステム）保護法' : 'Protection of Critical Infrastructures (Computer Systems) Bill',
      description: language === 'zh'
        ? '全面的合規服務套件，包括滲透測試、漏洞掃描、SIEM監控、日誌存儲和安全意識培訓，幫助企業符合政府法規要求。'
        : language === 'ja'
        ? '侵入テスト、脆弱性スキャン、SIEM監視、ログストレージ、セキュリティ意識トレーニングを含む包括的なコンプライアンスサービススイートで、企業が政府規制要件を満たすのを支援します。'
        : 'Comprehensive compliance service suite including penetration testing, vulnerability scanning, SIEM monitoring, log storage, and security awareness training to help enterprises meet government regulatory requirements.',
      path: '/physical-security'
    },
    {
      icon: <Key size={32} />,
      title: language === 'zh' ? '門禁卡克隆防護' : language === 'ja' ? 'アクセスカードクローニング保護' : 'Access Card Cloning Protection',
      description: language === 'zh'
        ? '評估和加強門禁系統安全性，防止未授權的門禁卡複製和使用。'
        : language === 'ja'
        ? 'アクセス制御システムのセキュリティを評価・強化し、不正なアクセスカードの複製と使用を防止します。'
        : 'Assess and enhance the security of access control systems to prevent unauthorized copying and use of access cards.',
      path: '/access-card-protection'
    },
    {
      icon: <BookOpen size={32} />,
      title: language === 'zh' ? '安全意識培訓' : language === 'ja' ? 'セキュリティ意識トレーニング' : 'Security Awareness Training',
      description: language === 'zh'
        ? '為員工提供全面的安全意識培訓，建立強大的人員安全防線，預防社會工程攻擊。'
        : language === 'ja'
        ? '従業員に包括的なセキュリティ意識トレーニングを提供し、強力な人的セキュリティ防御線を構築してソーシャルエンジニアリング攻撃を防止します。'
        : 'Provide comprehensive security awareness training for employees, building a strong human security defense line to prevent social engineering attacks.',
      path: '/security-training'
    }
  ];

  return (
    <section id="services" className="section-container bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="mb-4">{language === 'zh' ? '服務與解決方案' : language === 'ja' ? 'サービス＆ソリューション' : 'Services & Solutions'}</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          {language === 'zh'
            ? '我們提供全面的網絡安全服務，幫助企業識別、防禦和應對各類網絡威脅，保障業務持續運營。'
            : language === 'ja'
            ? '企業がさまざまなサイバー脅威を識別、防御、対応し、事業継続性を確保するための包括的なサイバーセキュリティサービスを提供します。'
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
    </section>
  );
};

export default Services;
