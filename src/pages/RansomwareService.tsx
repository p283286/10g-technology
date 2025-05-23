
import React, { useEffect } from 'react';
import { Shield, FileX, Clock, Database, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const RansomwareService = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const content = {
    zh: {
      title: 'Ransomware急救服務',
      subtitle: '專業的勒索軟件應急響應和數據恢復服務，幫助企業快速處理勒索軟件攻擊事件。',
      description: '我們的Ransomware急救服務提供全面的勒索軟件應急響應方案，從威脅識別、系統隔離到數據恢復和事後分析，幫助企業在勒索軟件攻擊事件中最小化損失，快速恢復業務運營。',
      benefits: [
        {
          title: '快速響應',
          description: '24/7全天候應急響應團隊，確保在勒索軟件攻擊發生后最短時間內介入處理。',
          icon: <Clock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '數據恢復',
          description: '專業的數據恢復技術，最大限度地恢復被加密文件，減少數據丟失。',
          icon: <FileX className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '安全防護',
          description: '全面的安全評估和加固，防止再次遭受攻擊並增強企業安全防禦能力。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: '取證調查',
          description: '專業的數字取證調查，確定攻擊來源和方式，協助企業進行事後處理和報告。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        '事件響應與威脅識別',
        '系統隔離與控制',
        '數據恢復服務',
        '勒索軟件清除',
        '事件調查與分析',
        '安全加固與預防建議'
      ],
      cta: '聯繫我們獲取緊急響應',
      backToServices: '返回服務列表'
    },
    en: {
      title: 'Ransomware Emergency Service',
      subtitle: 'Professional ransomware emergency response and data recovery services to help enterprises quickly handle ransomware attack incidents.',
      description: 'Our Ransomware Emergency Service provides comprehensive ransomware emergency response solutions, from threat identification and system isolation to data recovery and post-event analysis, helping enterprises minimize losses and quickly restore business operations during ransomware attack incidents.',
      benefits: [
        {
          title: 'Rapid Response',
          description: '24/7 emergency response team ensures intervention in the shortest possible time after a ransomware attack occurs.',
          icon: <Clock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Data Recovery',
          description: 'Professional data recovery technology to maximize the recovery of encrypted files and reduce data loss.',
          icon: <FileX className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Security Protection',
          description: 'Comprehensive security assessment and hardening to prevent future attacks and enhance corporate security defense capabilities.',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'Forensic Investigation',
          description: 'Professional digital forensic investigation to determine the source and method of attack, assisting enterprises in post-event handling and reporting.',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'Incident response and threat identification',
        'System isolation and control',
        'Data recovery services',
        'Ransomware removal',
        'Incident investigation and analysis',
        'Security hardening and prevention recommendations'
      ],
      cta: 'Contact us for emergency response',
      backToServices: 'Back to services'
    },
    ja: {
      title: 'ランサムウェア緊急サービス',
      subtitle: 'ランサムウェア攻撃インシデントを迅速に処理するための専門的な緊急対応とデータ復旧サービス。',
      description: '当社のランサムウェア緊急サービスは、脅威の特定からシステム分離、データ復旧、事後分析まで、包括的なランサムウェア緊急対応ソリューションを提供し、企業がランサムウェア攻撃インシデント中の損失を最小限に抑え、業務運営を迅速に復旧するのを支援します。',
      benefits: [
        {
          title: '迅速な対応',
          description: '24時間365日対応の緊急対応チームが、ランサムウェア攻撃発生後可能な限り短時間での介入を保証します。',
          icon: <Clock className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'データ復旧',
          description: '暗号化されたファイルの復旧を最大化し、データ損失を軽減するための専門的なデータ復旧技術。',
          icon: <FileX className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'セキュリティ保護',
          description: '将来の攻撃を防止し、企業のセキュリティ防御能力を強化するための包括的なセキュリティ評価と強化。',
          icon: <Shield className="h-10 w-10 text-cyber-accent" />
        },
        {
          title: 'フォレンジック調査',
          description: '攻撃の発生源と方法を特定し、企業の事後処理と報告を支援するための専門的なデジタルフォレンジック調査。',
          icon: <Database className="h-10 w-10 text-cyber-accent" />
        }
      ],
      features: [
        'インシデント対応と脅威の特定',
        'システム分離と制御',
        'データ復旧サービス',
        'ランサムウェアの除去',
        'インシデント調査と分析',
        'セキュリティ強化と予防推奨事項'
      ],
      cta: '緊急対応についてお問い合わせください',
      backToServices: 'サービス一覧に戻る'
    }
  };
  
  const icons = [
    <Clock className="h-10 w-10 text-cyber-accent" />,
    <FileX className="h-10 w-10 text-cyber-accent" />,
    <Shield className="h-10 w-10 text-cyber-accent" />,
    <Database className="h-10 w-10 text-cyber-accent" />
  ];

  return (
    <ServicePageTemplate 
      content={content}
      language={language}
      icons={icons}
    />
  );
};

export default RansomwareService;
