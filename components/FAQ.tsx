import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const questions = [
  { q: "What is Techvitta?", a: "Techvitta Innovations Pvt Ltd is a leading blockchain technology company specializing in enterprise-grade blockchain solutions, tokenization services, Web3 integration, and smart contract development. We help businesses transform their operations by leveraging distributed ledger technology to unlock new business models, enhance trust, and streamline processes." },
  { q: "What is blockchain and how can it benefit my business?", a: "Blockchain is a distributed ledger technology that creates tamper-proof, transparent records of transactions. For businesses, it enables secure data sharing, reduces intermediaries, prevents fraud, enhances traceability, and creates new opportunities for tokenization and digital asset management. It's particularly valuable for multi-party ecosystems requiring trust and transparency." },
  { q: "What industries do you serve?", a: "We serve multiple industries including Supply Chain (track & trace), Real Estate (tokenization & fractional ownership), Banking & Finance (secure transactions & lending), Healthcare (data integrity & traceability), Energy (carbon credits & peer-to-peer trading), and Luxury Goods (authenticity verification). Our blockchain solutions are tailored to address specific industry challenges and regulatory requirements." },
  { q: "What services does Techvitta offer?", a: "We provide end-to-end blockchain services: (1) Tokenization Solutions - converting real-world assets into digital tokens with compliance built-in, (2) Blockchain Platform Development - custom networks for regulated environments, (3) Web3 Integration - connecting wallets, dApps, and DeFi protocols, (4) Smart Contract Development - secure, audited on-chain automation, (5) Blockchain Consulting - strategic guidance and roadmap planning, and (6) Security Audits - comprehensive reviews for mission-critical systems." },
  { q: "What is tokenization and how does it work?", a: "Tokenization is the process of converting real-world assets (real estate, commodities, financial products) into digital tokens on a blockchain. This enables fractional ownership, increased liquidity, 24/7 trading, programmable compliance, and reduced transaction costs. We provide complete tokenization rails including asset digitization frameworks, smart contract design, token economics modeling, and regulatory alignment." },
  { q: "Is blockchain secure? How do you ensure data protection?", a: "Yes, blockchain is inherently secure through cryptographic hashing, distributed consensus, and immutability. We implement enterprise-grade security including: (1) Multi-layered encryption, (2) Smart contract audits and formal verification, (3) Private/permissioned networks for sensitive data, (4) KYC/AML compliance integration, (5) Regular security assessments, and (6) Zero-trust architecture. All our solutions undergo rigorous security reviews before production deployment." },
  { q: "Do you provide ongoing support and maintenance?", a: "Yes, we offer comprehensive ongoing support including: (1) 24/7 technical monitoring and incident response, (2) Regular system updates and optimization, (3) Smart contract upgrades and governance, (4) Team training and knowledge transfer, (5) Performance tuning and scalability improvements, and (6) Regulatory compliance updates. Our support packages ensure your blockchain solution continues to deliver value and evolves with your needs." },
  { q: "What blockchain platforms do you work with?", a: "We work with multiple blockchain platforms based on your requirements: Ethereum (public smart contracts & DeFi), Hyperledger Fabric (enterprise private networks), Polygon (scalable Layer 2), Binance Smart Chain (cost-effective solutions), Solana (high-throughput applications), and custom blockchain architectures. We help you choose the right platform considering factors like scalability, transaction costs, security requirements, and regulatory compliance." },
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
              <button 
                onClick={() => (window as any).navigateTo('/contact')}
                className="text-xs md:text-sm font-semibold text-[#2F2E77] hover:text-brand-600 underline decoration-[#2F2E77]/60 cursor-pointer"
              >
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