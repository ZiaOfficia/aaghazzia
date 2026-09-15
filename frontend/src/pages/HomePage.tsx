import { HeroSlider } from "../components/sections/HeroSlider";
import { MissionStatement } from "../components/sections/MissionStatement";
import { StatsSection } from "../components/sections/StatsSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { HowItWorks } from "../components/sections/HowItWorks";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ActionBlocksSection } from "../components/sections/ActionBlocksSection";
import { GallerySection } from "../components/sections/GallerySection";
import { BlogSection } from "../components/sections/BlogSection";
import { FAQSection } from "../components/sections/FAQSection";
import { ClosingCTA } from "../components/sections/ClosingCTA";
import { SEO } from "../components/common/SEO";

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Empowerment Through Education — Donate, Volunteer, Apply"
        description="Since 2004, Aaghaz has helped students continue their education when their families could not afford it."
      />

      {/* 1. Four rotating screens */}
      <HeroSlider />

      {/* 2. Why We Exist — Educate. Empower. Elevate. */}
      <MissionStatement />

      {/* 3. Aaghaz by the Numbers */}
      <StatsSection />

      {/* 4. About + founder quote */}
      <AboutSection />

      {/* 5. What We Do */}
      <ServicesGrid />

      {/* 6. How We Work */}
      <HowItWorks />

      {/* 7. Stories from Aaghaz */}
      <TestimonialsSection />

      {/* 8. How You Can Help */}
      <ActionBlocksSection />

      {/* 9. Gallery preview */}
      <GallerySection />

      {/* 10. News */}
      <BlogSection />

      {/* 11. FAQ (first six) */}
      <FAQSection limit={6} />

      {/* 12. Closing call to action */}
      <ClosingCTA />
    </>
  );
};
