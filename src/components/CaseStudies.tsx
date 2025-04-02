
import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CaseStudyProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
}

const CaseStudy = ({ company, industry, challenge, solution, results }: CaseStudyProps) => (
  <div className="cyber-card overflow-hidden h-full">
    <div className="bg-cyber-gradient p-4">
      <p className="text-white/80 text-sm">{industry}</p>
      <h3 className="text-white text-xl">{company}</h3>
    </div>
    <div className="p-6">
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2 text-cyber-blue-light">面臨挑戰</h4>
        <p className="text-slate-600">{challenge}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2 text-cyber-blue-light">我們的解決方案</h4>
        <p className="text-slate-600">{solution}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2 text-cyber-blue-light">成果</h4>
        <ul className="text-slate-600 space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-start">
              <Shield className="h-5 w-5 text-cyber-accent mt-1 mr-2 flex-shrink-0" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button variant="ghost" className="mt-4 text-cyber-accent group">
        查看完整案例 
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  </div>
);

const Testimonial = ({ quote, author, company }: { quote: string, author: string, company: string }) => (
  <div className="cyber-card p-6 h-full">
    <div className="text-4xl text-cyber-accent mb-4">"</div>
    <p className="text-slate-600 mb-6 italic">{quote}</p>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-slate-500">{company}</p>
    </div>
  </div>
);

const CaseStudies = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      company: '某大型金融機構',
      industry: '金融行業',
      challenge: '面對日益複雜的網絡攻擊，客戶需要加強其安全架構，特別是在保護客戶敏感數據和遵守嚴格的金融法規方面。',
      solution: '我們實施了全面的安全評估，部署了先進的威脅檢測系統，進行了內外部滲透測試，並提供了安全意識培訓。',
      results: [
        '識別並修復了43個高風險安全漏洞',
        '成功防禦了多次針對性網絡攻擊',
        '提高了系統安全性，符合監管要求',
        '減少了安全事件處理時間達70%'
      ]
    },
    {
      company: '某知名科技企業',
      industry: '科技行業',
      challenge: '隨著遠程工作的普及，客戶面臨著保護分散式員工和知識產權安全的挑戰，同時需要確保業務敏捷性。',
      solution: '我們實施了零信任安全架構，增強了身份驗證措施，部署了端點檢測與響應(EDR)解決方案，並建立了全天候的安全監控中心。',
      results: [
        '建立了安全的遠程工作環境，保護了敏感數據',
        '減少了未授權存取的風險',
        '提高了安全事件的檢測和響應能力',
        '實現了安全與業務效率的平衡'
      ]
    },
    {
      company: '某區域醫療中心',
      industry: '醫療健康',
      challenge: '客戶需要保護大量患者敏感數據，確保醫療設備安全，並符合嚴格的醫療數據隱私法規要求。',
      solution: '我們實施了醫療專用的安全解決方案，包括網絡分段、數據加密、設備安全評估和合規管理系統。',
      results: [
        '加強了患者數據保護，實現了HIPAA合規',
        '識別並修復了醫療設備的安全漏洞',
        '建立了全面的安全管理框架',
        '提高了整體安全意識和文化'
      ]
    }
  ];

  const testimonials = [
    {
      quote: '安全視界科技團隊展現出的專業知識和敬業精神令我們印象深刻。他們不僅幫助我們識別並解決了潛在的安全風險，還提供了長期的安全戰略指導。',
      author: '張總監',
      company: '金融服務公司'
    },
    {
      quote: '作為一家醫療機構，數據安全對我們至關重要。安全視界科技幫助我們建立了強大的安全防線，讓我們能夠專注於為患者提供最佳的醫療服務。',
      author: '李院長',
      company: '區域醫療中心'
    },
    {
      quote: '他們的安全團隊迅速響應並解決了我們面臨的網絡攻擊。他們不僅解決了立即的威脅，還幫助我們加強了整體安全架構，防止類似事件再次發生。',
      author: '王經理',
      company: '科技創新企業'
    }
  ];

  return (
    <section id="case-studies" className="section-container">
      <div className="text-center mb-16">
        <h2 className="mb-4">成功案例</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          我們與各行各業的客戶合作，幫助他們解決複雜的安全挑戰，保護重要資產，提升安全能力。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {caseStudies.map((study, index) => (
          <CaseStudy key={index} {...study} />
        ))}
      </div>
      
      <div className="mt-20">
        <h3 className="text-2xl text-center mb-10">客戶評價</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
