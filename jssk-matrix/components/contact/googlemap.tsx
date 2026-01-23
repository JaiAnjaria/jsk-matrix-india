export default function LocationMap() {
  return (
    <div className="w-full map-container glass-panel p-1.5 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20">
      <iframe 
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6919990188862!2d72.83716707552273!3d19.16495488205805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7000b79e8a7%3A0x89d90936e3d2bbfb!2sJSSK%20MATRIX!5e0!3m2!1sen!2sin!4v1769144129880!5m2!1sen!2sin"
        width="100%" 
        height="450" 
        style={{ border: 0, borderRadius: '12px', display: 'block' }} // REMOVED filter here
        className="grayscale hover:grayscale-0 transition-all duration-700" // ADDED grayscale here
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
} 