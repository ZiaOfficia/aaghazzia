import { ButtonLink } from "../components/ui/ButtonLink";
import { SEO } from "../components/common/SEO";

export const PrivacyPolicyPage = () => {
  return (
    <div className="bg-cream">
      <SEO
        title="Privacy Policy — Aaghaz Foundation"
        description="Privacy Policy for Aaghaz Foundation. How we collect, use, and protect donor and applicant information."
      />
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-20">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-10 mt-4 text-sm text-muted">
          Last Updated: October 2024
        </p>

        <div className="article-content">
          <p>
            At Aaghaz Foundation, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy outlines how we
            collect, use, and safeguard your data when you visit our website or
            apply for our scholarship and student aid programs. By using our website,
            you agree to these terms.
          </p>

          <h2>
            Who We Are
          </h2>
          <p>
            Aaghaz Foundation is a registered education trust based in Lucknow, India.
            We help talented students who need support finish their education through
            scholarships and financial aid. Our website address is:
            [https://aaghazfoundation.com].
          </p>

          <h2>
            How We Collect and Use Your Personal Information
          </h2>
          <p>
            We collect only the personal information needed to run our programs and
            verify applicants. This includes:
          </p>
          <ul>
            <li>Student's name, age, gender, and school/college details.</li>
            <li>Academic marksheets and study reports.</li>
            <li>Parents' names, occupations, and family income details.</li>
            <li>Phone number, email address, and home address.</li>
            <li>Bank account details (only for paying school fees directly).</li>
          </ul>
          <p>
            You provide this information when you apply for student aid, register as
            a volunteer, fill out donor forms, or subscribe to our newsletter. We use
            your data to:
          </p>
          <ul>
            <li>Verify the financial and academic details of applicants.</li>
            <li>Contact families for in-person home visits.</li>
            <li>Process and pay school or college fees.</li>
            <li>Send updates to donors about the students they support.</li>
            <li>Share newsletter and program updates.</li>
          </ul>

          <h2>
            How We Protect Your Personal Data
          </h2>
          <p>
            We take safety measures to protect your personal details from unauthorized
            access or disclosure. Your data is kept secure. However, no internet
            transmission is 100% safe, so we cannot guarantee absolute safety.
          </p>

          <h2>
            Who We Share Your Data With
          </h2>
          <p>
            We never sell or rent your personal information. We only share details in
            the following situations:
          </p>
          <ul>
            <li>
              <strong>Donors:</strong> We share student names, stories, and academic
              progress reports with the donors who fund their education.
            </li>
            <li>
              <strong>Volunteers:</strong> We share contact and address details with
              our volunteers so they can visit your home for checking details.
            </li>
            <li>
              <strong>Legal Compliance:</strong> If required by law, we may share
              information with government authorities to comply with legal rules.
            </li>
          </ul>

          <h2>
            Cookies and Tracking
          </h2>
          <p>
            Our website uses cookies to improve your browsing experience. Cookies help
            us see how visitors use our site so we can make it better. You can turn
            off cookies in your browser settings, but some website features might
            not work.
          </p>

          <h2>
            How Long We Retain Your Data
          </h2>
          <p>
            We keep your personal information only as long as needed to help you with
            your studies or as required by law. If you ask us to delete your details,
            we will do so unless we need to keep them for legal reasons.
          </p>

          <h2>
            What Rights You Have Over Your Data
          </h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Ask for a copy of the information we have about you.</li>
            <li>Ask us to correct any wrong details.</li>
            <li>Ask us to delete your personal data.</li>
          </ul>
          <p>
            To do this, contact us using the email or phone number below.
          </p>

          <h2>
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this policy from time to time. Any updates will be posted
            on this page, and the date at the top will be updated. Continuing to use
            our site means you agree to the updated terms.
          </p>

          <h2>
            Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <div className="rounded-md bg-sand p-6">
            <h3 className="font-display text-lg font-semibold">
              Aaghaz Foundation Support Team
            </h3>
            <p className="mb-1">
              <strong>Email:</strong> aaghaz.foundation@gmail.com
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> +91 99716 48900
            </p>
            <p>
              <strong>Address:</strong> Near Guds Tiraha, Main Road, Nishatganj, Lucknow
            </p>
          </div>
          <p className="mt-6 italic">
            We are dedicated to protecting your privacy and ensuring your data
            is handled responsibly.
          </p>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <ButtonLink to="/" variant="secondary">
            Back to Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
