import { motion } from "framer-motion";
import {
  HandCoins,
  ClipboardCheck,
  Home,
  Users,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Apply",
    description:
      "Students seeking financial assistance submit an application through the Aaghaz website, along with the required information and supporting documents.",
  },
  {
    icon: Home,
    title: "Verify",
    description:
      "Applications that meet our initial criteria are assigned to Aaghaz volunteers for verification. Two volunteers visit the student and their family to assess their circumstances, review the information provided and, where necessary, verify details with the school or college.",
  },
  {
    icon: Users,
    title: "Review",
    description:
      "The volunteers submit their findings to the Aaghaz committee. Each case is reviewed individually, taking into account financial need, academic record and other relevant circumstances. The committee decides whether assistance should be approved, how much support is required and for how long.",
  },
  {
    icon: HandCoins,
    title: "Support & Follow Up",
    description:
      "Where possible, approved fees are paid directly to the school or college rather than to the student or family. Our volunteers remain in contact with students, follow their progress and report any significant change in their circumstances.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-12 md:py-28 px-4 md:px-6 bg-wedding-slate text-white overflow-hidden">
      {/* Background ornament */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary/5 font-display text-[20rem] font-black select-none pointer-events-none leading-none hidden md:block">
        04
      </span>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-3 text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-4">
            <span className="block w-8 h-px bg-secondary" />
            How We Work
            <span className="block w-8 h-px bg-secondary" />
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-4">
            Every application is checked before support is approved
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Aaghaz follows a clear process to assess need, verify information and make sure educational assistance is used for its intended purpose.
          </p>
        </div>

        {/* Connector line behind cards (desktop) */}
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="group relative"
                >
                  {/* Step number connector dot */}
                  <div className="hidden lg:flex absolute -top-1 left-12 w-3 h-3 rounded-full bg-secondary border-2 border-accent z-10" />

                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-tl-3xl rounded-br-3xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:border-secondary/40 hover:-translate-y-1">
                    {/* Step badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-12 h-12 rounded-full bg-primary text-white font-display text-lg font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Icon */}
                    <Icon
                      size={26}
                      strokeWidth={1.6}
                      className="text-secondary mb-4"
                    />

                    <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow to next step */}
                    {i < steps.length - 1 && (
                      <ArrowRight
                        size={20}
                        className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-secondary/40 group-hover:text-secondary transition-colors"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-[0.3em]">
            <span className="block w-2 h-2 rounded-full bg-secondary animate-pulse" />
            We follow this process for every student without exception.
          </p>
        </div>
      </div>
    </section>
  );
};
