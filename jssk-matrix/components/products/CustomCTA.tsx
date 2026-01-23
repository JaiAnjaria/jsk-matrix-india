import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CustomCTA() {
  return (
    <section className="py-20 border-t border-white/5 relative overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
          Can't find what you're looking for?
        </h2>
        <p className="text-slate-500 mb-8 font-light">
          We offer customized lamination solutions tailored to your specific technical requirements.
        </p>
        <Link 
          href="/quote" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-slate-200 transition-colors text-sm"
        >
          Get a Custom Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}