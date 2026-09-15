import { useEffect } from "react";
import { Container } from "../components/ui/Container";
import { ButtonLink } from "../components/ui/ButtonLink";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const ThankYouPage = () => {
  // Fire conversion event when Thank You page loads
  useEffect(() => {
    // Google Analytics 4 conversion event
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "form_submission",
        event_label: "enquiry_form",
        value: 1,
      });
    }

    // Push to dataLayer for GTM triggers
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "form_submission_success",
        formType: "enquiry",
      });
    }
  }, []);

  return (
    <Container width="narrow" className="py-20 md:py-32">
      <p className="text-sm font-semibold text-terracotta">Message sent</p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Thank you.</h1>
      <p className="mt-6 text-xl">We have received your message.</p>
      <p className="mt-4 text-lg text-muted">
        Our team at Aaghaz Foundation will read your message and write back to you within a few days. If your matter is urgent, you can also email us at{" "}
        <a href="mailto:aaghaz.foundation@gmail.com" className="font-semibold text-terracotta underline underline-offset-4">
          aaghaz.foundation@gmail.com
        </a>
        .
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink to="/">Return Home</ButtonLink>
        <ButtonLink to="/blog" variant="secondary">
          Read Our News
        </ButtonLink>
      </div>
    </Container>
  );
};

export default ThankYouPage;
