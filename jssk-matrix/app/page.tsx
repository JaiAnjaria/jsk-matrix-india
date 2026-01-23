import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Products from '@/components/home/Products';
import Solutions from '@/components/home/Solutions';
import Categories from '@/components/home/Categories';
import Features from '@/components/home/Features';
import Brands from '@/components/home/Brands';
// removed Navbar import
// removed Footer import

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* Navbar is now in layout.tsx */}

      <Hero />
      <About />
      <Products />
      <Solutions />
      <Categories />
      <Features />
      <Brands />

      {/* Footer is now in layout.tsx */}

    </main>
  );
}