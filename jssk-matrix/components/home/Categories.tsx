import { Film, Layers, Scan, Droplet, Hand, ShoppingBag } from 'lucide-react';

export default function Categories() {
  return (
    <section className="py-24 border-y bg-black border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-white">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <a href="#" className="group glass-panel rounded-lg p-4 text-center transition-all duration-500 hover:bg-white/[0.03] hover:shadow-[0_0_80px_rgba(59,130,246,0.4)] hover:border-blue-500/30">
            <div className="mb-2 flex justify-center text-blue-400"><Film className="w-6 h-6" /></div>
            <span className="text-sm font-medium group-hover:text-white text-slate-400">BOPP Thermal</span>
          </a>

          <a href="#" className="group glass-panel rounded-lg p-4 text-center transition-all duration-500 hover:bg-white/[0.03] hover:shadow-[0_0_80px_rgba(168,85,247,0.4)] hover:border-purple-500/30">
            <div className="mb-2 flex justify-center text-purple-400"><Layers className="w-6 h-6" /></div>
            <span className="text-sm font-medium group-hover:text-white text-slate-400">PET Thermal</span>
          </a>

          <a href="#" className="group glass-panel rounded-lg p-4 text-center transition-all duration-500 hover:bg-white/[0.03] hover:shadow-[0_0_80px_rgba(236,72,153,0.4)] hover:border-pink-500/30">
            <div className="mb-2 flex justify-center text-pink-400"><Scan className="w-6 h-6" /></div>
            <span className="text-sm font-medium group-hover:text-white text-slate-400">Holographic</span>
          </a>

          <a href="#" className="group glass-panel rounded-lg p-4 text-center transition-all duration-500 hover:bg-white/[0.03] hover:shadow-[0_0_80px_rgba(6,182,212,0.4)] hover:border-cyan-500/30">
            <div className="mb-2 flex justify-center text-cyan-400"><Droplet className="w-6 h-6" /></div>
            <span className="text-sm font-medium group-hover:text-white text-slate-400">WET Films</span>
          </a>

          <a href="#" className="group glass-panel rounded-lg p-4 text-center transition-all duration-500 hover:bg-white/[0.03] hover:shadow-[0_0_80px_rgba(245,158,11,0.4)] hover:border-amber-500/30">
            <div className="mb-2 flex justify-center text-amber-400"><Hand className="w-6 h-6" /></div>
            <span className="text-sm font-medium group-hover:text-white text-slate-400">Soft Touch</span>
          </a>

          <a href="#" className="group glass-panel rounded-lg p-4 text-center transition-all duration-500 hover:bg-white/[0.03] hover:shadow-[0_0_80px_rgba(16,185,129,0.4)] hover:border-emerald-500/30">
            <div className="mb-2 flex justify-center text-emerald-400"><ShoppingBag className="w-6 h-6" /></div>
            <span className="text-sm font-medium group-hover:text-white text-slate-400">Packaging</span>
          </a>

        </div>
      </div>
    </section>
  );
}