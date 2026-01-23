import { Printer, Zap, TrendingUp, Layers, Factory, CheckCircle2, CreditCard, Ruler, Utensils, PackageCheck, Palette, Tag, ShieldCheck, HandMetal, Sparkles } from 'lucide-react';

export default function SolutionsGrid() {
  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1. Digital Printer Solutions */}
          <div className="solution-card glass-panel rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.03] group relative overflow-hidden transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <Printer className="w-32 h-32 text-blue-500" strokeWidth={1.5} />
            </div>
            
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
              <Zap className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Digital Printer Solutions</h3>
            <p className="text-slate-500 font-light text-sm mb-8">
              Precision-engineered rolls for short-run and on-demand printing businesses.
            </p>

            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3 block">Specifications</span>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between text-sm text-slate-300 border-b border-white/5 pb-2">
                    <span>1" Core Length</span>
                    <span className="font-medium text-white">200 meters</span>
                  </li>
                  <li className="flex items-center justify-between text-sm text-slate-300 border-b border-white/5 pb-2">
                    <span>3" Core Length</span>
                    <span className="font-medium text-white">500 meters</span>
                  </li>
                  <li className="flex items-center justify-between text-sm text-slate-300 border-b border-white/5 pb-2">
                    <span>Available Widths</span>
                    <span className="font-medium text-white">12" / 12.5" / 13"</span>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3 block">Finishes & ROI</span>
                <div className="flex gap-2 mb-4">
                  {["Gloss", "Matt", "Velvet"].map((finish) => (
                    <span key={finish} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                      {finish}
                    </span>
                  ))}
                </div>
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm text-blue-200 font-medium flex gap-2">
                  <TrendingUp className="w-5 h-5 shrink-0" />
                  Customized films designed specifically to improve your Return on Investment.
                </div>
              </div>
            </div>
          </div>

          {/* 2. Offset Printer Solutions */}
          <div className="solution-card glass-panel rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.03] group relative overflow-hidden transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <Layers className="w-32 h-32 text-emerald-500" strokeWidth={1.5} />
            </div>

            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
              <Factory className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Offset Printer Solutions</h3>
            <p className="text-slate-500 font-light text-sm mb-8">
              High-volume supply chain solutions tailored for commercial offset presses.
            </p>

            <div className="space-y-4 relative z-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-sm">Bulk Supply Model</h4>
                  <p className="text-slate-500 text-xs mt-1">Direct manufacturer-backed sourcing with highly competitive pricing structure.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-sm">Flexible Credit Terms</h4>
                  <p className="text-slate-500 text-xs mt-1">
                    We support your cash flow with credit-based supply options ranging from <span className="text-emerald-400 font-semibold">60 to 90 days</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-sm">Custom Sizing</h4>
                  <p className="text-slate-500 text-xs mt-1">Full support for odd and custom sizes to minimize wastage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Packaging & Food Industry */}
          <div className="solution-card glass-panel rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 hover:bg-white/[0.03] group relative overflow-hidden transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <Utensils className="w-32 h-32 text-orange-500" strokeWidth={1.5} />
            </div>

            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-400">
              <PackageCheck className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Packaging & Food Industry</h3>
            <p className="text-slate-500 font-light text-sm mb-8">
              Compliance-ready films for safe and durable food packaging applications.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
              {["LDPE", "MET PET CC", "CPP"].map((material) => (
                <div key={material} className="p-3 rounded bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Material</span>
                  <span className="text-sm font-medium text-white">{material}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 relative z-10">
              {[
                "Certified Food-Grade Packaging",
                "Custom Microns Available",
                "Tailored Widths for FFS Machines"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* 4. Commercial & Label Industry */}
          <div className="solution-card glass-panel rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 hover:bg-white/[0.03] group relative overflow-hidden transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <Palette className="w-32 h-32 text-pink-500" strokeWidth={1.5} />
            </div>

            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6 text-pink-400">
              <Tag className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Commercial & Label</h3>
            <p className="text-slate-500 font-light text-sm mb-8">
              Premium aesthetic finishes for luxury labels, tags, and commercial branding.
            </p>

            <div className="space-y-4 relative z-10">
              <div className="group/item p-4 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5 hover:border-pink-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-1">
                  <ShieldCheck className="w-4 h-4 text-pink-400" />
                  <span className="text-white font-medium text-sm">Anti-Scratch</span>
                </div>
                <p className="text-xs text-slate-500 pl-7">Durable finish that withstands handling and transit.</p>
              </div>

              <div className="group/item p-4 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5 hover:border-pink-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-1">
                  <HandMetal className="w-4 h-4 text-pink-400" />
                  <span className="text-white font-medium text-sm">Soft-Touch / Velvet</span>
                </div>
                <p className="text-xs text-slate-500 pl-7">Luxurious tactile feel for premium product segments.</p>
              </div>

              <div className="group/item p-4 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5 hover:border-pink-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-1">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span className="text-white font-medium text-sm">Holographic Films</span>
                </div>
                <p className="text-xs text-slate-500 pl-7">Security and branding solutions with light-diffracting patterns.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}