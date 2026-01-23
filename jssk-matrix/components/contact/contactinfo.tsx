import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactInfo() {
  return (
    <div className="glass-panel p-6 rounded-2xl h-full flex flex-col justify-between border border-white/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
      <div>
        <h2 className="text-white font-medium text-lg mb-6 flex items-center gap-2">
          Contact Information
        </h2>
        
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Office Address</p>
              <h3 className="text-white font-medium mb-1">JSSK MATRIX INDIA PVT LTD</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Shop No 21/170, Ground Floor<br />
                Unnath Nagar 4, Motilal Nagar 3<br />
                M G Road, Goregoan (West)<br />
                Mumbai 400104<br />
                <span className="text-slate-500 text-xs mt-1 block">Landmark - Opp Jain Hospital</span>
              </p>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                <Link href="tel:+919223780193" className="text-white text-sm hover:text-blue-400 transition-colors">+91 92237 80193</Link>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Email</p>
                <Link href="mailto:sonal@jsskmatrix.com" className="text-white text-sm hover:text-blue-400 transition-colors break-all">sonal@jsskmatrix.com</Link>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 pt-6 border-t border-white/5 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
              <Clock className="w-5 h-5" />
            </div>
            <div className="w-full">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Working Hours</p>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2 mb-2">
                <span className="text-slate-300">Monday – Saturday</span>
                <span className="text-white font-medium">10:30am – 6:30pm</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300">Sunday</span>
                <span className="text-red-400 text-xs bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}