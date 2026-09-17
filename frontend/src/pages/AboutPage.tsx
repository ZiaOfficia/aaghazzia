import { SEO } from "../components/common/SEO";
import { ContactSection } from "../components/sections/ContactSection";
import { aboutContent, ourStoryContent } from "../data/content";
import { founderImage, photos } from "../data/imageAssets";
import NewsletterSection from "../components/sections/NewsletterSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FAQSection } from "../components/sections/FAQSection";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ButtonLink } from "../components/ui/ButtonLink";
import { LinkedText } from "../components/ui/LinkedText";
import { FitImage } from "../components/ui/FitImage";

// Image slots on this page (paths live in data/imageAssets.ts).
const aboutImages = {
  header: photos.schoolgirlPortrait,
  story: photos.girlPortrait,
  howWeWork: photos.familyPortrait,
  volunteers: photos.volunteersWithChildren,
};

export const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us — Aaghaz Foundation"
        description="Aaghaz Foundation is a non-profit founded in 2004 in Lucknow. We support talented students who need support across India through scholarships, financial aid, mentorship and learning centres."
      />

      <PageHeader
        eyebrow="Since 2004 · Lucknow"
        title="Our Story"
        intro="Helping children study to build a better future."
        image={aboutImages.header}
        imageAlt="A young schoolgirl in uniform on her way to school"
      />

      {/* Our Story */}
      <Section id="about" aria-labelledby="story-heading" tone="cream">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-3 text-sm font-semibold text-terracotta">Founded 2004 · Lucknow</p>
            <h2 id="story-heading" className="sr-only">
              {ourStoryContent.heading}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              {ourStoryContent.text.map((paragraph) => (
                <p key={paragraph}><LinkedText text={paragraph} /></p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-md bg-sand">
              <FitImage src={aboutImages.story} alt="An Aaghaz-supported student" loading="lazy" />
            </div>
          </div>
        </div>
      </Section>

      {/* How we work */}
      <Section aria-labelledby="checked-heading" tone="sand">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-md bg-cream">
              <FitImage src={aboutImages.howWeWork} alt="A family supported by Aaghaz Foundation" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading
              id="checked-heading"
              title="Every application is checked"
              intro="Before Aaghaz supports a student, at least two volunteers visit the student and their family. They verify the information provided and, where necessary, check details with the school or college. The case is then reviewed by the Aaghaz team before any financial assistance is approved."
            />
            <ButtonLink to="/contact" variant="text" className="mt-6">
              Talk to our team
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* People */}
      <Section aria-labelledby="people-heading" tone="cream">
        <SectionHeading id="people-heading" eyebrow="The People" title="Behind every story, a team" />

        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Founder */}
          <article aria-labelledby="founder-name">
            <div className="aspect-[4/5] max-w-md overflow-hidden rounded-md bg-sand">
              <FitImage src={founderImage} alt="Mazhar Farooqui, Founder & President" loading="lazy" />
            </div>
            <h3 id="founder-name" className="mt-8 font-display text-3xl font-semibold">
              Mazhar Farooqui
            </h3>
            <p className="mt-1 font-semibold text-terracotta">Founder &amp; President</p>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                <a
                  href="https://mazharfarooqui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
                >
                  Mazhar Farooqui
                </a>{" "}
                aka Maz is an award-winning investigative journalist and author who founded Aaghaz in Lucknow in 2004 after seeing children in his neighbourhood out of school because their families could not afford their education.
              </p>
              <p>
                He started with ₹2,000 and one student. More than two decades later, Mazhar remains closely involved with Aaghaz and personally reviews student verification reports before financial assistance is approved.
              </p>
              <p>
                During a journalism career spanning more than 25 years in India and the UAE, Mazhar has become known for investigations into fraud, crime and financial wrongdoing. His work has received several awards and has led to action against individuals and companies investigated in his reports. He is the author of{" "}
                <em>The Maz Files: Scoops, Scams and Showdowns</em> and the founder of Check First Intel, a Dubai-based due diligence and risk intelligence firm.
              </p>
              <p>
                What began as a small effort among friends has since grown into a network of donors, volunteers and former students supporting education across India.
              </p>
            </div>
            <figure className="mt-8 border-l-2 border-terracotta pl-6">
              <blockquote className="font-display text-xl italic leading-relaxed">“{aboutContent.quote}”</blockquote>
              <figcaption className="mt-3 text-muted"><LinkedText text={aboutContent.quoteAuthor} /></figcaption>
            </figure>
          </article>

          {/* Volunteer network */}
          <article aria-labelledby="volunteers-name">
            <div className="aspect-[4/5] max-w-md overflow-hidden rounded-md bg-sand">
              <FitImage src={aboutImages.volunteers} alt="Aaghaz volunteers with children" loading="lazy" />
            </div>
            <h3 id="volunteers-name" className="mt-8 font-display text-3xl font-semibold">
              Our Volunteer Network
            </h3>
            <p className="mt-1 font-semibold text-terracotta">300+ volunteers across India</p>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                Volunteers have been at the heart of Aaghaz since 2004. They visit students and their families, help verify applications, provide mentoring and teaching, and support our educational programmes. Many former Aaghaz students have also returned as volunteers, helping others get the same opportunities they once received.
              </p>
              <p>
                If you would like to join them, register through our{" "}
                <a
                  href="/services/become-volunteer"
                  className="font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
                >
                  Become a Volunteer
                </a>{" "}
                page.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <TestimonialsSection tone="sand" />

      <FAQSection limit={6} />

      <NewsletterSection />

      <ContactSection tone="cream" />
    </>
  );
};
