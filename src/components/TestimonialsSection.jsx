import TagLine from "./TagLine";

const TestimonialsSection = () => {
  return (
    <section
      id="testimoni"
      className="flex items-center justify-center flex-col p-10 scroll-mt-16">
      <TagLine>Testimoni</TagLine>
      <h2 className="text-3xl text-primary font-bold text-center mt-3 mb-8">
        Apa yang mereka katakan?
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-xl text-left">
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/Reza.jpeg"
                alt="Testimoni User"
                className="w-16 h-16 rounded-full"
              />
              <p>Reza Aditya Pratama</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                Fitur QR code-nya keren banget. Pelanggan tinggal scan, pilih
                menu, langsung pesan. Nggak perlu antri, dan kasir juga jadi
                lebih fokus.
              </span>
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/Hanif.png"
                alt="Testimoni User"
                className="w-16 h-16 rounded-full"
              />
              <p>Hanif Alfiyanto</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                Aplikasi ini gampang banget dipakai. Saya bisa lihat pesanan per
                meja, cetak struk, sampai cek laporan harian.
              </span>
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
            <div className="flex space-x-3 mb-4">
              <img
                src="/testimonials/nopi.jpeg"
                alt="Testimoni User"
                className="w-16 h-16 rounded-full"
              />
              <p>Novia Suci Ramadhani</p>
            </div>
            <p className="text-sm space-y-4">
              <span>
                Dulu kami catat pesanan pakai kertas, sering salah hitung. Sejak
                pakai Caffio, semua pesanan masuk rapi ke dashboard, Ga bikin
                ribet!.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
