import { motion } from "framer-motion";
import TagLine from "./TagLine";

const testimonials = [
  {
    name: "Reza Aditya Pratama",
    img: "testimonials/Reza.jpeg",
    text: `Fitur QR code-nya keren banget. Pelanggan tinggal scan, pilih
      menu, langsung pesan. Nggak perlu antri, dan kasir juga jadi
      lebih fokus.`,
  },
  {
    name: "Hanif Alfiyanto",
    img: "testimonials/Hanif.png",
    text: `Aplikasi ini gampang banget dipakai. Saya bisa lihat pesanan per
      meja, cetak struk, sampai cek laporan harian.`,
  },
  {
    name: "Novia Suci Ramadhani",
    img: "testimonials/nopi.jpeg",
    text: `Dulu kami catat pesanan pakai kertas, sering salah hitung. Sejak
      pakai Caffio, semua pesanan masuk rapi ke dashboard, Ga bikin
      ribet!.`,
  },
];

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

const TestimonialsSection = () => {
  return (
    <section
      id="testimoni"
      className="flex items-center justify-center flex-col p-10 scroll-mt-16">
      <TagLine>Testimoni</TagLine>
      <motion.h2
        className="text-3xl text-primary font-bold text-center mt-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}>
        Apa yang mereka katakan?
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left">
        {testimonials.map((testi, i) => (
          <motion.div
            key={i}
            className="grid gap-4"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true, amount: 0.3 }}>
            <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
              <div className="flex space-x-3 mb-4">
                <img
                  src={testi.img}
                  alt={`Testimoni ${testi.name}`}
                  className="w-16 h-16 rounded-full"
                />
                <p>{testi.name}</p>
              </div>
              <p className="text-sm space-y-4">{testi.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
