import { Coffee, Rocket, Smile } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="tentang-kami"
      className="pt-10 pb-16 px-6 md:px-20 text-center flex flex-col items-center scroll-mt-16">
      <h2 className="text-3xl font-extrabold text-primary mb-4">Siapa Kami?</h2>
      <p className="max-w-3xl text-gray-600 text-lg mb-12 leading-relaxed">
        <strong>Caffio</strong> adalah platform pemesanan digital untuk kafe dan
        kedai modern. Kami bantu usaha kamu naik level dengan sistem yang mudah
        dipakai, hemat biaya, dan siap pakai tanpa ribet.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div className=" bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow hover:shadow-md transition">
          <div className="flex items-center justify-center mb-4">
            <Coffee className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-primary">
            Untuk Usaha Kecil & Menengah
          </h3>
          <p className="text-gray-600">
            Kami percaya semua bisnis, sekecil apa pun, pantas punya sistem
            digital profesional.
          </p>
        </div>

        <div className=" bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow hover:shadow-md transition">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-primary">
            Siap Pakai & Tumbuh Bersama
          </h3>
          <p className="text-gray-600">
            Sistem instan yang langsung bisa digunakan. Fleksibel mengikuti
            pertumbuhan bisnis kamu.
          </p>
        </div>

        <div className=" bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow hover:shadow-md transition">
          <div className="flex items-center justify-center mb-4">
            <Smile className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-primary">
            Dukungan Penuh
          </h3>
          <p className="text-gray-600">
            Tim kami siap membantu dari awal onboarding sampai bisnis kamu jalan
            lancar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
