
import React from 'react';
import { File, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const BlogPost = ({ title, excerpt, date, category }: BlogPostProps) => (
  <div className="cyber-card h-full flex flex-col">
    <div className="p-6">
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
        <Calendar className="h-4 w-4" />
        <span>{date}</span>
        <span className="bg-cyber-blue-light/10 text-cyber-blue-light px-2 py-0.5 rounded text-xs">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 mb-4 flex-grow">{excerpt}</p>
      <Button variant="ghost" className="text-cyber-accent group">
        閱讀全文 
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  </div>
);

const Knowledge = () => {
  const blogPosts: BlogPostProps[] = [
    {
      title: '如何有效防範勒索軟件攻擊',
      excerpt: '勒索軟件攻擊日益猖獗，本文提供了全面的防範策略，包括數據備份、安全更新和員工培訓等關鍵措施。',
      date: '2023-10-15',
      category: '威脅防禦'
    },
    {
      title: '零信任安全架構：原則與實踐',
      excerpt: '探討零信任安全模型的核心概念、實施步驟和最佳實踐，幫助組織建立更強大的安全防線。',
      date: '2023-09-22',
      category: '安全架構'
    },
    {
      title: '雲環境安全最佳實踐指南',
      excerpt: '隨著企業加速採用雲服務，雲安全成為關注焦點。本文分享雲環境保護的最佳實踐和常見陷阱。',
      date: '2023-08-18',
      category: '雲安全'
    },
    {
      title: '2023年網絡安全趨勢展望',
      excerpt: '分析未來一年網絡安全領域的主要趨勢和新興威脅，幫助組織提前做好準備。',
      date: '2023-07-05',
      category: '趨勢分析'
    },
    {
      title: '供應鏈攻擊：識別與防禦',
      excerpt: '供應鏈攻擊成為黑客的首選途徑之一。本文分析其工作原理，並提供有效的防禦策略。',
      date: '2023-06-12',
      category: '威脅情報'
    },
    {
      title: '合規不等於安全：全面安全策略指南',
      excerpt: '合規是必要但不充分的條件。本文探討如何超越合規要求，建立真正有效的安全計劃。',
      date: '2023-05-20',
      category: '合規與治理'
    }
  ];

  const resources = [
    { title: '網絡安全最佳實踐指南', type: '白皮書' },
    { title: '勒索軟件防禦策略', type: '電子書' },
    { title: '安全風險評估流程', type: '模板' },
    { title: '網絡安全意識培訓材料', type: '培訓資料' }
  ];

  return (
    <section id="knowledge" className="section-container">
      <div className="text-center mb-16">
        <h2 className="mb-4">知識中心</h2>
        <p className="max-w-3xl mx-auto text-slate-600">
          探索我們的安全資源庫，了解最新的網絡安全趨勢、威脅情報和最佳實踐。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {blogPosts.map((post, index) => (
          <BlogPost 
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            category={post.category}
          />
        ))}
      </div>
      
      <div className="cyber-card p-8 bg-cyber-gradient-light">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">免費安全資源</h3>
            <p className="max-w-xl">
              下載我們的免費安全資源，包括白皮書、電子書、模板和培訓材料，提升您的安全知識和能力。
            </p>
          </div>
          <Button size="lg" variant="secondary">
            瀏覽資源庫
          </Button>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-lg flex items-start">
              <File className="text-white h-5 w-5 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-white font-medium">{resource.title}</h4>
                <p className="text-white/70 text-sm">{resource.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl mb-6">定期安全通訊</h3>
        <p className="max-w-2xl mx-auto mb-8 text-slate-600">
          訂閱我們的安全通訊，定期獲取最新的安全資訊、威脅警報和防禦建議，保持安全意識。
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="您的電子郵件" 
              className="flex-grow px-4 py-2 border border-slate-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyber-accent"
            />
            <Button className="rounded-l-none bg-cyber-accent hover:bg-cyber-blue-light">
              訂閱
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-left">
            我們尊重您的隱私，不會濫用您的資訊。您可以隨時取消訂閱。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
