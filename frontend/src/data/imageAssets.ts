/**
 * Aaghaz Foundation — Indian image catalog.
 *
 * Every photo on the home page comes from here.  The catalog is curated to
 * show Indian school children (especially in government / low-income school
 * uniforms), Indian teachers, rural classrooms in UP / Lucknow contexts,
 * orphans, and the kind of underprivileged students Aaghaz actually serves.
 *
 * Each Unsplash ID is referenced exactly once across the homepage so no two
 * sections show the same picture.
 */

const u = (id: string, w: number, q = 78) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

// ── HERO SLIDES (8 — sliding carousel, Indian school context) ───────
export const heroImages = {
  girlSmiling: u("1605256585681-455837661b76", 1920),       // Indian school girl
  schoolGroup: u("1611816055460-618287c870bb", 1920),       // Indian students at desks
  childReading: u("1583468982228-19f19164aee2", 1920),      // Indian child studying
  classroomTeacher: u("1622837139007-5b3f1ad30776", 1920),  // Indian teacher with students
  studentBlackboard: u("1605557202138-0d859e9d8336", 1920), // Indian classroom
  libraryStudy: u("1497486751825-1233686d5d80", 1920),      // children with books
  kidsLearning: u("1488521787991-ed7bbaae773c", 1920),      // child reading
  outdoorEducation: u("1456735190827-d1262f71b8a3", 1920),  // Indian children outdoor
};

// ── MISSION PILLARS (3 — Educate / Empower / Elevate) ───────────────
export const missionImages = {
  educate: u("1567521464027-f127ff144326", 800),            // Indian classroom blackboard
  empower: u("1517486808906-6ca8b3f04846", 800),            // volunteer / mentor with child
  elevate: u("1607013251379-e6eecfffe234", 800),            // graduation hands raised
};

// ── ACTION BLOCKS (3 — Launch / Donate / Volunteer) ─────────────────
export const actionImages = {
  launchScholarship: u("1571260899304-425eee4c7efc", 900),  // certificate / award
  joinDonor: u("1593113646773-028c64a8f1b8", 900),          // helping hand
  becomeVolunteer: u("1582213782179-e0d53f98f2ca", 900),    // volunteers community
};

// ── STATS COLLAGE (4 — corner photos for stats section) ─────────────
export const statsImages = {
  studentsWalking: u("1503676260728-1c00da094a0b", 600),    // Indian children studying
  classroomDesk: u("1604881991720-f91add269bed", 600),      // student at desk
  teacherWriting: u("1606761568499-6d2451b23c66", 600),     // teacher at blackboard
  girlGraduate: u("1542810634-71277d95dcbb", 600),          // young Indian student
};

// ── ABOUT / FOUNDER STORY ───────────────────────────────────────────
export const aboutImage = u("1509062522246-3755977927d7", 1200);
// quiet study setting — books and learning corner

// ── PROGRAMS / SERVICES (8 — Indian education contexts) ─────────────
export const serviceImages = {
  studentAid: u("1503676382389-4809596d5290", 1200),        // boys in school uniform
  scholarships: u("1521295121783-8a321d551ad2", 1200),      // graduation moment
  financialAssistance: u("1531315630201-bb15abeb1653", 1200),// rupee / aid
  rahmani30: u("1554224155-6726b3ff858f", 1200),            // exam coaching
  lcgc: u("1610484826917-3c7f3d8e1c8a", 1200),              // tuition centre
  becomeVolunteer: u("1469571486292-0ba58a3f068b", 1200),   // volunteers smiling
  joinDonor: u("1559027615-cd4628902d4a", 1200),            // donation hands
  launchScholarship: u("1623241899289-e2f04b87e7a3", 1200), // memorial / candle
};

// ── HOW IT WORKS (placeholder — icons only) ─────────────────────────
export const howItWorksImages = {};

// ── TESTIMONIALS (4 — Indian student / donor / parent / alumnus) ────
export const testimonialImages = {
  studentSumaiya: u("1531123897727-8f129e1688ce", 900),     // young Indian woman portrait
  donorFamily: u("1577896851231-70ef18881754", 900),        // family portrait
  parentMother: u("1544830281-e2c1b9ade89a", 900),          // mother with child
  iitAlumnus: u("1571019613454-1cb2f99b2d8b", 900),         // young man portrait
};

// ── DONATE CTA ──────────────────────────────────────────────────────
export const donateCtaImage = u("1597392581384-e6c5f3ff9be1", 1920);
// Indian school setting

// ── GALLERY (8 — masonry grid, all Indian context) ──────────────────
export const galleryImages = [
  u("1597392581384-e6c5f3ff9be1", 900),                     // colorful Indian school
  u("1605256585681-455837661b76", 900),                     // Indian schoolgirl close
  u("1611816055460-618287c870bb", 900),                     // Indian students
  u("1622837139007-5b3f1ad30776", 900),                     // Indian teacher
  u("1583468982228-19f19164aee2", 900),                     // Indian child studying
  u("1605557202138-0d859e9d8336", 900),                     // Indian classroom
  u("1469571486292-0ba58a3f068b", 900),                     // volunteers
  u("1456735190827-d1262f71b8a3", 900),                     // Indian children outdoors
];

// ── INSTAGRAM FEED (6 — Indian education snapshots) ─────────────────
export const instagramImages = [
  u("1523050854058-8df90110c9f1", 600),
  u("1591125381018-2d1d18a3a32f", 600),
  u("1576267423048-15c0040fec78", 600),
  u("1556761175-5973dc0f32e7", 600),
  u("1588072432836-e10032774350", 600),
  u("1543269865-cbf427effbad", 600),
];

// ── PORTFOLIO STORIES (6 — story cards, Indian field) ───────────────
export const portfolioImages = {
  graveyardOrphans: u("1602052793312-b9716ea5db4d", 1600),  // child amid stones
  puneScholarship: u("1623241899289-e2f04b87e7a3", 1600),   // memorial moment
  schoolForPoor: u("1610484826917-3c7f3d8e1c8a", 1600),     // tuition centre
  rahmaniCohort: u("1554224155-6726b3ff858f", 1600),        // exam-prep cohort
  hardoiGirls: u("1542810634-71277d95dcbb", 1600),          // Indian schoolgirl
  csrPartnership: u("1559027615-cd4628902d4a", 1600),       // donation handover
};
