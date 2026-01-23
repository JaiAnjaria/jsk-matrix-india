
import VisionMission from "@/components/about/visionmission";
import Leadership from "@/components/about/Leadership";
import Values from "@/components/about/values";
import Hero from "@/components/about/hero";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
<Hero/>
      <VisionMission />
      <Leadership />
      <Values />
    </main>
  );
}