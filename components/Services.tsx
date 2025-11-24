import React from 'react';
import { useTranslation } from 'react-i18next';
import { SiFigma, SiNextdotjs, SiTypescript, SiJavascript, SiVercel } from 'react-icons/si';
import { FaReact, FaAws, FaCss3Alt, FaSass, FaGithub, FaLayerGroup } from 'react-icons/fa';
import { TbBrandFramerMotion } from 'react-icons/tb';

const SkillTag: React.FC<{ name: string; icon: React.ReactNode; color?: string }> = ({ name, icon, color }) => (
  <div className="flex items-center gap-2 bg-dark-secondary px-4 py-3 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors duration-300">
    <span className="text-xl" style={{ color: color || 'white' }}>{icon}</span>
    <span className="text-gray-300 font-medium">{name}</span>
  </div>
);

const Services: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'white' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'SASS', icon: <FaSass />, color: '#CC6699' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { name: 'Vercel', icon: <SiVercel />, color: 'white' },
    { name: 'GitHub', icon: <FaGithub />, color: 'white' },
    { name: 'Axure', icon: <FaLayerGroup />, color: 'white' },
    { name: 'Motion', icon: <TbBrandFramerMotion />, color: '#FFD700' }, // Using Framer Motion icon as proxy or generic motion icon
  ];

  return (
    <section id="services" className="bg-dark text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('skills.title')} <span className="text-primary">{t('skills.titleHighlight')}</span></h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            {t('skills.description')}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <SkillTag key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
