import React from 'react';
import { Navbar } from './components/Navbar';
import { Features } from './components/Features';
import { MarketTicker } from './components/MarketTicker';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { Star, Zap, Shield, Globe, Blocks, TrendingUp, Lock } from 'lucide-react';

export function App() {
  const [selectedIndustry, setSelectedIndustry] = React.useState('Supply Chain');
  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const heroParticles = [
    { position: 'top-8 left-[10%]', size: 'w-32 h-32', gradient: 'from-brand-500/35 via-brand-400/20 to-transparent', delay: '0s' },
    { position: 'top-1/4 right-[8%]', size: 'w-24 h-24', gradient: 'from-accent-400/30 via-white/15 to-transparent', delay: '0.8s' },
    { position: 'bottom-14 left-[18%]', size: 'w-28 h-28', gradient: 'from-brand-400/25 via-brand-300/15 to-transparent', delay: '1.6s' },
    { position: 'bottom-20 right-[16%]', size: 'w-36 h-36', gradient: 'from-brand-600/30 via-brand-500/20 to-transparent', delay: '2.2s' },
    { position: 'top-16 right-1/3', size: 'w-20 h-20', gradient: 'from-white/30 via-brand-300/15 to-transparent', delay: '3s' },
  ];
  const heroNodes = [
    { position: 'top-[20%] left-[32%]', delay: '0s' },
    { position: 'top-[32%] right-[30%]', delay: '0.4s' },
    { position: 'bottom-[28%] left-[42%]', delay: '0.8s' },
    { position: 'bottom-[24%] right-[34%]', delay: '1.2s' },
    { position: 'top-[14%] right-[24%]', delay: '1.6s' },
    { position: 'bottom-[18%] left-[28%]', delay: '2s' },
  ];

  // Shared premium card styles - bolder, more "premium" look
  const premiumCardBase =
    'group relative bg-gradient-to-br from-[#f5f7ff] via-white to-[#eef3ff] backdrop-blur-2xl rounded-[32px] border border-brand-100 shadow-[0_24px_60px_rgba(15,23,42,0.18)] hover:shadow-[0_32px_80px_rgba(15,23,42,0.26)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden hover-lift before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/70 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none';

  const industryCardBase = `${premiumCardBase} p-8 md:p-10 scroll-reveal ring-1 ring-slate-100/60`;
  const industryImageClass =
    'w-full h-40 mb-4 rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200/50 group-hover:ring-brand-200/70 transition-all relative';

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
      hero.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
      hero.style.setProperty('--spotlight-opacity', '0.45');
    };

    const handlePointerLeave = () => {
      hero.style.setProperty('--spotlight-opacity', '0');
    };

    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      
      <main className="relative overflow-hidden bg-[#f7f9ff] transition-colors duration-700 main-canvas">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-10 w-[34rem] h-[34rem] bg-gradient-to-br from-brand-300/20 via-white/10 to-accent-200/30 blur-[140px] opacity-70 animate-soft-pulse"></div>
          <div className="absolute -bottom-32 -left-16 w-[40rem] h-[40rem] bg-gradient-to-br from-accent-200/25 via-white/20 to-brand-200/20 blur-[150px] opacity-80 animate-soft-pulse" style={{animationDelay: '2s'}}></div>
          <div className="guideline-line" style={{left: '18%'}}></div>
          <div className="guideline-line" style={{right: '22%', animationDelay: '1.5s'}}></div>
        </div>
        <div className="relative z-10">
        {/* Hero Section - Ultra Premium */}
        <section
          ref={heroRef}
          className="pt-28 pb-24 md:pt-36 md:pb-40 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50/40 interactive-spotlight"
        >
          {/* Premium Animated Background Layers */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            {/* Animated gradient orbs */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-brand-500/30 via-brand-400/20 to-accent-400/15 rounded-full blur-[140px] opacity-70 -z-10 translate-x-1/3 -translate-y-1/4 animate-float animate-gradient"></div>
            <div className="absolute top-1/3 left-0 w-[900px] h-[900px] bg-gradient-to-br from-accent-400/25 to-brand-500/15 rounded-full blur-[140px] opacity-60 -z-10 -translate-x-1/3 animate-float animate-gradient" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-brand-300/20 to-navy-900/10 rounded-full blur-[140px] opacity-50 -z-10 animate-float animate-gradient" style={{animationDelay: '4s'}}></div>
            
            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-[0.02] animate-fade-in" style={{
              backgroundImage: `linear-gradient(to right, rgb(41, 40, 118) 1px, transparent 1px), linear-gradient(to bottom, rgb(41, 40, 118) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}></div>
            
            {/* Shimmer effect */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-white/25 via-transparent to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/30 to-white/80 pointer-events-none"></div>
            {heroParticles.map((particle, idx) => (
              <div
                key={`particle-${idx}`}
                className={`absolute ${particle.position} ${particle.size} rounded-full bg-gradient-to-br ${particle.gradient} blur-[90px] opacity-70 pointer-events-none animate-soft-pulse`}
                style={{ animationDelay: particle.delay }}
              ></div>
            ))}
            {heroNodes.map((node, idx) => (
              <span
                key={`node-${idx}`}
                className={`absolute ${node.position} w-3 h-3 rounded-full bg-brand-500/80 shadow-[0_0_20px_rgba(41,40,118,0.4)] animate-pulse`}
                style={{ animationDelay: node.delay }}
              ></span>
            ))}

            {/* Floating micro cards */}
            <div className="floating-card floating-card-1">
              <Zap className="w-4 h-4 text-brand-500" />
              <span className="text-xs font-semibold text-slate-600">Realtime sync</span>
            </div>
            <div className="floating-card floating-card-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wide text-black">Security</span>
                <span className="text-xs font-semibold text-black">Zero trust ready</span>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                {/* Trust Badge */}
                <div className="flex justify-start mb-8 animate-fade-in-up">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-brand-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500 animate-scale-bounce" style={{animationDelay: `${i * 0.1}s`}} />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">Trusted by 500+ Businesses</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
    
                {/* Main Heading */}
                <div className="text-left mb-10">
                  <h1 className="font-display text-6xl md:text-7xl xl:text-8xl font-black text-slate-900 tracking-[-0.03em] leading-[0.95] animate-fade-in-up">
                    Welcome to{' '}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-brand-600 via-brand-500 via-accent-400 to-brand-700 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                        Techvitta
                      </span>
                      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-accent-400 to-brand-600 rounded-full opacity-60 animate-pulse"></span>
                    </span>
                  </h1>
                  
                  <p className="font-display text-2xl md:text-3xl font-semibold max-w-3xl mt-6 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-navy-800 leading-[1.2] tracking-tight animate-fade-in-up animate-delay-200 animate-gradient bg-[length:200%_auto]">
                    Making Blockchain Accessible and Practical for Your Business
                  </p>
                  
                  <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-medium tracking-wide animate-fade-in-up animate-delay-300">
                    Transform your business with cutting-edge blockchain technology and Web3 solutions that drive innovation and growth
                  </p>
                </div>
    
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-5 animate-fade-in-up animate-delay-400">
                  <Button 
                    size="lg" 
                    showArrow 
                    className="group relative btn-shine text-white font-semibold bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 px-10 py-4 rounded-full shadow-[0_25px_50px_rgba(41,40,118,0.45)] border border-brand-400/60 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Get started now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => (window as any).navigateTo('/about')} 
                    className="btn-shine px-10 py-4 rounded-full border border-brand-200/50 bg-white/80 text-brand-600 font-semibold shadow-[0_20px_45px_rgba(13,26,54,0.2)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
    
              {/* Creative Stats / Visual */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-400/30 to-accent-300/20 rounded-[36px] blur-3xl opacity-80 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-white backdrop-blur-2xl rounded-[36px] border border-brand-400/50 shadow-[0_35px_80px_-40px_rgba(41,40,118,0.6)] p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { title: 'Enterprise Launches', value: '120+' },
                      { title: 'Web3 Integrations', value: '80+' },
                      { title: 'Tokenized Assets', value: '250+' },
                      { title: 'Ecosystem Partners', value: '60+' }
                    ].map((item, idx) => (
                      <div key={item.title} className="p-6 rounded-3xl bg-white/90 border border-brand-100/60 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <p className="text-sm uppercase tracking-widest text-slate-500">{item.title}</p>
                        <p className="text-3xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent mt-3">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 bg-white/15 rounded-[28px] border border-white/40 p-6 flex flex-col gap-3 shadow-inner">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-brand-600 font-bold">AI</div>
                      <div>
                        <p className="text-sm text-white/70">Next-gen integration</p>
                        <p className="text-base font-semibold text-white">AI + Blockchain Mesh</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Unified orchestration layer for Web3, enterprise systems, and AI agents with real-time observability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions Pillar – Ultra Premium UI */}
        <section className="pt-24 pb-28 relative overflow-hidden bg-gradient-to-br from-white via-brand-50/80 to-[#f3f4ff]">
          {/* Soft premium background */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(41,40,118,0.1) 1px, transparent 1px)`,
              backgroundSize: '54px 54px',
            }}
          ></div>
          <div className="absolute -top-40 -right-32 w-[520px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(47,46,119,0.35),transparent_60%)] blur-3xl opacity-80"></div>
          <div className="absolute -bottom-56 -left-20 w-[620px] h-[620px] bg-[radial-gradient(circle_at_bottom,_rgba(114,192,255,0.35),transparent_60%)] blur-3xl opacity-80"></div>
          <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-80"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col gap-14">
              {/* Top label row */}
              <div className="flex flex-wrap items-center justify-between gap-5 scroll-reveal">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-brand-100/90 shadow-[0_12px_34px_rgba(15,23,42,0.12)]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2F2E77] text-white text-xs font-semibold shadow-[0_8px_18px_rgba(47,46,119,0.6)]">
                    ✦
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-slate-600">
                    Solutions
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                  <div className="flex -space-x-2">
                    <span className="inline-flex h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-brand-300 to-brand-600"></span>
                    <span className="inline-flex h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-accent-200 to-brand-400"></span>
                    <span className="inline-flex h-7 w-7 rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-500"></span>
                  </div>
                  <span>Trusted modules powering live production deployments</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-12 items-start">
              {/* Left copy block */}
              <div className="space-y-7 scroll-reveal">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                    Enterprise-ready
                    <span className="block bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">
                      blockchain solution stack
                    </span>
                  </h2>
                  <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
                    Curated modules that cover the full lifecycle of your Web3 journey – from
                    tokenizing real-world assets to deploying secure platforms and integrating
                    user-facing Web3 experiences. Move from proof-of-concept to production with
                    opinionated reference architectures, security-reviewed smart contract templates,
                    and orchestration layers designed for regulated environments.
                  </p>
                  <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed">
                    Whether you are launching a new tokenized product, modernizing legacy rails, or
                    embedding Web3 capabilities into existing applications, Techvitta provides the
                    building blocks, governance tooling, and observability needed to scale with
                    confidence.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-md">
                  {[
                    { value: '500+', label: 'Deployments' },
                    { value: '60+', label: 'Global partners' },
                    { value: '99.9%', label: 'Platform uptime' },
                    { value: '24/7', label: 'Enterprise support' },
                  ].map((stat, idx) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white/95 backdrop-blur-xl border border-brand-100/80 px-4 py-3.5 shadow-[0_18px_40px_rgba(15,23,42,0.16)] scroll-reveal"
                      style={{ transitionDelay: `${0.3 + idx * 0.05}s` }}
                    >
                      <div className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-[11px] md:text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right cards block */}
              <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-7 scroll-reveal">
                {[
                  {
                    icon: Blocks,
                    title: 'Tokenization Solutions',
                    description:
                      'Convert real-world assets into digital tokens with seamless integration and institutional-grade liquidity rails.',
                    image:
                      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop&auto=format',
                    delay: '0.05s',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Blockchain Platform Development',
                    description:
                      'Design and launch secure, scalable blockchain platforms tailored to your regulatory and compliance landscape.',
                    image:
                      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&auto=format',
                    delay: '0.12s',
                  },
                  {
                    icon: Globe,
                    title: 'Web3 Application Integration',
                    description:
                      'Embed Web3 flows into existing products with smooth UX, single sign-on, and audited smart contract templates.',
                    image:
                      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&auto=format',
                    delay: '0.18s',
                  },
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`group relative flex flex-col rounded-[28px] bg-gradient-to-br from-white/98 via-white/90 to-brand-50/90 backdrop-blur-2xl border border-brand-100/80 shadow-[0_30px_80px_rgba(15,23,42,0.25)] hover:shadow-[0_40px_110px_rgba(15,23,42,0.35)] overflow-hidden transform hover:-translate-y-3 hover:scale-[1.015] transition-all duration-500 scroll-reveal ${
                        idx === 2 ? 'md:col-span-2' : ''
                      }`}
                      style={{ transitionDelay: item.delay }}
                    >
                      {/* Accent gradient edge */}
                      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#2F2E77] via-accent-400 to-brand-600 opacity-90"></div>

                      {/* Glow ring on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute -inset-24 bg-[conic-gradient(from_220deg,rgba(47,46,119,0.5),transparent,rgba(244,210,255,0.45),transparent,rgba(47,46,119,0.7))] blur-3xl animate-spin-slow"></div>
                      </div>

                      {/* Image */}
                      <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent"></div>

                        {/* Top label + step index */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/12 px-2.5 py-1 backdrop-blur-md border border-white/30 text-[10px] font-semibold uppercase tracking-wide text-white">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                            Core module
                          </span>
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-[11px] font-semibold text-brand-700 shadow-sm">
                            0{idx + 1}
                          </span>
                        </div>

                        {/* Icon chip */}
                        <div className="absolute -bottom-6 left-5">
                          <div className="inline-flex items-center justify-center rounded-2xl bg-white shadow-[0_20px_48px_rgba(15,23,42,0.5)] p-3 border border-brand-100/80">
                            <IconComponent className="w-6 h-6 text-[#2F2E77]" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 px-5 pt-8 pb-6 flex flex-col">
                        <h3 className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight mb-3">
                          {item.title}
                        </h3>
                        <p className="text-[13px] md:text-sm text-slate-600 leading-relaxed flex-1">
                          {item.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                          <span className="inline-flex items-center gap-1">
                            <Lock className="w-3.5 h-3.5 text-emerald-500" />
                            Enterprise-grade
                          </span>
                          <span className="inline-flex items-center gap-1 text-[#2F2E77] group-hover:text-brand-700 transition-colors">
                            Explore module
                            <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
                              →
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
            </div>
          </div>
        </section>

    
        {/* Business Partnership Section - Ultra Premium */}
        <section
          id="partnership-section"
          className="py-28 md:py-36 bg-gradient-to-br from-white via-[#f4f5ff] to-brand-50/40 relative overflow-hidden scroll-reveal"
        >
          {/* Background */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(47,46,119,0.08) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          ></div>
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[960px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(47,46,119,0.32),transparent_65%)] blur-3xl opacity-80"></div>
          <div className="absolute -bottom-60 right-[-10%] w-[720px] h-[520px] bg-[radial-gradient(circle_at_bottom,_rgba(114,192,255,0.35),transparent_60%)] blur-3xl opacity-80"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 scroll-reveal">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-brand-100/90 shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2F2E77] text-white text-xs font-semibold shadow-[0_8px_18px_rgba(47,46,119,0.7)]">
                    🤝
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-600">
                    Partnerships
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                  Build with a partner,
                  <span className="block bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">
                    not just a vendor
                  </span>
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-600 max-w-md md:text-right">
                From discovery workshops to co-creation sprints and long-term enablement, Techvitta
                embeds with your team to de-risk blockchain and Web3 initiatives and ship faster with
                confidence.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-7 md:gap-8">
              {/* Business Partnership */}
              <div className="group relative scroll-reveal">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#2F2E77]/18 via-accent-400/12 to-transparent opacity-0 group-hover:opacity-100 blur-3xl pointer-events-none transition-opacity duration-500"></div>
                <div className="relative rounded-[28px] bg-gradient-to-br from-white/98 via-white/92 to-brand-50/90 border border-[#2F2E77]/20 shadow-[0_26px_70px_rgba(15,23,42,0.22)] overflow-hidden backdrop-blur-2xl">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[#2F2E77] opacity-95"></div>
                  <div className="absolute -top-16 right-[-40px] w-40 h-40 bg-gradient-to-br from-brand-200/50 to-transparent rounded-full blur-3xl opacity-70"></div>

                  <div className="p-6 pb-2">
                    <div className="relative h-44 rounded-2xl overflow-hidden ring-1 ring-slate-200/60 shadow-[0_20px_55px_rgba(15,23,42,0.35)]">
                      <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=380&fit=crop&auto=format"
                        alt="Business Partnership"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md border border-white/30">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                          Strategic program
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pt-4 pb-6 space-y-3">
                    <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-[#2F2E77]">
                      Business Partnership
                    </h3>
                    <h4 className="text-sm md:text-base font-semibold text-slate-700">
                      Access Innovative Solutions
                    </h4>
                    <p className="text-[13px] md:text-sm text-slate-600 leading-relaxed">
                      Gain access to our suite of innovative blockchain and Web3 solutions, bundled as
                      ready-to-launch accelerators tailored to your industry and compliance needs.
                    </p>
                    <div className="flex items-center justify-between pt-2 text-[11px] font-semibold text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Co-innovation roadmap
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#2F2E77] group-hover:text-brand-700 transition-colors">
                        Explore partnership
                        <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Collaboration */}
              <div className="group relative scroll-reveal" style={{ transitionDelay: '0.08s' }}>
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-500/18 via-accent-400/10 to-transparent opacity-0 group-hover:opacity-100 blur-3xl pointer-events-none transition-opacity duration-500"></div>
                <div className="relative rounded-[28px] bg-gradient-to-br from-white/98 via-white/92 to-brand-50/90 border border-[#2F2E77]/20 shadow-[0_26px_70px_rgba(15,23,42,0.22)] overflow-hidden backdrop-blur-2xl">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[#2F2E77] opacity-95"></div>
                  <div className="absolute -top-18 right-[-30px] w-40 h-40 bg-gradient-to-br from-accent-300/60 to-transparent rounded-full blur-3xl opacity-80 animate-bounce-slow"></div>

                  <div className="p-6 pb-2">
                    <div className="relative h-44 rounded-2xl overflow-hidden ring-1 ring-slate-200/60 shadow-[0_20px_55px_rgba(15,23,42,0.35)]">
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=380&fit=crop&auto=format"
                        alt="Team Collaboration"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md border border-white/30">
                          Embedded experts
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pt-4 pb-6 space-y-3">
                    <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-[#2F2E77]">
                      Team Collaboration
                    </h3>
                    <h4 className="text-sm md:text-base font-semibold text-slate-700">
                      Leverage Our Expertise
                    </h4>
                    <p className="text-[13px] md:text-sm text-slate-600 leading-relaxed">
                      Benefit from our deep expertise in blockchain technology and tokenization through
                      co-located teams, solution architects, and hands-on delivery squads.
                    </p>
                    <div className="flex items-center justify-between pt-2 text-[11px] font-semibold text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Co-delivery squads
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#2F2E77] group-hover:text-brand-700 transition-colors">
                        Meet the team
                        <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Web3 Integration */}
              <div className="group relative scroll-reveal" style={{ transitionDelay: '0.16s' }}>
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-brand-500/16 via-accent-300/12 to-transparent opacity-0 group-hover:opacity-100 blur-3xl pointer-events-none transition-opacity duration-500"></div>
                <div className="relative rounded-[28px] bg-gradient-to-br from-white/98 via-white/92 to-brand-50/90 border border-[#2F2E77]/20 shadow-[0_26px_70px_rgba(15,23,42,0.22)] overflow-hidden backdrop-blur-2xl">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[#2F2E77] opacity-95"></div>
                  <div className="absolute -top-20 right-[-40px] w-44 h-44 bg-gradient-to-br from-brand-200/60 to-transparent rounded-full blur-3xl opacity-80"></div>

                  <div className="p-6 pb-2">
                    <div className="relative h-44 rounded-2xl overflow-hidden ring-1 ring-slate-200/60 shadow-[0_20px_55px_rgba(15,23,42,0.35)]">
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=380&fit=crop&auto=format"
                        alt="Web3 Integration"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md border border-white/30">
                          Web3 rollout
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pt-4 pb-6 space-y-3">
                    <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-[#2F2E77]">
                      Web3 Integration
                    </h3>
                    <h4 className="text-sm md:text-base font-semibold text-slate-700">
                      Seamless Integration
                    </h4>
                    <p className="text-[13px] md:text-sm text-slate-600 leading-relaxed">
                      Experience seamless integration of our solutions into your existing systems with
                      opinionated UX, identity, and compliance patterns for production rollout.
                    </p>
                    <div className="flex items-center justify-between pt-2 text-[11px] font-semibold text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        From pilot to scale
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#2F2E77] group-hover:text-brand-700 transition-colors">
                        Explore playbook
                        <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain for Business Section - Distinct Premium Layout */}
        <section
          id="blockchain-section"
          className="py-28 md:py-36 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden scroll-reveal"
        >
          {/* Subtle background */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(47,46,119,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(47,46,119,0.06) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          ></div>
          <div className="absolute -top-40 right-[-15%] w-[720px] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(47,46,119,0.18),transparent_65%)] blur-3xl opacity-90"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] gap-14 items-start">
              {/* Left narrative block */}
              <div className="space-y-8 scroll-reveal">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F2E77]/6 border border-[#2F2E77]/20 text-[11px] font-semibold tracking-[0.28em] uppercase text-[#2F2E77]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Blockchain for Business
                </div>

                <div className="space-y-4">
                  <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                    A shared trust layer
                    <span className="block bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">
                      for multi-party ecosystems
                    </span>
                  </h1>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                    Trust is the fundamental component of a multi-party exchange in modern commerce.
                    Establishing that trust takes time and losing it can be costly. By using blockchain
                    to broker trust, businesses can mitigate risk, reduce costs, and improve
                    efficiencies without centralizing control in a single institution.
                  </p>
                </div>

                {/* Horizontal timeline-style chips */}
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-3 text-[11px] md:text-xs text-slate-500">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                    <span className="tracking-[0.26em] uppercase">Typical blockchain patterns</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['Shared data', 'Shared rules', 'Shared history'].map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.12)] border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F2E77]"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right vertical step cards */}
              <div className="space-y-5 scroll-reveal">
                {[
                  {
                    label: '01',
                    title: 'Data Security',
                    description:
                      'Multiple organizations maintain and manipulate the same data with complete transparency and security.',
                    detail:
                      'Ideal for highly regulated environments that require provable integrity and granular access controls.',
                  },
                  {
                    label: '02',
                    title: 'Single Source of Truth',
                    description:
                      'Intermediaries are required to control the single source of truth across systems.',
                    detail:
                      'Blockchain becomes the coordination backbone, simplifying reconciliation and reducing operational drag.',
                  },
                  {
                    label: '03',
                    title: 'Manual Verification',
                    description:
                      'Processes involve high value, manual verification steps that are error-prone.',
                    detail:
                      'Smart contracts encode business logic so approvals, checks, and status changes are transparent and automated.',
                  },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="relative flex gap-4 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_18px_45px_rgba(15,23,42,0.14)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.22)] hover:-translate-y-1 transition-all duration-300 p-5 md:p-6"
                    style={{ transitionDelay: `${idx * 0.06}s` }}
                  >
                    {/* Step pill */}
                    <div className="flex flex-col items-center pt-1">
                      <div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#2F2E77] text-white text-xs font-semibold shadow-[0_10px_26px_rgba(47,46,119,0.7)]">
                        {item.label}
                      </div>
                      {idx !== 2 && (
                        <div className="mt-2 w-px flex-1 bg-gradient-to-b from-[#2F2E77]/30 via-slate-300/70 to-transparent hidden md:block"></div>
                      )}
                    </div>

                    {/* Text content */}
                    <div className="space-y-2">
                      <h3 className="text-base md:text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-[13px] md:text-sm text-slate-600">{item.description}</p>
                      <p className="text-[11px] md:text-xs text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features />

        {/* Industries & Use Cases Section */}
        <section
          id="industries-section"
          className="py-24 bg-gradient-to-b from-slate-50 via-brand-50/20 to-slate-50 relative overflow-hidden scroll-reveal"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F2E77]/6 border border-[#2F2E77]/20 text-[11px] font-semibold tracking-[0.26em] uppercase text-[#2F2E77] mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Industries &amp; Use-Cases
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-700 to-navy-900 bg-clip-text text-transparent scroll-reveal">
                Built for the markets you operate in
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                Choose an industry to see how Techvitta applies blockchain to real-world problems –
                from supply chains to finance and beyond.
              </p>
            </div>

            {/* Industry tabs */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              {['Supply Chain', 'Real Estate', 'Banking & Finance', 'Healthcare', 'Energy', 'Luxury Goods'].map(
                (industry, idx) => (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 ${
                      selectedIndustry === industry
                        ? 'bg-[#2F2E77] text-white border-[#2F2E77] shadow-[0_12px_30px_rgba(15,23,42,0.25)]'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-[#2F2E77]/50 hover:text-[#2F2E77] hover:shadow-[0_10px_26px_rgba(15,23,42,0.18)]'
                    }`}
                    style={{ transitionDelay: `${idx * 0.05}s` }}
                  >
                    {industry}
                  </button>
                )
              )}
            </div>

            {/* Dynamic intro for selected industry */}
            <div className="max-w-3xl mx-auto mb-10 text-center text-sm md:text-base text-slate-600">
              {selectedIndustry === 'Supply Chain' && (
                <p>
                  Increase end-to-end visibility, prevent counterfeits, and make recalls faster with
                  product identities and events anchored on-chain.
                </p>
              )}
              {selectedIndustry === 'Real Estate' && (
                <p>
                  Unlock fractional ownership, new funding models, and more liquid property markets
                  through asset tokenization and programmable workflows.
                </p>
              )}
              {selectedIndustry === 'Banking & Finance' && (
                <p>
                  Modernize lending, cross-border payments, and securitization with tokenized assets,
                  instant settlement, and shared ledgers between counterparties.
                </p>
              )}
              {selectedIndustry === 'Healthcare' && (
                <p>
                  Track critical products, trials, and devices with tamper-evident records that improve
                  patient safety and regulatory reporting.
                </p>
              )}
              {selectedIndustry === 'Energy' && (
                <p>
                  Tokenize energy assets and carbon credits to enable transparent tracking, new
                  marketplaces, and more efficient peer-to-peer trading.
                </p>
              )}
              {selectedIndustry === 'Luxury Goods' && (
                <p>
                  Prove authenticity, support fractional ownership, and streamline resale with
                  verifiable digital identities for high-value items.
                </p>
              )}
            </div>

            {/* Active industry content */}
            {selectedIndustry === 'Supply Chain' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className={industryCardBase}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className={industryImageClass}>
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop&auto=format" alt="Increasing transparency" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                    </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Increasing transparency</h4>
                  <p className="text-slate-600 leading-relaxed">Track and Trace product movements throughout the supply chain with a unique digital identity on chain</p>
                  </div>
                </div>
                <div className={`${premiumCardBase} p-8`} style={{transitionDelay: '0.1s'}}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&h=300&fit=crop&auto=format&q=80&sat=-15" alt="Prevent counterfeit" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Prevent counterfeit</h4>
                  <p className="text-slate-600 leading-relaxed">Tokenize the products, making them tamper-proof and easily verifiable</p>
                </div>
                <div className={`${premiumCardBase} p-8`} style={{transitionDelay: '0.2s'}}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=500&h=300&fit=crop&auto=format&q=80" alt="Manage product recalls" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Manage product recalls</h4>
                  <p className="text-slate-600 leading-relaxed">Unique digital identity, making it easy to identify and trace products in the event of a recall</p>
                </div>
                <div className={`${premiumCardBase} p-8`} style={{transitionDelay: '0.3s'}}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=500&h=300&fit=crop&auto=format&q=80" alt="Reduce fraud" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Reduce fraud</h4>
                  <p className="text-slate-600 leading-relaxed">Reduce fraud by ensuring all transactions are recorded on the blockchain and can't be tampered</p>
                </div>
              </div>
            </div>
            )}
            
            {selectedIndustry === 'Real Estate' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=500&h=300&fit=crop&auto=format" alt="Enhanced Liquidity" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Enhanced Liquidity</h4>
                  <p className="text-slate-600 leading-relaxed">Converts property ownership into digital tokens, allowing for quick buying and selling on secondary markets, increasing liquidity and flexibility.</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop&auto=format" alt="Fractional Ownership" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Fractional Ownership</h4>
                  <p className="text-slate-600 leading-relaxed">Enables investors to purchase fractional shares of high-value properties, lowering entry barriers and allowing investment in prime real estate with less capital.</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop&auto=format" alt="Raise Funds" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Raise Funds</h4>
                  <p className="text-slate-600 leading-relaxed">Broadens investment access, allowing individuals from diverse financial backgrounds to participate in real estate markets, promoting inclusivity</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop&auto=format" alt="Property Management" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Property Management</h4>
                  <p className="text-slate-600 leading-relaxed">Utilizes smart contracts to streamline property management and transactions, reducing intermediaries and minimizing errors and fraud.</p>
                </div>
              </div>
            </div>
            )}
            
            {selectedIndustry === 'Banking & Finance' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500&h=300&fit=crop&auto=format&q=80" alt="Lending" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Lending</h4>
                  <p className="text-slate-600 leading-relaxed">Create digital loan assets that could be easily traded on secondary markets. Reduce the cost of funding and a new sources of liquidity</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=500&h=300&fit=crop&auto=format&q=80" alt="Cross-border payments" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Cross-border payments</h4>
                  <p className="text-slate-600 leading-relaxed">Make cross-border payments more efficient and secure. Eliminate the need for intermediaries and reduce transaction times & costs</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&h=300&fit=crop&auto=format" alt="Securitization of assets" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Securitization of assets</h4>
                  <p className="text-slate-600 leading-relaxed">Tokenize and securitize various assets, such as real estate, commodities, and even receivables</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://s44650.pcdn.co/wp-content/uploads/2023/07/trade-finance-2021-1200-1612375664-1.jpg" alt="Trade finance" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Trade finance</h4>
                  <p className="text-slate-600 leading-relaxed">Improve transparency in their operations, such as in trade finance or supply chain financing</p>
                </div>
              </div>
            </div>
            )}
            
            {selectedIndustry === 'Healthcare' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop&auto=format&q=80" alt="Digital identities" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Digital identities</h4>
                  <p className="text-slate-600 leading-relaxed">Create digital identities for healthcare products, ensuring traceability and transparancy</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop&auto=format&q=80" alt="Prevent counterfeit" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Prevent counterfeit</h4>
                  <p className="text-slate-600 leading-relaxed">Track and trace clinical trial data, enhancing transparency and accountability</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&h=300&fit=crop&auto=format&q=80" alt="Medical device management" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Medical device management</h4>
                  <p className="text-slate-600 leading-relaxed">Enhance tracking and tracing of medical devices throughout the supply chain, ensuring quality and safety</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&h=300&fit=crop&auto=format" alt="Drug supply chain management" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Drug supply chain management</h4>
                  <p className="text-slate-600 leading-relaxed">Track and trace drugs throughout the supply chain, reducing counterfeit drugs circulation and enhancing patient safety</p>
                </div>
              </div>
            </div>
            )}
            
            {selectedIndustry === 'Energy' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&h=300&fit=crop&auto=format" alt="Carbon Credits" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Carbon Credits</h4>
                  <p className="text-slate-600 leading-relaxed">Our solution can tokenize carbon credits, making it easier to trade and offset carbon emissions</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&h=300&fit=crop&auto=format&q=80" alt="Energy Consumption tracking" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Energy Consumption tracking</h4>
                  <p className="text-slate-600 leading-relaxed">Our solution can enable the tracking and tracing of energy consumption and production, reducing energy waste and costs.</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=500&h=300&fit=crop&auto=format&q=80" alt="Peer-to-Peer Energy Trading" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Peer-to-Peer Energy Trading</h4>
                  <p className="text-slate-600 leading-relaxed">Allows consumers to buy and sell excess energy directly with each other through digital tokens, promoting local energy markets and increasing efficiency in energy distribution</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://gomining.ghost.io/content/images/2025/10/blog-2.webp" alt="Liquidity for Energy Assets" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Liquidity for Energy Assets</h4>
                  <p className="text-slate-600 leading-relaxed">Converts energy assets into digital tokens, facilitating easier trading and investment, and providing more liquidity in the traditionally static energy market.</p>
                </div>
              </div>
            </div>
            )}
            
            {selectedIndustry === 'Luxury Goods' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&auto=format" alt="Enhanced Liquidity" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Enhanced Liquidity</h4>
                  <p className="text-slate-600 leading-relaxed">Convert ownership of luxury goods into digital tokens, enabling easier buying and selling on secondary markets, thus increasing liquidity for typically illiquid assets.</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&auto=format" alt="Fractional Ownership" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Fractional Ownership</h4>
                  <p className="text-slate-600 leading-relaxed">Allows investors to purchase fractional shares of luxury goods, such as rare watches or high-end art, making it more accessible to own a part of these valuable items</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://cyberpedia.reasonlabs.com/IMG/authenticity%20verification.jpg" alt="Authenticity Verification" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Authenticity Verification</h4>
                  <p className="text-slate-600 leading-relaxed">Utilize blockchain technology to provide immutable records of a luxury good's history and authenticity, ensuring buyers and sellers can trust the provenance of high-value items.</p>
                </div>
                <div className={`${premiumCardBase} p-8`}>
                  <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop&auto=format" alt="Simplified Transfer and Trade" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-700 mb-3">Simplified Transfer and Trade</h4>
                  <p className="text-slate-600 leading-relaxed">Streamline the process of transferring and trading luxury goods through smart contracts, reducing the need for intermediaries and lowering transaction costs.</p>
                </div>
              </div>
            </div>
            )}
          </div>
        </section>

        {/* Industries Showcase */}
        <MarketTicker />

        {/* FAQ Section */}
        <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}