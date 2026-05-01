import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Heart, Users, ArrowRight } from "lucide-react";
import { actionImages } from "../../data/imageAssets";

export const ActionBlocksSection = () => {
  const blocks = [
    {
      icon: Award,
      title: "Launch a Scholarship",
      text: "Many of our donors choose to support Aaghaz by offering scholarships — often a memorial scholarship in the name of a loved one. We co-design the criteria with you and report annually.",
      image: actionImages.launchScholarship,
      link: "/services/launch-scholarship",
      cta: "Read More",
    },
    {
      icon: Heart,
      title: "Join Us as a Donor",
      text: "Join the Aaghaz donor base by registering with us. A team member will get in touch to walk you through the kind of support you'd like to provide and answer any questions.",
      image: actionImages.joinDonor,
      link: "/services/join-as-donor",
      cta: "Read More",
    },
    {
      icon: Users,
      title: "Become a Volunteer",
      text: "Aaghaz is a volunteer-driven organisation. Our volunteers identify students in need of financial assistance and work alongside the core team — both in the field and online.",
      image: actionImages.becomeVolunteer,
      link: "/services/become-volunteer",
      cta: "Read More",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-mesh-rose relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4">
            <span className="block w-8 h-px bg-primary" />
            Three Ways To Help
            <span className="block w-8 h-px bg-primary" />
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-display text-accent">
            <span className="text-gradient-primary">Educate. Empower.</span>{" "}
            Step in.
          </h2>
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
                    <h3 className="text-xl md:text-2xl font-display font-bold text-accent mb-3 group-hover:text-primary transition-colors">
                      {block.title}
                    </h3>
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
