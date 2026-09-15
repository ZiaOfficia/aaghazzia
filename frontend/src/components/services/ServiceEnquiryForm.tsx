import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitToGoogleSheets } from "../../utils/googleSheets";
import { sendEmailNotification } from "../../utils/emailNotification";
import { buttonStyles } from "../ui/buttonStyles";
import { fieldClass, labelClass } from "../ui/formStyles";

interface ServiceEnquiryFormProps {
  serviceName: string;
  /** Kept for compatibility; both variants now share one layout. */
  variant?: "horizontal" | "full";
}

export const ServiceEnquiryForm = ({ serviceName }: ServiceEnquiryFormProps) => {
  const navigate = useNavigate();
  const uid = useId();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });

  const update = (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Trigger background tasks (non-blocking)
      submitToGoogleSheets({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.eventDate,
        message: formData.message,
        serviceName: serviceName || "Inquiry",
      });

      sendEmailNotification({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.eventDate,
        message: formData.message,
        serviceName: serviceName || "Inquiry",
      });

      // Redirect instantly
      navigate("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      // Navigate anyway for instant feel
      navigate("/thank-you");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={labelClass}>Full name</label>
          <input id={`${uid}-name`} type="text" required autoComplete="name" value={formData.name} onChange={update("name")} className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={labelClass}>Email address</label>
          <input id={`${uid}-email`} type="email" required autoComplete="email" value={formData.email} onChange={update("email")} className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={labelClass}>Phone number</label>
          <input id={`${uid}-phone`} type="tel" required autoComplete="tel" value={formData.phone} onChange={update("phone")} className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${uid}-date`} className={labelClass}>
            Preferred date <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id={`${uid}-date`} type="date" value={formData.eventDate} onChange={update("eventDate")} className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor={`${uid}-message`} className={labelClass}>Write your message</label>
        <textarea id={`${uid}-message`} rows={5} value={formData.message} onChange={update("message")} placeholder="Write your message here..." className={`${fieldClass} resize-y`} />
      </div>
      <button type="submit" className={buttonStyles("primary", "w-full sm:w-auto")}>
        Send message
      </button>
    </form>
  );
};
