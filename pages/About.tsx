import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Steps } from '../components/Steps';
import { Lightbulb, Target, Users, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      
      <main className="page-shell">
        <div className="page-shell-content">
        {/* Hero Section */}
        <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-brand-50/30 to-slate-50">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-200/40 to-accent-400/20 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/4 animate-pulse"></div>
          <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-accent-400/30 to-brand-300/20 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-brand-100/40 to-navy-900/10 rounded-full blur-3xl opacity-40 -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
              About <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 bg-clip-text text-transparent">Techvitta Innovations Pvt Ltd</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold max-w-4xl mx-auto mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-navy-800 leading-relaxed">
              Making Blockchain Accessible and Practical for Your Business
            </p>
          </div>
        </section>

        {/* Main Message Section - premium mission & vision */}
        <section className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 -top-40 h-64 bg-[radial-gradient(circle_at_top,_rgba(47,46,119,0.16),transparent_60%)] opacity-70 -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                Our mission &amp; vision
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                At Techvitta, our mission is to demystify blockchain for enterprises. We focus on
                targeted, high‑impact use cases that turn distributed ledger technology into tangible
                business value—without the noise.
              </p>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Our vision is a world where organizations of every size can confidently build on
                secure, interoperable, and transparent digital rails. We’re committed to making Web3
                infrastructure as reliable and intuitive as the internet itself.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">North Star</p>
                  <p className="mt-1 text-sm text-slate-800">
                    Empower teams to move from experimentation to production with confidence.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">What we ship</p>
                  <p className="mt-1 text-sm text-slate-800">
                    Secure, scalable platforms that hide complexity behind human‑centric experiences.
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">How we work</p>
                  <p className="mt-1 text-sm text-slate-800">
                    Co‑design, measurable pilots, and long‑term stewardship as your needs evolve.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-[#2F2E77]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Mission
                  </p>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Help organizations harness blockchain to unlock new business models, enhance trust,
                  and streamline operations—without adding unnecessary complexity.
                </p>
              </div>

              <div className="relative p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-[#2F2E77]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Vision
                  </p>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Become the trusted backbone for digital economies—where value flows as easily as
                  data, and every transaction is transparent, auditable, and secure.
                </p>
              </div>

              <div className="relative p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-[#2F2E77]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    How we deliver
                  </p>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We combine deep technical expertise with hands‑on change management—aligning
                  stakeholders, integrating with existing systems, and ensuring long‑term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section - premium timeline style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 via-brand-50/20 to-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-br from-brand-200/35 to-accent-400/15 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/4 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-10 mb-12">
              <div className="lg:w-1/3 space-y-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                  Our core values
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  These principles shape how we partner, what we build, and the standards we hold
                  ourselves to on every engagement.
                </p>
              </div>

              <div className="hidden lg:block lg:w-2/3 h-full">
                <div className="h-full w-px bg-gradient-to-b from-[#2F2E77] via-slate-300 to-transparent mx-auto opacity-60" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group">
                <div className="relative pt-8 p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] transition-all duration-300">
                  <Award className="w-7 h-7 text-[#2F2E77] mb-3" />
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">Innovation</h3>
                  <p className="text-xs text-slate-600">
                    We adopt new technologies early—but only when they solve real problems and create
                    clear value.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="relative pt-8 p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] transition-all duration-300">
                  <Users className="w-7 h-7 text-[#2F2E77] mb-3" />
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">Collaboration</h3>
                  <p className="text-xs text-slate-600">
                    We build with you, not for you—sharing context, decisions, and ownership across
                    teams.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="relative pt-8 p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] transition-all duration-300">
                  <Target className="w-7 h-7 text-[#2F2E77] mb-3" />
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">Excellence</h3>
                  <p className="text-xs text-slate-600">
                    We hold ourselves to enterprise‑grade standards in architecture, security, and
                    delivery.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="relative pt-8 p-6 rounded-2xl bg-white/95 border border-slate-200/80 shadow-[0_16px_40px_rgba(15,23,42,0.12)] group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] transition-all duration-300">
                  <Lightbulb className="w-7 h-7 text-[#2F2E77] mb-3" />
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">Integrity</h3>
                  <p className="text-xs text-slate-600">
                    We are transparent about trade‑offs and always optimize for long‑term trust over
                    short‑term wins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who we work with / engagement model */}
        <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-12">
              <div className="lg:max-w-md space-y-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                  Who we work with
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  From fast‑moving scale‑ups to established enterprises, we partner with teams that
                  are serious about shipping real blockchain outcomes—not just pilots.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-xs md:text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900">Industries</p>
                  <p>Finance, supply chain, energy, real estate, and more.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Stakeholders</p>
                  <p>Product, engineering, risk, and compliance teams.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Engagements</p>
                  <p>From discovery sprints to full platform builds.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_14px_40px_rgba(15,23,42,0.12)]">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Users className="w-6 h-6 text-[#2F2E77]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Enterprises
                  </p>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                  Modernize complex workflows
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  We help large organizations re‑platform legacy processes with shared ledgers,
                  digital identity, and tokenized assets—without disrupting day‑to‑day operations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_14px_40px_rgba(15,23,42,0.12)]">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Target className="w-6 h-6 text-[#2F2E77]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Financial &amp; regulated
                  </p>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                  Build compliant digital asset rails
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  From tokenized deposits to on‑chain collateral, we design architectures that
                  respect regulatory, risk, and audit requirements from day one.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_14px_40px_rgba(15,23,42,0.12)]">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Award className="w-6 h-6 text-[#2F2E77]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Technology partners
                  </p>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-2">
                  Co‑create new products &amp; offerings
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  We collaborate with ISVs, cloud providers, and consulting firms to embed our
                  modules into larger transformation programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (moved from home) */}
        <section className="bg-white">
          <Steps />
        </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};
