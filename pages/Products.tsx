import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Blocks, TrendingUp, Globe } from 'lucide-react';

export const Products: React.FC = () => {
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F2E77]/6 border border-[#2F2E77]/20 text-[11px] font-semibold tracking-[0.26em] uppercase text-[#2F2E77]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Our products
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                Innovative blockchain products
                <span className="block bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">
                  built for real business impact.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                Innovative blockchain solutions designed to solve real business problems—tokenization,
                platform orchestration, and Web3 integration wrapped in enterprise‑grade security.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button showArrow size="lg">
                  Explore solutions
                </Button>
                <span className="text-xs md:text-sm text-slate-500">
                  Modular, interoperable, and ready to plug into your existing stack.
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F2E77]/15 to-accent-300/20 rounded-[28px] blur-3xl" />
              <div className="relative rounded-[24px] bg-white/95 border border-slate-200/80 shadow-[0_24px_60px_rgba(15,23,42,0.16)] p-6 flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  PRODUCT STACK
                </p>
                <div className="space-y-3 text-sm text-slate-700">
                  <p>Tokenization rails for real‑world assets.</p>
                  <p>Configurable blockchain platforms for regulated industries.</p>
                  <p>Web3 integration layers for wallets, dApps, and user journeys.</p>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-3 text-xs text-slate-600">
                  <div>
                    <p className="font-semibold text-slate-900">Compliant</p>
                    <p>Designed with governance and auditability in mind.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Modular</p>
                    <p>Use what you need today, extend tomorrow.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Cloud‑ready</p>
                    <p>Deploy across your preferred infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section - premium product tiles */}
        <section className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2F2E77]/6 border border-[#2F2E77]/20 text-[11px] font-semibold tracking-[0.26em] uppercase text-[#2F2E77]">
                Product suite
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                A focused suite of enterprise‑ready products
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Each product is designed to work on its own or as part of a complete stack—so you can
                start small and expand as your strategy matures.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Tokenization */}
              <div className="relative group rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
                <div className="h-36 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=260&fit=crop&auto=format&q=80"
                    alt="Tokenization"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2F2E77]/8 font-medium text-[#2F2E77]">
                      <Blocks className="w-3.5 h-3.5" />
                      Core module
                    </span>
                    <span className="uppercase tracking-[0.18em]">RWA</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Asset tokenization engine
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Convert real‑world assets into programmable digital tokens with built‑in controls,
                    compliance hooks, and full lifecycle management.
                  </p>
                </div>
              </div>

              {/* Platform development */}
              <div className="relative group rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
                <div className="h-36 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=260&fit=crop&auto=format&q=80"
                    alt="Blockchain platform development"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2F2E77]/8 font-medium text-[#2F2E77]">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Platform layer
                    </span>
                    <span className="uppercase tracking-[0.18em]">Core</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Enterprise blockchain platform
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A configurable ledger platform with governance, permissioning, and observability
                    built‑in—ready for mission‑critical workloads.
                  </p>
                </div>
              </div>

              {/* Web3 integration */}
              <div className="relative group rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
                <div className="h-36 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=260&fit=crop&auto=format&q=80"
                    alt="Web3 integration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2F2E77]/8 font-medium text-[#2F2E77]">
                      <Globe className="w-3.5 h-3.5" />
                      Experience layer
                    </span>
                    <span className="uppercase tracking-[0.18em]">Web3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Web3 integration layer
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Connect wallets, identity, and dApps to your existing products using secure
                    middleware and polished, enterprise‑grade user journeys.
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
