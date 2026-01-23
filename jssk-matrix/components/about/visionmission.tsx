import { Eye, Target, Compass, Flag } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 transform">
              <Eye className="w-32 h-32 text-blue-500" strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 border border-blue-500/10 group-hover:border-blue-500/30 transition-colors">
                <Target className="text-blue-400 w-6 h-6" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed font-light">
                To deliver the <span className="text-white font-medium">best quality products</span> and service experience, backed by innovation, people, and refined processes. We aim to set the benchmark for reliability in the lamination supply chain.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group transition-all duration-500 hover:border-indigo-500/30 hover:shadow-[0_0_50px_rgba(99,102,241,0.15)]">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 transform">
              <Compass className="w-32 h-32 text-indigo-500" strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-indigo-900/20 rounded-lg flex items-center justify-center mb-6 border border-indigo-500/10 group-hover:border-indigo-500/30 transition-colors">
                <Flag className="text-indigo-400 w-6 h-6" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed font-light">
                To provide <span className="text-white font-medium">focused solutions</span> that enhance customer value through continuous improvement, ownership, and unwavering customer centricity in every transaction.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}