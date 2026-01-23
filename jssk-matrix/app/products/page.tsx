import ProductHeader from "@/components/products/ProductHeader";
import ProductCatalog from "@/components/products/ProductCatalog";
import CustomCTA from "@/components/products/CustomCTA";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black">
      <ProductHeader />
      <ProductCatalog />
      <CustomCTA />
    </main>
  );
}