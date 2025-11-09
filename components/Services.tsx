
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const servicesData = [
  {
    title: 'UI/UX Design',
    imgSrc: 'https://picsum.photos/seed/uiux/400/300',
  },
  {
    title: 'Web Design',
    imgSrc: 'https://picsum.photos/seed/webdesign/400/300',
  },
  {
    title: 'Landing Page',
    imgSrc: 'https://picsum.photos/seed/landingpage/400/300',
  },
];

const ServiceCard: React.FC<{ title: string; imgSrc: string; }> = ({ title, imgSrc }) => (
  <div className="bg-dark-secondary rounded-2xl p-6 flex flex-col group">
    <div className="flex-grow">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
    </div>
    <div className="relative mt-6">
      <img src={imgSrc} alt={title} className="rounded-xl w-full" />
      <div className="absolute -bottom-4 right-4 bg-gray-800 text-white rounded-full p-4 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
        <FiArrowUpRight size={24} />
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-dark text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="md:flex md:items-end md:justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">My Services</h2>
          <p className="text-gray-400 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
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
