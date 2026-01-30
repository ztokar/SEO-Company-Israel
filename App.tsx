
import React, { useState, useEffect } from 'react';
import { generateSEOStrategy } from './geminiService';

// --- Shared Components ---

const Header = ({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) => {
  const handleNavClick = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass-nav border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-left">
          <div className="bg-navy text-white p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-xl">insights</span>
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tight uppercase leading-tight">SEO Company</h1>
            <p className="text-[10px] font-bold text-primary tracking-widest uppercase leading-none mt-0.5">Israel</p>
          </div>
        </button>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-navy">
          <button onClick={() => handleNavClick('services')} className="hover:text-primary transition-colors">Services</button>
          <button onClick={() => handleNavClick('testimonials')} className="hover:text-primary transition-colors">Results</button>
          <button 
            onClick={() => onNavigate('reddit')} 
            className={`px-3 py-1 rounded hover:opacity-80 transition-all flex items-center gap-1.5 ${currentPage === 'reddit' ? 'text-white bg-[#FF4500]' : 'bg-navy/5 text-navy'}`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.966 0 1.75.784 1.75 1.75 0 .966-.784 1.75-1.75 1.75-.19 0-.375-.041-.539-.105-.114 1.619-1.142 3.06-2.674 4.14-.3.21-.62.39-.95.54a7.35 7.35 0 0 1-3.13.68c-.96 0-1.89-.15-2.73-.42a6.9 6.9 0 0 1-1.35-.61c-1.532-1.08-2.56-2.521-2.674-4.14-.164.064-.349.105-.539.105-.966 0-1.75-.784-1.75-1.75 0-.966.784-1.75 1.75-1.75.477 0 .899.182 1.207.491 1.154-.825 2.724-1.371 4.453-1.469l.754-3.528c.01-.05.03-.1.06-.14.04-.04.09-.07.15-.08l2.96-.61c.14-.04.28.05.32.19zm-3.834 10.155c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm-4.352 0c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm5.344 2.115c-.17.17-.44.17-.61 0-.6-.6-1.55-.89-2.56-.89-1.01 0-1.96.29-2.56.89-.17.17-.44.17-.61 0-.17-.17-.17-.44 0-.61.74-.74 1.86-1.1 3.17-1.1 1.31 0 2.43.36 3.17 1.1.17.17.17.44 0 .61z"/></svg>
            Reddit
          </button>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a href="tel:0538484641" className="hidden lg:flex items-center gap-1 text-[11px] font-black text-navy uppercase tracking-widest hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-sm">call</span>
            053-848-4641
          </a>
          <button 
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
            className="bg-navy text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-full hover:bg-black transition-all active:scale-95"
          >
            Free Audit
          </button>
        </div>
      </div>
    </nav>
  );
};

const AuditForm = () => {
  const [domain, setDomain] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain || !email) return;
    setLoading(true);
    setFormStatus('submitting');
    try {
      const formData = new FormData();
      formData.append('domain', domain);
      formData.append('email', email);
      formData.append('_subject', `New Lead: ${domain}`);
      const formspreeResponse = await fetch('https://formspree.io/f/mpwvyzbr', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (formspreeResponse.ok) setFormStatus('success');
      else throw new Error('Failed');
      const result = await generateSEOStrategy(domain);
      setStrategy(result);
    } catch (err) {
      setFormStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit-form" className="max-w-6xl mx-auto px-4 py-24">
      <div className="bg-navy rounded-[40px] p-8 md:p-16 relative overflow-hidden text-white shadow-3xl">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 leading-tight">Start Ranking Higher Today.</h2>
            <p className="text-gray-400 text-lg mb-8 font-medium leading-relaxed">Get a clear picture of what’s holding your site back — and exactly how to fix it with a free preliminary audit.</p>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined">verified</span>
              Senior Manual Review Included
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10">
            {formStatus !== 'success' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input name="domain" type="url" required value={domain} onChange={(e) => setDomain(e.target.value)} className="w-full bg-white/10 border-white/20 text-white rounded-xl h-14 px-5 outline-none" placeholder="https://yourdomain.com" />
                <input name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/10 border-white/20 text-white rounded-xl h-14 px-5 outline-none" placeholder="name@company.com" />
                <button type="submit" disabled={loading} className="w-full bg-primary h-14 rounded-xl font-black uppercase tracking-widest text-[11px] disabled:opacity-50">
                  {loading ? 'Sending Request...' : 'Get My Free Audit'}
                </button>
              </form>
            ) : (
              <div className="animate-in fade-in zoom-in duration-500 text-center py-8">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">check_circle</span>
                <h3 className="text-2xl font-black mb-3">Request Received.</h3>
                {strategy && (
                   <div className="text-left mt-6 bg-white/5 p-6 rounded-xl border-l-4 border-primary italic text-sm text-gray-300 whitespace-pre-line font-medium">
                     {strategy}
                   </div>
                )}
                <a href="https://calendly.com/zack-tokar/consultation?month=2025-04" target="_blank" className="mt-8 block w-full bg-primary py-4 rounded-xl font-black uppercase text-[11px] tracking-widest text-center">Book Your Session</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Home Page Components ---

const Hero = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
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
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Experience', val: '10+ Years' },
          { label: 'Education', val: 'Wharton MBA' },
          { label: 'Certified', val: 'Semrush Expert' },
          { label: 'Direct', val: 'Senior Only' }
        ].map((item, i) => (
          <div key={i} className="border-l-2 border-gray-100 pl-4 py-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
            <p className="text-xs md:text-sm font-black text-navy uppercase">{item.val}</p>
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
        <button 
          onClick={() => onNavigate('reddit')}
          className="h-14 px-10 border-2 border-gray-200 text-navy font-black rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-xl">forum</span>
          Reddit Visibility
        </button>
      </div>
    </div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
  </section>
);

const BrandLogos = () => (
  <section className="bg-white border-b border-gray-100 py-12">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-10">Trusted by Global Brands & Entrepreneurs</p>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter">JLUXURY</span>
        <span className="font-sans text-lg md:text-xl font-black italic">Whitsunday</span>
        <span className="font-serif text-xl md:text-2xl tracking-widest font-light">ADORNA</span>
        <span className="font-cursive text-xl md:text-2xl font-bold text-pink-600">Pink Orchid</span>
        <span className="font-sans text-xs md:text-sm font-black uppercase">North Star Ranch</span>
        <span className="font-serif text-xl md:text-2xl font-black">Z-STANDER</span>
        <span className="font-sans text-base md:text-lg font-bold">STAND-UP NY</span>
      </div>
    </div>
  </section>
);

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
            <p className="text-4xl md:text-5xl font-black text-navy mb-2">{stat.val}</p>
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">{stat.label}</p>
            <p className="text-sm text-gray-500 font-medium leading-tight">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
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

const Services = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
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
              { title: 'Reddit Marketing', desc: 'Leads + AI Visibility in recommendation threads.', link: 'reddit' },
              { title: 'Global SEO', desc: 'Native English strategies for US and International markets.' }
            ].map((s, i) => (
              <div key={i} className={`flex gap-4 p-5 rounded-2xl border border-gray-100 transition-all ${s.link ? 'cursor-pointer hover:border-primary/40 bg-primary/5' : 'hover:border-primary/20'}`} onClick={() => s.link && onNavigate(s.link)}>
                <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined">{s.link ? 'forum' : 'auto_graph'}</span>
                </div>
                <div>
                  <h4 className="font-black text-navy text-sm mb-1">{s.title} {s.link && <span className="text-[9px] bg-primary text-white px-1.5 py-0.5 rounded ml-1 uppercase font-black">New</span>}</h4>
                  <p className="text-xs text-gray-500 leading-normal font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-navy rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
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
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors focus:outline-none"
      >
        <span className="font-black text-navy md:text-lg pr-4">{q}</span>
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

// --- Page Templates ---

const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  useEffect(() => {
    document.title = "SEO Company Israel | Zechariah Tokar - Expert SEO Growth";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'SEO Company Israel: Premium organic growth consultancy by Zechariah Tokar. Wharton-led strategies for US & international markets.');
  }, []);

  return (
    <>
      <Hero onNavigate={onNavigate} />
      <BrandLogos />
      <Stats />
      <Testimonials />
      <Services onNavigate={onNavigate} />
      <FAQ />
      <AuditForm />
    </>
  );
};

const RedditPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  useEffect(() => {
    document.title = "Reddit Marketing Service | Leads + AI Visibility | Zechariah Tokar";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', "Reddit marketing services that get your brand mentioned where buyers are searching—and where AI pulls its answers. Stop losing leads to competitors.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* Dynamic Header Badge */}
      <div className="bg-[#FF4500] text-white py-2 text-center text-[10px] font-black uppercase tracking-[0.2em]">
        Specialized High-Intent Reddit Marketing
      </div>

      <section className="relative py-24 border-b border-gray-100 overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 mb-8 hover:text-[#FF4500] transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </button>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-navy leading-[1.1] tracking-tighter mb-8">
                Reddit <br className="hidden md:block"/>
                <span className="text-[#FF4500]">Marketing</span> <br className="hidden md:block"/>
                <span className="italic font-light">Leads + AI Visibility</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-xl">
                Get your brand into the recommendation posts buyers actually click.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 bg-white rounded-[40px] shadow-3xl border border-gray-100 overflow-hidden group">
                 <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 duration-700" alt="Visibility" />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-4xl font-black tracking-tighter">+300%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Reddit-Driven Search Mentions</p>
                 </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#FF4500]/5 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-navy mb-8 tracking-tight leading-tight">
            100s of buyers are actively looking for your services on Reddit right now. Is your brand showing up?
          </h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed">
            <p>
              Here's what I see every day: business owners watch their competitors get mentioned in recommendation threads while their brand sits invisible. Those same threads get scraped by ChatGPT, Perplexity, and Google's AI Overviews.
            </p>
            <p className="mt-6 border-l-4 border-[#FF4500] pl-6 italic">
              "I track keywords across Reddit so my clients get found in these conversations. When someone asks 'who's the best [your service]?' — your name shows up."
            </p>
          </div>
        </div>

        {/* Pillar Section with Improved Readability */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-navy p-12 rounded-[48px] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Immediate Leads</h3>
              <p className="text-gray-300 text-base leading-relaxed font-medium">
                Real people click through from helpful, upvoted comments. Last month, a fractional CFO client got three discovery calls from a single Reddit thread.
              </p>
            </div>
            <div className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF4500]">Verified Conversion Metric</div>
          </div>

          <div className="bg-[#FF4500] p-12 rounded-[48px] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-black/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Long-term AI Branding</h3>
              <p className="text-white/90 text-base leading-relaxed font-medium">
                Your brand gets woven into the data that ChatGPT, Claude, and Gemini use to answer buyer questions. You become the default recommendation.
              </p>
            </div>
            <div className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-navy">LLM Data Optimization</div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-12 gap-8 items-center">
             <div className="md:col-span-1 hidden md:block">
                <div className="flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-[#FF4500]">keyboard_arrow_up</span>
                  <div className="w-px h-12 bg-gray-100"></div>
                  <span className="material-symbols-outlined text-gray-300">keyboard_arrow_down</span>
                </div>
             </div>
             <div className="md:col-span-11">
                <h3 className="text-2xl font-black text-navy mb-4">What I Do For Clients</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  I use Reddit Pro to track keywords daily. When someone posts "looking for recommendations" in your niche, I'm there adding genuine value and positioning your brand. 
                  <br/><br/>
                  This isn't spam. It's strategic engagement that builds trust and captures buyers who've already raised their hand.
                </p>
             </div>
          </div>
          
          <div className="bg-soft-gray p-8 md:p-12 rounded-[40px] border border-gray-100 italic text-navy font-bold text-lg leading-relaxed">
            "I've done this for therapy businesses, healthcare companies, B2B services, and AI agencies. Different industries, same result: brands that were invisible now get mentioned."
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Ready to Stop Missing These Leads?</h2>
          <p className="text-gray-400 text-lg mb-12 font-medium">I'll show you exactly what buyers are searching for in your space and how we start capturing these leads.</p>
          <button 
            onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-[#FF4500] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-[#FF4500]/20"
          >
            Schedule Your Free Reddit Audit
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>
      <AuditForm />
    </div>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <footer className="bg-navy pt-20 pb-12 text-white border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white text-navy p-1.5 rounded-md">
              <span className="material-symbols-outlined text-sm">insights</span>
            </div>
            <h3 className="font-black uppercase tracking-normal text-lg">SEO Company Israel</h3>
          </div>
          <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-sm">
            Expert organic growth strategies led by Zechariah Tokar. Direct senior consultation for businesses ready to dominate search results globally.
          </p>
        </div>
        
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-primary mb-6">Explore</h4>
          <ul className="text-xs space-y-4 font-bold text-gray-500 uppercase tracking-widest">
            <li><button onClick={() => onNavigate('home')} className="hover:text-primary">Services</button></li>
            <li><button onClick={() => onNavigate('reddit')} className="hover:text-[#FF4500]">Reddit Marketing</button></li>
            <li><button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('testimonials')?.scrollIntoView({behavior:'smooth'}),100); }} className="hover:text-primary">Case Studies</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-primary mb-6">Contact</h4>
          <div className="space-y-4">
            <p className="text-xs font-medium text-gray-300 break-words">zechariah@israelseofreelancer.com</p>
            <a href="tel:0538484641" className="text-gray-200 text-base font-black block hover:text-primary transition-colors">053-848-4641</a>
          </div>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] text-center md:text-left">© 2024 SEO Company Israel. All rights reserved.</p>
        <p className="text-[9px] font-bold text-gray-700 uppercase tracking-widest italic">Engineered by Zechariah Tokar.</p>
      </div>
    </div>
  </footer>
);

// --- App Root ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? <HomePage onNavigate={setCurrentPage} /> : <RedditPage onNavigate={setCurrentPage} />}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
