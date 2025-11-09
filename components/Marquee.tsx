
import React from 'react';
import { FaStarOfLife } from 'react-icons/fa';

const skills = ['UI-UX Design', 'App Design', 'Dashboard', 'Wireframe', 'User Research'];

const MarqueeItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-4 mx-4">
    <FaStarOfLife className="text-white text-xl" />
    <span className="text-3xl font-bold text-white">{text}</span>
  </div>
);

const Marquee: React.FC = () => {
  const content = [...skills, ...skills, ...skills, ...skills]; // Duplicate for smooth infinite scroll

  return (
    <div className="bg-primary py-6 overflow-hidden relative">
      <div className="flex whitespace-nowrap marquee-content">
        {content.map((skill, index) => (
          <MarqueeItem key={index} text={skill} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
