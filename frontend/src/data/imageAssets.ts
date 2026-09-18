/**
 * Aaghaz Foundation — image catalogue.
 *
 * All photos are real Aaghaz photographs taken from aaghazfoundation.com and
 * stored in /public/images/aaghaz (resized for the web). To replace a photo,
 * add the new file to that folder and change the path below.
 */

const p = (file: string) => `/images/aaghaz/${file}`;

export const photos = {
  girlStudyingBed: p("girl-studying-bed.jpg"),
  girlSchoolBagShop: p("girl-school-bag-shop.jpg"),
  classroomTeacher: p("classroom-teacher.jpg"),
  girlLookingUp: p("girl-looking-up.jpg"),
  boyStudying: p("boy-studying.jpg"),
  twoGirlsStudying: p("two-girls-studying.jpg"),
  memorialPlaque: p("memorial-plaque.jpg"),
  girlStudyingDesk: p("girl-studying-desk.jpg"),
  volunteersWithChildren: p("volunteers-with-children.jpg"),
  youngWomanStudent: p("young-woman-student.jpg"),
  scholarshipVisitGroup: p("scholarship-visit-group.jpg"),
  donorsGroup: p("donors-group.jpg"),
  tutoringComputer: p("tutoring-computer.jpg"),
  girlHijabPortrait: p("girl-hijab-portrait.jpg"),
  girlWithPeacock: p("girl-with-peacock.jpg"),
  girlReadingGarden: p("girl-reading-garden.jpg"),
  familyPortrait: p("family-portrait.jpg"),
  schoolgirlPortrait: p("schoolgirl-portrait.jpg"),
  visitorsWithSchoolgirls: p("visitors-with-schoolgirls.jpg"),
  childrenLinedUp: p("children-lined-up.jpg"),
  bookDistribution: p("book-distribution.jpg"),
  childrenByField: p("children-by-field.jpg"),
  girlPortrait: p("girl-portrait.jpg"),
  girlWalkingToSchool: p("girl-walking-to-school.jpg"),
  boyPortrait: p("boy-portrait.jpg"),
  girlWriting: p("girl-writing.jpg"),
  scholarshipVisitChildren: p("scholarship-visit-children.jpg"),
  childrenWithBooks: p("children-with-books.jpg"),
  studyRoom: p("study-room.jpg"),
  fieldMeeting: p("field-meeting.jpg"),
  childrenWithVolunteer: p("children-with-volunteer.jpg"),
  drawingCloseup: p("drawing-closeup.jpg"),
};

const computerCentre = (n: string) => `/images/computercenter/Screenshot 2026-05-15 ${n}.png`;

// ── HOME HERO + WHAT WE DO CARDS ────────────────────────────────────
export const heroImages = {
  // Hero screens
  heroOurStory: photos.girlStudyingBed,
  heroProblem: photos.girlSchoolBagShop,
  heroImpact: photos.classroomTeacher,
  heroCallToAction: photos.girlLookingUp,

  // What We Do programme cards
  studentAid: photos.boyStudying,
  coaching: photos.girlWriting,
  communityLearning: photos.twoGirlsStudying,
  computerLearning: computerCentre("111019"),
  memorialScholarships: photos.scholarshipVisitChildren,
};

// ── WHY WE EXIST (Educate / Empower / Elevate) ─────────────────────
export const missionImages = {
  educate: photos.girlStudyingDesk,
  empower: photos.volunteersWithChildren,
  // Aaghaz alumnus, now a doctor
  elevate: "/images/suceessstories/DrMdAshrafulHaque.jpeg",
};

// ── HOW YOU CAN HELP (Scholarship / Donor / Volunteer) ─────────────
export const actionImages = {
  launchScholarship: photos.scholarshipVisitGroup,
  joinDonor: photos.donorsGroup,
  becomeVolunteer: photos.tutoringComputer,
};

// Founder photo (homepage About section and /about page).
export const founderImage = "/images/owner/owner.jpeg";

// ── PROGRAMME PAGE HEADER IMAGES ───────────────────────────────────
export const serviceImages = {
  studentAid: photos.boyStudying,
  scholarships: photos.youngWomanStudent,
  financialAssistance: photos.familyPortrait,
  computerCenter: computerCentre("111019"),
  communityLearningCentres: photos.twoGirlsStudying,
  memorialScholarship: photos.scholarshipVisitGroup,
  becomeVolunteer: photos.volunteersWithChildren,
  joinDonor: photos.donorsGroup,
  launchScholarship: photos.memorialPlaque,
};

export const testimonialImages = {
  yasminParveen: "/images/suceessstories/AdvocateYasmeenParveenToday.jpeg",
  aamirHannan: "/images/testimonials/AamirHannan.jpeg",
  irtiqaKhan: "/images/testimonials/IrtiqaKhan.jpeg",
  mominulIslam: "/images/testimonials/Dr.MominulIslam.jpeg",
  shibaSami: "/images/testimonials/DrShibaSami.jpeg",
  imranMustafaMalik: "/images/testimonials/DrImranMustafaMalik.jpeg",
};

// ── HOMEPAGE GALLERY PREVIEW (8) ────────────────────────────────────
export const galleryImages = [
  photos.girlHijabPortrait,
  photos.girlWithPeacock,
  photos.childrenLinedUp,
  photos.girlReadingGarden,
  photos.visitorsWithSchoolgirls,
  photos.familyPortrait,
  photos.bookDistribution,
  photos.schoolgirlPortrait,
];

// ── FULL GALLERY PAGE ───────────────────────────────────────────────
export const allGalleryImages = [
  photos.girlHijabPortrait,
  photos.girlWithPeacock,
  photos.childrenLinedUp,
  photos.girlReadingGarden,
  photos.visitorsWithSchoolgirls,
  photos.familyPortrait,
  photos.bookDistribution,
  photos.schoolgirlPortrait,
  photos.classroomTeacher,
  photos.girlStudyingBed,
  photos.volunteersWithChildren,
  photos.girlPortrait,
  photos.tutoringComputer,
  photos.girlWalkingToSchool,
  photos.scholarshipVisitGroup,
  photos.boyPortrait,
  photos.donorsGroup,
  photos.girlWriting,
  photos.childrenWithBooks,
  photos.girlLookingUp,
  photos.studyRoom,
  photos.twoGirlsStudying,
  photos.scholarshipVisitChildren,
  photos.boyStudying,
  photos.childrenWithVolunteer,
  photos.youngWomanStudent,
  photos.fieldMeeting,
  photos.girlSchoolBagShop,
  photos.girlStudyingDesk,
  photos.childrenByField,
];
