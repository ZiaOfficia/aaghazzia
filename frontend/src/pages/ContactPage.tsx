import { useNavigate } from "react-router-dom";
import { ctaContent } from "../data/content";
import { SEO } from "../components/common/SEO";
import { submitToGoogleSheets } from "../utils/googleSheets";
import { sendEmailNotification } from "../utils/emailNotification";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { buttonStyles } from "../components/ui/buttonStyles";
import { fieldClass, labelClass } from "../components/ui/formStyles";

export const ContactPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      weddingDate: formData.get("weddingDate") as string,
      venue: formData.get("venue") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    };

    try {
      // Trigger background submissions (non-blocking)
      submitToGoogleSheets({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        eventDate: data.weddingDate,
        venue: data.venue,
        budget: data.budget,
        serviceName: "Contact Page Form",
      });

      sendEmailNotification({
        ...data,
        name: `${data.firstName} ${data.lastName}`,
        phone: data.phone,
        eventDate: data.weddingDate,
        venue: data.venue,
        budget: data.budget,
        source: "Contact Page Form",
      });

      // Redirect instantly
      navigate("/thank-you");
    } catch (err) {
      console.error("Submission trigger error", err);
      navigate("/thank-you");
    }
  };

  return (
    <>
      <SEO
        title="Contact Us — Aaghaz Foundation"
        description="Reach out to Aaghaz Foundation to donate, launch a scholarship, become a volunteer, apply for student aid or partner with us on CSR. Based in Lucknow, working across India."
      />

      <PageHeader
        eyebrow="Let's talk"
        title="Get In Touch"
        intro="If you want to donate, volunteer, partner, or apply for study help, write to us. We read every message."
      />

      <Section aria-labelledby="contact-page-heading" tone="cream" className="!pt-0">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="contact-page-heading" className="font-display text-3xl font-semibold sm:text-4xl">
              {ctaContent.heading}
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted">
              {ctaContent.text.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="mt-10 divide-y divide-line border-y border-line">
              <div className="py-5">
                <dt className="text-sm font-semibold text-muted">Phone</dt>
                <dd className="mt-1 text-lg">
                  <a href="tel:+919876543210" className="hover:text-terracotta">+91 98765 43210</a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-sm font-semibold text-muted">Registered Office</dt>
                <dd className="mt-1 text-lg">57 Ganesh Gunj, Lucknow, UP — 226018</dd>
              </div>
              <div className="py-5">
                <dt className="text-sm font-semibold text-muted">Email</dt>
                <dd className="mt-1 text-lg">
                  <a href="mailto:aaghaz.foundation@gmail.com" className="break-all hover:text-terracotta">
                    aaghaz.foundation@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-md bg-sand p-6 sm:p-8 lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cp-first" className={labelClass}>First name</label>
                <input id="cp-first" name="firstName" type="text" required autoComplete="given-name" placeholder="E.g. Amit" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="cp-last" className={labelClass}>Last name</label>
                <input id="cp-last" name="lastName" type="text" autoComplete="family-name" placeholder="E.g. Kumar" className={fieldClass} />
              </div>
            </div>
            <div>
              <label htmlFor="cp-phone" className={labelClass}>Contact number</label>
              <input id="cp-phone" name="phone" type="tel" required autoComplete="tel" placeholder="10-digit mobile number" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="cp-email" className={labelClass}>Email address</label>
              <input id="cp-email" name="email" type="email" required autoComplete="email" placeholder="amit@example.com" className={fieldClass} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cp-date" className={labelClass}>
                  Best date to call you <span className="font-normal text-muted">(optional)</span>
                </label>
                <input id="cp-date" name="weddingDate" type="date" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="cp-city" className={labelClass}>City / Location</label>
                <input id="cp-city" name="venue" type="text" required autoComplete="address-level2" placeholder="Lucknow, Mumbai, Delhi…" className={fieldClass} />
              </div>
            </div>
            <div>
              <label htmlFor="cp-reason" className={labelClass}>Why are you writing to us?</label>
              <select id="cp-reason" name="budget" required defaultValue="" className={fieldClass}>
                <option value="" disabled>Select an option</option>
                <option value="donate">I want to donate</option>
                <option value="scholarship">I want to start a scholarship</option>
                <option value="volunteer">I want to join as a volunteer</option>
                <option value="apply-aid">I want to apply for study help (fees)</option>
                <option value="csr">My company wants to partner with Aaghaz</option>
                <option value="other">Other reason</option>
              </select>
            </div>
            <div>
              <label htmlFor="cp-message" className={labelClass}>Your message</label>
              <textarea id="cp-message" name="message" rows={5} placeholder="Tell us how you would like to be involved..." className={`${fieldClass} resize-y`} />
            </div>
            <button type="submit" className={buttonStyles("primary", "w-full sm:w-auto")}>
              Send message
            </button>
          </form>
        </div>
      </Section>

      {/* Map */}
      <Section aria-labelledby="office-heading" tone="sand">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="office-heading" className="font-display text-3xl font-semibold">
              Our Office Address
            </h2>
            <p className="mt-2 text-muted">Monday to Saturday · 10 AM to 6 PM</p>
            <address className="mt-6 space-y-2 text-lg not-italic">
              <p>
                57 Ganesh Gunj
                <br />
                Lucknow, UP — 226018
              </p>
              <p>+91 98765 43210</p>
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ganesh+Gunj,+Lucknow,+UP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-semibold text-terracotta underline decoration-terracotta/30 underline-offset-4 hover:decoration-terracotta"
            >
              Get directions
            </a>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-md bg-cream lg:col-span-8 lg:aspect-[16/10]">
            <iframe
              className="h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Ganesh%20Gunj%2C%20Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Aaghaz Foundation Office Location"
            />
          </div>
        </div>
      </Section>
    </>
  );
};
