import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";

function NavigationHamburguer() {
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
        scrolled ? "bg-gray-200 shadow-xl" : "bg-transparent"
      } px-10 py-1 transition-all duration-300 ease-in-out`}
    >
      <a href="##" className="h-16 w-fit flex-row flex items-center">
        <img
          src="https://marlux.com.br/novo/view/img/marlux_logo.png"
          alt=""
          className="w-14 h-12 rounded-md"
        />
      </a>
      <Menu right styles={styles}>
        <button className="bg-[#FAFBFF] rounded-md w-full py-2">
          <a
            href="/empresa"
            className="rounded-md text-base font-medium w-full flex items-center justify-center"
          >
            <HiOutlineOfficeBuilding size={20} className="mr-3" />
            Empresa
          </a>
        </button>
        <button className="bg-[#FAFBFF] rounded-md justify-center flex w-full py-2 space-x-3">
          <a
            href="/catalogo"
            className="rounded-md text-base font-medium w-full flex items-center justify-center"
          >
            <HiOutlineBookOpen size={20} className="mr-3" />
            Catálogo
          </a>
        </button>
        <button className="bg-[#FAFBFF] rounded-md justify-center flex w-full py-2 space-x-3">
          <a
            href="/contato"
            className="rounded-md text-base font-medium w-full flex items-center justify-center"
          >
            <HiOutlinePhone size={20} className="mr-3" />
            Contato
          </a>
        </button>
      </Menu>
    </nav>
  );
}

export default NavigationHamburguer;

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "25px",
    top: "1.5rem",
    right: "2.5rem",
  },
  bmBurgerBars: {
    background: "#000",
    height: "5px",
    borderRadius: "10px",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#FAFBFF",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: "#1E1E1E",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmItemList: {
    color: "#1E1E1E",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bmItem: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: "0",
    left: "0",
  },
};
