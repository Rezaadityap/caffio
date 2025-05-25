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

const RoadMapSection = () => {
  return (
    <section id="daftar" className="max-w-80 mx-auto mt-3 scroll-mt-24">
      <h1 className="font-bold text-primary text-3xl text-center mb-16">
        Alur pendaftaran
      </h1>
      {roadmap.map((roadmapItem, index) => (
        <MileStone
          key={index}
          title={roadmapItem.name}
          description={roadmapItem.description}
          lastItem={index === roadmap.length - 1}></MileStone>
      ))}
    </section>
  );
};

export default RoadMapSection;
