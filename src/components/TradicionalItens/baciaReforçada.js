import React from "react";
import Extra1 from "../../assets/tradicional/linhatradicional10.jpg";
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
      name: "Bacia Reforçada",
      Código: "239",
      Numero: "15",
      Dimensões: "15 cm",
      COD: "7897449702397",
      Capacidade: "0,4 L",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "13",
      Numero: "20",
      Dimensões: "20 cm",
      COD: "7897449700133",
      Capacidade: "0,8 L ",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "14",
      Numero: "25",
      Dimensões: "25 cm",
      COD: "7897449700140",
      Capacidade: "1,7 L",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "15",
      Numero: "30",
      Dimensões: "30 cm",
      COD: "7897449700157",
      Capacidade: "2,8 L",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "16",
      Numero: "35",
      Dimensões: "35 cm",
      COD: "7897449700164",
      Capacidade: "4,3 L",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "17",
      Numero: "40",
      Dimensões: "40 cm",
      COD: "7897449700171",
      Capacidade: "7,0 L",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "18",
      Numero: "45",
      Dimensões: "45 cm",
      COD: "7897449700188",
      Capacidade: "10,0 L",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "19",
      Numero: "50",
      Dimensões: "50 cm",
      COD: "7897449700195",
      Capacidade: "13,5 L",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "20",
      Numero: "55",
      Dimensões: "55 cm",
      COD: "7897449700201",
      Capacidade: "16,0 L",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "21",
      Numero: "60",
      Dimensões: "60 cm",
      COD: "7897449700218",
      Capacidade: "20,0 L",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "560",
      Numero: "65",
      Dimensões: "65 cm",
      COD: "7897449705602",
      Capacidade: "30,0 L",
      image_url: Extra1,
    },
    {
      name: "Bacia Reforçada",
      Código: "359",
      Numero: "70",
      Dimensões: "70 cm",
      COD: "7897449703592",
      Capacidade: "35,0 L ",
      image_url: Extra1,
    },
  ],
};
