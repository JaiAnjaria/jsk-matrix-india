import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="md:pt-48 md:pb-32 overflow-hidden royal-gradient pt-32 pb-20 relative">
      {/* Restored Original Glows (Darker Blue) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[100px] pointer-events-none bg-blue-950/20"></div>
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[80px] pointer-events-none bg-blue-950/10"></div>

      <div className="text-center max-w-7xl z-10 mx-auto px-6 relative mt-25">
       
        <h1 className="animate-entry delay-200 md:text-6xl lg:text-7xl leading-[1.1] text-glow text-4xl font-extralight text-white tracking-tight mb-6">
          Bridging gaps in   &amp; <br className="hidden md:block" />Print and Packaging
        </h1>
        
        <p className="animate-entry delay-300 md:text-xl leading-relaxed text-lg font-light text-slate-500 max-w-2xl mx-auto mb-10">
         Founded by industry professionals to deliver specialized, high-quality branded lamination films backed by extensive market research and technical expertise.
        </p>

       <div className="animate-entry delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
  
  {/* Button 1: "Request a Quote" with Moving Beam Border */}

  {/* Button 2: "View Our Products" with Glass Effect */}

</div>
      </div>
      
      <div className="bg-gradient-to-t to-transparent from-black via-black/80 w-full h-32 absolute bottom-0 left-0"></div>
    </section>
  );
}