import React from 'react';
import { useTranslation } from 'react-i18next';

const HireMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-light-gray rounded-3xl p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-48 h-48 md:w-64 md:h-64 bg-primary rounded-full" />
              <img
                src="https://picsum.photos/id/1027/400/500"
                alt="Why Hire Me"
                className="relative z-10 rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('hireMe.title')} <span className="text-primary">{t('hireMe.titleHighlight')}</span></h2>
              <p className="text-gray-600 mb-8">
                {t('hireMe.description')}
              </p>
              <div className="flex space-x-12 mb-8">
                <div>
                  <p className="text-4xl font-bold">5+</p>
                  <p className="text-gray-500">{t('hireMe.years')}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">10+</p>
                  <p className="text-gray-500">{t('hireMe.projects')}</p>
                </div>
              </div>
              <a href="#contact" className="inline-block bg-white text-black font-semibold rounded-full px-8 py-3 border-2 border-gray-300 hover:bg-primary hover:border-primary transition-colors">
                {t('hero.hireMe')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
