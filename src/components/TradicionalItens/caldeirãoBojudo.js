import React from "react";
import Extra1 from "../../assets/tradicional/linhatradicional22.jpg";
import Branco from "../../assets/branco.png";

import { Fade, Reveal } from "react-reveal";

const Products = () => {
  const products = PRODUCTS.products;

  return (
    <div
      className="
      grid grid-cols-1 gap-x-36 gap-y-14 mx-10 items-center 
      justify-center 
      sm:grid-cols-1 sm:mx-10 
      md:mx-10 md:grid-cols-2
      lg:mx-28 lg:grid-cols-3 lg:gap-x-10 
            "
    >
      {products.map((item, index) => (
        <Reveal key={index}>
          <Fade bottom big>
            <div className="h-full">
              <div className="bg-white w-full h-full drop-shadow-2xl rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110">
                <div className="w-full p-7 items-center flex flex-col">
                  <img
                    src={item.image_url}
                    alt=""
                    className="w-full h-48 object-contain"
                  />
                  <div className="w-full mt-10 flex flex-col items-center h-full">
                    <span className="font-poppins font-bold text-preto text-2xl p-1 -mb-2"></span>
                    <span className="font-poppins font-semibold text-preto text-2xl p-1 max-w-max before:block before:absolute before:transform before:translate-y-3 before:inset-0 before:inset-y-2 before:bg-[#FFE719] relative inline-block before:-z-10">
                      {item.name}
                    </span>
                    <span className="font-poppins font-semibold text-preto text-2xl p-1 max-w-max before:block before:absolute before:transform before:translate-y-3 before:inset-0 before:inset-y-2 before:bg-[#FFE719] relative inline-block before:-z-10">
                      <b>Código: </b>
                      {item.Código}
                    </span>
                    <span className="font-poppins font-semibold text-preto text-2xl p-1 max-w-max before:block before:absolute before:transform before:translate-y-3 before:inset-0 before:inset-y-2 before:bg-[#FFE719] relative inline-block before:-z-10">
                      <b>Número: </b>
                      {item.Numero}
                    </span>
                    <span className="font-poppins font-semibold text-preto text-2xl p-1 max-w-max before:block before:absolute before:transform before:translate-y-3 before:inset-0 before:inset-y-2 before:bg-[#FFE719] relative inline-block before:-z-10">
                      <b>Dimensões: </b>
                      {item.Dimensões}
                    </span>
                    <span className="font-poppins font-semibold text-preto text-2xl p-1 max-w-max before:block before:absolute before:transform before:translate-y-3 before:inset-0 before:inset-y-2 before:bg-[#FFE719] relative inline-block before:-z-10">
                      <b>Capacidade: </b>
                      {item.Capacidade}
                    </span>
                    <span className="font-poppins font-semibold text-preto text-2xl p-1 max-w-max before:block before:absolute before:transform before:translate-y-3 before:inset-0 before:inset-y-2 before:bg-[#FFE719] relative inline-block before:-z-10">
                      <b>Cod .EAN: </b>
                      {item.COD}
                    </span>
                    <span className="font-poppins font-light text-base text-preto">
                      {item.description || "\u00A0"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </Reveal>
      ))}
    </div>
  );
};

export default Products;

const PRODUCTS = {
  products: [
    {
      name: "Caldeirão Bojudo",
      Código: "71",
      Numero: "10",
      Dimensões: "10 cm",
      COD: "7897449700713",
      Capacidade: "0,85 Lts",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Bojudo",
      Código: "72",
      Numero: "12",
      Dimensões: "12 cm",
      COD: "7897449700720",
      Capacidade: "1,3 Lts",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Bojudo",
      Código: "73",
      Numero: "14",
      Dimensões: "14 cm",
      COD: "7897449700737",
      Capacidade: "2,4 Lts",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Bojudo",
      Código: "74",
      Numero: "16",
      Dimensões: "16 cm",
      COD: "7897449700744",
      Capacidade: "3,1 Lts",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Bojudo",
      Código: "75",
      Numero: "18",
      Dimensões: "18 cm",
      COD: "7897449700751",
      Capacidade: "4,45 Lts",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Bojudo",
      Código: "76",
      Numero: "20",
      Dimensões: "20 cm",
      COD: "7897449700768",
      Capacidade: "7,0 Lts",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Bojudo",
      Código: "77",
      Numero: "22",
      Dimensões: "22 cm",
      COD: "7897449700775",
      Capacidade: "8,7 Lts",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Bojudo",
      Código: "78",
      Numero: "24",
      Dimensões: "24 cm",
      COD: "7897449700782",
      Capacidade: "9,8 Lts",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Bojudo",
      Código: "510",
      Numero: "26",
      Dimensões: "26 cm",
      COD: "7897449705107",
      Capacidade: "17,6 Lts",
      image_url: Extra1,
    },
  ],
};
