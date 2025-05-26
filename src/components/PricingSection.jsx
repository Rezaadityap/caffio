import { motion } from "framer-motion";
import { pricingPlans } from "../data/pricing";
import PlanCard from "./PlanCard";
import TagLine from "./TagLine";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const PricingSection = () => {
  return (
    <section
      id="harga"
      className="flex text-center p-10 items-center justify-center flex-col scroll-mt-16">
      <TagLine>Daftar Harga</TagLine>
      <h2 className="font-extrabold text-primary text-3xl mb-8 pt-3">
        Harga Murah Kualitas Wah
      </h2>
      <motion.div
        className="grid mt-10 items-stretch grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}>
        {pricingPlans.map((plan, index) => (
          <motion.div key={index} variants={itemVariants}>
            <PlanCard {...plan} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PricingSection;
