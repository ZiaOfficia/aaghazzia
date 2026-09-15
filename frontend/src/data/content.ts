// Aaghaz Foundation — Content & Copy
// Pehla qadam. Phir taleem. Phir tabdeeli.
// (The first step. Then education. Then transformation.)

import { heroImages } from "./imageAssets";

// Home page hero — the four sections shown in the HeroSlider.
// Images live in imageAssets.ts (heroImages.hero*) for easy replacement.
export type HeroCta = {
  label: string;
  to: string;
  variant: "primary" | "outline";
};

export type HeroSection = {
  label: string;
  heading: string;
  body: string;
  source?: string;
  image: string;
  imageAlt: string;
  ctas: HeroCta[];
};

const defaultHeroCtas: HeroCta[] = [
  { label: "Donate Now", to: "/contact", variant: "primary" },
  { label: "Our Story", to: "/about", variant: "outline" },
];

export const homeHeroSections: HeroSection[] = [
  {
    label: "Our Story",
    heading: "We started with one student. Now we help thousands across India.",
    body: "Since 2004, Aaghaz has helped students continue their education when their families could not afford it.",
    image: heroImages.heroOurStory,
    imageAlt: "Aaghaz — Our Story",
    ctas: defaultHeroCtas,
  },
  {
    label: "Education at Risk",
    heading: "Too many students still leave school too soon.",
    body: "In India, 7% of students at secondary level drop out of school. Aaghaz works with families where financial hardship puts a student's education at risk.",
    source: "Source: UDISE+ 2025–26, Ministry of Education, Government of India",
    image: heroImages.heroProblem,
    imageAlt: "Education at risk",
    ctas: defaultHeroCtas,
  },
  {
    label: "65,000+ Students",
    heading: "Aaghaz has supported more than 65,000 students.",
    body: "Many have gone on to build successful careers. Some have returned as mentors, volunteers and donors, helping other students get the same opportunity they once had.",
    image: heroImages.heroImpact,
    imageAlt: "Aaghaz impact — 65,000+ students",
    ctas: defaultHeroCtas,
  },
  {
    label: "You Can Help",
    heading: "There is more to do. You can help.",
    body: "Support a verified student, start a scholarship or volunteer your time. Every contribution helps another student stay in education.",
    image: heroImages.heroCallToAction,
    imageAlt: "You can help",
    ctas: [
      { label: "Support a Student", to: "/services/join-as-donor", variant: "primary" },
      { label: "Start a Scholarship", to: "/services/launch-scholarship", variant: "outline" },
      { label: "Volunteer Your Time", to: "/services/become-volunteer", variant: "outline" },
    ],
  },
];

// "What We Do" — the five programmes shown on the homepage and /services.
export const whatWeDoContent = {
  label: "What We Do",
  heading: "Keeping students in education",
  intro:
    "Aaghaz supports students across India where financial hardship puts their education at risk. Our work ranges from direct financial assistance to coaching, community learning and practical skills.",
};

export const services = [
  {
    title: "Student Aid",
    image: heroImages.studentAid,
    link: "/services/student-aid",
    description:
      "We help eligible students with school and college fees, examination costs, books, uniforms and other essential educational expenses. Every application is verified before assistance is approved.",
  },
  {
    title: "Coaching & Career Guidance",
    image: heroImages.coaching,
    link: "/services",
    description:
      "We provide coaching and guidance to help students prepare for higher education, competitive examinations and careers. Our programmes have included support for students preparing for examinations such as JEE and NEET.",
  },
  {
    title: "Community Learning",
    image: heroImages.communityLearning,
    link: "/services/madarsa-initiative",
    description:
      "Working with educational partners, Aaghaz provides affordable learning opportunities in underserved communities. Hundreds of girls currently benefit from our learning centres in Lucknow and Aligarh.",
  },
  {
    title: "Computer Learning",
    image: heroImages.computerLearning,
    link: "/services/computer-center",
    description:
      "Our free computer learning centre in Lucknow gives students practical digital skills. Several batches have completed the programme and received certificates, helping them become better prepared for further education and work.",
  },
  {
    title: "Named & Memorial Scholarships",
    image: heroImages.memorialScholarships,
    link: "/services/memorial-scholarship",
    description:
      "Donors can establish scholarships in their own name or in honour or memory of someone. Aaghaz verifies and selects eligible students, administers the support and provides updates on their progress.",
  },
];

export const aboutContent = {
  heading: "About Aaghaz Foundation",
  text: [
    "Aaghaz Foundation is a non-profit organisation founded in Lucknow, India, in 2004 by journalist Mazhar Farooqui and a group of friends. It began with ₹2,000 and a simple goal: to help one student continue his education.",
    "Since then, Aaghaz has grown through the support of volunteers, donors and well-wishers who share the belief that a child’s education should not be determined by their family’s financial circumstances.",
    "The Foundation helps students from disadvantaged backgrounds stay in school and continue their education by providing financial and other support where it is needed.",
  ],
  author: "Mazhar Farooqui — Founder",
  quote:
    "One person may not be able to support ten students. But ten people can come together to support one. That is how Aaghaz started, and that is how it has grown.",
  quoteAuthor: "Mazhar Farooqui, Founder",
};

