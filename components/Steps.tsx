import React from 'react';
import { Button } from './Button';

export const Steps: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#050816] via-navy-900 to-[#050816] text-white relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 w-[480px] h-[480px] bg-[radial-gradient(circle_at_top,_rgba(148,163,253,0.28),transparent_60%)] blur-3xl opacity-80" />
        <div className="absolute -bottom-40 left-0 w-[420px] h-[420px] bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.22),transparent_60%)] blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-14">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              How it works
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold leading-tight">
              A clear path from first workshop
              <span className="block text-slate-300">to live blockchain deployment.</span>
            </h2>
            <p className="text-slate-300/80 text-sm md:text-base leading-relaxed">
              We guide your team through a structured, low‑risk journey—from defining the right use
              case to running production‑ready infrastructure.
            </p>
          </div>
          <div className="mt-2 lg:mt-0">
            <Button
              variant="ghost"
              className="btn-shine text-navy-900 font-semibold bg-gradient-to-r from-white via-slate-100 to-brand-200 px-8 py-3 rounded-full shadow-[0_20px_45px_rgba(13,26,54,0.7)] border border-white/70"
              showArrow
            >
              Get started now
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/8 transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2F2E77] text-xs font-semibold">
                01
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                Discover
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Consultation &amp; planning</h3>
              <p className="text-sm text-slate-200/80 leading-relaxed">
                We run focused workshops to map your objectives, constraints, and success metrics,
                then identify the highest‑value blockchain opportunities.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/8 transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2F2E77] text-xs font-semibold">
                02
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                Build
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Development &amp; integration</h3>
              <p className="text-sm text-slate-200/80 leading-relaxed">
                Our engineers design the architecture, implement smart contracts, and integrate with
                your existing systems and data sources.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/8 transition-all duration-300 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2F2E77] text-xs font-semibold">
                03
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                Launch
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Deployment &amp; support</h3>
              <p className="text-sm text-slate-200/80 leading-relaxed">
                We deploy to secure infrastructure, train your teams, and provide ongoing monitoring,
                tuning, and feature evolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};