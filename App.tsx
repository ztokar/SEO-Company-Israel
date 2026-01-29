
import React, { useState } from 'react';
import { generateSEOStrategy } from './geminiService';

// --- Components ---

const Header = () => (
  <nav className="sticky top-0 z-50 glass-nav border-b border-gray-100">
    <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-navy text-white p-1.5 rounded-lg">
          <span className="material-symbols-outlined text-xl">insights</span>
        </div>
        <div>
          <h1 className="text-sm font-black tracking-tighter uppercase leading-none">SEO Company</h1>
          <p className="text-[10px] font-bold text-primary tracking-widest uppercase leading-none mt-0.5">Israel</p>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#process" className="hover:text-primary transition-colors">Process</a>
        <a href="#results" className="hover:text-primary transition-colors">Results</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://linkedin.com/in/zechariah-tokar-167b7672/" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-primary transition-colors">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <button 
          onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-navy text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-full hover:bg-black transition-all active:scale-95"
        >
          Free Audit
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative px-4 py-16 md:py-28 bg-white overflow-hidden border-b border-gray-50">
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">
        <span className="w-8 h-[2px] bg-primary"></span>
        Israel-Based SEO Expert
      </div>
      <h1 className="text-4xl md:text-7xl font-black text-navy leading-[1.05] tracking-tight mb-8">
        Focused on Scalable <br className="hidden md:block"/> <span className="text-primary italic">Organic Growth.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl leading-relaxed mb-12">
        Strategic SEO for US and international businesses. Rank higher, convert better, and turn organic traffic into revenue — without bloated agency retainers.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: 'Experience', val: '10+ Years' },
          { label: 'Education', val: 'Wharton MBA' },
          { label: 'Certified', val: 'Semrush Expert' },
          { label: 'Focus', val: 'ROI Driven' }
        ].map((item, i) => (
          <div key={i} className="border-l-2 border-gray-100 pl-4 py-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
            <p className="text-sm font-black text-navy uppercase">{item.val}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="h-14 px-10 bg-primary text-white font-black rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95"
        >
          Get Free SEO Audit
        </button>
        <button className="h-14 px-10 border-2 border-gray-200 text-navy font-black rounded-xl hover:bg-gray-50 transition-all">
          Talk to Zechariah
        </button>
      </div>
    </div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
  </section>
);

const Stats = () => (
  <section id="results" className="py-20 bg-soft-gray">
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-black mb-4">Real Results, Not Vanity Metrics.</h2>
        <p className="text-gray-500 font-semibold text-sm max-w-xl mx-auto italic">Every strategy is built around rankings that drive leads and sales — not traffic that just looks good in a report.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Organic Growth', val: '+300%', desc: 'Avg increase across clients' },
          { label: 'ROI Performance', val: '10X', desc: 'Average campaign revenue' },
          { label: 'Keywords Ranked', val: '500+', desc: 'Top 3 spots this quarter' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
            <p className="text-5xl font-black text-navy mb-2">{stat.val}</p>
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">{stat.label}</p>
            <p className="text-sm text-gray-500 font-medium">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-black text-navy mb-6 tracking-tight">Professional SEO Services in Israel</h2>
          <p className="text-gray-500 font-medium mb-10 leading-relaxed">
            I help businesses compete — and win — in competitive Google search results through focused, data-driven SEO strategies using tools like Ahrefs, Semrush, and Screaming Frog.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Technical SEO', desc: 'Core Web Vitals, site structure, and indexing optimization.' },
              { title: 'On-Page & Content', desc: 'Keyword mapping and intent-aligned content creation.' },
              { title: 'Authority Building', desc: 'Digital PR and high-authority link acquisition.' },
              { title: 'International SEO', desc: 'Native English strategies for US and Global markets.' }
            ].map((s, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all">
                <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <h4 className="font-black text-navy text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-gray-500 leading-normal font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-navy rounded-[40px] p-12 text-white relative overflow-hidden">
          <h3 className="text-2xl font-black mb-6">The Consultant Advantage</h3>
          <p className="text-gray-400 font-medium mb-8 leading-relaxed">
            Direct access to senior expertise. No junior account managers, no generic agency templates, and no hidden overhead.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <div>
                <p className="font-bold text-sm">Direct Senior Access</p>
                <p className="text-xs text-gray-500 mt-1">You work directly with me on every decision.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">analytics</span>
              <div>
                <p className="font-bold text-sm">Transparent Reporting</p>
                <p className="text-xs text-gray-500 mt-1">Clear KPIs and real-time dashboards.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">handshake</span>
              <div>
                <p className="font-bold text-sm">No Lock-in Contracts</p>
                <p className="text-xs text-gray-500 mt-1">I earn your business every single month.</p>
              </div>
            </li>
          </ul>
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-9xl">school</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-24 bg-soft-gray">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">The SEO Process</h2>
        <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">A systematic approach to domination</p>
      </div>
      <div className="grid md:grid-cols-3 gap-y-12 gap-x-8">
        {[
          { icon: 'troubleshoot', title: 'Audit', desc: 'Deep technical & competitor deep-dive.' },
          { icon: 'manage_search', title: 'Research', desc: 'Identifying high-intent ranking gaps.' },
          { icon: 'history_edu', title: 'Optimization', desc: 'Building high-converting money pages.' },
          { icon: 'link', title: 'Building', desc: 'Earning high-authority context links.' },
          { icon: 'terminal', title: 'Implementation', desc: 'Executing technical fixes and schema.' },
          { icon: 'monitoring', title: 'Monitoring', desc: 'Tracking rankings, traffic, and sales.' }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-navy shadow-sm border border-gray-100 mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl">{step.icon}</span>
            </div>
            <h4 className="font-black text-lg text-navy mb-2">{step.title}</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-[200px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
      >
        <span className="font-black text-navy md:text-lg">{q}</span>
        <span className={`material-symbols-outlined transform transition-transform ${open ? 'rotate-180' : ''}`}>expand_more</span>
      </button>
      {open && (
        <div className="pb-8 text-sm text-gray-500 font-medium leading-relaxed animate-in slide-in-from-top-2 duration-300">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ = () => (
  <section className="py-24 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-black text-navy mb-12 text-center tracking-tight">SEO Company Israel – FAQs</h2>
      <div className="space-y-2">
        <FAQItem q="How long does SEO take in Israel?" a="Most campaigns see meaningful movement within 3–4 months, with compounding growth over time as authority builds." />
        <FAQItem q="How much does SEO cost in Israel?" a="Pricing depends on competition and scope. Unlike agencies, you pay for pure strategy and execution — not corporate overhead." />
        <FAQItem q="Do you work with Hebrew and English sites?" a="Yes. I primarily specialize in English-language SEO for international markets, with full support for Hebrew where needed." />
        <FAQItem q="Is SEO better than Google Ads?" a="SEO compounds. Ads stop the moment you stop paying. The strongest growth strategies often combine the long-term ROI of SEO with short-term Ads testing." />
        <FAQItem q="Can international companies rank in Israel?" a="Yes. With the right local technical setup and authority signals, international brands can dominate Israeli search results effectively." />
      </div>
    </div>
  </section>
);

const AuditForm = () => {
  const [domain, setDomain] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain || !email) return;
    setLoading(true);
    const result = await generateSEOStrategy(domain);
    setStrategy(result);
    setLoading(false);
  };

  return (
    <section id="audit-form" className="max-w-6xl mx-auto px-4 py-24">
      <div className="bg-navy rounded-[40px] p-8 md:p-16 relative overflow-hidden text-white">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Stop Losing to <br className="hidden md:block"/> Competitors.</h2>
            <p className="text-gray-400 text-lg mb-8 font-medium">Get a clear picture of what’s holding your site back — and exactly how to fix it with a free preliminary audit.</p>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined">verified</span>
              Senior Manual Review Included
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            {!strategy ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Website URL</label>
                  <input 
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full bg-white/10 border-white/20 text-white rounded-xl h-14 px-5 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600" 
                    placeholder="yourdomain.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Email Address</label>
                  <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border-white/20 text-white rounded-xl h-14 px-5 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600" 
                    placeholder="name@company.com"
                  />
                </div>
                <button 
                  disabled={loading}
                  className="w-full bg-primary h-14 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'Analyzing...' : 'Get My Free Audit'}
                </button>
              </form>
            ) : (
              <div className="animate-in fade-in zoom-in duration-500">
                <div className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest mb-4">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  Preliminary AI Audit
                </div>
                <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line font-medium italic border-l-2 border-primary/30 pl-4 py-2">
                  {strategy}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-xs text-gray-500 font-bold uppercase mb-4">Ready for the deep dive?</p>
                  <button onClick={() => window.location.href='mailto:zechariah@israelseofreelancer.com'} className="text-white bg-white/10 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
                    Book a Strategy Call
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[300px]">rocket_launch</span>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-navy pt-24 pb-12 text-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-white text-navy p-1 rounded-md">
              <span className="material-symbols-outlined text-sm">insights</span>
            </div>
            <h3 className="font-black uppercase tracking-tighter">SEO Company Israel</h3>
          </div>
          <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-sm">
            Expert organic growth strategies led by Zechariah Tokar. Helping businesses across Tel Aviv, Jerusalem, Haifa, and Herzliya rank globally.
          </p>
        </div>
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-widest text-primary mb-6">Contact</h4>
          <p className="text-sm font-medium text-gray-300 hover:text-white mb-2">zechariah@israelseofreelancer.com</p>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://linkedin.com/in/zechariah-tokar-167b7672/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://x.com/ZackTokar" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-widest text-primary mb-6">Expertise</h4>
          <ul className="text-xs space-y-3 font-bold text-gray-500 uppercase">
            <li>Wharton MBA</li>
            <li>10+ Years Experience</li>
            <li>Semrush Certified</li>
            <li>SaaS & B2B Focus</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.3em]">© 2024 SEO Company Israel. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

/**
 * Main App component.
 * Exporting as a constant with a default export at the end to ensure 
 * module resolution tools correctly identify the default export.
 */
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <FAQ />
        <AuditForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
