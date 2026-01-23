import { XCircle, CheckCircle2 } from 'lucide-react';

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none bg-blue-900/5"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Facing Lamination Issues? <br /><span className="text-blue-500">We Fix Them.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-[#0a0a0a] border relative border-red-900/20 transition-all duration-500 hover:shadow-[0_0_80px_rgba(220,38,38,0.4)] hover:border-red-500/30">
            <div className="absolute -top-3 left-8 px-3 py-1 border text-red-500 text-xs font-semibold rounded-full uppercase tracking-wider bg-red-950/30 border-red-900/30">
              Common Struggles
            </div>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3 text-slate-500">
                <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-900" />
                <span>Wrong slitted rolls &amp; Grammage mismatch</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-900" />
                <span>Dusty material causing print defects</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-900" />
                <span>Weight authenticity &amp; Gluing issues</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500">
                <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-900" />
                <span>Frequent Delamination</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border relative shadow-[0_0_50px_rgba(30,27,75,0.1)] border-blue-500/10 bg-blue-950/5 transition-all duration-500 hover:shadow-[0_0_80px_rgba(37,99,235,0.4)] hover:border-blue-500/30">
            <div className="absolute -top-3 left-8 px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider shadow-lg text-white bg-blue-600 shadow-blue-900/20">
              The JSSK Standard
            </div>
            <p className="text-lg font-medium mb-6 mt-2 text-slate-200">
              Company-packed, ISO-certified rolls with correct grammage and sealed weight.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" />
                <span>Authentic sourcing from top global brands</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" />
                <span>Dust-free, company-sealed packaging</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" />
                <span>Customized slitting for error-free lamination</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}