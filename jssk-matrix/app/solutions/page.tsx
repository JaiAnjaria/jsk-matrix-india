import SolutionHeader from '@/components/solutions/SolutionHeader';
import SolutionsGrid from '@/components/solutions/SolutionsGrid';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* ... other components ... */}
      <SolutionHeader/>
      <SolutionsGrid />
      {/* ... footer ... */}
    </main>
  );
}