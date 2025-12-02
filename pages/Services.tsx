import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Zap, Code, Lock, Brain, Shield, CheckCircle } from 'lucide-react';

export const Services: React.FC = () => {
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F2E77]/6 border border-[#2F2E77]/20 text-[11px] font-semibold tracking-[0.26em] uppercase text-[#2F2E77]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Our services
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                Comprehensive blockchain services
                <span className="block bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">
                  tailored to your business.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                From strategy and tokenization to platform engineering and security, Techvitta
                provides end‑to‑end blockchain expertise so your team can move from idea to
                production with confidence.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button showArrow size="lg" onClick={() => (window as any).navigateTo('/contact')}>
                  Book a consultation
                </Button>
                <span className="text-xs md:text-sm text-slate-500">
                  Flexible engagement models for pilots, platforms, and long‑term programs.
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F2E77]/15 to-accent-300/20 rounded-[28px] blur-3xl" />
              <div className="relative rounded-[24px] bg-white/95 border border-slate-200/80 shadow-[0_24px_60px_rgba(15,23,42,0.16)] p-6 flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  WHAT WE DELIVER
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Tokenization rails for real‑world assets and financial products.</li>
                  <li>• Custom blockchain platforms built for regulated environments.</li>
                  <li>• Web3 integration layers for wallets, dApps, and on‑chain data.</li>
                  <li>• Security, audits, and ongoing optimization for mission‑critical systems.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - premium */}
        <section className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                Services designed for every stage of your blockchain journey
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Whether you’re exploring first use‑cases or scaling a production platform, our
                modular services help you move quickly while staying secure and compliant.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Tokenization Solutions */}
              <div className="relative group rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=320&fit=crop&auto=format&q=80"
                    alt="Tokenization"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2F2E77]/8 font-medium text-[#2F2E77]">
                      <Zap className="w-3.5 h-3.5" />
                      Tokenization
                    </span>
                    <span className="uppercase tracking-[0.18em]">RWA</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Tokenization solutions</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Convert real‑world assets into digital tokens to unlock liquidity, fractional
                    ownership, and programmable compliance.
                  </p>
                  <ul className="text-slate-600 space-y-1.5 text-xs md:text-sm pt-1">
                    <li>✓ Asset digitization frameworks</li>
                    <li>✓ Smart contract design &amp; development</li>
                    <li>✓ Token economics &amp; lifecycle modeling</li>
                    <li>✓ Regulatory and KYC/AML alignment</li>
                  </ul>
                </div>
              </div>

              {/* Blockchain Development */}
              <div className="relative group rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=320&fit=crop&auto=format&q=80"
                    alt="Blockchain development"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2F2E77]/8 font-medium text-[#2F2E77]">
                      <Code className="w-3.5 h-3.5" />
                      Core platforms
                    </span>
                    <span className="uppercase tracking-[0.18em]">Build</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Blockchain development</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Design and build bespoke blockchain networks that match your security,
                    scalability, and governance requirements.
                  </p>
                  <ul className="text-slate-600 space-y-1.5 text-xs md:text-sm pt-1">
                    <li>✓ Private and consortium networks</li>
                    <li>✓ DApp and protocol development</li>
                    <li>✓ Consensus and network architecture</li>
                    <li>✓ Observability and DevOps enablement</li>
                  </ul>
                </div>
              </div>

              {/* Web3 Integration */}
              <div className="relative group rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=320&fit=crop&auto=format&q=80"
                    alt="Web3 integration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2F2E77]/8 font-medium text-[#2F2E77]">
                      <Lock className="w-3.5 h-3.5" />
                      Web3 integration
                    </span>
                    <span className="uppercase tracking-[0.18em]">UX</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Web3 integration</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Seamlessly integrate wallets, dApps, and DeFi protocols into your existing
                    products and infrastructure.
                  </p>
                  <ul className="text-slate-600 space-y-1.5 text-xs md:text-sm pt-1">
                    <li>✓ Wallet and key management integration</li>
                    <li>✓ Smart contract and protocol connectors</li>
                    <li>✓ DeFi and NFT experiences</li>
                    <li>✓ Cross‑chain and bridge solutions</li>
                  </ul>
                </div>
              </div>

              {/* Blockchain Consulting */}
              <div className="relative group rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=320&fit=crop&auto=format&q=80"
                    alt="Consulting"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2F2E77]/8 font-medium text-[#2F2E77]">
                      <Brain className="w-3.5 h-3.5" />
                      Advisory
                    </span>
                    <span className="uppercase tracking-[0.18em]">Strategy</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Blockchain consulting</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Strategic guidance to help you prioritize use‑cases, choose the right
                    technologies, and build an achievable roadmap.
                  </p>
                  <ul className="text-slate-600 space-y-1.5 text-xs md:text-sm pt-1">
                    <li>✓ Technology and vendor assessment</li>
                    <li>✓ Business case and ROI modeling</li>
                    <li>✓ Implementation planning &amp; governance</li>
                    <li>✓ Risk and compliance alignment</li>
                  </ul>
                </div>
              </div>

              {/* Smart Contract Development */}
              <div className="relative group rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=320&fit=crop&auto=format&q=80"
                    alt="Smart contracts"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2F2E77]/8 font-medium text-[#2F2E77]">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Smart contracts
                    </span>
                    <span className="uppercase tracking-[0.18em]">Code</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Smart contract development
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Design, implement, and maintain secure smart contracts that automate your
                    business logic on‑chain.
                  </p>
                  <ul className="text-slate-600 space-y-1.5 text-xs md:text-sm pt-1">
                    <li>✓ Contract architecture &amp; modeling</li>
                    <li>✓ Security reviews and auditing support</li>
                    <li>✓ Comprehensive testing &amp; deployment</li>
                    <li>✓ Ongoing maintenance and upgrades</li>
                  </ul>
                </div>
              </div>

              {/* Blockchain Security */}
              <div className="relative group rounded-2xl border border-slate-200/80 bg-white/95 shadow-[0_18px_50px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=320&fit=crop&auto=format&q=80"
                    alt="Blockchain security"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#2F2E77]/8 font-medium text-[#2F2E77]">
                      <Shield className="w-3.5 h-3.5" />
                      Security
                    </span>
                    <span className="uppercase tracking-[0.18em]">Trust</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Blockchain security</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    End‑to‑end security services that protect your networks, contracts, and users
                    from evolving threats.
                  </p>
                  <ul className="text-slate-600 space-y-1.5 text-xs md:text-sm pt-1">
                    <li>✓ Security audits and code reviews</li>
                    <li>✓ Vulnerability and penetration testing</li>
                    <li>✓ Runtime monitoring and incident response</li>
                    <li>✓ Best‑practice hardening and training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer showCTA={false} />
    </div>
  );
};
