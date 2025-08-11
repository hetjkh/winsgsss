import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram } from 'lucide-react';
import LogoWord from '../assets/Wings & Wheels logo word.png';
import { ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'GALLERY', path: '/gallery' },
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
    <>
      {/* Top Contact Bar */}
      <div className="bg-black text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Left Section - Social Media Icons */}
          <div className="flex items-center space-x-3">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-400 transition-colors" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-400 transition-colors" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-pink-400 transition-colors" />
            <MessageCircle className="w-4 h-4 cursor-pointer hover:text-green-400 transition-colors" />
          </div>
          
          {/* Middle Section - Phone Numbers */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Dubai: +971 4 556 1050</span>
            </div>
            <div className="hidden sm:block text-gray-400">|</div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Abu Dhabi: +971 2 639 4277</span>
            </div>
          </div>
          
          {/* Right Section - Email */}
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-red-400" />
            <span>holidays@satgurutravel.com</span>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
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
                  className="relative text-white text-base font-medium cursor-pointer transition-all duration-300 hover:text-blue-400 hover:-translate-y-0.5 group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp and Contact Button - Desktop */}
          {showContactButton && (
            <div 
              className={`hidden lg:flex items-center space-x-4 transition-all duration-1400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center space-x-2 text-white">
                <span className="text-sm font-medium">WHATSAPP</span>
          
                <ChevronDown className="w-5 h-5 text-black-400" />
              </div>
              <Button
                onClick={() => navigate('/contact')}
                className="rounded-full bg-transparent border border-white hover:bg-white hover:text-black h-10 px-6 text-white text-sm font-medium transition-all duration-300 hover:scale-105"
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
          <div className="lg:hidden mt-4 pb-4 bg-black/90 rounded-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white text-lg font-medium cursor-pointer transition-all duration-300 hover:text-blue-400 px-4 py-2"
                >
                  {item.name}
                </div>
              ))}
              {/* WhatsApp in Mobile Menu */}
              <div className="flex items-center justify-center space-x-2 text-white px-4 py-2">
                <span className="text-lg font-medium">WHATSAPP</span>
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              {showContactButton && (
                <div className="px-4 pt-2">
                  <Button
                    onClick={() => {
                      navigate('/contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="rounded-full bg-transparent border border-white hover:bg-white hover:text-black w-full h-12 text-white text-lg font-medium transition-all duration-300"
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
    </>
  );
};

export default Navbar;