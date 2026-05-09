import React from 'react';
import { Play, ShieldCheck, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CVEVideos = () => {
  const { t } = useLanguage();

  const videos = [
    {
      title: t('cve.copyfail.title'),
      description: t('cve.copyfail.desc'),
      mitigation: t('cve.copyfail.mitigation'),
      src: '/videos/Copy_Fail_CVE-2026-31431.mp4',
      references: [
        { label: 'NVD - CVE-2026-31431', url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-31431' },
        { label: 'MITRE - CVE-2026-31431', url: 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2026-31431' },
      ],
    },
    {
      title: t('cve.dirtyfrag.title'),
      description: t('cve.dirtyfrag.desc'),
      mitigation: t('cve.dirtyfrag.mitigation'),
      src: '/videos/Dirtyfrag_CVE-2026-43284_CVE-2026-43500.mp4',
      references: [
        { label: 'NVD - CVE-2026-43284', url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-43284' },
        { label: 'NVD - CVE-2026-43500', url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-43500' },
      ],
    },
  ];

  return (
    <section id="cve-videos" className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cve.title')}</h2>
          <p className="text-slate-600">{t('cve.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((v, i) => (
            <div key={i} className="cyber-card p-6 flex flex-col">
              <div className="mb-3 flex items-center gap-2">
                <Play className="h-5 w-5 text-cyber-accent" />
                <span className="bg-cyber-blue-light/10 text-cyber-blue-light px-2 py-0.5 rounded text-xs">
                  {t('cve.tag')}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-slate-600 mb-4">{v.description}</p>
              <video
                src={v.src}
                controls
                preload="metadata"
                className="w-full rounded-md shadow mb-4"
              />
              <div className="mb-4">
                <div className="flex items-center gap-2 font-semibold mb-2">
                  <ShieldCheck className="h-4 w-4 text-cyber-accent" />
                  <span>{t('cve.mitigation')}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{v.mitigation}</p>
              </div>
              <div className="mt-auto">
                <div className="font-semibold mb-2">{t('cve.reference')}</div>
                <ul className="space-y-1">
                  {v.references.map((r, idx) => (
                    <li key={idx}>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-cyber-accent hover:underline break-all"
                      >
                        <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVEVideos;
