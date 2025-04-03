
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
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
  ];

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="mb-4">常見問題</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          我們收集了一些客戶經常詢問的問題及解答，希望能幫助您更好地了解我們的服務。
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
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
          還有其他問題？請直接聯繫我們的客戶服務團隊
        </p>
        <div className="font-semibold text-cyber-accent">info@10gtechnology.com | +852 97930974</div>
      </div>
    </section>
  );
};

export default FAQ;
