
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsItemProps {
  title: string;
  date: string;
  excerpt: string;
  tag: string;
}

const NewsItem = ({ title, date, excerpt, tag }: NewsItemProps) => (
  <div className="cyber-card p-6 h-full">
    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
      <Calendar className="h-4 w-4" />
      <span>{date}</span>
      <span className="bg-cyber-blue-light/10 text-cyber-blue-light px-2 py-0.5 rounded text-xs">
        {tag}
      </span>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-600 mb-4">{excerpt}</p>
    <Button variant="ghost" className="text-cyber-accent group">
      閱讀更多
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  </div>
);

const News = () => {
  const newsItems: NewsItemProps[] = [
    {
      title: '安全視界科技榮獲2023年度最佳網絡安全服務提供商獎',
      date: '2023-11-05',
      excerpt: '我們很榮幸地宣布，安全視界科技在2023年度網絡安全卓越獎中獲得"最佳安全服務提供商"獎項，這是對我們不懈努力的肯定。',
      tag: '公司新聞'
    },
    {
      title: '安全視界科技擴展亞太區業務，新設新加坡辦事處',
      date: '2023-10-18',
      excerpt: '為了更好地服務亞太地區客戶，我們在新加坡設立了新的辦事處，這標誌著我們業務擴展策略的重要一步。',
      tag: '業務拓展'
    },
    {
      title: '安全視界科技將參加2023年度網絡安全峰會',
      date: '2023-09-30',
      excerpt: '我們將於下月參加在香港舉行的2023年度網絡安全峰會，並發表關於新興威脅趨勢的主題演講。',
      tag: '活動預告'
    }
  ];

  return (
    <section className="section-container bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="mb-4">最新消息</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          了解安全視界科技的最新動態、產品更新和行業活動。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <NewsItem 
            key={index}
            title={item.title}
            date={item.date}
            excerpt={item.excerpt}
            tag={item.tag}
          />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button variant="outline" className="border-cyber-accent text-cyber-accent hover:bg-cyber-accent/5">
          查看所有新聞
        </Button>
      </div>
    </section>
  );
};

export default News;
