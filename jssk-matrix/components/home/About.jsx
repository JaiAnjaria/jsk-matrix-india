import { Award, Truck, Scissors, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-6 text-white">Precision. Innovation. <span className="text-blue-500">Trust.</span></h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              JSSK Matrix India Pvt. Ltd. is a leading distributor of high-quality branded lamination and packaging films, delivering customized solutions to the printing, packaging, and commercial lamination industries across India.
            </p>
            <p className="text-slate-500 leading-relaxed">
              With a focus on innovation, transparency, and customer-centricity, we provide reliable products backed by authentic sourcing and precision slitting.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-blue-500/5"></div>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <Award className="w-8 h-8 mb-2 text-blue-500" />
                <h3 className="font-medium text-white">ISO Certified</h3>
                <p className="text-xs text-slate-600">Quality Guaranteed</p>
              </div>
              <div className="flex flex-col gap-2">
                <Truck className="w-8 h-8 mb-2 text-blue-500" />
                <h3 className="font-medium text-white">PAN India</h3>
                <p className="text-xs text-slate-600">Fast Delivery</p>
              </div>
              <div className="flex flex-col gap-2">
                <Scissors className="w-8 h-8 mb-2 text-blue-500" />
                <h3 className="font-medium text-white">Custom Slitting</h3>
                <p className="text-xs text-slate-600">Precision Sizes</p>
              </div>
              <div className="flex flex-col gap-2">
                <ShieldCheck className="w-8 h-8 mb-2 text-blue-500" />
                <h3 className="font-medium text-white">Authentic</h3>
                <p className="text-xs text-slate-600">100% Brand Original</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}