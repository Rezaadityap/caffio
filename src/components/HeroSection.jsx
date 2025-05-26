import { motion } from "framer-motion";
import imgHero from "../assets/hero.svg";

const HeroSection = () => {
  return (
    <motion.section
      className="hero-section text-center mt-32 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }} // hanya animasi sekali saat masuk viewport
    >
      <h1 className="text-4xl font-extrabold leading-[1.15] sm:text-6xl text-primary">
        Focus On Growth
        <br />
        <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          We Handle The Tech
        </span>
      </h1>
      <h2 className="mt-5 text-gray-600 sm:text-xl">
        We are ready to assist you!
      </h2>
      <div className="mx-auto mt-5 flex max-w-fit space-x-4">
        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20daftar%20Caffio"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-primary bg-primary text-white hover:ring-primary/80 hover:ring-2">
          Mulai Sekarang
        </a>
        <a
          href="#daftar"
          className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-gray-200 bg-white text-primary hover:ring-primary/20 hover:ring-2">
          Pelajari Selengkapnya
        </a>
      </div>
      <div className="mt-5 items-center justify-center">
        <motion.img
          src={imgHero}
          alt="Demo Produk"
          className="mx-auto max-h-[300px] sm:max-h-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.section>
  );
};

export default HeroSection;
