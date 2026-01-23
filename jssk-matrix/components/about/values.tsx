import { Award, Users, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Values() {
  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Built on Research. Driven by Values.</h2>
        <p className="text-slate-500 leading-relaxed font-light">
          JSSK bridges critical gaps in digital, offset, packaging, labeling, and commercial printing segments. Our foundation rests on continuous market research, ensuring we don't just supply products, but provide solutions that solve real-world problems for printers across India.
        </p>
        
        <div className="mt-12 flex justify-center gap-8 opacity-50">
          <Award className="w-8 h-8 text-slate-600 hover:text-blue-500 transition-colors duration-300" strokeWidth={1.5} />
          <Users className="w-8 h-8 text-slate-600 hover:text-blue-500 transition-colors duration-300" strokeWidth={1.5} />
          <TrendingUp className="w-8 h-8 text-slate-600 hover:text-blue-500 transition-colors duration-300" strokeWidth={1.5} />
          <ShieldCheck className="w-8 h-8 text-slate-600 hover:text-blue-500 transition-colors duration-300" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}