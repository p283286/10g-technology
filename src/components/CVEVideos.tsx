import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    title: 'Copy Fail - CVE-2026-31431',
    description:
      '此視頻演示 CVE-2026-31431 漏洞 (Copy Fail)，展示複製操作中的安全缺陷如何被攻擊者利用以洩露敏感資料或執行未授權操作，並說明相應的緩解措施。',
    src: '/videos/Copy_Fail_CVE-2026-31431.mp4',
  },
  {
    title: 'Dirtyfrag - CVE-2026-43284 / CVE-2026-43500',
    description:
      '此視頻演示 Dirtyfrag 系列漏洞 (CVE-2026-43284 與 CVE-2026-43500)，展示記憶體碎片操控如何導致權限提升或系統破壞，並提供偵測與防禦建議。',
    src: '/videos/Dirtyfrag_CVE-2026-43284_CVE-2026-43500.mp4',
  },
];

const CVEVideos = () => {
  return (
    <section id="cve-videos" className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">最新 CVE 漏洞演示</h2>
          <p className="text-slate-600">
            觀看真實的漏洞利用演示，了解攻擊原理並掌握防禦策略。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((v, i) => (
            <div key={i} className="cyber-card p-6 flex flex-col">
              <div className="mb-3 flex items-center gap-2">
                <Play className="h-5 w-5 text-cyber-accent" />
                <span className="bg-cyber-blue-light/10 text-cyber-blue-light px-2 py-0.5 rounded text-xs">
                  視頻
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-slate-600 mb-4">{v.description}</p>
              <video
                src={v.src}
                controls
                preload="metadata"
                className="w-full rounded-md shadow mt-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVEVideos;
