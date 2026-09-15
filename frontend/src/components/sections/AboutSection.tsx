import { aboutContent } from "../../data/content";
import { motion, type Variants } from "framer-motion";
import { founderImage } from "../../data/imageAssets";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-32 px-4 md:px-6 bg-stripes-warm relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center relative">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-3/5 z-10 md:pr-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <div className="bg-white p-8 md:p-16 shadow-xl border-l-4 border-primary rounded-tl-3xl rounded-br-3xl">
              <motion.span
                variants={itemVariants}
                className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
              >
                Our Story · Since 2004
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-6xl font-display text-accent mb-8 leading-tight"
              >
                {aboutContent.heading}
              </motion.h2>

              <div className="space-y-6 text-text-muted font-light text-lg leading-relaxed">
                {aboutContent.text.map((paragraph, index) => (
                  <motion.p key={index} variants={itemVariants}>
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right image — founder photo with quote */}
          <motion.div
            className="w-full md:w-1/2 absolute top-0 right-0 h-full hidden md:block z-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="w-full h-full bg-primary/10 absolute inset-0 -z-10 transform translate-x-12 translate-y-12 rounded-tl-3xl rounded-br-3xl" />
            <img
              loading="lazy"
              decoding="async"
              alt="Mazhar Farooqui — Founder, Aaghaz Foundation"
              className="w-full h-full object-cover opacity-95 rounded-tl-3xl rounded-br-3xl"
              src={founderImage}
            />
            <figure className="absolute bottom-6 right-6 left-[30%] lg:left-[35%] bg-accent/85 backdrop-blur-sm text-white p-6 lg:p-8 rounded-tl-2xl rounded-br-2xl border-l-4 border-secondary shadow-2xl">
              <blockquote className="font-display italic text-base lg:text-xl leading-relaxed">
                “{aboutContent.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-secondary font-bold">
                {aboutContent.quoteAuthor}
              </figcaption>
            </figure>
          </motion.div>

          {/* Mobile fallback image + quote */}
          <div className="w-full md:hidden mt-8">
            <img
              loading="lazy"
              decoding="async"
              alt="Mazhar Farooqui — Founder, Aaghaz Foundation"
              className="w-full h-100 object-cover rounded-tl-3xl rounded-br-3xl"
              src={founderImage}
            />
            <figure className="mt-4 bg-accent text-white p-6 rounded-tl-2xl rounded-br-2xl border-l-4 border-secondary shadow-xl">
              <blockquote className="font-display italic text-lg leading-relaxed">
                “{aboutContent.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-secondary font-bold">
                {aboutContent.quoteAuthor}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
