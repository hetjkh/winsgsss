import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LogoWord from '../assets/Wings & Wheels logo word.png';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACT US', path: '/contact' }
];

const Navbar = ({ showContactButton = true }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <img
              onClick={() => navigate('/')}
              className="h-12 sm:h-16 transition-all duration-300 cursor-pointer hover:scale-105"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              }}
              onMouseEnter={(e) => {
                e.target.style.filter = 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))';
              }}
              onMouseLeave={(e) => {
                e.target.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))';
              }}
              alt="Wings wheels logo"
              src={LogoWord}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div 
              className={`flex space-x-8 transition-all duration-1200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {navItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="relative text-white text-lg xl:text-xl font-medium cursor-pointer transition-all duration-300 hover:text-blue-300 hover:-translate-y-0.5 group"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 rounded-full transition-all duration-300 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button - Desktop */}
          {showContactButton && (
            <div 
              className={`hidden lg:block transition-all duration-1400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Button
                onClick={() => navigate('/contact')}
                variant="outline"
                className="rounded-full border-2 border-white h-12 sm:h-14 w-32 sm:w-40 text-white text-base sm:text-lg font-bold bg-transparent hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  boxShadow: '0 0 0 rgba(255,255,255,0)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 25px rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 0 0 rgba(255,255,255,0)';
                }}
              >
                CONTACT
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              onClick={toggleMobileMenu}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white text-lg font-medium cursor-pointer transition-all duration-300 hover:text-blue-300 px-4 py-2"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                >
                  {item.name}
                </div>
              ))}
              {showContactButton && (
                <div className="px-4 pt-2">
                  <Button
                    onClick={() => {
                      navigate('/contact');
                      setIsMobileMenuOpen(false);
                    }}
                    variant="outline"
                    className="rounded-full border-2 border-white w-full h-12 text-white text-lg font-bold bg-transparent hover:bg-white hover:text-black transition-all duration-300"
                  >
                    CONTACT
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;