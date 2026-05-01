import { HeroSlider } from "../components/sections/HeroSlider";
import { MissionStatement } from "../components/sections/MissionStatement";
import { ActionBlocksSection } from "../components/sections/ActionBlocksSection";
import { StatsSection } from "../components/sections/StatsSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { HowItWorks } from "../components/sections/HowItWorks";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { DonateCTA } from "../components/sections/DonateCTA";
import { GallerySection } from "../components/sections/GallerySection";
import { BlogSection } from "../components/sections/BlogSection";
import { FAQSection } from "../components/sections/FAQSection";
import { ContactSection } from "../components/sections/ContactSection";
import { ClientsStrip } from "../components/sections/ClientsStrip";
import { FeaturedInStrip } from "../components/sections/FeaturedInStrip";
import { InstagramFeed } from "../components/sections/InstagramFeed";

import { SEO } from "../components/common/SEO";

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Empowerment Through Education — Donate, Volunteer, Apply"
        description="Aaghaz Foundation has been empowering meritorious students across India since 2004 through scholarships, student aid, the Rahmani 30 coaching tie-up and the LCGC learning centre in Lucknow. Donate, volunteer or apply for student aid."
      />

      {/* 1. Hero — interactive sliding image with two fixed CTAs */}
      <HeroSlider />

      {/* 2. Mission — Educate. Empower. Elevate. */}
      <MissionStatement />

      {/* 3. Three calls to action */}
      <ActionBlocksSection />

      {/* 4. By the numbers */}
      <StatsSection />

      {/* 5. Founder story */}
      <AboutSection />

      {/* 6. Programmes / What We Do */}
      <ServicesGrid />

      {/* 7. The four-step verification process */}
      <HowItWorks />

      {/* 8. Real student stories */}
      <TestimonialsSection />

      {/* 9. Headline donate banner */}
      <DonateCTA />

      {/* 10. Press coverage */}
      <FeaturedInStrip />

      {/* 11. Gallery */}
      <GallerySection />

      {/* 12. News + Instagram */}
      <BlogSection />
      <InstagramFeed />

      {/* 13. Partners + FAQ */}
      <ClientsStrip />
      <FAQSection />

      {/* 14. Contact */}
      <ContactSection />
    </>
  );
};
