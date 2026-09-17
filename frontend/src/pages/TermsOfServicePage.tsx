import { ButtonLink } from "../components/ui/ButtonLink";
import { SEO } from "../components/common/SEO";

export const TermsOfServicePage = () => {
  return (
    <div className="bg-cream">
      <SEO
        title="Terms of Service"
        description="Terms of Service for Aaghaz Foundation."
      />
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-20">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mb-10 mt-4 text-sm text-muted">
          Effective Date: October 2024
        </p>

        <div className="article-content">
          <p>
            Welcome to Aaghaz Foundation! These Terms of Service govern your use of
            our website (aaghazfoundation.com) and our scholarship programs. By
            using our website or applying for help, you agree to these terms.
            Please read them carefully.
          </p>

          <h2>
            Who We Are & Services
          </h2>
          <p>
            Aaghaz Foundation is a registered education trust based in Lucknow, India.
            We help talented students who need support finish their education through:
          </p>
          <ul>
            <li>Need-based financial help and scholarships for school and college fees.</li>
            <li>Free coaching classes and study centers (like LCGC in Lucknow).</li>
            <li>Opportunities for people to donate money or join as volunteers.</li>
          </ul>

          <h2>
            Eligibility
          </h2>
          <p>
            Our fee help and scholarships are for students studying in recognized schools
            or colleges in India. Students under 18 years of age must apply with the
            help of their parents or legal guardians.
          </p>

          <h2>
            Applications & Verification
          </h2>
          <p>
            To apply for fee help or a scholarship:
          </p>
          <ul>
            <li>You must fill out the application form with correct details.</li>
            <li>You agree that our volunteers can visit your home and school in person to verify your details.</li>
            <li>Giving wrong details will result in your application being rejected or stopped immediately.</li>
          </ul>

          <h2>
            Donations & Refunds
          </h2>
          <ul>
            <li>
              <strong>100% Direct Help:</strong> 100% of your donation is spent directly on student fees. Our founders pay for all office costs.
            </li>
            <li>
              <strong>Tax Exemption:</strong> Donations made by Indian residents get tax deduction benefits under Section 80G of the Income Tax Act.
            </li>
            <li>
              <strong>Refunds:</strong> Once a donation is made, it cannot be refunded except in special cases of system error (please contact us within 7 days of the donation).
            </li>
          </ul>

          <h2>
            Volunteer Guidelines
          </h2>
          <p>
            If you join Aaghaz as a volunteer, you agree to:
          </p>
          <ul>
            <li>Follow our volunteer guidelines and values.</li>
            <li>Be polite and respectful to students and families during home visits.</li>
            <li>Keep all student and family details private and safe.</li>
          </ul>

          <h2>
            Intellectual Property
          </h2>
          <p>
            All content on our website, including text, designs, logos, and photos,
            belongs to Aaghaz Foundation. You cannot copy or use them without our
            written permission.
          </p>

          <h2>
            Limitation of Liability
          </h2>
          <p>
            We make every effort to help as many students as possible. However, our
            help depends on the funds we receive from donors. We cannot guarantee that
            every applicant will get a scholarship. Aaghaz Foundation is not liable
            for any student being unable to secure admission or continue education.
          </p>

          <h2>
            Changes to Terms
          </h2>
          <p>
            We may change these terms from time to time. Any changes will be posted on
            this page. By continuing to use our website, you agree to the updated terms.
          </p>

          <h2>
            Contact Us
          </h2>
          <p>
            If you have any questions or concerns about these Terms of Service,
            please contact us:
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
              <strong>Address:</strong> Near Guds Tiraha, Main Road, Nishatganj, Lucknow, UP — 226006
            </p>
          </div>
          <p className="mt-6 italic">
            Thank you for choosing Aaghaz Foundation! We look forward to working
            together to help children study and succeed.
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
