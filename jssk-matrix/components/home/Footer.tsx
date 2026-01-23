import Link from 'next/link';
import { Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-4 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl flex items-center justify-center text-white font-semibold tracking-tighter ring-1 ring-white/10 shadow-lg shadow-blue-900/20">
                J
              </div>
              <span className="text-white font-semibold tracking-tight text-xl">JSSK Matrix India Pvt. Ltd.</span>
            </div>
            <p className="text-slate-500 leading-relaxed mb-8 max-w-sm font-normal">
              Leading distributor of high-quality branded lamination and packaging films, delivering customized solutions across India .
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/30 transition-all group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/30 transition-all group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/30 transition-all group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Spacer Column */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold tracking-tight text-base mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-500 hover:text-white transition-colors block w-fit">Home</Link></li>
              <li><Link href="/products" className="text-slate-500 hover:text-white transition-colors block w-fit">Products</Link></li>
              <li><Link href="/about" className="text-slate-500 hover:text-white transition-colors block w-fit">About Us</Link></li>
             
         <li><Link href="/solutions" className="text-slate-500 hover:text-white transition-colors block w-fit">Solutions</Link></li>
             
              <li><Link href="/contact" className="text-slate-500 hover:text-white transition-colors block w-fit">Contact</Link></li>
              <li><Link href="/quote" className="text-slate-500 hover:text-white transition-colors block w-fit">Request Quote</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-semibold tracking-tight text-base mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group cursor-default">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-[-2px] group-hover:bg-blue-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-500" strokeWidth={1.5} />
                </div>
                <span className="text-slate-500 group-hover:text-slate-300 transition-colors">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                 <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="w-4 h-4 text-blue-500" strokeWidth={1.5} />
                </div>
                <span className="text-slate-500 group-hover:text-slate-300 transition-colors">+91 9223780193</span>
              </li>
              <li className="flex items-center gap-4 group">
                 <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-blue-500" strokeWidth={1.5} />
                </div>
                <a href="mailto:sonal@jsskmatrix.com" className="text-slate-500 hover:text-white transition-colors">sonal@jsskmatrix.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>©  JSSK Matrix India Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
               
            </div>
        </div>
      </div>
    </footer>
  );
}