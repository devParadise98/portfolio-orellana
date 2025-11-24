import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experienceData = [
    {
      company: 'Intercorp Retail',
      period: 'Jun 2022 – Present',
      role: t('experience.roles.intercorp.role'),
      description: t('experience.roles.intercorp.description'),
      isCurrent: true,
    },
    {
      company: 'Stefanini',
      period: 'Jan 2022 - Jun 2022',
      role: t('experience.roles.stefanini.role'),
      description: t('experience.roles.stefanini.description'),
      isCurrent: false,
    },
    {
      company: 'Entelgy',
      period: 'Mar 2021 – Dec 2021',
      role: t('experience.roles.entelgy.role'),
      description: t('experience.roles.entelgy.description'),
      isCurrent: false,
    },
    {
      company: 'Playtec',
      period: 'Feb 2019 – Mar 2021',
      role: t('experience.roles.playtec.role'),
      description: t('experience.roles.playtec.description'),
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t('experience.title')} <span className="text-primary">{t('experience.titleHighlight')}</span>
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 border-l-2 border-dashed -translate-x-1/2 hidden md:block"></div>

          {experienceData.map((item, index) => (
            <div key={index} className={`mb-12 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>

              {/* Empty Side (Balancer) */}
              <div className="w-full md:w-[45%]"></div>

              {/* Center Dot */}
              <div className="relative z-10 hidden md:flex items-center justify-center w-[10%]">
                <div className={`w-6 h-6 rounded-full border-4 border-white shadow-md ${item.isCurrent ? 'bg-black' : 'bg-primary'}`}></div>
              </div>

              {/* Date/Company Side (Alternates) */}
              <div className="w-full md:w-[45%]">
                <div className={`md:px-4 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`p-6 rounded-xl border border-primary bg-white shadow-sm relative`}>
                    <h4 className="text-lg font-bold text-gray-900">{item.company}</h4>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.role}</h3>
                    <p className="text-sm text-gray-500 font-medium">{item.period}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
