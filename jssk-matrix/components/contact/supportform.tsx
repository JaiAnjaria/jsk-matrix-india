"use client";
import { User, Mail, Phone, Send, Info, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner'; // <--- Import toast

export default function SupportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. STOP double clicks immediately
    if (isSubmitting) return;

    setIsSubmitting(true);

    // 2. SAFETY: Save the form into a variable BEFORE 'await'
    // This ensures we don't lose the reference while waiting for the network
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
   
    try {
      const response = await fetch('/api/contact', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        
        // 3. Reset using the SAVED variable, not 'e.currentTarget'
        form.reset(); 
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong.", {
          description: "Please check your connection."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... (Rest of your JSX remains exactly the same)
  return (
    <div className="glass-panel p-6 md:p-8 rounded-2xl h-full border border-white/10 relative overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_60px_rgba(59,130,246,0.1)] ">
      {/* Decorative Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none"></div>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Send Message</h3>
        </div>

        {/* Name Input */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium text-slate-400 ml-1">Name</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-[18px] w-[18px] text-slate-600 group-focus-within:text-blue-500 group-hover:text-blue-400 transition-colors" />
            </div>
            <input type="text" id="name" name="name" className="w-full bg-[#09090b] border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500/30 block pl-10 p-3 placeholder-slate-600 transition-all outline-none" placeholder="Enter your full name" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-medium text-slate-400 ml-1">Email</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-[18px] w-[18px] text-slate-600 group-focus-within:text-blue-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <input type="email" id="email" name="email" className="w-full bg-[#09090b] border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500/30 block pl-10 p-3 placeholder-slate-600 transition-all outline-none" placeholder="name@company.com" required />
            </div>
          </div>

          {/* Contact Number Input */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-medium text-slate-400 ml-1">Contact Number</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-[18px] w-[18px] text-slate-600 group-focus-within:text-blue-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <input type="tel" id="phone" name="phone" className="w-full bg-[#09090b] border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500/30 block pl-10 p-3 placeholder-slate-600 transition-all outline-none" placeholder="+91 98765 43210" required />
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-medium text-slate-400 ml-1">Message</label>
          <textarea id="message" name="message" rows={5} className="w-full bg-[#09090b] border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500/30 block p-3 placeholder-slate-600 transition-all resize-none outline-none" placeholder="How can we help you?"></textarea>
        </div>

        {/* Quote Note */}
        <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-900/10 border border-blue-500/10">
          <Info className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
          <p className="text-xs text-blue-200/80 leading-relaxed">
            For price-related queries or bulk orders, please use our{' '}
            <Link href="/quote" className="text-white underline hover:text-blue-400 font-medium">Request a Quote</Link> form for a more detailed proposal.
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full group bg-white text-black hover:bg-slate-200 font-semibold rounded-lg text-sm px-5 py-3.5 text-center transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
               <>Sending... <Loader2 className="w-4 h-4 animate-spin"/></>
            ) : (
               <>Send Message <Send className="w-[18px] h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}