// "Our Story" — shown on the /about page in place of the About text.
export const ourStoryContent = {
  heading: "Our Story",
  text: [
    "Aaghaz Foundation was started in Lucknow in 2004 by journalist Mazhar Farooqui and a group of friends. Mazhar had seen children in his neighbourhood out of school because their families could not afford the fees. They started with ₹2,000 and one student.",
    "There was no larger plan at the time. More students came forward, more people offered to help, and the work gradually spread beyond Lucknow. Today, Aaghaz has supported more than 65,000 students across 22 states, studying in more than 550 schools and colleges.",
    "Aaghaz is now supported by Indians from different backgrounds, including many living overseas who want to contribute to education back home. We believe education is an important part of nation-building. Helping a student complete school or college gives them a better chance of becoming independent and contributing to the country.",
    "We have seen that happen. More than 350 Aaghaz-supported students have become doctors, engineers and lawyers, while many others have built careers in different fields. Some have returned to Aaghaz as donors, mentors and volunteers.",
    "What started with one student has grown across India, but the idea remains simple: one person may not be able to support ten students, but ten people can come together to support one.",
  ],
};

export const faqs = [
  {
    question: "What does Aaghaz Foundation do?",
    answer:
      "Aaghaz helps students from low-income families in India continue their education. We help with school and college fees and other essential educational costs, while also providing mentoring, counselling and educational support.",
  },
  {
    question: "How do you select students for support?",
    answer:
      "Every application goes through a verification process. Our volunteers review the documents provided, visit the student's home and, where necessary, verify information with their school or college. We consider the family's financial circumstances, the student's academic record and other relevant factors before assistance is approved.",
  },
  {
    question: "Who gets priority?",
    answer:
      "We support students whose education is at risk because of financial hardship. Priority is given to those facing particularly difficult circumstances, including orphans, abandoned children, students without parental support and those from families experiencing severe financial hardship. Every case is considered individually.",
  },
  {
    question: "What does Aaghaz pay for?",
    answer:
      "Depending on the student's needs, assistance may cover school or college fees, books, uniforms, examination fees and other essential education-related costs. Support varies according to each student's circumstances and the funds available.",
  },
  {
    question: "Can I get support to study outside India?",
    answer:
      "No. Aaghaz provides educational assistance only to students studying in India. We do not fund courses, colleges, universities or other educational programmes outside India.",
  },
  {
    question: "How can I apply for financial assistance?",
    answer:
      "Applications can be submitted through the Apply for Student Aid section of this website. Applicants must provide accurate information and supporting documents. Every application goes through our verification process, and submitting an application does not guarantee financial assistance.",
  },
  {
    question: "How do I contribute?",
    answer:
      "Register as a donor on our website and use one of the official donation options provided. Registering allows us to properly record your contribution and issue the relevant acknowledgement or receipt. Please do not send money through unofficial channels or directly to individuals claiming to represent Aaghaz.",
  },
  {
    question: "Can I choose which student I support?",
    answer:
      "Yes. Registered donors can view students who have been verified and approved for support. You can filter cases by factors such as school or college, fees and gender, and choose a student you would like to support. Every student listed has already gone through Aaghaz's verification process.",
  },
  {
    question: "How do you make sure donations are properly used?",
    answer:
      "We maintain records of the assistance provided and, wherever possible, make payments for approved educational expenses through traceable channels. Students are verified before assistance is approved, and their continued support is reviewed periodically.",
  },
  {
    question: "I am an Indian citizen living abroad. Can I donate?",
    answer:
      "Indian citizens living outside India may be able to contribute through an eligible Indian bank account, subject to applicable Indian laws and banking requirements. If you live abroad, please contact us before transferring funds so we can confirm that your contribution can be accepted.",
  },
  {
    question: "I am a foreign citizen. Can I donate?",
    answer:
      "No. Aaghaz does not currently accept donations from foreign citizens or funds from foreign sources. If you are unsure whether your contribution is eligible, please contact us before transferring any money.",
  },
  {
    question: "Are donations tax-deductible in India?",
    answer:
      "Eligible donations may qualify for deduction under Section 80G of the Income-tax Act, subject to applicable rules. Aaghaz issues receipts for eligible donations.",
  },
  {
    question: "Does Aaghaz accept Zakat?",
    answer:
      "Yes. Aaghaz accepts Zakat and uses these contributions to support eligible students and their educational needs.",
  },
  {
    question: "Can I set up a scholarship in someone's name or memory?",
    answer:
      "Yes. A named or memorial scholarship allows you to support a student's education in honour or memory of someone important to you, such as a parent, family member, friend or teacher. Contact us and we can help you set it up and keep you informed about the students it supports.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "Our volunteers help verify applications, stay in touch with students, provide mentoring and support our educational programmes. You can register through our website or contact us to find out how you can help.",
  },
  {
    question: "Is Aaghaz Foundation registered in India?",
    answer:
      "Yes. Aaghaz Foundation is registered in India under the Societies Registration Act, 1860. We comply with applicable requirements governing our activities and the contributions we are permitted to accept.",
  },
];

export const ctaContent = {
  heading: "Help a child finish school this year.",
  text: [
    "Many children in India still do not get the chance to go to school. While we cannot solve this big problem overnight, we can change a child's life one at a time. Your donation will help one child stay in school. Start helping today.",
  ],
};

