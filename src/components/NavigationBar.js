import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-gray-200 shadow-xl py-3 " : "bg-transparent"
      } px-28 py-10 transition-all duration-300 ease-in-out`}
    >
      <div className="flex-row flex items-center">
        <a href="/principal" className="h-16 flex-row flex items-center">
          <img
            src="https://marlux.com.br/novo/view/img/marlux_logo.png"
            alt=""
            className="w-20 h-16 rounded-md"
          />
        </a>

        <div className="h-8 w-[2px] bg-black rounded-sm ml-5" />

        <a
          href="/empresa"
          className="hover:bg-[#000] hover:text-white py-1 px-3 rounded-md ml-3"
        >
          <span className="font-poppins font-medium text-base">Empresa</span>
        </a>
        <a
          href="/catalogo"
          className="hover:bg-[#000] hover:text-white py-1 px-3 rounded-md ml-2"
        >
          <span className="font-poppins font-medium text-base">Catálogo</span>
        </a>
        <a
          href="/contato"
          className="hover:bg-[#000] hover:text-white py-1 px-3 rounded-md ml-2"
        >
          <span className="font-poppins font-medium text-base">Contato</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
