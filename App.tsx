
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
          <p className="text-[11px] font-black text-primary tracking-tight uppercase leading-none mt-0.5">seocompanyisrael.com</p>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-navy">
        <a href="#wharton-strategy" className="hover:text-primary transition-colors">Framework</a>
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#testimonials" className="hover:text-primary transition-colors">Success Cases</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="tel:0538484641" className="hidden sm:flex items-center gap-2 text-xs font-black text-navy hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-sm">call</span>
          053-848-4641
        </a>
        <button 
          onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-navy text-white text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-full hover:bg-black transition-all active:scale-95 shadow-lg shadow-navy/20"
        >
          Free Audit
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-16 pb-24 md:pt-28 md:pb-32 bg-white overflow-hidden hero-gradient">
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 bg-primary/5 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Global SEO Expert | seocompanyisrael.com
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-navy leading-[1.05] tracking-tight mb-8">
            Scale Smarter. <br /> <span className="text-primary italic">Rank Higher.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-xl leading-relaxed mb-12">
            Wharton-level analytical sophistication applied to organic growth. I transform high-potential websites into market leaders for US and international search.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-16 px-10 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95 cta-pulse"
            >
              Start Free SEO Audit
            </button>
            <a 
              href="https://calendly.com/zack-tokar/consultation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-16 px-10 border-2 border-gray-200 text-navy font-black rounded-2xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">event_available</span>
              Free Consultation
            </a>
          </div>

          <div className="flex items-center gap-8 border-t border-gray-100 pt-10">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/100?u=seo${i}`} alt="Client" />
              ))}
            </div>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
              Trusted by <span className="text-navy">Global Revenue Leaders</span>
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
          <div className="relative bg-navy rounded-[40px] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] lg:aspect-square flex items-center justify-center">
             <img 
               src="https://images.unsplash.com/photo-1551288049-bbda48658aba?q=80&w=2070&auto=format&fit=crop" 
               alt="Strategic Growth Analytics" 
               className="w-full h-full object-cover opacity-90 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-navy via-transparent to-primary/20"></div>
             
             <div className="absolute top-8 right-8 p-5 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">
                <p className="text-[10px] font-black uppercase text-primary tracking-[0.2em] mb-1">Expert Framework</p>
                <p className="text-xl font-black text-white leading-none">Wharton Strategy</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhartonStrategy = () => (
  <section id="wharton-strategy" className="py-32 bg-navy relative overflow-hidden grid-pattern">
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-primary text-[11px] font-black uppercase tracking-[0.5em] mb-6">The High-Level Framework</h2>
        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">Sophisticated Growth. <br />Measured ROI.</h3>
        <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
          Traditional agencies focus on traffic. I focus on <span className="text-white">yield</span>. My framework bridges the gap between technical search signals and bottom-line revenue.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {[
          {
            step: "01",
            title: "Economic Intent Arbitrage",
            desc: "We analyze high-value user behavior to target keywords that indicate ready-to-buy intent, not just top-of-funnel information gathering.",
            icon: "payments"
          },
          {
            step: "02",
            title: "Architectural Scalability",
            desc: "Full infrastructure optimization ensures your site isn't just fast—it's designed for Google's crawlers to prioritize your most profitable pages.",
            icon: "architecture"
          },
          {
            step: "03",
            title: "Topical Semantic Authority",
            desc: "Using entity-based SEO, we build a web of relevance that forces Google to recognize your brand as the primary authority in your industry.",
            icon: "hub"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-md p-12 rounded-[48px] border border-white/10 hover:border-primary/40 transition-all group relative">
            <div className="absolute top-10 right-10">
              <span className="material-symbols-outlined text-primary/30 text-5xl group-hover:text-primary transition-colors">{item.icon}</span>
            </div>
            <span className="text-7xl font-black text-white/5 mb-8 block">{item.step}</span>
            <h4 className="text-2xl font-black text-white mb-6 leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
            <p className="text-gray-400 text-base leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AuditForm = () => {
  const [domain, setDomain] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain || !email) return;
    setLoading(true);
    setError(null);

    try {
      const aiResult = await generateSEOStrategy(domain);
      setStrategy(aiResult);

      await fetch('https://formspree.io/f/mpwvyzbr', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: domain, audit_preview: aiResult, source: 'seocompanyisrael.com' })
      });
    } catch (err) { 
      console.error(err);
      setError("Analysis tool is under maintenance. Please book a call directly below.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit-form" className="max-w-6xl mx-auto px-4 py-32">
      <div className="bg-navy rounded-[60px] p-8 md:p-20 relative overflow-hidden text-white shadow-3xl">
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
               <p className="text-[10px] font-black uppercase tracking-widest text-primary">Senior-Level Review</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Generate Your Preliminary Audit.</h2>
            <p className="text-gray-400 text-lg mb-12 font-medium leading-relaxed">Stop guessing where your traffic goes. Get a high-level strategic overview of your organic growth potential from a senior consultant today.</p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="material-symbols-outlined text-primary">monitoring</span>
                <p className="font-bold text-sm">ROI Analysis</p>
                <p className="text-xs text-gray-500">Value-first keyword mapping.</p>
              </div>
              <div className="space-y-2">
                <span className="material-symbols-outlined text-primary">speed</span>
                <p className="font-bold text-sm">Tech Health</p>
                <p className="text-xs text-gray-500">Infrastructure scanning.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-3xl p-10 rounded-[48px] border border-white/10 shadow-2xl">
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-bold rounded-xl text-center">
                {error}
              </div>
            )}

            {!strategy ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Target Website URL</label>
                  <input 
                    type="url" required value={domain} onChange={(e) => setDomain(e.target.value)}
                    className="w-full bg-white/5 border-white/10 text-white rounded-2xl h-16 px-6 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-700 font-medium" 
                    placeholder="https://yoursite.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Direct Work Email</label>
                  <input 
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border-white/10 text-white rounded-2xl h-16 px-6 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-700 font-medium" 
                    placeholder="name@company.com"
                  />
                </div>
                <button 
                  disabled={loading} type="submit"
                  className="w-full bg-primary h-16 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/30"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin material-symbols-outlined text-lg">sync</span>
                      Running Analysis
                    </>
                  ) : 'Generate My Strategy Audit'}
                </button>
              </form>
            ) : (
              <div className="animate-in fade-in zoom-in duration-700">
                <div className="text-primary font-black uppercase text-[10px] tracking-widest mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  Strategy Report Ready
                </div>
                <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line font-medium italic border-l-2 border-primary/30 pl-6 py-4 mb-10 bg-white/5 rounded-r-2xl">
                  {strategy}
                </div>
                <div className="pt-8 border-t border-white/10 flex flex-col gap-5">
                   <p className="text-xs text-center text-gray-500 font-black uppercase tracking-widest">Next Step: Implementation Call</p>
                   <a href="https://calendly.com/zack-tokar/consultation" target="_blank" className="w-full bg-white text-navy h-16 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-gray-100 transition-all shadow-xl">
                      <span className="material-symbols-outlined text-xl">event_available</span>
                      Book Strategy Consultation
                   </a>
                   <div className="flex justify-center gap-8">
                      <a href="tel:0538484641" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs">call</span>
                        053-848-4641
                      </a>
                   </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const BrandLogos = () => (
  <section className="bg-white border-b border-gray-100 py-16 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-12">Global Results for Ambitious Brands</p>
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        <span className="font-serif text-3xl font-bold tracking-tighter">JLUXURY</span>
        <span className="font-sans text-2xl font-black italic">Whitsunday</span>
        <span className="font-serif text-3xl tracking-widest font-light">ADORNA</span>
        <span className="font-sans text-lg font-black uppercase">North Star Ranch</span>
        <span className="font-serif text-3xl font-black">Z-STANDER</span>
        <span className="font-sans text-xl font-bold">STAND-UP NY</span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-navy pt-32 pb-16 text-white border-t border-white/5">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-20 mb-24">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white text-navy p-2 rounded-xl">
              <span className="material-symbols-outlined text-lg">insights</span>
            </div>
            <h3 className="font-black uppercase tracking-tight text-2xl">seocompanyisrael.com</h3>
          </div>
          <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-md">
            Zechariah Tokar provides specialized SEO consultancy for businesses ready to win in competitive US and global markets.
          </p>
          <div className="mt-10 flex items-center gap-6">
             <a href="https://linkedin.com/in/zechariah-tokar-167b7672/" target="_blank" className="text-gray-500 hover:text-primary transition-all p-3 bg-white/5 rounded-full">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-primary mb-10">Direct Connect</h4>
          <div className="space-y-8">
            <div>
              <p className="text-[9px] font-black uppercase text-gray-600 mb-2 tracking-widest">Primary Office</p>
              <p className="text-sm font-bold text-gray-300">Israel Based | Global Operations</p>
            </div>
            <div>
              <p className="text-[9px] font-black uppercase text-gray-600 mb-2 tracking-widest">Call / WhatsApp</p>
              <a href="tel:0538484641" className="text-xl font-black text-white hover:text-primary transition-colors tracking-tight">053-848-4641</a>
            </div>
            <div>
              <a href="https://calendly.com/zack-tokar/consultation" target="_blank" className="text-primary text-[10px] font-black uppercase tracking-widest hover:text-white transition-all underline decoration-2 underline-offset-8">Book Strategic Audit</a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-black uppercase text-[10px] tracking-[0.3em] text-primary mb-10">Expertise</h4>
          <ul className="text-xs space-y-5 font-black text-gray-500 uppercase tracking-widest">
            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary rounded-full"></span> Wharton MBA Lead</li>
            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary rounded-full"></span> 10+ Years Senior SEO</li>
            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary rounded-full"></span> 7-Figure Revenue Yield</li>
            <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary rounded-full"></span> Zero Outsourcing</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.4em]">© 2024 seocompanyisrael.com | Built for Growth.</p>
        <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.2em] text-gray-600">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#audit-form" className="text-primary hover:text-white transition-colors">Free Audit</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <BrandLogos />
        <WhartonStrategy />
        <AuditForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
