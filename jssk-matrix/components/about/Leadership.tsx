import { TrendingUp, BarChart3, Scale } from 'lucide-react';

export default function Leadership() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-medium text-sm tracking-wider uppercase mb-2 block">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Meet The Directors</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Sonal Rawat Profile */}
          <div className="glass-panel rounded-2xl p-1 border border-white/10 relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="bg-black/40 rounded-xl p-8 h-full relative z-10 flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Sonal Rawat</h3>
                <p className="text-blue-400 font-medium text-sm mb-4">Director</p>
                <div className="flex flex-wrap gap-2">
                  {["22+ Years Experience", "Ex-Xerox", "Ex-Hi-Tech Systems"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                A veteran with over two decades in the print industry. Sonal brings extensive experience from roles at Xerox and Hi-Tech Systems. Under his leadership, JSSK has built a massive PAN-India client network.
              </p>

              {/* Growth Graph Visualization */}
              <div className="bg-white/[0.02] rounded-xl p-6 border border-white/5 mt-auto">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-6 font-medium">Revenue Growth Journey</p>
                <div className="flex items-end gap-8 h-32 px-4 pb-2 border-b border-white/10 relative">
                  {/* 2020 Bar */}
                  <div className="w-1/3 flex flex-col justify-end gap-2 group/bar">
                    <div className="text-xs text-slate-500 text-center mb-1 group-hover/bar:text-white transition-colors">₹43L</div>
                    <div className="w-full bg-slate-800 rounded-t-sm relative overflow-hidden animate-bar" style={{'--h': '25%'} as React.CSSProperties}></div>
                    <div className="text-xs text-slate-600 text-center mt-2">FY 2020</div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="mb-8 text-slate-600">
                    <TrendingUp className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  {/* 2024 Bar */}
                  <div className="w-1/3 flex flex-col justify-end gap-2 group/bar">
                    <div className="text-sm text-blue-400 font-semibold text-center mb-1 drop-shadow-lg">₹300L+</div>
                    <div className="w-full bg-gradient-to-t from-blue-900 to-blue-500 rounded-t-sm relative overflow-hidden animate-bar shadow-[0_0_20px_rgba(59,130,246,0.3)]" style={{'--h': '100%'} as React.CSSProperties}></div>
                    <div className="text-xs text-white font-medium text-center mt-2">FY 2023-24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bimla Jain Profile */}
          <div className="glass-panel rounded-2xl p-1 border border-white/10 relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="bg-black/40 rounded-xl p-8 h-full relative z-10 flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Bimla Jain</h3>
                <p className="text-indigo-400 font-medium text-sm mb-4">Director (Finance & Operations)</p>
                <div className="flex flex-wrap gap-2">
                  {["Financial Management", "Operations", "Governance"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                The backbone of JSSK's operational stability. Bimla Jain oversees financial management, profitability tracking, and business governance, ensuring that the company's rapid growth is supported by a solid foundation.
              </p>

              <div className="mt-auto grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 transition-colors hover:bg-white/[0.05] hover:border-indigo-500/30">
                  <BarChart3 className="w-6 h-6 text-indigo-500 mb-3" strokeWidth={1.5} />
                  <h4 className="text-white text-sm font-medium">Profitability</h4>
                  <p className="text-xs text-slate-600 mt-1">Strategic oversight</p>
                </div>
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 transition-colors hover:bg-white/[0.05] hover:border-indigo-500/30">
                  <Scale className="w-6 h-6 text-indigo-500 mb-3" strokeWidth={1.5} />
                  <h4 className="text-white text-sm font-medium">Governance</h4>
                  <p className="text-xs text-slate-600 mt-1">Compliance & ethics</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}