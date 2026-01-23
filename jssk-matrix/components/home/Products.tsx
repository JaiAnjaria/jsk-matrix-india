import { Layers, Box, Sparkles, Utensils } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="font-medium text-sm tracking-wider uppercase mb-2 block text-blue-500">Our Portfolio</span>
          <h2 className="text-3xl font-semibold tracking-tight text-white">What We Deal In</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel p-6 rounded-xl hover:bg-white/[0.03] transition-all cursor-default group border border-white/5 hover:border-blue-500/20">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-blue-900/20">
              <Layers className="text-blue-400" />
            </div>
            <h3 className="font-medium mb-1 text-white">BOPP Thermal Films</h3>
            <p className="text-sm text-slate-500">Gloss, Matt &amp; Silky finishes for premium lamination.</p>
          </div>

          <div className="glass-panel p-6 rounded-xl hover:bg-white/[0.03] transition-all cursor-default group border hover:border-purple-500/20 border-white/5">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-purple-900/20">
              <Box className="text-purple-400" />
            </div>
            <h3 className="font-medium mb-1 text-white">PET / BOPET Films</h3>
            <p className="text-sm text-slate-500">High tensile strength films for rigid packaging.</p>
          </div>

          <div className="glass-panel p-6 rounded-xl hover:bg-white/[0.03] transition-all cursor-default group border hover:border-cyan-500/20 border-white/5">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-cyan-900/20">
              <Sparkles className="text-cyan-400" />
            </div>
            <h3 className="font-medium mb-1 text-white">Specialty Films</h3>
            <p className="text-sm text-slate-500">Velvet, Scuff-free, Holographic &amp; Metallic options.</p>
          </div>

          <div className="glass-panel p-6 rounded-xl hover:bg-white/[0.03] transition-all cursor-default group border hover:border-emerald-500/20 border-white/5">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-emerald-900/20">
              <Utensils className="text-emerald-400" />
            </div>
            <h3 className="font-medium mb-1 text-white">Food Packaging</h3>
            <p className="text-sm text-slate-500">LDPE, MET PET, CPP &amp; Cake Base Solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}