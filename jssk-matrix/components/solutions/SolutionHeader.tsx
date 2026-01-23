import { Layers, Star } from 'lucide-react';

export default function SolutionHeader() {
  return (
    // Added 'relative' and 'overflow-hidden' to contain the background blobs
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 royal-gradient border-b border-white/5 overflow-hidden">
      
      {/* ADDED: Background Glows to match Home & About headers */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[100px] pointer-events-none bg-blue-950/20"></div>
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[80px] pointer-events-none bg-blue-950/10"></div>

      {/* Added 'relative z-10' to ensure content sits above the glow */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="animate-entry delay-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
              <Star className="w-3 h-3" />
              Value added services
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
             Tailored Industry Solutions
            </h1>
            <p className="text-slate-400 text-lg font-light max-w-2xl">
           Beyond just products, we provide customized strategies designed to improve ROI, streamline supply chains, and solve industry-specific challenges.      </p>
          </div>
        </div>
      </div>
    </section>
  );
}