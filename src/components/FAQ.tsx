
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { language, t } = useLanguage();
  
  const faqs = {
    zh: [
      {
        question: '如何確定我的組織需要哪些安全服務？',
        answer: '我們建議從全面的安全評估開始，這將幫助識別您組織的具體風險和安全需求。基於評估結果，我們的專家團隊將為您推薦最適合的安全解決方案。您可以聯繫我們預約免費的初步諮詢。'
      },
      {
        question: '天機科技服務哪些行業？',
        answer: '我們為各行各業提供網絡安全服務，包括但不限於金融服務、醫療健康、製造、零售、教育、政府和科技等。我們的解決方案可以根據不同行業的特定需求和合規要求進行定制。'
      },
      {
        question: '發生安全事件時，應該如何聯繫你們？',
        answer: '我們提供24/7全天候的緊急響應服務。您可以通過我們的緊急熱線+852 97930974聯繫我們，或發送郵件至emergency@10gtechnology.com。我們的事件響應團隊將立即處理您的請求。'
      },
      {
        question: '你們如何確保安全評估的保密性？',
        answer: '我們非常重視客戶數據的保密性。所有安全評估活動都遵循嚴格的保密協議，並由經過安全審查的專業人員執行。我們所有的發現和建議都進行加密存儲，僅限授權人員訪問。'
      },
      {
        question: '安全服務的實施時間需要多久？',
        answer: '實施時間取決於您選擇的服務類型、組織規模和特定需求。簡單的安全評估可能需要1-2週完成，而全面的安全方案實施可能需要幾個月。我們會與您密切合作，制定符合您時間要求的項目計劃。'
      },
      {
        question: '是否提供持續的安全監控服務？',
        answer: '是的，我們提供全天候的安全監控服務。我們的安全運營中心(SOC)配備了先進的監控工具和專業人員，可以持續監控您的網絡環境，及時發現和應對潛在威脅。'
      }
    ],
    en: [
      {
        question: 'How do I determine which security services my organization needs?',
        answer: 'We recommend starting with a comprehensive security assessment, which will help identify your organization\'s specific risks and security requirements. Based on the assessment results, our team of experts will recommend the most suitable security solutions. You can contact us to schedule a free initial consultation.'
      },
      {
        question: 'Which industries does 10G Technology serve?',
        answer: 'We provide cybersecurity services to a wide range of industries, including but not limited to financial services, healthcare, manufacturing, retail, education, government, and technology. Our solutions can be customized according to the specific needs and compliance requirements of different industries.'
      },
      {
        question: 'How should I contact you in case of a security incident?',
        answer: 'We provide 24/7 emergency response services. You can reach us through our emergency hotline at +852 97930974 or by sending an email to emergency@10gtechnology.com. Our incident response team will immediately address your request.'
      },
      {
        question: 'How do you ensure the confidentiality of security assessments?',
        answer: 'We take the confidentiality of client data very seriously. All security assessment activities follow strict confidentiality agreements and are performed by professionals who have undergone security clearance. All our findings and recommendations are stored with encryption and are accessible only to authorized personnel.'
      },
      {
        question: 'How long does it take to implement security services?',
        answer: 'Implementation time depends on the type of services you choose, the size of your organization, and specific requirements. Simple security assessments may take 1-2 weeks to complete, while comprehensive security solution implementations may take several months. We will work closely with you to develop a project plan that meets your timeframe requirements.'
      },
      {
        question: 'Do you provide ongoing security monitoring services?',
        answer: 'Yes, we provide round-the-clock security monitoring services. Our Security Operations Center (SOC) is equipped with advanced monitoring tools and professionals who can continuously monitor your network environment to promptly detect and respond to potential threats.'
      }
    ],
    ja: [
      {
        question: '組織に必要なセキュリティサービスを特定するにはどうすればよいですか？',
        answer: '包括的なセキュリティ評価から始めることをお勧めします。これにより、組織固有のリスクとセキュリティ要件を特定するのに役立ちます。評価結果に基づいて、専門家チームが最適なセキュリティソリューションを推奨します。無料の初期相談をスケジュールするには、お問い合わせください。'
      },
      {
        question: '10Gテクノロジーはどのような業界にサービスを提供していますか？',
        answer: '金融サービス、ヘルスケア、製造、小売、教育、政府、テクノロジーなど、幅広い業界にサイバーセキュリティサービスを提供しています。当社のソリューションは、異なる業界の特定のニーズとコンプライアンス要件に応じてカスタマイズできます。'
      },
      {
        question: 'セキュリティインシデントが発生した場合、どのように連絡すればよいですか？',
        answer: '24時間365日の緊急対応サービスを提供しています。緊急ホットライン+852 97930974にお電話いただくか、emergency@10gtechnology.comにメールを送信してください。インシデント対応チームが即座にリクエストに対応します。'
      },
      {
        question: 'セキュリティ評価の機密性はどのように確保されていますか？',
        answer: 'クライアントデータの機密性を非常に重視しています。すべてのセキュリティ評価活動は厳格な機密保持契約に従い、セキュリティクリアランスを受けた専門家によって実施されます。すべての調査結果と推奨事項は暗号化されて保存され、許可された担当者のみがアクセスできます。'
      },
      {
        question: 'セキュリティサービスの実装にはどれくらい時間がかかりますか？',
        answer: '実装時間は、選択したサービスのタイプ、組織の規模、および特定の要件によって異なります。単純なセキュリティ評価は1〜2週間で完了する場合がありますが、包括的なセキュリティソリューションの実装には数ヶ月かかる場合があります。お客様のスケジュール要件を満たすプロジェクト計画を策定するために緊密に連携します。'
      },
      {
        question: '継続的なセキュリティ監視サービスは提供していますか？',
        answer: 'はい、24時間体制のセキュリティ監視サービスを提供しています。当社のセキュリティオペレーションセンター（SOC）は、高度な監視ツールと専門家を備えており、ネットワーク環境を継続的に監視して、潜在的な脅威を迅速に検出し対応することができます。'
      }
    ]
  };

  // Fallback to English if the current language is not available in faqs
  const currentLanguageFaqs = faqs[language] || faqs.en;

  return (
    <section id="faq" className="section-container">
      <div className="text-center mb-16">
        <h2 className="mb-4">{t('faq.title')}</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          {t('faq.description')}
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {currentLanguageFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-slate-600 mb-4">
          {language === 'zh' 
            ? '還有其他問題？請直接聯繫我們的客戶服務團隊'
            : language === 'ja'
              ? '他の質問がありますか？カスタマーサービスチームに直接お問い合わせください'
              : 'Have more questions? Please contact our customer service team directly'}
        </p>
        <div className="font-semibold text-cyber-accent">info@10gtechnology.com | +852 97930974</div>
      </div>
    </section>
  );
};

export default FAQ;
