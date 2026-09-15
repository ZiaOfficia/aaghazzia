import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import NewsletterSection from "../components/sections/NewsletterSection";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { FAQList } from "../components/sections/FAQSection";
import { whatWeDoContent } from "../data/content";
import { photos } from "../data/imageAssets";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ButtonLink } from "../components/ui/ButtonLink";

const faqs = [
  {
    question: "How does Aaghaz decide who gets help?",
    answer:
      "Every student who asks for help is visited by our volunteers at home. We only help students who really need it. We do not approve cases without checking in person.",
  },
  {
    question: "Are donations tax-deductible in India?",
    answer:
      "Eligible donations may qualify for deduction under Section 80G of the Income-tax Act, subject to applicable rules. Aaghaz issues receipts for eligible donations.",
  },
  {
    question: "Can I direct my donation to a specific programme?",
    answer:
      "Yes. You can choose to support Student Aid or a memorial scholarship. We will use your donation only for that program and send you updates.",
  },
  {
    question: "How do I become a volunteer?",
    answer:
      "Go to our Become a Volunteer page and sign up. A team member will call you within a few days to guide you and assign your first home visit with an experienced volunteer.",
  },
  {
    question: "How do I apply for student aid for myself or my child?",
    answer:
      "Fill the application form on our website. We help pay fees, books, uniforms, and hostel costs for poor families. Our volunteers will call you to visit your home.",
  },
];

const programs = [
  {
    id: "student-aid",
    title: "Student Aid",
    description:
      "We help eligible students with school and college fees, examination costs, books, uniforms and other essential educational expenses. Every application is verified before assistance is approved.",
    features: [
      "School and exam fees",
      "College and university fees",
      "Textbooks, notebooks, and uniforms",
      "Hostel rent and food help",
    ],
    image: photos.boyStudying,
  },
  {
    id: "scholarships",
    title: "Scholarships",
    description:
      "Scholarships funded by donors to help students finish their studies. Every student is checked in person, and donors get a progress report every year.",
    features: [
      "Scholarships in memory of loved ones",
      "General scholarship pool",
      "Company sponsored student groups",
      "Special awards for girl students",
    ],
    image: photos.youngWomanStudent,
  },
  {
    id: "financial-assistance",
    title: "Financial Assistance",
    description:
      "Quick financial help for families facing sudden problems. We give one-time or monthly fee support to keep kids in school.",
    features: [
      "Help during sudden fee deadlines",
      "Support if the earning parent passes away",
      "Help when family medical bills are high",
      "Monthly fee support",
    ],
    image: photos.familyPortrait,
  },
  {
    id: "become-volunteer",
    title: "Become a Volunteer",
    description:
      "Aaghaz runs because of volunteers. If you have two free hours a week, you can help a child study. We need volunteers in cities and towns across India.",
    features: [
      "In-person student home visits",
      "Online teaching and guiding",
      "Help with writing and photos",
      "Organizing local fundraising",
    ],
    image: photos.volunteersWithChildren,
  },
  {
    id: "join-as-donor",
    title: "Join us as Donor",
    description:
      "Register as an Aaghaz donor and choose how you would like to contribute. You can make a one-time contribution, give regularly or support a verified student directly through our donor platform.",
    features: [
      "One-time or monthly donations",
      "Sponsor a child's yearly fees",
      "80G tax benefit receipts",
      "Yearly progress reports",
    ],
    image: photos.donorsGroup,
  },
  {
    id: "launch-scholarship",
    title: "Launch Scholarship",
    description:
      "Start a scholarship in the name of a parent, teacher, or friend to honor their memory. You choose the rules, and we send you yearly reports.",
    features: [
      "Scholarships for a single year",
      "Three-year college fee support",
      "Ongoing scholarships every year",
      "Choose who to help (like girls only)",
    ],
    image: photos.memorialPlaque,
  },
];

export const ServicesPage = () => {
  return (
    <>
      <SEO
        title="What We Do — Aaghaz Foundation Programs"
        description="Explore Aaghaz Foundation's programs — Student Aid, Scholarships, Financial Assistance, and ways for you to donate or volunteer."
      />

      <PageHeader eyebrow={whatWeDoContent.label} title={whatWeDoContent.heading} intro={whatWeDoContent.intro} />

      {/* The five programmes */}
      <ServicesGrid withHeading={false} />

      {/* All programmes and ways to help */}
      <Section aria-labelledby="ways-to-help" tone="sand">
        <SectionHeading
          id="ways-to-help"
          title="One foundation. Many ways to help."
          intro="Whether you are a student looking for help, a donor wanting to help a child, a volunteer with two hours a week, or a company looking to partner — there is a way to join. Look at our programs below."
        />

        <div className="mt-16 space-y-16 md:space-y-24">
          {programs.map((program, index) => (
            <article
              key={program.id}
              aria-labelledby={`program-${program.id}`}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <div className={`aspect-[4/3] overflow-hidden rounded-md bg-cream ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img loading="lazy" decoding="async" src={program.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 id={`program-${program.id}`} className="font-display text-3xl font-semibold">
                  {program.title}
                </h3>
                <p className="mt-4 text-lg text-muted">{program.description}</p>
                <h4 className="mt-6 font-sans text-sm font-semibold">What we cover</h4>
                <ul className="mt-3 grid list-disc gap-x-8 gap-y-1 pl-5 text-muted marker:text-terracotta sm:grid-cols-2">
                  {program.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  to={`/services/${program.id}`}
                  className="mt-6 inline-block font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
                >
                  Learn more about {program.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Memorial Scholarships */}
      <Section aria-labelledby="memorial-spotlight" tone="cream">
        <div className="max-w-3xl">
          <SectionHeading
            id="memorial-spotlight"
            eyebrow="Featured Program"
            title="Memorial Scholarships"
            intro="Aaghaz Foundation runs more than 80 scholarships in memory of loved ones across India. We give nearly Rs 1 crore every year to help hundreds of poor students and orphans finish their studies."
          />
          <ButtonLink to="/services/memorial-scholarship" className="mt-8">
            Find out more about Memorial Scholarships
          </ButtonLink>
        </div>
      </Section>

      {/* FAQs */}
      <Section aria-labelledby="programme-faqs" tone="sand">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              id="programme-faqs"
              eyebrow="FAQs"
              title="Common questions about our programs"
              intro={
                <>
                  Here are answers to the questions donors, volunteers, and parents ask us most often. If you have another question, email us at{" "}
                  <a href="mailto:aaghaz.foundation@gmail.com" className="text-terracotta underline underline-offset-4">
                    aaghaz.foundation@gmail.com
                  </a>
                  .
                </>
              }
            />
          </div>
          <div className="lg:col-span-8">
            <FAQList items={faqs} />
          </div>
        </div>
      </Section>

      <NewsletterSection />
    </>
  );
};
