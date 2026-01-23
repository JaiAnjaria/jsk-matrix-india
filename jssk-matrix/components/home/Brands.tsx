
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.jpeg", alt: "Company 1", href: "" },
  { src: "/logos/company2.jpeg", alt: "Company 2", href: "" },
  { src: "/logos/company3.jpeg", alt: "Company 3", href: "" },
    { src: "/logos/company4.jpeg", alt: "Company 2", href: "" },
  { src: "/logos/company5.jpeg", alt: "Company 3", href: "" },
    { src: "/logos/company6.jpeg", alt: "Company 2", href: "" },
  { src: "/logos/company7.jpeg", alt: "Company 3", href: "" }, 
   { src: "/logos/company8.jpeg", alt: "Company 2", href: "" },
  { src: "/logos/company9.jpeg", alt: "Company 3", href: "" },
];


export default function Brands() {
  const brands = ["COSMO", "Garware", "U|FLEX", "VENUS", "Toppan", "DERPROSA", "MAX SPECIALTY"];
  
  return (
    <section id="brands" className="py-20 border-t border-white/5 bg-black group">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-widest mb-10 text-slate-600">Authorized Distributors Of</p>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
      //@ts-ignore
        logos={imageLogos}
        speed={90}
        direction="left"
        logoHeight={70}
        gap={60}
        hoverSpeed={0}
       
        fadeOut
        fadeOutColor="black"
        ariaLabel="Technology partners"
      />
      
   
    </div>
        
      </div>
    </section>
  );
}
