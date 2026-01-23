import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
export default function Hero() {
  return (
    <section className="md:pt-48 md:pb-32 overflow-hidden royal-gradient pt-32 pb-20 relative">
      {/* Restored Original Glows (Darker Blue) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[100px] pointer-events-none bg-blue-950/20"></div>
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[80px] pointer-events-none bg-blue-950/10"></div>

      <div className="text-center max-w-7xl z-10 mx-auto px-6 relative">
        <div className="animate-entry delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 backdrop-blur-md bg-slate-900/50 border-white/5 text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-500"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Pan India Supply Chain
        </div>

        <h1 className="animate-entry delay-200 md:text-6xl lg:text-7xl leading-[1.1] text-glow text-4xl font-extralight text-white tracking-tight mb-6">
          Leaders in Thermal &amp; <br className="hidden md:block" /> Lamination Film Solutions
        </h1>
        
        <p className="animate-entry delay-300 md:text-xl leading-relaxed text-lg font-light text-slate-500 max-w-2xl mx-auto mb-10">
          Customized BOPP, PET, BOPET, BOPPA &amp; Specialty Films for Digital, Offset, Packaging &amp; Commercial Printers Across India.
        </p>

       <div className="animate-entry delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
  
  {/* Button 1: "Request a Quote" with Moving Beam Border */}
  <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none group">
    {/* Spinning Gradient Layer */}
    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#2563eb_50%,#000000_100%)]"></span>
    
    {/* Content Layer - Added 'relative z-10' to stay on top */}
    <Link href='/quote' className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-900 gap-2">
      Request a Quote
      <ChevronRight className="w-4 h-4" />
    </Link>
  </button>

  {/* Button 2: "View Our Products" with Glass Effect */}
  <Link href='/products' className="w-full sm:w-auto px-8 py-3 glass-panel  cursor-pointer rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20">
    View Our Products
  </Link>

</div>
      </div>
      
      <div className="bg-gradient-to-t to-transparent from-black via-black/80 w-full h-32 absolute bottom-0 left-0"></div>
    </section>
  );
}