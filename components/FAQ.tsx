import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const questions = [
  { q: "What is Techvitta?", a: "Techvitta is a blockchain technology company specializing in providing enterprise blockchain solutions, tokenization services, and Web3 integration for businesses across various industries." },
  { q: "What industries do you serve?", a: "We serve multiple industries including Supply Chain, Real Estate, Banking & Finance, Healthcare, Energy, and Luxury Goods. Our solutions are tailored to address specific industry challenges and use cases." },
  { q: "How long does implementation take?", a: "Implementation timelines vary based on project complexity and requirements. Typically, blockchain solutions can be deployed within 3-6 months, with custom platforms taking 6-12 months. We provide detailed timelines during the consultation phase." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer comprehensive ongoing support including technical maintenance, system updates, team training, and optimization services to ensure your blockchain solution continues to deliver value." },
  { q: "Can blockchain integrate with our existing systems?", a: "Absolutely. Our solutions are designed to integrate seamlessly with your existing business systems and infrastructure. We ensure compatibility and minimal disruption during implementation." },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left intro */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F2E77]/6 border border-[#2F2E77]/20 text-[11px] font-semibold tracking-[0.26em] uppercase text-[#2F2E77]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              FAQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Your questions,
              <span className="block bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">
                answered clearly.
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Everything you need to know about how Techvitta designs, delivers, and supports
              enterprise-grade blockchain solutions.
            </p>
            <div className="p-6 md:p-7 bg-white/95 rounded-2xl border border-slate-200/80 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
              <h4 className="font-semibold text-slate-900 mb-1.5 text-sm md:text-base">
                Still have questions?
              </h4>
              <p className="text-xs md:text-sm text-slate-600 mb-4">
                Our team is available to walk you through use-cases, architecture options, and next
                steps for your organization.
              </p>
              <button className="text-xs md:text-sm font-semibold text-[#2F2E77] hover:text-brand-600 underline decoration-[#2F2E77]/60">
                Contact support
              </button>
            </div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8 space-y-3">
            {questions.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-[#2F2E77]/40' : 'border-slate-200/70 hover:border-slate-300'
                  }`}
                >
                  <button
                    className="w-full flex justify-between items-center py-4 md:py-5 px-4 md:px-6 text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-sm md:text-base font-semibold text-slate-900 pr-4">
                      {item.q}
                    </span>
                    <span
                      className={`ml-4 flex items-center justify-center rounded-full border w-7 h-7 md:w-8 md:h-8 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#2F2E77] border-[#2F2E77] text-white'
                          : 'bg-white border-slate-200 text-slate-400'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed px-4 md:px-6 pb-4 md:pb-5">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};