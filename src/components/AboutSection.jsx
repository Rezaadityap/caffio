import { Coffee, Rocket, Smile } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

const AboutSection = () => {
  return (
    <motion.section
      id="tentang-kami"
      className="pt-10 pb-16 px-6 md:px-20 text-center flex flex-col items-center scroll-mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.3 }}>
      <h2 className="text-3xl font-extrabold text-primary mb-4">Siapa Kami?</h2>
      <p className="max-w-3xl text-gray-600 text-lg mb-12 leading-relaxed">
        <strong>Caffio</strong> adalah platform pemesanan digital untuk kafe dan
        kedai modern. Kami bantu usaha kamu naik level dengan sistem yang mudah
        dipakai, hemat biaya, dan siap pakai tanpa ribet.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {[
          {
            icon: <Coffee className="w-10 h-10 text-primary" />,
            title: "Untuk Usaha Kecil & Menengah",
            desc: "Kami percaya semua bisnis, sekecil apa pun, pantas punya sistem digital profesional.",
          },
          {
            icon: <Rocket className="w-10 h-10 text-primary" />,
            title: "Siap Pakai & Tumbuh Bersama",
            desc: "Sistem instan yang langsung bisa digunakan. Fleksibel mengikuti pertumbuhan bisnis kamu.",
          },
          {
            icon: <Smile className="w-10 h-10 text-primary" />,
            title: "Dukungan Penuh",
            desc: "Tim kami siap membantu dari awal onboarding sampai bisnis kamu jalan lancar.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow hover:shadow-md transition"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}>
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutSection;
