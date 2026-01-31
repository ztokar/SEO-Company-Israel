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
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-left group">
          <div className="bg-navy text-white p-1.5 rounded-lg group-hover:bg-primary transition-colors">
            <span className="material-symbols-outlined text-xl">insights</span>
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tight uppercase leading-tight">SEO Company</h1>
            <p className="text-[10px] font-bold text-primary tracking-widest uppercase leading-none mt-0.5">Israel</p>
          </div>
        </button>
        
        <div className="hidden md:flex items-center lg:gap-4 md:gap-2 text-[10px] font-bold uppercase tracking-widest text-navy">
          <button onClick={() => handleNavClick('services')} className="hover:text-primary transition-colors px-2">Services</button>
          
          <button 
            onClick={() => onNavigate('b2b-seo-israel')} 
            className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 border ${
              currentPage === 'b2b-seo-israel' 
              ? 'text-primary bg-primary/10 border-primary/30 ring-1 ring-primary/20 shadow-sm' 
              : 'text-primary bg-primary/5 border-primary/10 hover:bg-primary/10'
            }`}
          >
            <span className="material-symbols-outlined text-xs">hub</span>
            B2B
          </button>

          <button 
            onClick={() => onNavigate('reddit-marketing')} 
            className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 border ${
              currentPage === 'reddit-marketing' 
              ? 'text-white bg-[#FF4500] border-[#FF4500] shadow-md shadow-[#FF4500]/20' 
              : 'text-[#FF4500] bg-[#FF4500]/5 border-[#FF4500]/10 hover:bg-[#FF4500]/10'
            }`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.966 0 1.75.784 1.75 1.75 0 .966-.784 1.75-1.75 1.75-.19 0-.375-.041-.539-.105-.114 1.619-1.142 3.06-2.674 4.14-.3.21-.62.39-.95.54a7.35 7.35 0 0 1-3.13.68c-.96 0-1.89-.15-2.73-.42a6.9 6.9 0 0 1-1.35-.61c-1.532-1.08-2.56-2.521-2.674-4.14-.164.064-.349.105-.539.105-.966 0-1.75-.784-1.75-1.75 0-.966.784-1.75 1.75-1.75.477 0 .899.182 1.207.491 1.154-.825 2.724-1.371 4.453-1.469l.754-3.528c.01-.05.03-.1.06-.14.04-.04.09-.07.15-.08l2.96-.61c.14-.04.28.05.32.19zm-3.834 10.155c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm-4.352 0c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm5.344 2.115c-.17.17-.44.17-.61 0-.6-.6-1.55-.89-2.56-.89-1.01 0-1.96.29-2.56.89-.17.17-.44.17-.61 0-.17-.17-.17-.44 0-.61.74-.74 1.86-1.1 3.17-1.1 1.31 0 2.43.36 3.17 1.1.17.17.17.44 0 .61z"/></svg>
            Reddit
          </button>

          <button 
            onClick={() => onNavigate('ai-seo-freelancer')} 
            className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 border ${
              currentPage === 'ai-seo-freelancer' 
              ? 'text-[#8B5CF6] bg-[#8B5CF6]/10 border-[#8B5CF6]/30 ring-1 ring-[#8B5CF6]/20 shadow-sm' 
              : 'text-[#8B5CF6] bg-[#8B5CF6]/5 border-[#8B5CF6]/10 hover:bg-[#8B5CF6]/10'
            }`}
          >
            <span className="material-symbols-outlined text-xs">auto_awesome</span>
            AI SEO
          </button>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a href="tel:0538484641" className="hidden xl:flex items-center gap-1 text-[11px] font-black text-navy uppercase tracking-widest hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-sm">call</span>
            053-848-4641
          </a>
          <button 
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              setTimeout(() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
            className="bg-navy text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-black transition-all active:scale-95"
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

// --- Home Components ---

const Hero = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <section className="relative px-4 py-16 md:py-28 bg-white overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6">
        <span className="w-8 h-[2px] bg-primary"></span>
        SEO Consultant in Israel
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-navy leading-[1.05] tracking-tight mb-8">
        Dominate Search. <br className="hidden md:block"/> <span className="text-primary italic relative">Drive Revenue <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></span></span>
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
          onClick={() => onNavigate('b2b-seo-israel')} 
          className="h-14 px-10 border-2 border-gray-200 text-navy font-black rounded-xl hover:bg-gray-50 flex items-center justify-center gap-2 transition-all"
        >
          Explore B2B Pipeline Growth
        </button>
      </div>
    </div>
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
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
          <div className="space-y-4">
            {[
              { title: 'B2B SEO | Leads From Search', desc: 'Turn search into a pipeline. High-intent B2B strategy for tech & startups.', link: 'b2b-seo-israel' },
              { title: 'Reddit Marketing', desc: 'Leads + AI Visibility in recommendation threads.', link: 'reddit-marketing' },
              { title: 'AI SEO Freelancer', desc: 'Rank on Google, ChatGPT and LLM powered search engines.', link: 'ai-seo-freelancer' },
              { title: 'Technical SEO', desc: 'Crawlability, Core Web Vitals, and indexing optimization.' }
            ].map((s, i) => (
              <div key={i} className={`flex gap-4 p-5 rounded-2xl border border-gray-100 transition-all ${s.link ? 'cursor-pointer hover:border-primary/40 bg-primary/5' : 'hover:border-primary/20'}`} onClick={() => s.link && onNavigate(s.link)}>
                <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined">{s.link === 'reddit-marketing' ? 'forum' : s.link === 'ai-seo-freelancer' ? 'auto_awesome' : 'hub'}</span>
                </div>
                <div>
                  <h4 className="font-black text-navy text-sm mb-1">{s.title} {s.link && <span className="text-[9px] bg-primary text-white px-1.5 py-0.5 rounded ml-1 uppercase font-black">NEW</span>}</h4>
                  <p className="text-xs text-gray-500 leading-normal font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-navy rounded-[40px] p-8 md:p-12 text-white relative shadow-2xl overflow-hidden">
          <h3 className="text-2xl font-black mb-6 tracking-tight">The Senior Difference</h3>
          <p className="text-gray-400 font-medium mb-8 leading-relaxed">
            Direct access to senior expertise. Wharton MBA analysis applied to your organic growth by a <a href="https://israelseofreelancer.com" className="text-primary hover:text-white underline decoration-2 underline-offset-4 transition-colors">senior SEO consultant in Israel</a>.
          </p>
          <button onClick={() => onNavigate('b2b-seo-israel')} className="text-primary text-xs font-black uppercase tracking-widest hover:text-white underline underline-offset-8 decoration-2 transition-all">Explore B2B Solutions →</button>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-sm md:text-base font-black text-navy uppercase tracking-tight group-hover:text-primary transition-colors">{q}</span>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="pb-6 text-sm md:text-base text-gray-500 font-medium leading-relaxed">{a}</p>
      </div>
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

// --- Page Components ---

const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  useEffect(() => {
    document.title = "SEO Company Israel | Senior Organic Growth Expert";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      <Hero onNavigate={onNavigate} />
      <BrandLogos />
      <Stats />
      <Testimonials />
      <Services onNavigate={onNavigate} />
      <FAQ />
      <AuditForm />
    </div>
  );
};

const B2BPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  useEffect(() => {
    document.title = "B2B SEO Israel | Leads From Search | Zechariah Tokar";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      <div className="bg-primary text-white py-2 text-center text-[10px] font-black uppercase tracking-[0.2em]">
        High-Performance B2B SEO Strategy
      </div>

      <section className="relative py-12 md:py-20 border-b border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 mb-8 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-navy leading-[1.1] tracking-tighter mb-6">
                B2B SEO <span className="text-primary italic">Israel</span> <br/>
                <span className="font-light">Leads From Search</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-lg mb-8">
                Get found by buyers ready to convert on Google and AI search. We focus on pipeline, not just vanity metrics.
              </p>
              <button 
                onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg shadow-primary/20"
              >
                Schedule Your Free SEO Audit
              </button>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative w-80 h-80 bg-navy rounded-3xl shadow-2xl p-8 flex flex-col justify-center text-white border border-white/5">
                 <div className="absolute top-0 right-0 p-4 opacity-20">
                    <span className="material-symbols-outlined text-6xl">hub</span>
                 </div>
                 <div className="relative z-10">
                    <p className="text-4xl font-black text-primary mb-2">+102%</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 leading-tight">YoY Organic Revenue Growth Verified</p>
                 </div>
                 <div className="mt-8 space-y-3">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-primary"></div>
                    </div>
                    <div className="h-1.5 w-2/3 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-primary/60"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-8 tracking-tight leading-tight">Your B2B website is sitting there. Traffic trickles in. Leads don't.</h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed max-w-none">
            <p>
              I've watched Israeli startups and tech companies pour money into content that ranks for keywords nobody searches. Or worse, keywords that bring the wrong people. Meanwhile, actual buyers are typing questions into Google and ChatGPT, and your competitors show up first.
            </p>
            <p className="mt-8">
              I'm Zechariah, a B2B SEO consultant based in Beit Shemesh. I help Israeli companies targeting English-speaking markets turn search into a pipeline.
            </p>
          </div>
        </div>

        <div className="mb-24">
            <h2 className="text-3xl font-black text-navy mb-12 text-center uppercase tracking-widest text-sm">The Pipeline Methodology</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Searches That Matter", desc: "Decision makers searching 'fractional CFO' or 'AI agency' are ready to buy. We target intent, not just volume.", icon: "target" },
                    { title: "AI Search Visibility", desc: "Google AI Overviews and ChatGPT pull answers from somewhere. I make sure your brand is in the mix.", icon: "auto_awesome" },
                    { title: "Content That Converts", desc: "Not 2,000 word blog posts nobody reads. Focused pages that answer exactly what your buyers ask.", icon: "rate_review" }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-[40px] border border-gray-100 bg-soft-gray flex flex-col h-full hover:border-primary/30 transition-all">
                        <span className="material-symbols-outlined text-primary text-3xl mb-6">{item.icon}</span>
                        <h3 className="font-black text-navy text-lg mb-4">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-navy rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl mb-24">
            <h3 className="text-2xl font-black mb-6">Who I Work With</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                Israeli startups and B2B tech companies targeting the US, UK, and international markets. SaaS founders who are done bleeding money on Google Ads. 
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="font-black text-primary text-sm uppercase tracking-widest mb-2">Qualifications</h4>
                    <p className="text-xs text-gray-400 font-medium italic">English speaking, Wharton educated, and Semrush certified in Digital PR, Content Marketing, and Local SEO.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="font-black text-primary text-sm uppercase tracking-widest mb-2">Experience</h4>
                    <p className="text-xs text-gray-400 font-medium italic">Proven results across healthcare, fintech, real estate, and professional services.</p>
                </div>
            </div>
        </div>
      </section>
      <AuditForm />
    </div>
  );
};

const RedditPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  useEffect(() => {
    document.title = "Reddit Marketing Service | Leads + AI Visibility | Zechariah Tokar";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      <div className="bg-[#FF4500] text-white py-2 text-center text-[10px] font-black uppercase tracking-[0.2em]">
        Specialized High-Intent Reddit Marketing
      </div>

      <section className="relative py-12 md:py-20 border-b border-gray-100 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 mb-8 hover:text-[#FF4500] transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-navy leading-[1.1] tracking-tighter mb-6">
                Reddit <span className="text-[#FF4500]">Marketing</span> <br/>
                <span className="font-light italic text-gray-400">Leads + AI Visibility</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-lg mb-8">
                Get your brand mentioned in recommendation threads where buyers search—and where AI pulls its data.
              </p>
              <button 
                onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#FF4500] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg shadow-[#FF4500]/20"
              >
                Get Your Free Reddit Audit
              </button>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative w-80 h-auto bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-6">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="material-symbols-outlined text-xs text-gray-400">person</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-navy">u/MarketingLead</p>
                        <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">2h ago in r/startups</p>
                    </div>
                 </div>
                 <p className="text-xs font-bold text-navy mb-4 leading-relaxed">"Who's the best SEO expert for international growth?"</p>
                 <div className="bg-soft-gray p-4 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF4500]"></div>
                        <p className="text-[9px] font-black uppercase text-[#FF4500]">Recommended Result</p>
                    </div>
                    <p className="text-[10px] text-gray-600 font-medium leading-normal italic">"You should check out Zechariah Tokar. He's a Wharton MBA and did wonders for our pipeline growth..."</p>
                 </div>
                 <div className="mt-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-[#FF4500]">keyboard_arrow_up</span>
                    <span className="text-[10px] font-black text-navy">124 upvotes</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-8 tracking-tight leading-tight">
            100s of buyers are actively looking for your services on Reddit right now. Is your brand showing up?
          </h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed">
            <p>
              Business owners watch their competitors get mentioned in recommendation threads while their brand sits invisible. Those same threads get scraped by ChatGPT, Perplexity, and Google's AI Overviews.
            </p>
            <p className="mt-6 border-l-4 border-[#FF4500] pl-6 italic">
              "I track keywords across Reddit so my clients get found. When someone asks 'who's the best?' — your name shows up."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-navy p-10 rounded-[48px] text-white shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white">
                <span className="material-symbols-outlined text-sm">trending_up</span>
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">Immediate Leads</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Real people click through from helpful, upvoted comments. Capturing high-intent buyers mid-conversation.
              </p>
            </div>
          </div>

          <div className="bg-[#FF4500] p-10 rounded-[48px] text-white shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center mb-6 text-white">
                <span className="material-symbols-outlined text-sm">psychology</span>
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">AI Branding</h3>
              <p className="text-white/90 text-sm leading-relaxed font-medium">
                Your brand gets woven into the training data LLMs use to recommend providers to their users.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AuditForm />
    </div>
  );
};

const AIPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  useEffect(() => {
    document.title = "AI SEO Freelancer | Rank on Google and ChatGPT | Zechariah Tokar";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      <div className="bg-[#8B5CF6] text-white py-2 text-center text-[10px] font-black uppercase tracking-[0.2em]">
        Leading-Edge AI Search Visibility
      </div>

      <section className="relative py-12 md:py-20 border-b border-gray-100 overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 mb-8 hover:text-[#8B5CF6] transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-navy leading-[1.1] tracking-tighter mb-6">
                AI SEO <span className="text-[#8B5CF6]">Freelancer</span> <br/>
                <span className="font-light italic text-gray-400">Rank on Google & ChatGPT</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-lg mb-8">
                Get your brand showing up in AI search results, not just traditional rankings.
              </p>
              <button 
                onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#8B5CF6] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-lg shadow-[#8B5CF6]/20"
              >
                Get Your Free AI SEO Audit
              </button>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <div className="relative w-80 h-80 bg-navy rounded-3xl shadow-2xl p-8 flex flex-col justify-center text-white border border-white/5">
                 <div className="absolute top-0 right-0 p-4 opacity-20">
                    <span className="material-symbols-outlined text-6xl">auto_awesome</span>
                 </div>
                 <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-lg">smart_toy</span>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest">AI Citation Engine</p>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-gray-300">"ChatGPT & Gemini now actively reference your site as a top authority in your niche."</p>
                 </div>
                 <div className="mt-10 pt-6 border-t border-white/10 text-center">
                    <p className="text-3xl font-black text-[#8B5CF6]">+102%</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60">Revenue Growth</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-black text-navy mb-8 tracking-tight leading-tight">
            Google's AI Overviews are answering questions before anyone clicks. ChatGPT and Perplexity are becoming the new search engines.
          </h2>
          <div className="prose prose-lg text-gray-600 font-medium leading-relaxed max-w-none">
            <p>
              If your SEO strategy still focuses only on blue links, you're already behind. I'm Zechariah, an AI SEO freelancer based in Israel. I help businesses get found where buyers are actually searching now: Google, AI Overviews, ChatGPT, and LLM powered search engines.
            </p>
          </div>
        </div>

        <div className="mb-24">
            <h2 className="text-3xl font-black text-navy mb-12 text-center uppercase tracking-widest text-sm">What AI SEO Actually Means</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Understandable Content", desc: "Structured, entity-rich pages that LLMs can parse and reference.", icon: "account_tree" },
                    { title: "Reddit Visibility", desc: "AI models scrape forum data. I get your brand mentioned in the threads that matter.", icon: "forum" },
                    { title: "Traditional Foundation", desc: "AI search layers on top of Google. I optimize for both systems simultaneously.", icon: "layers" }
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-[40px] border border-gray-100 bg-soft-gray flex flex-col h-full hover:border-[#8B5CF6]/30 transition-all">
                        <span className="material-symbols-outlined text-[#8B5CF6] text-3xl mb-6">{item.icon}</span>
                        <h3 className="font-black text-navy text-lg mb-4">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="bg-[#8B5CF6] rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl mb-24">
            <h3 className="text-2xl font-black mb-6">Why Hire a Freelancer?</h3>
            <p className="text-white/80 text-lg mb-10 leading-relaxed font-medium">
                Agencies hand you off to juniors. With me, you get direct access. Wharton educated, Semrush certified, and ready to build custom packages based on your actual revenue goals.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black/10 p-6 rounded-2xl border border-white/10">
                    <h4 className="font-black text-navy text-sm uppercase tracking-widest mb-2">Efficiency</h4>
                    <p className="text-xs text-white/60 font-medium italic">Freelancer rates with consultant level strategy. No account managers. No runaround.</p>
                </div>
                <div className="bg-black/10 p-6 rounded-2xl border border-white/10">
                    <h4 className="font-black text-navy text-sm uppercase tracking-widest mb-2">Proven</h4>
                    <p className="text-xs text-white/60 font-medium italic">Applied to healthcare, B2B services, real estate, and tech startups.</p>
                </div>
            </div>
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
          <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-sm mb-4">
            Expert organic growth strategies led by <a href="https://israelseofreelancer.com" className="text-primary hover:text-white transition-colors">Zechariah Tokar</a>. Direct senior consultation for businesses ready to dominate search results globally.
          </p>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            SEO Company Israel is operated by Zechariah Tokar, an <a href="https://israelseofreelancer.com" className="text-primary hover:text-white transition-colors">Israel SEO Freelancer</a> and senior SEO consultant.
          </p>
        </div>
        
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.2em] text-primary mb-6">Explore</h4>
          <ul className="text-xs space-y-4 font-bold text-gray-500 uppercase tracking-widest">
            <li><button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors">Global Strategy</button></li>
            <li><button onClick={() => onNavigate('b2b-seo-israel')} className="hover:text-primary transition-colors">B2B SEO</button></li>
            <li><button onClick={() => onNavigate('reddit-marketing')} className="hover:text-[#FF4500] transition-colors">Reddit Marketing</button></li>
            <li><button onClick={() => onNavigate('ai-seo-freelancer')} className="hover:text-[#8B5CF6] transition-colors">AI SEO Freelancer</button></li>
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
        <p className="text-[9px] font-bold text-gray-700 uppercase tracking-widest italic text-center">Engineered for Results by Zechariah Tokar.</p>
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
        {currentPage === 'home' ? (
          <HomePage onNavigate={setCurrentPage} />
        ) : currentPage === 'reddit-marketing' ? (
          <RedditPage onNavigate={setCurrentPage} />
        ) : currentPage === 'ai-seo-freelancer' ? (
          <AIPage onNavigate={setCurrentPage} />
        ) : currentPage === 'b2b-seo-israel' ? (
          <B2BPage onNavigate={setCurrentPage} />
        ) : (
          <HomePage onNavigate={setCurrentPage} />
        )}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;