
import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { language } = useLanguage();
  
  const content = {
    zh: {
      title: '公司簡介',
      description: '天機科技成立於2010年，是領先的網絡安全服務提供商，專注於為企業提供全方位的資訊安全解決方案。',
      mission: {
        title: '我們的使命',
        content: '我們致力於為客戶提供最先進的網絡安全防護，確保他們的數據資產和業務運營不受網絡威脅的干擾。在當今不斷變化的網絡威脅環境中，我們是您可靠的安全夥伴。'
      },
      values: {
        title: '我們的價值觀',
        items: [
          {
            title: '專業誠信',
            content: '以最高的道德標準和專業精神服務每一位客戶'
          },
          {
            title: '持續創新',
            content: '不斷研發和應用最新的安全技術和方法'
          },
          {
            title: '以客為本',
            content: '深入理解客戶需求，提供定制化的安全解決方案'
          },
          {
            title: '協作共贏',
            content: '與客戶建立長期合作關係，共同應對安全挑戰'
          }
        ]
      },
      achievements: {
        title: '公司成就',
        stats: [
          { icon: <Clock size={36} />, value: '10+', label: '年行業經驗' },
          { icon: <Users size={36} />, value: '100+', label: '資深安全專家' },
          { icon: <Award size={36} />, value: '50+', label: '行業認證' },
          { icon: <Shield size={36} />, value: '1000+', label: '成功客戶案例' }
        ]
      }
    },
    en: {
      title: 'About Us',
      description: '10G Technology, established in 2010, is a leading cybersecurity service provider focused on delivering comprehensive information security solutions for businesses.',
      mission: {
        title: 'Our Mission',
        content: 'We are committed to providing our clients with the most advanced cyber protection, ensuring their data assets and business operations are free from cyber threats. In today\'s constantly evolving threat landscape, we are your reliable security partner.'
      },
      values: {
        title: 'Our Values',
        items: [
          {
            title: 'Professional Integrity',
            content: 'Serving every client with the highest ethical standards and professionalism'
          },
          {
            title: 'Continuous Innovation',
            content: 'Constantly developing and applying the latest security technologies and methods'
          },
          {
            title: 'Customer-Centric',
            content: 'Deeply understanding client needs and providing customized security solutions'
          },
          {
            title: 'Collaborative Success',
            content: 'Building long-term partnerships with clients to jointly address security challenges'
          }
        ]
      },
      achievements: {
        title: 'Company Achievements',
        stats: [
          { icon: <Clock size={36} />, value: '10+', label: 'Years of Experience' },
          { icon: <Users size={36} />, value: '100+', label: 'Security Experts' },
          { icon: <Award size={36} />, value: '50+', label: 'Industry Certifications' },
          { icon: <Shield size={36} />, value: '1000+', label: 'Successful Client Cases' }
        ]
      }
    },
    ja: {
      title: '会社概要',
      description: '10Gテクノロジーは2010年に設立され、企業に包括的な情報セキュリティソリューションを提供することに焦点を当てた、サイバーセキュリティサービスのリーディングプロバイダーです。',
      mission: {
        title: '私たちの使命',
        content: '私たちは、クライアントに最先端のサイバー保護を提供し、データ資産とビジネス運営がサイバー脅威から守られるよう努めています。今日の絶えず進化する脅威の環境において、私たちはお客様の信頼できるセキュリティパートナーです。'
      },
      values: {
        title: '私たちの価値観',
        items: [
          {
            title: 'プロフェッショナルな誠実さ',
            content: '最高の倫理基準とプロフェッショナリズムですべてのクライアントにサービスを提供'
          },
          {
            title: '継続的なイノベーション',
            content: '最新のセキュリティ技術と方法を常に開発し適用'
          },
          {
            title: '顧客中心主義',
            content: 'クライアントのニーズを深く理解し、カスタマイズされたセキュリティソリューションを提供'
          },
          {
            title: '協力的な成功',
            content: 'セキュリティの課題に共同で対処するため、クライアントと長期的なパートナーシップを構築'
          }
        ]
      },
      achievements: {
        title: '企業実績',
        stats: [
          { icon: <Clock size={36} />, value: '10+', label: '年の業界経験' },
          { icon: <Users size={36} />, value: '100+', label: 'セキュリティ専門家' },
          { icon: <Award size={36} />, value: '50+', label: '業界認証' },
          { icon: <Shield size={36} />, value: '1000+', label: '成功したクライアント事例' }
        ]
      }
    }
  };
  
  const currentContent = language === 'zh' ? content.zh : 
                         language === 'ja' ? content.ja :
                         content.en;

  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <h2 className="mb-4">{currentContent.title}</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          {currentContent.description}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl mb-4 text-cyber-blue-light">{currentContent.mission.title}</h3>
          <p className="mb-6">
            {currentContent.mission.content}
          </p>
          
          <h3 className="text-2xl mb-4 text-cyber-blue-light">{currentContent.values.title}</h3>
          <ul className="space-y-3">
            {currentContent.values.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <Shield className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
                <p><span className="font-semibold">{item.title}</span> - {item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-cyber-gradient opacity-10 rounded-xl blur-md"></div>
          <div className="cyber-card p-8 relative">
            <h3 className="text-2xl mb-6 text-center">{currentContent.achievements.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {currentContent.achievements.stats.map((stat, index) => (
                <StatsCard 
                  key={index}
                  icon={stat.icon} 
                  value={stat.value} 
                  label={stat.label} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
