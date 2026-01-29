
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
      
      <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-navy">
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#testimonials" className="hover:text-primary transition-colors">Social Proof</a>
        <a href="#process" className="hover:text-primary transition-colors">Process</a>
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

const BrandLogos = () => (
  <section className="bg-white border-b border-gray-100 py-10">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Trusted by Global Brands & Entrepreneurs</p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <span className="font-serif text-2xl font-bold tracking-tighter">JLUXURY</span>
        <span className="font-sans text-xl font-black italic">Whitsunday</span>
        <span className="font-serif text-2xl tracking-widest font-light">ADORNA</span>
        <span className="font-cursive text-2xl font-bold text-pink-600">Pink Orchid</span>
        <span className="font-sans text-sm font-black uppercase">North Star Ranch</span>
        <span className="font-serif text-2xl font-black">Z-STANDER</span>
        <span className="font-sans text-lg font-bold">STAND-UP NY</span>
      </div>
    </div>
  </section>
);

const Hero = () => (
  <section className="relative px-4 py-16 md:py-28 bg-white overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">
        <span className="w-8 h-[2px] bg-primary"></span>
        SEO Consultant in Israel
      </div>
      <h1 className="text-4xl md:text-7xl font-black text-navy leading-[1.05] tracking-tight mb-8">
        Dominate Search. <br className="hidden md:block"/> <span className="text-primary italic">Drive Revenue.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl leading-relaxed mb-12">
        Strategic SEO for US and international businesses looking for high-intent traffic. Rank higher on Google without the bloated agency retainers.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: 'Experience', val: '10+ Years' },
          { label: 'Education', val: 'Wharton MBA' },
          { label: 'Certified', val: 'Semrush Expert' },
          { label: 'Direct', val: 'Senior Only' }
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
        <a 
          href="https://calendly.com/zack-tokar/consultation?month=2025-04" 
          target="_blank" 
          rel="noopener noreferrer"
          className="h-14 px-10 border-2 border-gray-200 text-navy font-black rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-xl">event</span>
          Book a Consultation
        </a>
      </div>
    </div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    {
      name: "Sean Littman",
      role: "Founder, GiveSuite.com",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
      content: "Where do I even begin. Zechariah was one of the best people I had ever contracted out. He was able to help us yield nearly 7 figures in revenue. His out of the box thinking and attention for detail really helped."
    },
    {
      name: "Yonatan Vinnik, LSW",
      role: "Child & Family Therapist",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
      content: "Within one week, our business was showing #1 on Google Maps for every target search term we cared about. I was honestly blown away by how fast and effective the results were. He truly understands SEO and local search."
    },
    {
      name: "Brett Sheldon, LCSW",
      role: "CEO of Launch Point Network",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&q=80",
      content: "Within a couple of months, I was ranking at the top for my key searches, which honestly shocked me. I have saved a ridiculous amount of money—easily thousands of dollars! Talk to Zechariah."
    },
    {
      name: "Yehudah Kreitenberg",
      role: "CBDO @ PayIP",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
      content: "Extremely talented, sharp, and genuinely passionate. He is both creative and analytical, a rare combination, and quickly understands how to deliver real results."
    },
    {
      name: "Rivka Neumann",
      role: "Founder @ Flyhost.me",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      content: "He doesn't just tick boxes - he cares. Deeply. SEO isn't about doing 'all the right things' - it's about bringing the right people to your site. That's exactly what he does."
    },
    {
      name: "Menachem Encaoua",
      role: "Turning ideas into businesses",
      img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&q=80",
      content: "I really appreciated how clear and thoughtful he was. He took the time to understand my business and explained strategy in a way that was practical and easy to follow. Very knowledgeable and honest."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-navy mb-4 tracking-tight">Real Client Results</h2>
          <p className="text-gray-500 font-medium text-lg italic">Verified recommendations from CEOs and founders across the globe.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-soft-gray p-8 rounded-[32px] border border-gray-100 flex flex-col hover:border-primary/20 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <img src={rev.img} alt={rev.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-black text-navy text-sm leading-none mb-1">{rev.name}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">{rev.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 font-medium leading-relaxed italic mb-6">"{rev.content}"</p>
              <div className="mt-auto flex items-center gap-2 text-primary font-black text-[9px] uppercase tracking-widest">
                <span className="material-symbols-outlined text-xs">verified</span>
                LinkedIn Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section id="results" className="py-20 bg-soft-gray border-y border-gray-100">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Organic Growth', val: '+300%', desc: 'Avg increase across clients' },
          { label: 'ROI Performance', val: '7-Figures', desc: 'Revenue yield for top clients' },
          { label: 'Map Rankings', val: '#1 Spot', desc: 'Achieved in as little as 1 week' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 text-center">
            <p className="text-5xl font-black text-navy mb-2">{stat.val}</p>
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">{stat.label}</p>
            <p className="text-sm text-gray-500 font-medium leading-tight">{stat.desc}</p>
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
          <h2 className="text-4xl font-black text-navy mb-6 tracking-tight">Professional SEO Services</h2>
          <p className="text-gray-500 font-medium mb-10 leading-relaxed">
            I help businesses compete — and win — in search results through focused, data-driven strategies. No fluff, just technical excellence.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Technical SEO', desc: 'Crawlability, Core Web Vitals, and indexing optimization.' },
              { title: 'Keyword Mapping', desc: 'Intent-aligned research for high-conversion terms.' },
              { title: 'Link Building', desc: 'Digital PR and high-authority manual acquisition.' },
              { title: 'Global SEO', desc: 'Native English strategies for US and International markets.' }
            ].map((s, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-primary/20 transition-all">
                <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined">auto_graph</span>
                </div>
                <div>
                  <h4 className="font-black text-navy text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-gray-500 leading-normal font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-navy rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl">
          <h3 className="text-2xl font-black mb-6 tracking-tight">The Senior Difference</h3>
          <p className="text-gray-400 font-medium mb-8 leading-relaxed">
            Direct access to senior expertise. No junior account managers, no generic templates, and no hidden overhead.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              <div>
                <p className="font-bold text-sm">Wharton-Level Strategy</p>
                <p className="text-xs text-gray-500 mt-1">Analytical, business-first approach to SEO.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">visibility</span>
              <div>
                <p className="font-bold text-sm">Absolute Transparency</p>
                <p className="text-xs text-gray-500 mt-1">Real-time dashboards for results and activity.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">support_agent</span>
              <div>
                <p className="font-bold text-sm">Direct Collaboration</p>
                <p className="text-xs text-gray-500 mt-1">I work on your site. I take your calls.</p>
              </div>
            </li>
          </ul>
        </div>
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
      <h2 className="text-3xl font-black text-navy mb-12 text-center tracking-tight uppercase">SEO & Growth FAQ</h2>
      <div className="space-y-2">
        <FAQItem q="How long does SEO take to show results?" a="While some local wins happen in 1-2 weeks (like Yonatan's case), most global campaigns see meaningful revenue growth within 3–4 months." />
        <FAQItem q="Do you work with Hebrew and English sites?" a="Yes. I primarily specialize in English-language SEO for US markets, with full support for Hebrew where needed." />
        <FAQItem q="Is SEO better than Google Ads?" a="SEO compounds. Ads stop the moment you stop paying. The strongest growth strategies often combine the long-term ROI of SEO with short-term Ads testing." />
        <FAQItem q="How much does a senior consultant cost?" a="Pricing is project-based. Unlike agencies, you pay for pure strategy and execution — not corporate overhead." />
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

    // 1. Generate AI Strategy for immediate value
    const aiResult = await generateSEOStrategy(domain);
    setStrategy(aiResult);

    // 2. Submit lead data to Formspree
    try {
      await fetch('https://formspree.io/f/mpwvyzbr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          website: domain,
          audit_preview: aiResult,
          source: 'SEO Company Israel Website'
        })
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    }

    setLoading(false);
  };

  return (
    <section id="audit-form" className="max-w-6xl mx-auto px-4 py-24">
      <div className="bg-navy rounded-[40px] p-8 md:p-16 relative overflow-hidden text-white shadow-3xl">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Start Ranking Higher Today.</h2>
            <p className="text-gray-400 text-lg mb-8 font-medium leading-relaxed">Get a clear picture of what’s holding your site back — and exactly how to fix it with a free preliminary audit.</p>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined">verified</span>
              Senior Manual Review Included
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10">
            {!strategy ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="website" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Website URL</label>
                  <input 
                    id="website"
                    name="website"
                    type="url"
                    required
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full bg-white/10 border-white/20 text-white rounded-xl h-14 px-5 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600 outline-none" 
                    placeholder="https://yourdomain.com"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border-white/20 text-white rounded-xl h-14 px-5 focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-600 outline-none" 
                    placeholder="name@company.com"
                  />
                </div>
                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full bg-primary h-14 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin material-symbols-outlined text-sm">autorenew</span>
                      Analyzing Leads...
                    </>
                  ) : 'Get My Free Audit'}
                </button>
              </form>
            ) : (
              <div className="animate-in fade-in zoom-in duration-500">
                <div className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest mb-4">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  Preliminary AI Audit Complete
                </div>
                <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line font-medium italic border-l-2 border-primary/30 pl-4 py-2">
                  {strategy}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center flex flex-col gap-4">
                  <p className="text-xs text-gray-500 font-bold uppercase">Strategy Delivered to {email}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://calendly.com/zack-tokar/consultation?month=2025-04" target="_blank" rel="noopener noreferrer" className="text-white bg-primary px-6 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 transition-all">
                      Book Your Strategy Session
                    </a>
                    <a href="tel:0538484641" className="bg-white/10 text-white px-6 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">call</span>
                      Call Zechariah
                    </a>
                  </div>
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
  <footer className="bg-navy pt-24 pb-12 text-white border-t border-white/5">
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
            Expert organic growth strategies led by Zechariah Tokar. Direct senior consultation for businesses ready to dominate search results globally.
          </p>
        </div>
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-widest text-primary mb-6">Contact</h4>
          <div className="space-y-4">
            <div>
              <p className="text-[9px] font-black uppercase text-gray-600 mb-1 tracking-widest">Email</p>
              <p className="text-sm font-medium text-gray-300 mb-1">zechariah@israelseofreelancer.com</p>
            </div>
            <div>
              <p className="text-[9px] font-black uppercase text-gray-600 mb-1 tracking-widest">Phone</p>
              <a href="tel:0538484641" className="text-sm font-medium text-white hover:text-primary transition-colors">053-848-4641</a>
            </div>
            <div>
              <a href="https://calendly.com/zack-tokar/consultation?month=2025-04" target="_blank" className="text-primary text-[10px] font-black uppercase tracking-widest hover:text-white transition-all underline">Book Consultation</a>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <a href="https://linkedin.com/in/zechariah-tokar-167b7672/" target="_blank" className="text-gray-500 hover:text-primary transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://x.com/ZackTokar" target="_blank" className="text-gray-500 hover:text-primary transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-widest text-primary mb-6">Expertise</h4>
          <ul className="text-xs space-y-3 font-bold text-gray-500 uppercase">
            <li>Wharton MBA</li>
            <li>10+ Years Experience</li>
            <li>Direct Engagement</li>
            <li>ROI Driven Content</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.3em]">© 2024 SEO Company Israel. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <BrandLogos />
        <Stats />
        <Testimonials />
        <Services />
        <FAQ />
        <AuditForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
