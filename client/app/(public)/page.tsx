import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedEventsSection } from "@/components/sections/featured-events-section";
import { PlatformHighlightsSection } from "@/components/sections/platform-highlights-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedEventsSection />
      <PlatformHighlightsSection />
    </>
  );
}
