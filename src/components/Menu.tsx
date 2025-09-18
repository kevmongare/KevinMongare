import { useState, useEffect } from 'react';
import MenuList from '../data/Menu';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Menu = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Social media data
  const socialNetworks = [
    { name: 'GitHub', url: 'https://github.com/kevmongare', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kevin-mongare-58b960200/', icon: <FaLinkedin /> },
    { name: 'Twitter', url: 'https://x.com/kevin_mong86626', icon: <FaTwitter /> }
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          currentSection = section.getAttribute('id') ?? '';
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const handleMenuItemClick = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <header className="hidden md:flex fixed left-0 w-24 h-screen z-50 bg-navy/80 backdrop-blur-lg shadow-xl border-r border-green-bright/10">
        <div className="flex flex-col items-center justify-between h-full py-10 px-2">
          
          {/* Logo */}
          <div className="flex justify-center">
            <div className="bg-green-bright rounded-full w-12 h-12 flex items-center justify-center shadow-md mb-8">
              <img 
                src="./kev.png" 
                alt="Logo" 
                className="w-10 h-10 rounded-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex items-center">
            <ul className="space-y-5">
              {MenuList.map((item, index) => (
                <li key={index} className="flex justify-center">
                  <a
                    href={`#${item.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick(item.id);
                    }}
                    className={`flex flex-col items-center group transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-green-bright scale-110' 
                        : 'text-slate hover:text-green-bright hover:scale-105'
                    }`}
                  > 
                    <span className="text-xs font-mono mb-1 opacity-70 group-hover:opacity-100">
                      {item.number}
                    </span>
                    <span className="text-sm tracking-wide">{item.name}</span>
                    <span className="h-0.5 w-6 bg-green-bright mt-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            {socialNetworks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate text-slate hover:text-navy hover:bg-green-bright transition-all duration-300 shadow-md"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-navy-light rounded-lg shadow-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-6 relative transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
          <span className={`absolute block w-full h-0.5 bg-green-bright transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-1/2' : 'top-0'}`}></span>
          <span className={`absolute block w-full h-0.5 bg-green-bright top-1/2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute block w-full h-0.5 bg-green-bright transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-1/2' : 'top-full'}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-navy/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-10 transform transition-all duration-500 ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        
        {/* Logo */}
        <div className="bg-green-bright rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
          <img 
            src="./kev.png" 
            alt="Logo" 
            className="w-16 h-16 rounded-full grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-8 text-center">
            {MenuList.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick(item.id);
                  }}
                  className={`text-2xl font-medium tracking-wide ${
                    activeSection === item.id 
                      ? 'text-green-bright' 
                      : 'text-slate hover:text-green-bright'
                  } transition-colors duration-300`}
                >
                  <span className="font-mono text-green-bright mr-2">{item.number}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="flex space-x-6 mt-10">
          {socialNetworks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate text-slate hover:text-navy hover:bg-green-bright transition-all duration-300 shadow-md text-xl"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
