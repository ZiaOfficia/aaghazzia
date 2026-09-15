import { Section } from "../ui/Section";
import { buttonStyles } from "../ui/buttonStyles";
import { fieldClass } from "../ui/formStyles";

const NewsletterSection = () => {
  return (
    <Section aria-labelledby="newsletter-heading" tone="sand" spacing="compact">
      <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="mb-3 text-sm font-semibold text-terracotta">Stay Updated</p>
          <h2 id="newsletter-heading" className="font-display text-3xl font-semibold sm:text-4xl">
            Get updates about our work
          </h2>
          <p className="mt-4 text-lg text-muted">
            Sign up to receive our news. We send updates four times a year with real stories of how your donations help students. No spam.
          </p>
        </div>

        <form className="flex flex-col gap-3 sm:flex-row lg:col-span-6">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter your email address"
            className={`${fieldClass} flex-1`}
          />
          <button type="submit" className={buttonStyles("primary")}>
            Subscribe
          </button>
        </form>
      </div>
    </Section>
  );
};

export default NewsletterSection;
