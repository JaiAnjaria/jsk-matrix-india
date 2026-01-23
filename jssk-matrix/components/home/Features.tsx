import { MapPin, Users, CheckSquare } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center text-white">Why JSSK Matrix?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-6 rounded-xl border border-white/5 transition-all duration-500 hover:shadow-[0_0_80px_rgba(59,130,246,0.4)] hover:border-blue-500/30 flex gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border bg-blue-500/10 border-blue-500/10">
              <MapPin className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1 text-white">One-Stop Solution</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Complete range of films for Digital, Offset &amp; Commercial Printers under one roof.</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-white/5 transition-all duration-500 hover:shadow-[0_0_80px_rgba(168,85,247,0.4)] hover:border-purple-500/30 flex gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border bg-blue-500/10 border-blue-500/10">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1 text-white">Customer First</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Customized sizes and tailored solutions based on your specific project needs.</p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-white/5 transition-all duration-500 hover:shadow-[0_0_80px_rgba(16,185,129,0.4)] hover:border-emerald-500/30 flex gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border bg-blue-500/10 border-blue-500/10">
              <CheckSquare className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1 text-white">Certified Quality</h3>
              <p className="text-slate-500 text-sm leading-relaxed">We only deal in company-packed, branded rolls. No compromise on authenticity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}