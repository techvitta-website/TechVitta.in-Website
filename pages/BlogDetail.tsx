import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { blogPosts } from '../data/blogPosts';

export const BlogDetail: React.FC = () => {
  const path = window.location.pathname;
  const segments = path.split('/');
  const id = Number(segments[2]);
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-slate-600 mb-6">
            We couldn&apos;t find the article you were looking for. Please return to the blog
            overview.
          </p>
          <Button onClick={() => (window as any).navigateTo('/blogs')}>Back to Blog</Button>
        </main>
        <Footer ctaType="newsletter" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />

      <main className="relative overflow-hidden">
        <section className="pt-28 pb-10 md:pb-12 bg-gradient-to-b from-white via-[#f3f4ff] to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 text-xs md:text-sm text-slate-500">
              <button
                onClick={() => (window as any).navigateTo('/blogs')}
                className="underline underline-offset-2 decoration-slate-400 hover:text-slate-700"
              >
                ← Back to blog
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs md:text-sm text-slate-500">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#2F2E77]/10 text-[#2F2E77] font-semibold text-[11px] uppercase tracking-[0.2em]">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>·</span>
              <span>By {post.author}</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              {post.title}
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-10 shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <article className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-[#2F2E77] prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-li:text-slate-700">
              {post.contentMd ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-8 mb-4 first:mt-0">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-8 mb-4 first:mt-0">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mt-6 mb-3">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="text-lg md:text-xl font-semibold text-slate-900 mt-4 mb-2">
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p className="text-slate-700 leading-relaxed mb-4">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside mb-4 space-y-2 text-slate-700">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside mb-4 space-y-2 text-slate-700">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                    strong: ({ children }) => (
                      <strong className="font-semibold text-slate-900">{children}</strong>
                    ),
                    em: ({ children }) => <em className="italic">{children}</em>,
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-[#2F2E77] hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    code: ({ children }) => (
                      <code className="bg-slate-100 text-slate-900 px-1.5 py-0.5 rounded text-sm font-mono">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto mb-4">
                        {children}
                      </pre>
                    ),
                  }}
                >
                  {post.contentMd}
                </ReactMarkdown>
              ) : (
                <>
                  <p>
                    At Techvitta, we work alongside enterprises and innovators who are pushing the
                    boundaries of what blockchain can do in the real world. This piece is part of our
                    ongoing series where we share what we&apos;re learning from production projects,
                    technical prototypes, and conversations with customers across industries.
                  </p>
                  <p>
                    While every organization is different, we see recurring patterns in how teams
                    approach strategy, architecture, security, and rollout. Our goal with these articles
                    is to provide practical context you can use—whether you&apos;re validating a new
                    use‑case, refining an existing roadmap, or simply trying to understand how the
                    ecosystem is evolving.
                  </p>
                  <p>
                    If you&apos;d like to explore how these ideas apply to your own environment, our
                    team is always happy to dive deeper and share more detailed reference architectures
                    and best practices.
                  </p>
                </>
              )}
            </article>
          </div>
        </section>
      </main>

      <Footer ctaType="newsletter" />
    </div>
  );
};


