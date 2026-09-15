import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Heart, Users, ArrowRight } from "lucide-react";
import { actionImages } from "../../data/imageAssets";

export const ActionBlocksSection = () => {
  const blocks = [
    {
      icon: Award,
      title: "Start a Scholarship",
      subtitle: "Create something that lasts",
      text: "Set up a scholarship in your name or in honour or memory of someone important to you. You decide the broad purpose and budget, and we help structure the scholarship and identify eligible students.",
      image: actionImages.launchScholarship,
      link: "/services/launch-scholarship",
      cta: "Learn More",
    },
    {
      icon: Heart,
      title: "Become a Donor",
      subtitle: "Support a student",
      text: "Register as an Aaghaz donor and choose how you would like to contribute. You can make a one-time contribution, give regularly or support a verified student directly through our donor platform.",
      image: actionImages.joinDonor,
      link: "/services/join-as-donor",
      cta: "Learn More",
    },
    {
      icon: Users,
      title: "Become a Volunteer",
      subtitle: "Give your time",
      text: "Our volunteers help us verify student applications, stay in touch with students and provide guidance and mentoring. You can volunteer in person or support our work remotely.",
      image: actionImages.becomeVolunteer,
      link: "/services/become-volunteer",
      cta: "Learn More",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-mesh-rose relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4">
            <span className="block w-8 h-px bg-primary" />
            How You Can Help
            <span className="block w-8 h-px bg-primary" />
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-display text-accent">
            Choose how you would like{" "}
            <span className="text-gradient-primary">to help</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto text-sm md:text-lg">
            Support a student, create a scholarship or give your time. There are different ways to be part of Aaghaz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <Link
                  to={block.link}
                  className="group flex flex-col h-full bg-white border border-primary/10 shadow-sm rounded-tl-3xl rounded-br-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-48 md:h-52 overflow-hidden relative">
                    <img
                      src={block.image}
                      alt={block.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-accent shadow-lg">
                      <Icon size={20} />
                    </span>
                  </div>
                  <div className="p-5 md:p-7 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-accent mb-1 group-hover:text-primary transition-colors">
                      {block.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold mb-3">
                      {block.subtitle}
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                      {block.text}
                    </p>
                    <div className="mt-auto inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                      {block.cta}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
