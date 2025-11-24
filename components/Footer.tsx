import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-dark text-gray-300">
      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t('footer.connect')}
          </h2>
          <a href="mailto:orellanarojas.2321@gmail.com" className="bg-primary text-black font-semibold rounded-full px-6 py-3 flex items-center gap-2">
            {t('hero.hireMe')} <FiArrowUpRight />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-700 pt-12">
          <div>
            <a href="#home" className="flex items-center gap-2 text-white text-xl font-bold mb-4">
              <span className="bg-primary rounded-full p-2 h-8 w-8 flex items-center justify-center text-black font-extrabold text-sm">MO</span>
              <span className="text-white">Miryan</span>
            </a>
            <p className="text-sm text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-primary"><FaFacebookF /></a>
                <a href="#" className="hover:text-primary"><FaTwitter /></a>
                <a href="#" className="hover:text-primary"><FaInstagram /></a> */}
              <a href="https://www.linkedin.com/in/miryan-orellana/" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><FaLinkedinIn /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-primary">{t('footer.nav.home')}</a></li>
              <li><a href="#about" className="hover:text-primary">{t('footer.nav.about')}</a></li>
              <li><a href="#services" className="hover:text-primary">{t('footer.nav.skills')}</a></li>
              <li><a href="#experience" className="hover:text-primary">{t('footer.nav.experience')}</a></li>
              <li><a href="#education" className="hover:text-primary">{t('footer.nav.education')}</a></li>
              {/* <li><a href="#portfolio" className="hover:text-primary">Project</a></li>
              <li><a href="#blog" className="hover:text-primary">Blog</a></li> */}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+51942550310" className="hover:text-primary">+51 942 550 310</a></li>
              <li><a href="mailto:orellanarojas.2321@gmail.com" className="hover:text-primary">orellanarojas.2321@gmail.com</a></li>
              <li><span className="text-gray-400">Lima, Perú</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">{t('footer.latestInfo')}</h4>
            <form className="flex">
              <input type="email" placeholder={t('footer.emailPlaceholder')} className="bg-dark-secondary text-white w-full p-3 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-primary text-black p-3 rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center md:flex md:justify-between text-sm text-gray-500">
          <p>{t('footer.copyright')}</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
