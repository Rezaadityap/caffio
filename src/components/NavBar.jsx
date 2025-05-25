import { use, useState } from "react";
import logoUrl from "../assets/log.png";
import { useMotionValueEvent, useScroll } from "framer-motion";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });

  const defaultClasses = "transition-all absolute inset-0 -z-1";
  let navbarClasses = scrolled
    ? `${defaultClasses} border-b border-black/10 bg-white/75 backdrop-blur-lg`
    : `${defaultClasses} bg-transparent`;
  return (
    <div className="sticky inset-x-0 top-0 w-full z-30">
      <div className={navbarClasses}></div>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
        <div className="flex items-center justify-between">
          <div>
            <img src={logoUrl} alt="Logo Caffio" className="h-20" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex flex-row space-x-4 p-4">
              <li>
                <a href="#tentang-kami" className="text-gray-600">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#daftar" className="text-gray-600">
                  Pendaftaran
                </a>
              </li>
              <li>
                <a href="#fitur" className="text-gray-600">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#harga" className="text-gray-600">
                  Harga
                </a>
              </li>
              <li>
                <a href="#testimoni" className="text-gray-600">
                  Testimoni
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <a
              href="/"
              className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-md text-white cursor-pointer">
              Masuk
            </a>
            <a
              href="https://wa.me/6281585586085?text=Halo%20saya%20ingin%20daftar%20Caffio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-md text-white cursor-pointer ml-2">
              Daftar
            </a>
          </div>
          <MobileMenu></MobileMenu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
