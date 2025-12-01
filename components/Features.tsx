import React from 'react';
import { ShieldCheck, Zap, Building2, Code } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description: "Your business data and blockchain infrastructure are protected by industry-leading security protocols and best practices, ensuring trust and reliability."
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Get your blockchain solutions up and running quickly with our streamlined development process and proven methodologies."
  },
  {
    icon: Building2,
    title: "Industry Expertise",
    description: "Deep understanding of various industries enables us to deliver tailored blockchain solutions that address your specific business challenges."
  },
  {
    icon: Code,
    title: "Custom Solutions",
    description: "Every business is unique. We build custom blockchain platforms and integrations that perfectly fit your operational needs and goals."
  }
];

export const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-[0.35] -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(47,46,119,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>
      <div className="absolute -top-40 right-[-10%] w-[520px] h-[360px] bg-[radial-gradient(circle_at_top,_rgba(47,46,119,0.18),transparent_65%)] blur-3xl opacity-80 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F2E77]/6 border border-[#2F2E77]/20 text-[11px] font-semibold tracking-[0.26em] uppercase text-[#2F2E77] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Why Choose Techvitta
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Everything you need to
            <span className="block bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">
              launch and scale with confidence
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Enterprise-grade security, fast delivery, deep domain expertise, and tailored platforms –
            all orchestrated so your blockchain initiatives move from idea to production smoothly.
          </p>
        </div>

        {/* 2×2 premium tiles with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/95 border border-slate-200/80 shadow-[0_18px_50px_rgba(15,23,42,0.16)] hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)] hover:-translate-y-1.5 transition-all duration-400 scroll-reveal"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Image header */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={
                    index === 0
                      ? 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&auto=format'
                      : index === 1
                      ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&auto=format'
                      : index === 2
                      ? 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop&auto=format'
                      : 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&auto=format'
                  }
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-11 h-11 rounded-2xl bg-white/90 flex items-center justify-center shadow-[0_12px_30px_rgba(15,23,42,0.3)]">
                    <feature.icon className="w-6 h-6 text-[#2F2E77]" />
                  </div>
                  <span className="hidden sm:inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    {index === 0 && 'Security'}
                    {index === 1 && 'Speed'}
                    {index === 2 && 'Expertise'}
                    {index === 3 && 'Custom Fit'}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="px-6 py-6 md:px-7 md:py-7 space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};