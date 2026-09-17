import type { ReactNode } from "react";
import { ContactSection } from "../components/sections/ContactSection";
import { SEO } from "../components/common/SEO";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { FitImage } from "../components/ui/FitImage";

const ssImg = (name: string) => `/images/suceessstories/${encodeURIComponent(name)}.jpeg`;

const StoryImage = ({ name, alt }: { name: string; alt?: string }) => (
  <div className="aspect-[4/3] overflow-hidden rounded-md bg-sand">
    <FitImage src={ssImg(name)} alt={alt ?? name} loading="lazy" decoding="async" />
  </div>
);

const StorySection = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section aria-labelledby={id} className="border-t border-line pt-12 md:pt-16">
    <h2 id={id} className="font-display text-3xl font-semibold md:text-4xl">
      {title}
    </h2>
    <div className="mt-10 space-y-10">{children}</div>
  </section>
);

const StoryText = ({ children }: { children: ReactNode }) => (
  <p className="text-lg leading-relaxed text-muted [&_strong]:font-semibold [&_strong]:text-ink">{children}</p>
);

const OthersList = ({ items }: { items: string[] }) => (
  <div className="rounded-md bg-sand p-6 md:p-8">
    <h3 className="font-sans text-sm font-semibold">Also supported</h3>
    <ul className="mt-4 grid list-disc gap-x-10 gap-y-2 pl-5 text-muted marker:text-terracotta sm:grid-cols-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export const SuccessStoriesPage = () => {
  return (
    <>
      <SEO
        title="Success Stories — Aaghaz Foundation"
        description="Doctors, lawyers, engineers, teachers and more — real lives transformed through the support of Aaghaz Foundation across India."
      />

      <PageHeader
        eyebrow="Success Stories"
        title="Stories from Aaghaz"
        intro="Meet some of the students we have supported and read about the people and work behind Aaghaz."
      />

      <Container className="space-y-16 pb-20 md:space-y-24 md:pb-28">
        <StorySection id="doctors" title="Doctors Nurtured by Aaghaz">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <StoryImage name="His childhood home" />
              <StoryImage name="Dr. Mominul Islam today" />
            </div>
            <div className="mt-6 max-w-3xl">
              <StoryText>
                This is the mud house where Dr. Mominul Islam grew up with his family. Today, he works as a child surgeon at Bengal Medical College.
              </StoryText>
            </div>
          </div>

          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <StoryImage name="Dr. Arbaaz" />
              <StoryText>
                Dr. Arbaaz grew up in Karnataka. His father was paralyzed, but Arbaaz studied hard and got rank 85 in the NEET exam. Today, he works as a doctor at AIIMS, Delhi.
              </StoryText>
            </div>
            <div className="space-y-5">
              <StoryImage name="Dr Md Ashraful Haque" />
              <StoryText>Dr Md Ashraful Haque — Burdwan Medical College.</StoryText>
            </div>
          </div>

          <OthersList
            items={[
              "Dr Iman Nida (MBBS, Hyderabad)",
              "Dr Heba Khan (MBBS, Telangana)",
              "Dr. Adiba (MBBS, Maulana Azad Medical College, Delhi)",
              "Dr Shiba (Government Dental College and Research Institute)",
              "Dr Alvira (Saraswati Dental College, Lucknow)",
              "Dr Javed Khan (King George's Medical University, Lucknow)",
            ]}
          />
        </StorySection>

        <StorySection id="paramedical" title="Paramedical Achievers">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <StoryImage name="Yasmeen Zahra" />
            <StoryText>
              <strong>Yasmeen Zahra</strong> works as a nurse at Mayo Hospital in Lucknow. After her husband lost his job during COVID-19, she studied nursing to support her family.
            </StoryText>
          </div>
          <OthersList
            items={[
              "Muzna Ayesha Ansari – Ophthalmologist",
              "Ayesha Farooqui – Physician, Dabur Hospital",
              "Mohd Azeem – Dialysis Technician, Government Thiruvarur Medical College",
              "Musab Tanzeel – Data Acquisition Pharmacist, GlaxoSmithKline",
              "Rushda Gulzar – Pharmacist",
              "Pompi Begum – Nurse, Assam",
              "Simran – Nurse, Delhi",
            ]}
          />
        </StorySection>

        <StorySection id="teachers" title="Professors, Teachers and PhD Scholars">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <StoryImage name="Anam Mehendi Abidi" />
            <StoryText>
              <strong>Anam Mehendi Abidi</strong> is an Assistant Professor at Calcutta University. A local newspaper wrote about her when she finished her master's degree, where she thanked Aaghaz for paying her fees.
            </StoryText>
          </div>
          <OthersList
            items={[
              "Wasma Asif – Ed-tech Master Teacher",
              "Kauser Perwez – Teacher at The Green School, Delhi",
              "Mohd Amir – Teacher",
              "Sana – Teacher, Delhi",
              "Aman Abbas Naqvi – PhD Scholar, JNU",
              "Maherukh Arzoo – PhD Scholar, Jodhpur",
            ]}
          />
        </StorySection>

        <StorySection id="lawyers" title="Powered by Aaghaz: From Scholars Turned Lawyers">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <StoryImage name="Yasmeen's Home (Volunteer Visit)" />
              <StoryImage name="Advocate Yasmeen Parveen Today" />
            </div>
            <div className="mt-6 max-w-3xl">
              <StoryText>
                <strong>Yasmeen Parveen</strong> grew up in Noida. Her mother worked in houses and her father was very sick. She studied law in Mumbai with Aaghaz's help and is now training to become a lawyer. The left photo shows our volunteer visiting her Noida home to check details, and the right photo shows her today.
              </StoryText>
            </div>
          </div>

          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <StoryImage name="Jahan Ara Shaikh" />
              <StoryText>
                <strong>Jahan Ara Shaikh</strong> lost both her parents as a child. She worked in a doctor's clinic during the day to survive. During COVID-19, she decided to study law, and Aaghaz paid her college fees. Today, she is a practicing lawyer at the Bombay High Court.
              </StoryText>
            </div>
            <div className="space-y-5">
              <StoryImage name="Shumaila" />
              <StoryText>
                <strong>Shumaila</strong> lost her father early. She grew up in Old Delhi and did small jobs to support her family. Later, she studied law with Aaghaz's support and is now a lawyer at the Delhi High Court.
              </StoryText>
            </div>
          </div>

          <OthersList
            items={[
              "Shaikh Heena Kauser Zahid – MM Court, Mumbai",
              "Sarjan Hussain – High Court of Jammu and Kashmir, Srinagar Wing",
              "Hamid Manzoor Wani – High Court of Jammu and Kashmir, Srinagar Wing",
            ]}
          />
        </StorySection>

        <StorySection id="engineers" title="Engineers">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <StoryImage name="Afree Javed" />
            <StoryText>
              <strong>Afree Javed</strong> works as a Java Developer at Lowe's India. Aaghaz paid her fees, and she topped her college exams. Today, she earns over Rs 18 lakhs a year.
            </StoryText>
          </div>
          <OthersList
            items={[
              "Mohd Shaheer – IIT Allahabad",
              "Mohd Aamir – IIT Bombay",
              "Fazle Hasan – Data Scientist, Jio Platforms Ltd",
              "Talha Azhar – Engineer, Accent Techno Solutions",
              "Anas Tabish – Indian Army Tech SSB",
              "Zaid Faruqui – Software Engineer",
              "Tasmiya Abid – CS Engineer",
              "Mohammad Uzair Solanki – Engineer",
              "Shariq Jilani – Engineer",
              "Md Shadab Alam – Engineer",
              "Md Sharim Alam – Engineer",
              "Sharique Jilani – Engineer",
              "Md Hisham – Engineer",
              "Junaid Khan – Mechanical Engineer",
              "Sufiyaan – CS Engineer",
            ]}
          />
        </StorySection>

        <StorySection id="ca-cs" title="CA and CS">
          <OthersList
            items={[
              "Khurshid Alam – CA",
              "Faizan Anwer – CA",
              "Md Aasif Reza – CA",
              "Rizba Khan – CS",
              "Ayesha Fatima – Accountant",
            ]}
          />
        </StorySection>

        <StorySection id="others" title="Others">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="space-y-5">
              <StoryImage name="Yusuf" />
              <StoryText>Yusuf — Hotelier, ITC Hotel.</StoryText>
            </div>
            <div className="space-y-5">
              <StoryImage name="Tasneem Fatima" />
              <StoryText>Tasneem Fatima — Journalist, Newslaundry.</StoryText>
            </div>
          </div>
          <OthersList
            items={[
              "Buland Zehra – Food Technologist",
              "Jishad – Journalist and Filmmaker",
              "Rachael Anthony – Journalist",
            ]}
          />
        </StorySection>

        <StorySection id="noida-case" title="Noida Case">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <StoryImage name="AftabAlam1" alt="Aftab Alam's Family" />
              <StoryImage name="AftabAlam2" alt="Mohd Shajid & Mohd Shahid" />
            </div>
            <div className="mt-6 max-w-3xl">
              <StoryText>
                After cab driver Aftab Alam passed away in 2020, Aaghaz paid the college fees for his sons, gave them tablets to study, and provided monthly help for home expenses.
              </StoryText>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-lg text-muted marker:text-terracotta">
                <li>
                  <strong className="font-semibold text-ink">Mohd Shajid</strong> — B.Tech, NSUT Delhi
                </li>
                <li>
                  <strong className="font-semibold text-ink">Mohd Shahid</strong> — B.Sc (Hons) Botany, Dayal Singh College, Delhi University
                </li>
              </ul>
            </div>
          </div>
        </StorySection>

        <StorySection id="aligarh-coaching" title="Aligarh Coaching">
          <div className="max-w-3xl space-y-4 border-l-2 border-terracotta pl-6">
            <StoryText>
              Aaghaz paid for free coaching classes for 29 students preparing for the Class 11 admission exams at AMU. We are happy that <strong>13 of these students got selected</strong>.
            </StoryText>
            <StoryText>
              The total cost was <strong>Rs 2.95 lakhs</strong>, which is about <strong>Rs 10,000 per student</strong> for the whole year. This was a great success, and these selected students can now apply for higher professional courses more easily.
            </StoryText>
          </div>
        </StorySection>

        <figure className="border-t border-line pt-12 text-center">
          <blockquote className="mx-auto max-w-2xl font-display text-xl italic leading-relaxed text-muted">
            "These are just a few of the many students Aaghaz has helped. Many have finished their studies and got good jobs, and others are still studying to achieve their dreams."
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted">— Aaghaz Foundation</figcaption>
        </figure>
      </Container>

      <ContactSection />
    </>
  );
};
