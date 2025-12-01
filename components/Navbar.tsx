import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

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

  // Handle click outside to close mobile menu
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(target)) {
        setIsOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
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
  <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[96%] sm:w-[92%] md:w-[86%] lg:w-[80%] z-50 bg-[#2F2E77] backdrop-blur-2xl shadow-[0_18px_45px_rgba(15,23,42,0.65)] rounded-[52px] md:rounded-[72px] lg:rounded-[88px] border border-white/10 ${isOpen ? 'overflow-visible' : 'overflow-hidden'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-xl group-hover:shadow-brand-400/60 group-hover:scale-105 transition-all duration-300 overflow-hidden ring-1 ring-white/20 bg-white/5 backdrop-blur">
              <img src="/logo.jpg" alt="Techvitta Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-3xl font-black text-white tracking-wider uppercase drop-shadow-[0_4px_18px_rgba(15,23,42,0.75)]">
              TECHVITTA
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="#"
              onClick={handleNavClick('/')}
              className={`px-3 py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent ${
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
              className={`px-3 py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent ${
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
              className={`px-3 py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent ${
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
              className={`px-3 py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent ${
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
              className={`px-3 py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent ${
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
              className={`px-3 py-2 transition-all duration-200 cursor-pointer font-medium border-b-2 border-transparent ${
                isActive('/contact')
                  ? 'text-white font-semibold border-brand-200'
                  : 'text-slate-100 hover:text-white hover:border-white/70'
              }`}
            >
              Contact us
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              variant="ghost"
              size="sm"
              className="btn-shine text-navy-900 font-semibold bg-gradient-to-r from-white/95 via-slate-200/85 to-brand-200/70 px-6 py-2.5 rounded-full shadow-[0_16px_40px_rgba(13,26,54,0.6)] border border-white/50 hover:bg-gradient-to-r hover:from-white/95 hover:via-slate-200/85 hover:to-brand-200/70"
            >
              Get started now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-10">
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="p-2 text-white hover:text-brand-100 hover:bg-white/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

          {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-brand-800 via-brand-900 to-navy-950 backdrop-blur-2xl border-t border-brand-500/60 shadow-xl absolute top-full left-0 right-0 w-full mt-2 rounded-b-[32px] overflow-hidden z-50 transition-all duration-300 ease-in-out transform opacity-100">
          <div className="px-4 pt-4 pb-6 space-y-1">
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
            <div className="pt-4">
              <Button
                variant="ghost"
                className="w-full btn-shine text-navy-900 font-semibold bg-gradient-to-r from-white/95 via-slate-200/85 to-brand-200/70 px-6 py-3 rounded-full shadow-[0_16px_40px_rgba(13,26,54,0.6)] border border-white/50 hover:bg-gradient-to-r hover:from-white/95 hover:via-slate-200/85 hover:to-brand-200/70"
              >
                Get started now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};