import { motion } from "framer-motion";
import { Heart, ShieldCheck, Receipt, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { donateCtaImage } from "../../data/imageAssets";

const tiers = [
  { amt: "₹1,000", label: "School supplies for a year" },
  { amt: "₹5,000", label: "Annual school fees" },
  { amt: "₹25,000", label: "One college year" },
  { amt: "₹50,000", label: "Memorial scholarship" },
];

const trust = [
  { icon: ShieldCheck, label: "100% reaches the child" },
  { icon: Receipt, label: "80G tax-exemption" },
  { icon: Sparkles, label: "Annual progress report" },
];

export const DonateCTA = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Layered background image + gradient */}
      <div className="absolute inset-0">
        <img
          src={donateCtaImage}
          alt="Students at Aaghaz Foundation"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(15,15,15,0.95) 0%, rgba(189,42,72,0.85) 60%, rgba(245,129,28,0.75) 100%)",
          }}
        />
      </div>

      {/* Decorative diamond row */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <div className="flex gap-2 -translate-y-1/2">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 rotate-45 ${
                i === 4 ? "bg-secondary" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT — message */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 text-white"
        >
          <p className="inline-flex items-center gap-3 text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-5">
            <span className="block w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Be the reason today
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6 drop-shadow-2xl">
            One in three Indians
            <br />
            <span className="text-secondary">cannot read this sentence.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
            That number is bigger than most countries. It shrinks by exactly
            one each time you fund one child. Today is a good day to be that
            one.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {trust.map((t) => {
              const Icon = t.icon;
              return (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-white"
                >
                  <Icon size={14} className="text-secondary" />
                  {t.label}
                </span>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-white hover:bg-secondary text-accent hover:text-white px-10 py-5 text-sm uppercase tracking-widest font-bold rounded-tl-2xl rounded-br-2xl shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <Heart size={18} fill="currentColor" />
            Donate Now
            <span className="group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </motion.div>

        {/* RIGHT — donation tiers card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-2 border-2 border-secondary/50 rounded-tl-[3rem] rounded-br-[3rem]" />
            <div className="relative bg-white rounded-tl-[3rem] rounded-br-[3rem] p-8 md:p-10 shadow-2xl">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mb-2">
                Choose your impact
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-accent mb-6">
                What your gift covers
              </h3>

              <ul className="space-y-3 mb-6">
                {tiers.map((t, i) => (
                  <li key={t.amt}>
                    <Link
                      to="/contact"
                      className="group flex items-center justify-between p-4 rounded-tl-xl rounded-br-xl border-2 border-primary/10 hover:border-primary hover:bg-mesh-rose transition-all duration-300"
                    >
                      <div>
                        <p className="font-display text-2xl font-bold text-primary group-hover:text-primary-dark">
                          {t.amt}
                        </p>
                        <p className="text-xs text-text-muted uppercase tracking-widest mt-0.5">
                          {t.label}
                        </p>
                      </div>
                      <span className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center transition-colors">
                        <Heart
                          size={16}
                          fill={i === 1 ? "currentColor" : "none"}
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] text-center text-text-muted">
                Or choose your own amount &mdash;{" "}
                <Link
                  to="/contact"
                  className="text-primary font-bold hover:underline"
                >
                  enter custom amount
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
