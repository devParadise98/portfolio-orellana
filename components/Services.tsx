
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const ServiceCard: React.FC<{ title: string; description: string; imgSrc: string; }> = ({ title, description, imgSrc }) => (
  <div className="bg-dark-secondary rounded-2xl p-6 flex flex-col group h-full">
    <div className="flex-grow">
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
    <div className="relative mt-6 overflow-hidden rounded-xl">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute -bottom-4 right-4 bg-gray-800 text-white rounded-full p-4 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
        <FiArrowUpRight size={24} />
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t('skills.frontend'),
      description: 'ReactJS, TypeScript, NextJS, Redux, Hooks, Styled Components, SASS, LitElement, Webpack.',
      imgSrc: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: t('skills.backend'),
      description: 'NodeJS, Express, AWS (EC2, S3, Route53, CloudFront), Azure.',
      imgSrc: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: t('skills.tools'),
      description: 'Git, JIRA, Figma, Scrum, Agile, Visual Studio, Power BI.',
      imgSrc: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="services" className="bg-dark text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="md:flex md:items-end md:justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">{t('skills.title')} <span className="text-primary">{t('skills.titleHighlight')}</span></h2>
          <p className="text-gray-400 max-w-md">
            {t('skills.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
