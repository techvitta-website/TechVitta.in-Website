import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { blogPosts } from '../data/blogPosts';

export const Blogs: React.FC = () => {
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
                Techvitta blog
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                Blockchain insights,
                <span className="block bg-gradient-to-r from-[#2F2E77] via-brand-500 to-navy-800 bg-clip-text text-transparent">
                  straight from the build floor.
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                Deep dives, playbooks, and real‑world stories from the teams building enterprise
                blockchain, tokenization, and Web3 products every day.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-500">
                <span>Smart contracts · Tokenization · Web3 · Security · Industry use‑cases</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F2E77]/15 to-accent-300/20 rounded-[28px] blur-3xl" />
              <div className="relative rounded-[24px] bg-white/95 border border-slate-200/80 shadow-[0_24px_60px_rgba(15,23,42,0.16)] p-6 flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  LATEST THEMES
                </p>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li>• How enterprises are moving from pilots to production blockchain platforms.</li>
                  <li>• Real‑world asset tokenization and regulated digital asset rails.</li>
                  <li>• Designing secure smart contracts and on‑chain business logic.</li>
                  <li>• Web3 integration patterns for existing products and workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-gradient-to-b from-white via-slate-50/60 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">
                Featured insight
              </h2>
              <span className="text-xs md:text-sm text-slate-500">
                Curated by the Techvitta team
              </span>
            </div>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div
                key={post.id}
                className="group max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-200/70 bg-white/95 shadow-[0_24px_70px_rgba(15,23,42,0.18)] hover:shadow-[0_30px_90px_rgba(15,23,42,0.22)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="md:flex">
                  <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[11px] text-slate-100">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm">
                        {post.category}
                      </span>
                      <span className="opacity-80">{post.date}</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center gap-4">
                    <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-500">
                      Featured article
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-[#2F2E77] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-xs md:text-sm text-slate-500">By {post.author}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => (window as any).navigateTo(`/blogs/${post.id}`)}
                      >
                        Read full article
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-24 bg-gradient-to-b from-slate-50/60 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">
                  Latest articles
                </h2>
                <p className="text-sm md:text-base text-slate-600 mt-2">
                  Explore practical explainers, industry deep‑dives, and product thinking from the
                  Techvitta team.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(post => !post.featured)
                .map((post) => (
                  <div
                    key={post.id}
                    className="group rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-sm transition-all duration-400 overflow-hidden hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.18)] cursor-pointer"
                    onClick={() => (window as any).navigateTo(`/blogs/${post.id}`)}
                  >
                    <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-brand-50 to-accent-50">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-semibold text-[#2F2E77] bg-[#2F2E77]/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs md:text-sm text-slate-500">{post.date}</span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold mb-2 text-slate-900 group-hover:text-[#2F2E77] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                        <p className="text-xs md:text-sm text-slate-500">By {post.author}</p>
                        <span className="text-[#2F2E77] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer ctaType="newsletter" />
    </div>
  );
};
