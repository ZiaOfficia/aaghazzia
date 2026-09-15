import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ctaContent } from "../../data/content";
import { submitToGoogleSheets } from "../../utils/googleSheets";
import { sendEmailNotification } from "../../utils/emailNotification";
import { Section } from "../ui/Section";
import { buttonStyles } from "../ui/buttonStyles";
import { fieldClass, labelClass } from "../ui/formStyles";

export const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const update = (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Trigger background tasks (non-blocking)
      submitToGoogleSheets({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.topic,
        message: formData.message,
        serviceName: "General Contact",
      });

      sendEmailNotification({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.topic,
        message: formData.message,
        source: "Contact Section",
      });

      // Redirect instantly
      navigate("/thank-you");
    } catch (err) {
      console.error("Submission trigger error", err);
      // Navigate anyway for instant feel
      navigate("/thank-you");
    }
  };

  return (
    <Section id="contact" aria-labelledby="contact-heading" tone="sand">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-3 text-sm font-semibold text-terracotta">Contact Us</p>
          <h2 id="contact-heading" className="font-display text-3xl font-semibold sm:text-4xl">
            {ctaContent.heading}
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted">
            {ctaContent.text.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <address className="mt-8 space-y-2 not-italic">
            <p>
              <a href="tel:+919876543210" className="hover:text-terracotta">+91 98765 43210</a>
            </p>
            <p>57 Ganesh Gunj, Lucknow, UP — 226018</p>
            <p>
              <a href="mailto:aaghaz.foundation@gmail.com" className="break-all hover:text-terracotta">
                aaghaz.foundation@gmail.com
              </a>
            </p>
          </address>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-md bg-cream p-6 sm:p-8 lg:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-first-name" className={labelClass}>First name</label>
              <input id="contact-first-name" type="text" required autoComplete="given-name" value={formData.firstName} onChange={update("firstName")} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="contact-last-name" className={labelClass}>Last name</label>
              <input id="contact-last-name" type="text" autoComplete="family-name" value={formData.lastName} onChange={update("lastName")} className={fieldClass} />
            </div>
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>Email address</label>
            <input id="contact-email" type="email" required autoComplete="email" value={formData.email} onChange={update("email")} className={fieldClass} />
          </div>
          <div>
            <label htmlFor="contact-phone" className={labelClass}>Phone number</label>
            <input id="contact-phone" type="tel" required autoComplete="tel" value={formData.phone} onChange={update("phone")} className={fieldClass} placeholder="e.g. 9876543210" />
          </div>
          <div>
            <label htmlFor="contact-topic" className={labelClass}>I want to talk about</label>
            <select id="contact-topic" value={formData.topic} onChange={update("topic")} className={fieldClass}>
              <option value="">Select an option</option>
              <option value="donate">Making a donation</option>
              <option value="scholarship">Starting a scholarship</option>
              <option value="volunteer">Becoming a volunteer</option>
              <option value="apply-aid">Applying for student aid</option>
              <option value="csr">Corporate / CSR partnership</option>
              <option value="other">Something else</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className={labelClass}>Your message</label>
            <textarea id="contact-message" rows={4} value={formData.message} onChange={update("message")} className={`${fieldClass} resize-y`} placeholder="Tell us how you'd like to get involved..." />
          </div>
          <button type="submit" className={buttonStyles("primary", "w-full sm:w-auto")}>
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
};
