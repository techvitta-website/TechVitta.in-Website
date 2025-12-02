import React, { useEffect, useRef } from 'react';
import { Button } from './Button';

const industries = [
  { name: 'Supply Chain', icon: '📦', description: 'Track & trace solutions', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=150&fit=crop&auto=format' },
  { name: 'Real Estate', icon: '🏢', description: 'Tokenization & fractional ownership', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=150&fit=crop&auto=format' },
  { name: 'Banking & Finance', icon: '💼', description: 'Secure transactions & lending', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=150&fit=crop&auto=format' },
  { name: 'Healthcare', icon: '🏥', description: 'Data integrity & traceability', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&h=150&fit=crop&auto=format&q=80' },
];

export const MarketTicker: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1.2; // pixels per frame (increased speed)

    const autoScroll = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset scroll when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    // Start auto-scrolling
    animationFrameId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  return (
    <section id="industries" className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="px-5 sm:px-10 py-10 md:py-14 bg-white/95 border border-slate-200/80 rounded-[32px] shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-2xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F2E77]/6 border border-[#2F2E77]/20 text-[11px] font-semibold tracking-[0.26em] uppercase text-[#2F2E77]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Trusted by industry leaders
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Brands already building
              <span className="block bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">
                on the Techvitta stack
              </span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              A cross‑section of industries where our blockchain infrastructure is running in
              production today.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4">
              <div className="text-2xl md:text-3xl font-bold text-[#2F2E77]">500+</div>
              <div className="text-xs md:text-sm font-medium text-slate-600 mt-1">Businesses</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4">
              <div className="text-2xl md:text-3xl font-bold text-[#2F2E77]">50+</div>
              <div className="text-xs md:text-sm font-medium text-slate-600 mt-1">Countries</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4">
              <div className="text-2xl md:text-3xl font-bold text-[#2F2E77]">99.9%</div>
              <div className="text-xs md:text-sm font-medium text-slate-600 mt-1">Platform uptime</div>
            </div>
          </div>

          {/* Horizontal industry strip */}
          <div className="relative">
            <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-[24px] z-10" />
            <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent rounded-r-[24px] z-10" />

            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 hover:scrollbar-thumb-slate-400 transition-colors"
              style={{ scrollBehavior: 'auto' }}
            >
              {/* Duplicate items for seamless loop */}
              {[...industries, ...industries].map((industry, idx) => (
                <div
                  key={`${industry.name}-${idx}`}
                  className="flex-shrink-0 w-[320px] group bg-white/95 rounded-2xl border border-slate-200/70 shadow-[0_14px_40px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_55px_rgba(15,23,42,0.2)] hover:border-[#2F2E77]/40 transition-all duration-400 overflow-hidden scroll-reveal"
                  style={{ transitionDelay: `${0.1 + idx * 0.05}s` }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-slate-800 shadow-sm">
                      <span className="text-lg">{industry.icon}</span>
                      <span>{industry.name}</span>
                    </div>
                  </div>
                  <div className="px-4 py-4 text-sm text-slate-600">
                    {industry.description}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="secondary" showArrow onClick={() => (window as any).navigateTo('/contact')}>
                Explore our solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
