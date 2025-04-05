
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Shield className="h-12 w-12 text-cyber-accent mr-3" />
              <h1 className="text-3xl md:text-4xl">
                {language === 'zh' ? '隱私政策' : 'Privacy Policy'}
              </h1>
            </div>
            
            <div className="cyber-card p-8">
              <p className="mb-6">
                {language === 'zh' 
                  ? '本隱私政策旨在幫助您了解我們如何收集，使用和保護您的個人資料。請仔細閱讀本政策，以了解我們處理您個人資料的方式。'
                  : 'This Privacy Policy is designed to help you understand how we collect, use, and safeguard your personal information. Please read this policy carefully to understand our practices regarding your personal data.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '資料收集' : 'Information Collection'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '我們可能會收集以下類型的資料：個人識別資料（如姓名、電子郵件地址、電話號碼）、設備資料、使用資料和其他您願意提供的資料。'
                  : 'We may collect the following types of information: Personal identification information (such as name, email address, phone number), device information, usage data, and other information you choose to provide.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '資料使用' : 'Use of Information'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '我們使用收集的資料來：提供和維護我們的服務、通知您服務的變更、使您能夠參與我們服務的互動功能、提供客戶支援、分析和改進我們的服務以及其他經您同意的用途。'
                  : 'We use the collected information to: Provide and maintain our services, notify you about changes to our services, enable you to participate in interactive features of our services, provide customer support, analyze and improve our services, and for other purposes with your consent.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '資料保護' : 'Data Protection'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '我們實施適當的技術和組織安全措施，以保護您的個人資料不會被意外或非法破壞、丟失、更改、未經授權披露或訪問。'
                  : 'We implement appropriate technical and organizational security measures to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '資料保留' : 'Data Retention'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '我們只會在必要的時間內保留您的個人資料，以實現本政策中概述的目的，除非法律要求或允許更長的保留期。'
                  : 'We will retain your personal data only for as long as is necessary for the purposes outlined in this policy, unless a longer retention period is required or permitted by law.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '您的權利' : 'Your Rights'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '根據適用的資料保護法，您可能擁有以下權利：訪問、更正、刪除您的個人資料，撤回同意，反對處理以及資料可攜性。'
                  : 'Under applicable data protection laws, you may have the following rights: Access, rectification, erasure of your personal data, withdrawal of consent, objection to processing, and data portability.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '政策變更' : 'Changes to Policy'}
              </h2>
              <p className="mb-6">
                {language === 'zh'
                  ? '我們可能會不時地更新我們的隱私政策。我們將通過在本頁面上發布新政策來通知您任何變更。'
                  : 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.'}
              </p>
              
              <h2 className="text-xl font-bold mb-3">
                {language === 'zh' ? '聯繫我們' : 'Contact Us'}
              </h2>
              <p>
                {language === 'zh'
                  ? '如果您對本隱私政策有任何疑問，請聯繫我們：'
                  : 'If you have any questions about this Privacy Policy, please contact us:'}
              </p>
              <p className="mt-2">
                <a href="mailto:info@10gtechnology.com" className="text-cyber-accent hover:underline">info@10gtechnology.com</a>
              </p>
            </div>
            
            <div className="mt-8 text-center text-sm text-slate-600">
              {language === 'zh'
                ? '最後更新：2025年4月1日'
                : 'Last updated: April 1, 2025'}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <LanguageSwitcher />
    </div>
  );
};

export default PrivacyPolicy;
