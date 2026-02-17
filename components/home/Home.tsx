import HeroSection from "@/components/home/HeroSection";
import LibrarySection from "@/components/home/LibrarySection";
import Quran from "@/components/home/Quran";
import FivePillars from "./FivePillars";
import VoicesFaith from "./VoicesFaith";

import FAQ from "./FAQ";
import Testimonials from "./Testimmonials";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LibrarySection />
      <Quran />
      <FivePillars />
      <VoicesFaith />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  );
}
