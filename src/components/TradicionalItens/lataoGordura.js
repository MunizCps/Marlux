import React from "react";
import Extra1 from "../../assets/tradicional/linhatradicional63.jpg";
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
                      <b>Dimensões: </b>
                      {item.Dimensões}
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
      name: "Latão P/ Gordura",
      Código: "1219",
      Numero: "15",
      Dimensões: "20 cm",
      COD: "7897449712198",
      Capacidade: "5,0 L",
      image_url: Extra1,
    },
    {
      name: "Latão P/ Gordura",
      Código: "554",
      Numero: "20",
      Dimensões: "22 cm",
      COD: "7897449705541",
      Capacidade: "7,5 L ",
      image_url: Extra1,
    },
    {
      name: "Latão P/ Gordura",
      Código: "138",
      Numero: "25",
      Dimensões: "24 cm",
      COD: "7897449701383",
      Capacidade: "10,0 L",
      image_url: Extra1,
    },
    {
      name: "Latão P/ Gordura",
      Código: "139",
      Numero: "30",
      Dimensões: "26 cm",
      COD: "7897449701390",
      Capacidade: "13,0 L",
      image_url: Extra1,
    },
    {
      name: "Latão P/ Gordura",
      Código: "140",
      Numero: "35",
      Dimensões: "28 cm",
      COD: "7897449701406",
      Capacidade: "17,0 L",
      image_url: Extra1,
    },
    {
      name: "Latão P/ Gordura",
      Código: "141",
      Numero: "40",
      Dimensões: "30 cm",
      COD: "7897449701413",
      Capacidade: "20,0 L",
      image_url: Extra1,
    },
    {
      name: "Latão P/ Gordura",
      Código: "220",
      Numero: "45",
      Dimensões: "32 cm",
      COD: "7897449702205",
      Capacidade: "30,0 L",
      image_url: Extra1,
    },
    {
      name: "Latão P/ Gordura",
      Código: "142",
      Numero: "50",
      Dimensões: "36 cm",
      COD: "7897449701420",
      Capacidade: "36,0 L",
      image_url: Extra1,
    },
    {
      name: "Latão P/ Gordura",
      Código: "143",
      Numero: "55",
      Dimensões: "40 cm",
      COD: "7897449701437",
      Capacidade: "50,0 L",
      image_url: Extra1,
    },
  ],
};
