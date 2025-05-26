import { motion } from "framer-motion";
import { features } from "../data/features";
import TagLine from "./TagLine";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.7,
      ease: "easeInOut",
    },
  }),
};

const FeaturesSection = () => {
  return (
    <section
      id="fitur"
      className="flex items-center p-10 justify-center flex-col scroll-mt-16">
      <TagLine>Fitur</TagLine>
      <motion.h2
        className="font-extrabold text-center text-3xl mb-8 pt-3 text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}>
        Operasional Jadi Mudah!
      </motion.h2>

      <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white border border-primary/30 rounded-lg shadow-lg p-6 h-full flex space-x-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.3 }}>
            <div>
              <h3 className="font-semibold text-primary text-xl">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
