import { MessageCircle } from 'lucide-react';
import ContactInfo from '@/components/contact/contactinfo';
import SupportForm from '@/components/contact/supportform';
import LocationMap from '@/components/contact/googlemap';

export default function ContactPage() {
  return (
    <main className="flex-grow pt-32 pb-20 md:pt-40 royal-gradient relative overflow-hidden min-h-screen">
      
      {/* --- FIX: Added Home Page Background Glows --- */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[100px] pointer-events-none bg-blue-950/20"></div>
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[80px] pointer-events-none bg-blue-950/10"></div>
      {/* --------------------------------------------- */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            <MessageCircle className="w-3 h-3" />
            Support
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-400 text-base font-light max-w-lg mx-auto">
            We are here to help. Reach out to us for any inquiries about our products or services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Section 1: Contact Information (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <ContactInfo />
          </div>

          {/* Section 2: Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <SupportForm />
          </div>

        </div>

        {/* Section 3: Google Map */}
        <LocationMap />

      </div>
    </main>
  );
}