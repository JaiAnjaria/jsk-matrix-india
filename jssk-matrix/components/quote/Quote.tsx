"use client";

import { MessageSquare, Building2, User, Phone, Mail, Info, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Quote() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Gather data from the form
    const formData = new FormData(e.currentTarget);
   
    const data = {
      company: formData.get('company'),
      contact_person: formData.get('contact_person'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    console.log(data)
    try {
      // 2. Send data to your backend API
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // 3. Handle response
      if (response.ok) {
        alert('Quote request sent successfully! We will contact you soon.');
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        alert('Failed to send request. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-grow pt-32 pb-20 md:pt-40 royal-gradient relative overflow-hidden min-h-screen">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            <MessageSquare className="w-3 h-3" />
            Inquiries
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Request a Quote
          </h1>
          <p className="text-slate-400 text-base font-light max-w-lg mx-auto">
            Please fill in the details below and our team will get back to you shortly with a tailored proposal.
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-2xl shadow-black/50 border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label htmlFor="company" className="text-xs font-medium text-slate-400 ml-1">Company Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-4 w-4 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input type="text" id="company" name="company" className="w-full bg-[#09090b] border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 placeholder-slate-600 transition-all outline-none" placeholder="Acme Industries Ltd." required />
                </div>
              </div>

              {/* Contact Person */}
              <div className="space-y-2">
                <label htmlFor="contact_person" className="text-xs font-medium text-slate-400 ml-1">Contact Person</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input type="text" id="contact_person" name="contact_person" className="w-full bg-[#09090b] border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 placeholder-slate-600 transition-all outline-none" placeholder="Full Name" required />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Number */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-medium text-slate-400 ml-1">Contact Number</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
                  </div>
          <input type="tel"pattern="[0-9]{10}" id="phone" name="phone" className="w-full bg-[#09090b] border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 placeholder-slate-600 transition-all outline-none" placeholder="+91 98765 43210" required />
                </div>
              </div>

              {/* Email ID */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium text-slate-400 ml-1">Email ID</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input type="email" id="email" name="email" className="w-full bg-[#09090b] border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 placeholder-slate-600 transition-all outline-none" placeholder="name@company.com" required />
                </div>
              </div>
            </div>

            {/* Remarks / Requirement */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium text-slate-400 ml-1">Remarks / Requirement</label>
              <div className="relative group">
                <textarea id="message" name="message" rows={4} className="w-full bg-[#09090b] border border-white/10 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-3 placeholder-slate-600 transition-all resize-none outline-none" placeholder="Describe your requirement..."></textarea>
              </div>
              <p className="text-xs text-slate-500 font-light flex items-start gap-1.5 mt-1">
                <Info className="w-3 h-3 mt-0.5 shrink-0" />
                Please mention product type, size, quantity or any specific requirement.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full group bg-white text-black hover:bg-slate-200 font-semibold rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
                {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
              </button>
              <p className="text-center text-[10px] text-slate-600 mt-4">
                By submitting this form, you agree to our privacy policy regarding your data.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}