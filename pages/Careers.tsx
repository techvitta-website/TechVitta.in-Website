import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CareerCarousel } from '../components/CareerCarousel';
import { Lightbulb, Target, Users, Award, GraduationCap } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      
      <main className="relative overflow-hidden">
        {/* Hero Section - premium */}
        <section className="pt-32 pb-20 md:pb-24 relative bg-gradient-to-b from-white via-[#f3f4ff] to-white">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 right-0 w-[520px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(47,46,119,0.35),transparent_65%)] blur-3xl opacity-80" />
            <div className="absolute -bottom-32 left-0 w-[520px] h-[520px] bg-[radial-gradient(circle_at_bottom,_rgba(148,163,253,0.32),transparent_60%)] blur-3xl opacity-70" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                Fit into the <span className="bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">TechVitta</span> crew
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                We're looking for curious minds and creative spirits to join our team. 
              </p>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#21206a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              How to Apply
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Follow these simple steps to join our team
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-4 md:p-8 lg:p-12 border border-white/50">
            <div className="space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row items-start">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-100 flex items-center justify-center mr-0 sm:mr-6 mb-2 sm:mb-0 mt-1">
                  <span className="text-brand-700 font-bold text-sm md:text-base">1</span>
                </div>
                <div className="sm:flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Send Your Application</h3>
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    Send us your resume and portfolio (or relevant work samples) to <a href="mailto:hr@techvitta.in" className="text-brand-600 font-semibold hover:underline">hr@techvitta.in</a> with the position title in the subject line.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-100 flex items-center justify-center mr-0 sm:mr-6 mb-2 sm:mb-0 mt-1">
                  <span className="text-brand-700 font-bold text-sm md:text-base">2</span>
                </div>
                <div className="sm:flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">Application Review</h3>
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    We review applications on a rolling basis and will reach out within two weeks if there's a potential fit.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/30 text-center">
              <p className="text-slate-600 mb-6">
                Have questions? Feel free to reach out to us.
              </p>
              <a 
                href="mailto:hr@techvitta.in"
                className="inline-block bg-brand-600 text-white font-semibold py-4 px-8 rounded-full hover:bg-brand-700 transition-all hover:shadow-lg"
              >
                Contact HR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-12 md:py-20 bg-slate-50 overflow-visible md:overflow-visible">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 w-full overflow-visible md:overflow-visible">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
              Current Openings
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 md:mb-20 px-2">
              Join our team and be a part us
            </p>
          </div>
          
          <div className="flex justify-center overflow-visible md:overflow-visible w-full relative">
            <CareerCarousel />
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-brand-50/20 to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-br from-brand-200/35 to-accent-400/15 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/4 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-8 md:mb-12">
            <div className="md:w-full lg:w-1/3 space-y-4">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                Why Work With Us?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                At TechVitta, we believe people grow when they are trusted, trained, and challenged. We provide a collaborative environment where ideas matter and learning never stops.
              </p>
            </div>

            <div className="hidden md:block md:w-full lg:w-2/3 h-full">
              <div className="h-full w-px bg-gradient-to-b from-[#2F2E77] via-slate-300 to-transparent mx-auto opacity-60" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="relative group">
              <div className="relative pt-8 p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] transition-all duration-300">
                <Lightbulb className="w-7 h-7 text-[#2F2E77] mb-3" />
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Hands-on experience</h3>
                <p className="text-xs text-slate-600">
                  With real projects
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative pt-8 p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] transition-all duration-300">
                <Users className="w-7 h-7 text-[#2F2E77] mb-3" />
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Mentorship from experts</h3>
                <p className="text-xs text-slate-600">
                  Industry professionals
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative pt-8 p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] transition-all duration-300">
                <Target className="w-7 h-7 text-[#2F2E77] mb-3" />
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Learning-first culture</h3>
                <p className="text-xs text-slate-600">
                  Open mindset
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative pt-8 p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] transition-all duration-300">
                <Award className="w-7 h-7 text-[#2F2E77] mb-3" />
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Clear growth paths</h3>
                <p className="text-xs text-slate-600">
                  For performers
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="relative pt-8 p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] transition-all duration-300">
                <GraduationCap className="w-7 h-7 text-[#2F2E77] mb-3" />
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Paid role opportunities</h3>
                <p className="text-xs text-slate-600">
                  For interns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;