import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    title: "Tentang Kami",
    url: "#tentang-kami",
  },
  {
    title: "Pendaftaran",
    url: "#daftar",
  },
  {
    title: "Fitur",
    url: "#fitur",
  },
  {
    title: "Harga",
    url: "#harga",
  },
  {
    title: "Testimoni",
    url: "#testimoni",
  },
  {
    title: "Masuk",
    url: "#masuk",
  },
  {
    title: "Daftar",
    url: "https://wa.me/6281585586085?text=Halo%20saya%20ingin%20daftar%20Caffio",
  },
];

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="block md:hidden">
      {!navOpen ? (
        <button onClick={() => setNavOpen(true)}>
          <Menu size={32} />
        </button>
      ) : (
        <>
          <button onClick={() => setNavOpen(false)}>
            <X size={32} />
          </button>
          <div className="absolute left-0 w-full top-20 bg-white/60 backdrop-blur-lg border-b border-t z-50">
            <ul className="flex flex-col py-4 items-center">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="block text-gray-600 p-4">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
