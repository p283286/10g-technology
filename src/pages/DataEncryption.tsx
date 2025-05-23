
import React, { useEffect } from 'react';
import { Lock, Shield, Database, Key } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DataEncryption = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: '數據加密與隱私保護',
      subtitle: '實施強大的加密解決方案，確保您的敏感數據在傳輸和存儲過程中得到全面保護。',
      description: '我們的數據加密與隱私保護服務使用最先進的加密技術，保護您企業的敏感信息和客戶數據。無論是數據傳輸、存儲還是處理，我們都能確保您的數據安全，並符合相關隱私法規的要求。',
      benefits: [
        {
          title: '端到端加密',
          description: '確保數據從源頭到目的地的整個傳輸過程中都受到加密保護，防止未授權訪問。',
          icon: <Lock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '靜態數據保護',
          description: '實施強大的靜態數據加密策略，確保存儲的敏感信息不會被未授權人員訪問。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '隱私法規合規',
          description: '幫助企業符合GDPR、CCPA等隱私法規的要求，避免違規風險和潛在罰款。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '加密密鑰管理',
          description: '提供完善的密鑰管理解決方案，確保加密密鑰的安全生成、存儲和輪換。',
          icon: <Key className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '文件和數據庫加密解決方案',
        '數據分類和保護策略',
        '電子郵件和通信加密',
        '客戶數據隱私保護',
        '數據泄露防護',
        '數據匿名化和假名化技術'
      ],
      cta: '聯繫我們獲取定制解決方案',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Data Encryption and Privacy Protection',
      subtitle: 'Implement robust encryption solutions to ensure your sensitive data is fully protected during transmission and storage.',
      description: 'Our Data Encryption and Privacy Protection services utilize cutting-edge encryption technologies to protect your enterprise sensitive information and customer data. Whether data is in transit, at rest, or being processed, we ensure your data is secure and compliant with relevant privacy regulations.',
      benefits: [
        {
          title: 'End-to-End Encryption',
          description: 'Ensure data is encrypted throughout the entire transmission process from source to destination, preventing unauthorized access.',
          icon: <Lock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Data-at-Rest Protection',
          description: 'Implement robust data-at-rest encryption strategies to ensure stored sensitive information cannot be accessed by unauthorized personnel.',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Privacy Regulation Compliance',
          description: 'Help businesses comply with privacy regulations like GDPR, CCPA, etc., avoiding compliance risks and potential penalties.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Encryption Key Management',
          description: 'Provide comprehensive key management solutions ensuring secure generation, storage, and rotation of encryption keys.',
          icon: <Key className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'File and database encryption solutions',
        'Data classification and protection policies',
        'Email and communication encryption',
        'Customer data privacy protection',
        'Data breach prevention',
        'Data anonymization and pseudonymization techniques'
      ],
      cta: 'Contact us for customized solutions',
      backToServices: 'Back to services'
    },
    ja: {
      title: 'データ暗号化とプライバシー保護',
      subtitle: '堅牢な暗号化ソリューションを実装し、送信中および保存中の機密データが完全に保護されるようにします。',
      description: '当社のデータ暗号化とプライバシー保護サービスは、最先端の暗号化技術を使用して、企業の機密情報と顧客データを保護します。データが転送中、保存中、または処理中であっても、データが安全で、関連するプライバシー規制に準拠していることを確保します。',
      benefits: [
        {
          title: 'エンドツーエンドの暗号化',
          description: 'データが送信元から送信先までの全送信プロセスを通じて暗号化され、不正アクセスを防止します。',
          icon: <Lock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '保存データの保護',
          description: '堅牢な保存データ暗号化戦略を実装し、保存された機密情報が権限のない人員によってアクセスされないようにします。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'プライバシー規制の遵守',
          description: 'GDPRやCCPAなどのプライバシー規制に企業が準拠し、コンプライアンスリスクや潜在的な罰則を回避するのを支援します。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '暗号化キー管理',
          description: '暗号化キーの安全な生成、保存、およびローテーションを確保する包括的なキー管理ソリューションを提供します。',
          icon: <Key className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'ファイルとデータベースの暗号化ソリューション',
        'データ分類と保護ポリシー',
        'メールとコミュニケーションの暗号化',
        '顧客データのプライバシー保護',
        'データ漏洩防止',
        'データの匿名化と仮名化技術'
      ],
      cta: 'カスタマイズされたソリューションについてお問い合わせください',
      backToServices: 'サービス一覧に戻る'
    }
  };
  
  const icons = [
    <Lock className="h-10 w-10 text-cyber-accent" />,
    <Database className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Key className="h-10 w-10 text-cyber-accent" />
  ];

  return (
    <ServicePageTemplate 
      content={content}
      language={language}
      icons={icons}
    />
  );
};

export default DataEncryption;
