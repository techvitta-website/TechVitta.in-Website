import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';
import { Button } from './Button';

interface FooterProps {
  ctaType?: 'default' | 'newsletter';
  showCTA?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ ctaType = 'default', showCTA = true }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#050816] text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        {showCTA && (
          <div className="bg-gradient-to-r from-[#2F2E77] via-navy-800 to-navy-900 border border-navy-700/70 rounded-[32px] px-6 sm:px-10 py-10 md:py-14 mb-16 relative overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.8)]">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),transparent_60%)]" />
            <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-gradient-to-tr from-brand-300/40 via-white/10 to-transparent blur-3xl opacity-70" />
            <div className="relative z-10">
              {ctaType === 'newsletter' ? (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Stay updated
                  </h2>
                  <p className="text-sm md:text-base text-slate-200/90 mb-8 max-w-2xl">
                    Get the latest insight on blockchain, tokenization, and Web3 delivered straight to
                    your inbox.
                  </p>
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 border border-white/25 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition-all duration-200"
                    />
                    <Button
                      variant="ghost"
                      size="lg"
                      type="submit"
                      className="btn-shine w-full sm:w-auto text-navy-900 font-semibold bg-gradient-to-r from-white via-slate-100 to-brand-200 px-8 py-3 rounded-full shadow-[0_18px_40px_rgba(13,26,54,0.55)] border border-white/70"
                    >
                      Subscribe
                    </Button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="text-center lg:text-left space-y-4 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/25 text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Ready to get started
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      Launch your next blockchain initiative with Techvitta.
                    </h2>
                    <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                      Speak with our team to scope your use-case, understand timelines, and design a
                      rollout that fits your organization.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={() => (window as any).navigateTo('/contact')}
                      className="btn-shine w-full sm:w-auto text-navy-900 font-semibold bg-gradient-to-r from-white via-slate-100 to-brand-200 px-10 py-4 rounded-full shadow-[0_22px_55px_rgba(13,26,54,0.6)] border border-white/70"
                    >
                      Contact sales
                    </Button>
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={() => (window as any).navigateTo('/services')}
                      className="w-full sm:w-auto text-white font-semibold bg-transparent border border-white/40 px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
                    >
                      View services
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-navy-900/80 pb-10">
          {/* Brand / summary */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold text-lg">Techvitta Innovations Pvt Ltd</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Enterprise-grade blockchain and Web3 solutions for organizations that need security,
              transparency, and room to innovate.
            </p>
            <div className="flex space-x-3 mt-2">
              <a
                href="mailto:support@techvitta.in"
                className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center hover:bg-brand-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-white/30"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/techvitta.in?igsh=MW9zbHdwdXNjYXp5bg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center hover:bg-brand-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-white/30"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/techvitta-innovations-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center hover:bg-brand-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-white/30"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm md:text-base mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Blockchain Development
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Web3 Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Smart Contracts
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Asset Tokenization
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  DeFi Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  NFT Development
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm md:text-base mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-slate-400 hover:text-white transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h5 className="text-white font-semibold text-sm md:text-base mb-4">Contact</h5>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white mt-0.5" />
                <a
                  href="https://maps.google.com/?q=TECHVITTA,+3rd+Floor,+Plot+no+19,+Opp+to+Cyber+pearl,+Hitech+City,+Madhapur,+Hyderabad,+Telangana,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug hover:text-white transition-colors"
                >
                  TECHVITTA, 3rd Floor, Plot no 19, Opp to Cyber pearl, Hitech City, Madhapur,
                  Hyderabad, Telangana, India
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <a
                  href="mailto:support@techvitta.in"
                  className="hover:text-white transition-colors"
                >
                  support@techvitta.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                <a
                  href="tel:+919035151944"
                  className="hover:text-white transition-colors"
                >
                  +91 (903) 515-1944
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-slate-500">
          <p className="mb-3 md:mb-0">
            &copy; 2025 Techvitta Innovations Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <a href="#terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#cookies" className="hover:text-slate-200 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};