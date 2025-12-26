import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { jobRoles } from '../data/jobRoles';

interface NavbarProps {
  fixed?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ fixed = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  // Update current path when it changes
  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    // Listen for popstate events (back/forward buttons)
    window.addEventListener('popstate', handlePathChange);
    
    // Check path periodically (for programmatic navigation)
    const interval = setInterval(handlePathChange, 100);
    
    return () => {
      window.removeEventListener('popstate', handlePathChange);
      clearInterval(interval);
    };
  }, []);

  // Update dropdown position when it opens
  useEffect(() => {
    if (isDropdownOpen && dropdownButtonRef.current) {
      const rect = dropdownButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX
      });
    }
  }, [isDropdownOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.careers-dropdown-container') && !target.closest('.careers-dropdown-menu')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  const handleNavClick = (path: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (currentPath === path) {
      // If already on the page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to new page
      (window as any).navigateTo(path);
      setCurrentPath(path);
    }
    // Close mobile menu if open
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/' || currentPath === '';
    }
    return currentPath === path;
  };

  return (
  <div className={fixed ? `fixed top-2 sm:top-3 md:top-4 lg:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-0.5rem)] sm:w-[calc(100%-1rem)] md:w-[95%] lg:w-[90%] xl:w-[86%] 2xl:w-[80%] z-50` : `absolute top-2 sm:top-3 md:top-4 lg:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-0.5rem)] sm:w-[calc(100%-1rem)] md:w-[95%] lg:w-[90%] xl:w-[86%] 2xl:w-[80%] z-50`}>
  <nav className="bg-[#2F2E77] backdrop-blur-2xl shadow-[0_18px_45px_rgba(15,23,42,0.65)] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] xl:rounded-[40px] overflow-visible border border-white/10">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 relative" style={{ zIndex: 1 }}>
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20 lg:h-24 gap-1 sm:gap-2 md:gap-3 lg:gap-4 relative" style={{ zIndex: 1 }}>
          {/* Logo */}
          <a href="/" className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 cursor-pointer group flex-shrink-0 min-w-0" onClick={handleNavClick('/')}>
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-xl group-hover:shadow-brand-400/60 group-hover:scale-105 transition-all duration-300 overflow-hidden ring-1 ring-white/20 bg-white/5 backdrop-blur flex-shrink-0">
              <img alt="Techvitta Logo" className="w-full h-full object-cover" src="/logo.jpg" />
            </div>
            <div className="flex flex-col justify-center min-w-0 max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-none">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white tracking-tight sm:tracking-wider uppercase drop-shadow-[0_4px_18px_rgba(15,23,42,0.75)] leading-tight truncate">TECHVITTA</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-white/95 tracking-wide sm:tracking-wider uppercase leading-tight mt-0.5 ml-0.5 sm:ml-1 md:ml-1.5 truncate">INNOVATIONS PVT LTD</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 2xl:space-x-2 flex-shrink min-w-0 overflow-visible">
            <a
              href="#"
              onClick={handleNavClick('/')}
              className={`px-1.5 xl:px-2 2xl:px-3 py-1.5 xl:py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent text-xs xl:text-sm 2xl:text-base whitespace-nowrap ${
                isActive('/')
                  ? 'text-white font-semibold border-brand-200'
                  : 'text-slate-100 hover:text-white hover:border-white/70'
              }`}
            >
              Home
            </a>
            <a
              href="#"
              onClick={handleNavClick('/about')}
              className={`px-1.5 xl:px-2 2xl:px-3 py-1.5 xl:py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent text-xs xl:text-sm 2xl:text-base whitespace-nowrap ${
                isActive('/about')
                  ? 'text-white font-semibold border-brand-200'
                  : 'text-slate-100 hover:text-white hover:border-white/70'
              }`}
            >
              About us
            </a>
            <a
              href="#"
              onClick={handleNavClick('/products')}
              className={`px-1.5 xl:px-2 2xl:px-3 py-1.5 xl:py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent text-xs xl:text-sm 2xl:text-base whitespace-nowrap ${
                isActive('/products')
                  ? 'text-white font-semibold border-brand-200'
                  : 'text-slate-100 hover:text-white hover:border-white/70'
              }`}
            >
              Our products
            </a>
            <a
              href="#"
              onClick={handleNavClick('/services')}
              className={`px-1.5 xl:px-2 2xl:px-3 py-1.5 xl:py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent text-xs xl:text-sm 2xl:text-base whitespace-nowrap ${
                isActive('/services')
                  ? 'text-white font-semibold border-brand-200'
                  : 'text-slate-100 hover:text-white hover:border-white/70'
              }`}
            >
              Services
            </a>
            <a
              href="#"
              onClick={handleNavClick('/blogs')}
              className={`px-1.5 xl:px-2 2xl:px-3 py-1.5 xl:py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent text-xs xl:text-sm 2xl:text-base whitespace-nowrap ${
                isActive('/blogs')
                  ? 'text-white font-semibold border-brand-200'
                  : 'text-slate-100 hover:text-white hover:border-white/70'
              }`}
            >
              Blogs
            </a>
            <a
              href="#"
              onClick={handleNavClick('/contact')}
              className={`px-1.5 xl:px-2 2xl:px-3 py-1.5 xl:py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent text-xs xl:text-sm 2xl:text-base whitespace-nowrap ${
                isActive('/contact')
                  ? 'text-white font-semibold border-brand-200'
                  : 'text-slate-100 hover:text-white hover:border-white/70'
              }`}
            >
              Contact us
            </a>
            <div className="relative careers-dropdown-container" style={{ zIndex: 1000 }}>
              <div className="flex items-center gap-0.5 xl:gap-1">
                <a
                  href="#"
                  onClick={handleNavClick('/careers')}
                  className={`px-1.5 xl:px-2 2xl:px-3 py-1.5 xl:py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent text-xs xl:text-sm 2xl:text-base whitespace-nowrap ${
                    isActive('/careers')
                      ? 'text-white font-semibold border-brand-200'
                      : 'text-slate-100 hover:text-white hover:border-white/70'
                  }`}
                >
                  Careers
                </a>
                <button
                  ref={dropdownButtonRef}
                  type="button"
                  className={`px-0.5 xl:px-1 py-1.5 xl:py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent flex items-center ${
                    isActive('/careers')
                      ? 'text-white font-semibold border-brand-200'
                      : 'text-slate-100 hover:text-white hover:border-white/70'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <ChevronDown className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Dropdown Menu - Rendered with Portal for proper z-index */}
              {isDropdownOpen && createPortal(
                <div 
                  className="careers-dropdown-menu fixed w-64 bg-[#2F2E77] backdrop-blur-2xl shadow-[0_18px_45px_rgba(15,23,42,0.65)] rounded-xl border border-white/10 animate-fade-in-up"
                  style={{ 
                    zIndex: 9999,
                    top: `${dropdownPosition.top}px`,
                    left: `${dropdownPosition.left}px`
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm text-slate-300 border-b border-white/10">
                      Current Openings:
                    </div>
                    {jobRoles.map((role) => (
                      <a 
                        key={role.id} 
                        href="#" 
                        className="block px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition-colors duration-200 cursor-pointer" 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsDropdownOpen(false);
                          handleNavClick('/careers')(e);
                        }}
                      >
                        {role.title}
                      </a>
                    ))}
                  </div>
                </div>,
                document.body
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden xl:block flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleNavClick('/contact')}
              className="btn-shine text-navy-900 font-semibold bg-gradient-to-r from-white/95 via-slate-200/85 to-brand-200/70 px-3 2xl:px-6 py-2 2xl:py-2.5 rounded-full shadow-[0_16px_40px_rgba(13,26,54,0.6)] border border-white/50 hover:bg-gradient-to-r hover:from-white/95 hover:via-slate-200/85 hover:to-brand-200/70 text-xs 2xl:text-sm whitespace-nowrap"
            >
              Get started now
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden relative z-10 flex-shrink-0">
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white hover:text-brand-100 hover:bg-white/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

          {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-brand-800 via-brand-900 to-navy-950 backdrop-blur-2xl border-t border-brand-500/60 shadow-xl absolute w-full animate-in slide-in-from-top duration-200 rounded-b-2xl sm:rounded-b-3xl top-full left-0 right-0 mt-1 sm:mt-2 z-[60]">
          <div className="px-4 pt-4 pb-6 space-y-1 overflow-y-auto max-h-[calc(100vh-140px)]">
            <a
              href="#"
              onClick={handleNavClick('/')}
              className={`block px-1 py-3 transition-all duration-200 cursor-pointer border-b border-transparent ${
                isActive('/')
                  ? 'text-white font-semibold border-white'
                  : 'text-slate-100 font-medium hover:border-white/60'
              }`}
            >
              Home
            </a>
            <a
              href="#"
              onClick={handleNavClick('/about')}
              className={`block px-1 py-3 transition-all duration-200 cursor-pointer border-b border-transparent ${
                isActive('/about')
                  ? 'text-white font-semibold border-white'
                  : 'text-slate-100 font-medium hover:border-white/60'
              }`}
            >
              About us
            </a>
            <a
              href="#"
              onClick={handleNavClick('/products')}
              className={`block px-1 py-3 transition-all duration-200 cursor-pointer border-b border-transparent ${
                isActive('/products')
                  ? 'text-white font-semibold border-white'
                  : 'text-slate-100 font-medium hover:border-white/60'
              }`}
            >
              Our products
            </a>
            <a
              href="#"
              onClick={handleNavClick('/services')}
              className={`block px-1 py-3 transition-all duration-200 cursor-pointer border-b border-transparent ${
                isActive('/services')
                  ? 'text-white font-semibold border-white'
                  : 'text-slate-100 font-medium hover:border-white/60'
              }`}
            >
              Services
            </a>
            <a
              href="#"
              onClick={handleNavClick('/blogs')}
              className={`block px-1 py-3 transition-all duration-200 cursor-pointer border-b border-transparent ${
                isActive('/blogs')
                  ? 'text-white font-semibold border-white'
                  : 'text-slate-100 font-medium hover:border-white/60'
              }`}
            >
              Blogs
            </a>
            <a
              href="#"
              onClick={handleNavClick('/contact')}
              className={`block px-1 py-3 transition-all duration-200 cursor-pointer border-b border-transparent ${
                isActive('/contact')
                  ? 'text-white font-semibold border-white'
                  : 'text-slate-100 font-medium hover:border-white/60'
              }`}
            >
              Contact us
            </a>
            <div className="relative">
              <div className="flex justify-between items-center w-full">
                <a
                  href="#"
                  onClick={handleNavClick('/careers')}
                  className={`block px-1 py-3 transition-all duration-200 cursor-pointer border-b border-transparent w-full text-left ${
                    isActive('/careers')
                      ? 'text-white font-semibold border-white'
                      : 'text-slate-100 font-medium hover:border-white/60'
                  }`}
                >
                  Careers
                </a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileDropdownOpen(!isMobileDropdownOpen);
                  }}
                  className={`block px-1 py-3 transition-all duration-200 cursor-pointer border-b border-transparent flex justify-center items-center ${
                    isActive('/careers')
                      ? 'text-white font-semibold border-white'
                      : 'text-slate-100 font-medium hover:border-white/60'
                  }`}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Mobile Dropdown Menu */}
              {isMobileDropdownOpen && (
                <div className="ml-4 pl-4 border-l border-white/20 mt-2 pb-2 relative z-[100] animate-in fade-in slide-in-from-left-2 duration-200">
                  <div className="text-xs text-slate-400 mb-2">
                    Current Openings:
                  </div>
                  {jobRoles.map((role) => (
                    <a 
                      key={role.id} 
                      href="#" 
                      className="block px-2 py-2 text-sm text-slate-200 hover:bg-white/10 transition-colors duration-200" 
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileDropdownOpen(false);
                        handleNavClick('/careers')(e);
                      }}
                    >
                      {role.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-4">
              <Button
                variant="ghost"
                onClick={handleNavClick('/contact')}
                className="w-full btn-shine text-navy-900 font-semibold bg-gradient-to-r from-white/95 via-slate-200/85 to-brand-200/70 px-6 py-3 rounded-full shadow-[0_16px_40px_rgba(13,26,54,0.6)] border border-white/50 hover:bg-gradient-to-r hover:from-white/95 hover:via-slate-200/85 hover:to-brand-200/70"
              >
                Get started now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  </div>
  );
};