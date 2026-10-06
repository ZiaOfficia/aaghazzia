import { ButtonLink } from "../components/ui/ButtonLink";
import { PageHeader } from "../components/ui/PageHeader";
import { Section } from "../components/ui/Section";
import { SEO } from "../components/common/SEO";

const APPLICATION_URL = "https://afms.aaghazfoundation.com/BeneficiaryRegister";

const eligibility = [
  "Financial assistance is provided to only those applicants who come from challenging backgrounds.",
  "Orphans, girls, differently-abled children and children suffering from chronic or rare diseases are given priority.",
  "Aaghaz does not support applicants pursuing higher education abroad.",
  "PhD candidates are not eligible for financial assistance.",
  "Aaghaz conducts physical and in-person verification of applicant's personal, financial and academic status.",
  "Financial assistance is offered for one academic year.",
  "Students studying in government institutions are preferred over those studying in private institutions.",
  "Applicants may have to sign a moral bond to repay the assistance.",
  "You may have to record a video of yourself which could be shared among Aaghaz members or used on our social media platforms.",
];

export const ApplyForStudentAidPage = () => (
  <>
    <SEO
      title="Apply for Student Aid"
      description="Check the eligibility criteria and apply for financial assistance from Aaghaz Foundation for your education."
    />

    <PageHeader
      eyebrow="Student Aid"
      title="Apply for Student Aid"
      intro="Please read the eligibility criteria carefully before you apply."
      image="/images/aaghaz/apply-student-aid.jpg"
      imageAlt="Aaghaz student"
      actions={<ButtonLink to="#eligibility">Read eligibility criteria</ButtonLink>}
    />

    <Section tone="white" width="narrow" id="eligibility" aria-labelledby="eligibility-heading">
      <h2 id="eligibility-heading" className="font-display text-3xl font-semibold sm:text-4xl">
        Eligibility Criteria
      </h2>
      <ol className="mt-8 divide-y divide-line border-y border-line">
        {eligibility.map((item, i) => (
          <li key={i} className="flex gap-5 py-5">
            <span className="font-display text-2xl font-semibold leading-none text-terracotta">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-lg leading-relaxed">{item}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <ButtonLink to={APPLICATION_URL}>Apply for Student Aid</ButtonLink>
        <p className="text-muted">Apply here if you meet the eligibility criterion.</p>
      </div>
    </Section>

    <Section tone="sand" width="narrow" spacing="compact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="font-display text-2xl font-semibold">
        Have a question?
      </h2>
      <dl className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="text-sm font-semibold text-terracotta">Head Office</dt>
          <dd className="mt-1">Reg. Office: 57 Ganesh Gunj, Lucknow, Pin: 220618</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-terracotta">Email</dt>
          <dd className="mt-1">
            <a
              href="mailto:aaghaz.foundation@gmail.com"
              className="underline decoration-ink/20 underline-offset-4 hover:text-terracotta"
            >
              aaghaz.foundation@gmail.com
            </a>
          </dd>
        </div>
      </dl>
    </Section>
  </>
);
