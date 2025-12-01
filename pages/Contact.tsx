import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', message: '' });
  };
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
                Get in touch
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                We&apos;re here to help you
                <span className="block bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">
                  transform your business.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                Talk to our team about blockchain strategy, tokenization, platform engineering, or
                Web3 integration. We&apos;ll help you shape the right path—from discovery to
                deployment.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F2E77]/15 to-accent-300/20 rounded-[28px] blur-3xl" />
              <div className="relative rounded-[24px] bg-white/95 border border-slate-200/80 shadow-[0_24px_60px_rgba(15,23,42,0.16)] p-6 flex flex-col gap-4 text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  HOW WE WORK WITH YOU
                </p>
                <ul className="space-y-1.5">
                  <li>• 30–45 minute discovery call to understand your goals and constraints.</li>
                  <li>• Follow‑up with tailored recommendations and potential engagement models.</li>
                  <li>• Option to run a focused pilot or architecture workshop with your teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Form - split layout */}
        <section className="pb-24 bg-gradient-to-b from-white via-slate-50/70 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-10 items-start">
              {/* Left: Contact info */}
              <div className="space-y-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                  Connect with the Techvitta team
                </h2>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Prefer email, a quick call, or an in‑person discussion in Hyderabad? Reach out
                  through any of the channels below and we&apos;ll respond within one business day.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200/80 p-4 shadow-sm">
                    <Mail className="w-5 h-5 text-[#2F2E77] mt-1" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Email
                      </p>
                      <p className="text-sm text-slate-700">
                        <a
                          href="mailto:support@techvitta.in"
                          className="hover:text-[#2F2E77] font-medium"
                        >
                          support@techvitta.in
                        </a>
                        <br />
                        <a
                          href="mailto:hr@techvitta.in"
                          className="hover:text-[#2F2E77] font-medium"
                        >
                          hr@techvitta.in
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200/80 p-4 shadow-sm">
                    <Phone className="w-5 h-5 text-[#2F2E77] mt-1" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Phone
                      </p>
                      <p className="text-sm text-slate-700">
                        <a
                          href="tel:+919035151944"
                          className="hover:text-[#2F2E77] font-medium"
                        >
                          +91 (903) 515-1944
                        </a>
                        <br />
                        <a
                          href="tel:+918867462796"
                          className="hover:text-[#2F2E77] font-medium"
                        >
                          +91 (886) 746-2796
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200/80 p-4 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#2F2E77] mt-1" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Location
                      </p>
                      <p className="text-sm text-slate-700 mb-2">
                        TECHVITTA, 3rd Floor, Plot no 19
                        <br />
                        Opp to Cyber pearl
                        <br />
                        Hitech City, Madhapur
                        <br />
                        Hyderabad, Telangana, India
                      </p>
                      <a
                        href="https://maps.google.com/?q=TECHVITTA+3rd+Floor+Plot+19+Hitech+City+Madhapur+Hyderabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-[#2F2E77] hover:underline"
                      >
                        View on Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact form */}
              <div className="rounded-3xl bg-white/95 border border-slate-200/80 shadow-[0_22px_60px_rgba(15,23,42,0.16)] p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-slate-900">Send us a note</h2>
                <p className="text-xs md:text-sm text-slate-600 mb-6">
                  Share a bit about your project, timeline, and what success looks like—we&apos;ll
                  follow up with next steps and the right specialists from our team.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-slate-900 mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F2E77] focus:border-transparent text-sm transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-900 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F2E77] focus:border-transparent text-sm transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold text-slate-900 mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F2E77] focus:border-transparent text-sm transition-all duration-200"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-900 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F2E77] focus:border-transparent text-sm resize-none transition-all duration-200"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 text-white font-semibold rounded-full hover:shadow-[0_18px_40px_rgba(15,23,42,0.35)] transition-all duration-300 hover:scale-[1.01]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer showCTA={false} />
    </div>
  );
};
