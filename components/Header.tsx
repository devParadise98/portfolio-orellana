import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: t('footer.nav.home'), href: '#home' },
    { name: t('footer.nav.about'), href: '#about' },
    { name: t('footer.nav.skills'), href: '#services' },
    { name: t('footer.nav.experience'), href: '#experience' },
    { name: t('footer.nav.education'), href: '#education' },
    { name: t('footer.nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // FIX: Cast querySelector result to HTMLElement to access offsetTop and offsetHeight properties.
      const sections = navLinks.map(link => document.querySelector<HTMLElement>(link.href));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveLink(`#${section.id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // navLinks dependency removed to avoid re-running on every render, but ideally should be handled if language changes. 
  // Actually, if language changes, component re-renders, navLinks is recreated, and we want the text to update.
  // The scroll logic doesn't need to re-run on language change necessarily, but active link highlighting might need to persist.

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4">
        <nav className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-black'}`}>
          <a href="#home" className="flex items-center gap-2 text-white text-xl font-bold">
            <span className="bg-primary rounded-full p-2 h-8 w-8 flex items-center justify-center text-black font-extrabold text-sm">MO</span>
            <span className="text-white">Miryan</span>
          </a>
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href} // Changed key to href as name changes with language
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeLink === link.href ? 'bg-primary text-black' : 'text-white hover:text-primary'
                  }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            {/* Mobile menu button can be added here */}
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;