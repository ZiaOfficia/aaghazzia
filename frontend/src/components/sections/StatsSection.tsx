import {
  GraduationCap,
  Users,
  HandCoins,
  BookOpen,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { statsImages } from "../../data/imageAssets";

interface Stat {
  icon: typeof GraduationCap;
  value: string;
  label: string;
  caption: string;
  image: string;
}

const stats: Stat[] = [
  {
    icon: Calendar,
    value: "20+",
    label: "Years on the ground",
    caption: "From a single needy student in 2004 to thousands across India.",
    image: statsImages.teacherWriting,
  },
  {
    icon: GraduationCap,
    value: "5,000+",
    label: "Students supported",
    caption: "Verified, in-person, one student at a time — not statistics.",
    image: statsImages.girlGraduate,
  },
  {
    icon: HandCoins,
    value: "100%",
    label: "Reaches the child",
    caption: "Founder funding covers our overheads. Every rupee is the child's.",
    image: statsImages.studentsWalking,
  },
  {
    icon: Users,
    value: "300+",
    label: "Active volunteers",
    caption: "Field surveys in 14 states. Two visit every household. No exceptions.",
    image: statsImages.classroomDesk,
  },
  {
    icon: BookOpen,
    value: "2",
    label: "Learning centres",
    caption: "LCGC, Lucknow since 2011. Rahmani 30 partnership in UP.",
    image: statsImages.teacherWriting,
  },
];

export const StatsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stats[activeIndex];

  return (
    <section className="relative py-24 md:py-28 px-6 bg-impact-pattern overflow-hidden">
      {/* Decorative diamond corners */}
      <span className="absolute top-12 left-12 w-4 h-4 bg-primary rotate-45 opacity-60 hidden lg:block" />
      <span className="absolute top-12 right-12 w-4 h-4 bg-secondary rotate-45 opacity-60 hidden lg:block" />
      <span className="absolute bottom-12 left-12 w-4 h-4 bg-secondary rotate-45 opacity-60 hidden lg:block" />
      <span className="absolute bottom-12 right-12 w-4 h-4 bg-primary rotate-45 opacity-60 hidden lg:block" />

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4">
            <span className="block w-8 h-px bg-primary" />
            By The Numbers
            <span className="block w-8 h-px bg-primary" />
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent">
            Quiet work. Loud results.
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto text-base md:text-lg">
            Twenty years of receipts, reports, and follow-up phone calls — boiled
            down to five honest numbers. Hover any stat to see the story behind it.
          </p>
        </div>

        {/* Interactive grid: stats + live image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT — large rotating image driven by hovered stat */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-3 -left-3 w-full h-full border-2 border-primary/40 rounded-tl-[3rem] rounded-br-[3rem]" />
            <motion.div
              key={active.image}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden shadow-2xl"
            >
              <img
                src={active.image}
                alt={active.label}
                className="w-full h-full object-cover"
              />
              {/* Live overlay caption */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,15,15,0.95) 0%, transparent 100%)",
                }}
              >
                <p className="text-secondary text-[10px] uppercase tracking-[0.4em] font-bold mb-2">
                  Behind the number
                </p>
                <p className="font-display text-xl md:text-2xl leading-tight">
                  {active.caption}
                </p>
              </div>

              {/* Active-stat badge top-right */}
              <span className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-accent text-[10px] font-bold uppercase tracking-widest">
                <active.icon size={12} />
                {active.label}
              </span>
            </motion.div>
          </div>

          {/* RIGHT — stat list */}
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                const isActive = i === activeIndex;
                return (
                  <motion.li
                    key={stat.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    className={`group relative p-5 md:p-6 cursor-pointer rounded-tl-2xl rounded-br-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-white border-primary shadow-xl scale-[1.01]"
                        : "bg-white/40 border-transparent hover:bg-white/70 hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      {/* Icon */}
                      <span
                        className={`shrink-0 w-14 h-14 rounded-tl-2xl rounded-br-2xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-white shadow-lg scale-110"
                            : "bg-mesh-rose text-primary"
                        }`}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </span>

                      {/* Number + label */}
                      <div className="flex-1 min-w-0 flex items-baseline gap-4 flex-wrap">
                        <span
                          className={`font-display text-4xl md:text-5xl font-bold transition-colors ${
                            isActive ? "text-primary" : "text-accent"
                          }`}
                        >
                          {stat.value}
                        </span>
                        <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-text-muted font-bold">
                          {stat.label}
                        </span>
                      </div>

                      {/* Active indicator chevron */}
                      <span
                        className={`hidden md:block transition-all duration-300 text-secondary ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2"
                        }`}
                      >
                        &rarr;
                      </span>
                    </div>

                    {/* Animated underline when active */}
                    <span
                      className={`absolute left-6 right-6 bottom-2 h-px bg-gradient-to-r from-primary to-secondary transition-all duration-500 origin-left ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </motion.li>
                );
              })}
            </ul>

            {/* Bottom note */}
            <p className="mt-8 text-text-muted text-sm italic flex items-center gap-3">
              <span className="block w-6 h-px bg-secondary" />
              Numbers are reviewed every quarter and shared with our donors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
