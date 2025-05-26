import { motion } from "framer-motion";
import MileStone from "./MileStone";

const roadmap = [
  {
    id: 1,
    name: "Mulai Daftar",
    description: "Hubungi kami melalui Whatsapp untuk memulai perjalanan Anda.",
  },
  {
    id: 2,
    name: "Diskusi",
    description:
      "Diskusikan kebutuhan usaha Anda dengan tim kami. Kami bantu memilih solusi terbaik.",
  },
  {
    id: 3,
    name: "Pilih Paket",
    description:
      "Tentukan paket yang sesuai: Gratis, Pro, atau Premium. Bisa upgrade kapan saja.",
  },
  {
    id: 4,
    name: "Onboarding Lokasi",
    description:
      "Kami bantu setting awal: nama kafe, logo, menu, dan layout meja.",
  },
  {
    id: 5,
    name: "Selesai",
    description:
      "Kafe Anda siap menerima pesanan! Gunakan dashboard & QR menu secara langsung.",
  },
];

// Variabel animasi untuk tiap item
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: "easeInOut",
    },
  }),
};

const RoadMapSection = () => {
  return (
    <motion.section
      id="daftar"
      className="max-w-80 mx-auto mt-3 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}>
      <motion.h1
        className="font-bold text-primary text-3xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        Alur pendaftaran
      </motion.h1>

      {roadmap.map((roadmapItem, index) => (
        <motion.div key={index} custom={index} variants={itemVariants}>
          <MileStone
            title={roadmapItem.name}
            description={roadmapItem.description}
            lastItem={index === roadmap.length - 1}
          />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default RoadMapSection;
