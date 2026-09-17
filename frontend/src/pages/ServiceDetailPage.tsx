import { useParams, Link, Navigate } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { servicesData } from "../data/servicesData";
import {
  ServiceTestimonialCard,
  ServiceGalleryGrid,
  ServiceEnquiryForm,
} from "../components/services";
import { FAQSection, FAQList } from "../components/sections/FAQSection";
import { ServiceHighlight } from "../components/services/ServiceHighlight";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ButtonLink } from "../components/ui/ButtonLink";
import { LinkedText } from "../components/ui/LinkedText";
import { getOptimizedImage } from "../utils/imageUtils";
import { FitImage } from "../components/ui/FitImage";

export const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = servicesData.filter((s) => s.id !== id).slice(0, 4);

  return (
    <>
      <SEO
        title={`${service.title} - Aaghaz Foundation`}
        description={service.intro.description[0]}
        image={service.heroImage}
      />

      <PageHeader
        parent={{ label: "What We Do", to: "/services" }}
        eyebrow={service.title}
        title={service.heroTitle}
        intro={service.intro.subheading}
        image={getOptimizedImage(service.heroImage, 1920)}
        imageAlt={service.title}
        actions={
          <>
            <ButtonLink to="#enquiry">Send a message</ButtonLink>
            <ButtonLink to="#overview" variant="secondary">
              Find out more
            </ButtonLink>
          </>
        }
      />

      <ServiceHighlight service={service} />

      {/* Overview */}
      <Section id="overview" aria-labelledby="overview-heading" tone="cream">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="overview-heading" className="font-display text-3xl font-semibold sm:text-4xl">
              {service.intro.heading}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              {service.intro.description.map((para) => (
                <p key={para}><LinkedText text={para} /></p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5" aria-labelledby="key-points-heading">
            <h3 id="key-points-heading" className="font-display text-2xl font-semibold">
              {service.whyChooseUs.title}
            </h3>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {service.whyChooseUs.items.map((item) => (
                <li key={item.title} className="py-5">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {/* Details */}
      <Section id="details" aria-labelledby="details-heading" tone="sand">
        <SectionHeading id="details-heading" title={service.signatureServices.title} />
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {service.signatureServices.items.map((item) => (
            <div key={item.title} className="border-t border-ink/15 pt-6">
              <h3 className="font-display text-xl font-semibold md:text-2xl">{item.title}</h3>
              <p className="mt-3 text-muted">{item.description}</p>
              {item.features && (
                <ul className="mt-4 list-disc space-y-1 pl-5 text-muted marker:text-terracotta">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" aria-labelledby="process-heading" tone="cream">
        <SectionHeading
          id="process-heading"
          title={service.process.title}
          intro={service.process.description || undefined}
        />
        <ol className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {service.process.steps.map((step) => (
            <li key={step.title} className="border-t border-ink/15 pt-6">
              <h3 className="font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Gallery */}
      {service.portfolioImages.length > 0 && (
        <Section id="gallery" aria-labelledby="gallery-heading" tone="sand">
          <SectionHeading id="gallery-heading" title="Impact Gallery" intro="Moments of change and impact." />
          <div className="mt-10">
            <ServiceGalleryGrid images={service.portfolioImages} title={service.title} />
          </div>
        </Section>
      )}

      {/* Testimonials */}
      {service.testimonials && service.testimonials.length > 0 && (
        <Section id="testimonials" aria-labelledby="testimonials-heading" tone="cream">
          <SectionHeading id="testimonials-heading" title="Testimonials" />
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {service.testimonials.map((t) => (
              <ServiceTestimonialCard key={t.quote} quote={t.quote} author={t.author} location={t.location} />
            ))}
          </div>
        </Section>
      )}

      {/* Named scholarships */}
      {service.namedScholarships && service.namedScholarships.length > 0 && (
        <Section aria-labelledby="active-scholarships" tone="sand">
          <SectionHeading
            id="active-scholarships"
            eyebrow="Active Scholarships"
            title="Active Scholarships in memory of loved ones"
            intro="Here are some of our active scholarships. Each one is a special tribute that pays a child's school fees."
          />
          <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
            {service.namedScholarships.map((name) => (
              <li key={name} className="border-t border-ink/15 py-4 font-display text-xl">
                {name}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 ? (
        <Section id="faq" aria-labelledby="service-faq-heading" tone="cream">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading id="service-faq-heading" eyebrow="Common Questions" title="Frequently Asked Questions" />
            </div>
            <div className="lg:col-span-8">
              <FAQList items={service.faqs} />
            </div>
          </div>
        </Section>
      ) : (
        <FAQSection limit={6} />
      )}

      {/* Programme contact */}
      {service.contact && (
        <Section aria-labelledby="programme-contact" tone="sand">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                id="programme-contact"
                eyebrow="Start a Scholarship"
                title="Help a child in memory of a loved one"
                intro={service.contact.note}
              />
            </div>
            <div className="space-y-5 lg:col-span-5">
              {(service.contact.name || service.contact.role) && (
                <p>
                  <span className="block font-display text-2xl font-semibold">{service.contact.name}</span>
                  {service.contact.role && <span className="text-muted">{service.contact.role}</span>}
                </p>
              )}
              {service.contact.email && (
                <p>
                  <span className="block text-sm font-semibold text-muted">Send an email</span>
                  <a href={`mailto:${service.contact.email}`} className="break-all text-lg text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta">
                    {service.contact.email}
                  </a>
                </p>
              )}
              {service.contact.phone && (
                <p>
                  <span className="block text-sm font-semibold text-muted">Call / WhatsApp</span>
                  <a href={`tel:${service.contact.phone.replace(/\s|\+/g, "")}`} className="text-lg text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta">
                    {service.contact.phone}
                  </a>
                </p>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Enquiry form */}
      <Section id="enquiry" aria-labelledby="enquiry-heading" tone="cream">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="enquiry-heading"
              title="Your donation can help a child study."
              intro="Let us make a change."
            />
          </div>
          <div className="rounded-md bg-sand p-6 sm:p-8 lg:col-span-7">
            <ServiceEnquiryForm serviceName={service.title} variant="full" />
          </div>
        </div>
      </Section>

      {/* More programmes */}
      <Section aria-labelledby="more-programmes" tone="sand" spacing="compact">
        <h2 id="more-programmes" className="font-display text-2xl font-semibold md:text-3xl">
          Explore More Programs
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {relatedServices.map((s) => (
            <li key={s.id}>
              <Link to={`/services/${s.id}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-md bg-cream">
                  <FitImage loading="lazy" decoding="async" src={getOptimizedImage(s.heroImage, 800)} alt="" />
                </div>
                <span className="mt-3 block font-semibold group-hover:text-terracotta">{s.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};
