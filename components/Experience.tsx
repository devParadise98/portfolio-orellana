
import React from 'react';

const experienceData = [
  {
    company: 'Cognizant, Mumbai',
    period: 'Sep 2016- July 2020',
    role: 'Experience Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.',
    isCurrent: false,
  },
  {
    company: 'Sugee Pvt limited, Mumbai',
    period: 'Sep 2020- July 2023',
    role: 'UI/UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.',
    isCurrent: false,
  },
  {
    company: 'Cinetstox, Mumbai',
    period: 'Sep 2023',
    role: 'Lead UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.',
    isCurrent: true,
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My Work <span className="text-primary">Experience</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 border border-dashed hidden md:block"></div>
          {experienceData.map((item, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''} md:gap-x-16`}>
              <div className="w-full md:w-5/12">
                <div className={`text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <p className="text-lg font-bold">{item.company}</p>
                  <p className="text-sm text-gray-500">{item.period}</p>
                </div>
              </div>
              <div className="z-10 hidden md:flex items-center">
                <div className={`w-8 h-8 rounded-full border-4 ${item.isCurrent ? 'bg-black border-black' : 'bg-primary border-primary'}`}></div>
              </div>
              <div className="w-full md:w-5/12">
                 <div className="p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                    <p className="text-gray-600">{item.description}</p>
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
