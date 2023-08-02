import React from "react";
import Extra1 from "../../assets/hotel/linhahotel4.jpg";
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
      name: "Caçarola Hotel C/ Alça",
      Código: "376",
      Numero: "26",
      Dimensões: "26 cm",
      COD: "7897449703769",
      Capacidade: "6.1 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "377",
      Numero: "28",
      Dimensões: "28 cm",
      COD: "7897449703776",
      Capacidade: "7,6 L ",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "378",
      Numero: "30",
      Dimensões: "30 cm",
      COD: "7897449703783",
      Capacidade: "9,5 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "379",
      Numero: "32",
      Dimensões: "32 cm",
      COD: "7897449703790",
      Capacidade: "11.6 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "467",
      Numero: "34",
      Dimensões: "34 cm",
      COD: "7897449704674",
      Capacidade: "13,6 L ",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "380",
      Numero: "36",
      Dimensões: "36 cm",
      COD: "7897449703806",
      Capacidade: "16,5 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "468",
      Numero: "38",
      Dimensões: "38 cm",
      COD: "7897449704681",
      Capacidade: "19,3 L ",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "381",
      Numero: "40",
      Dimensões: "40 cm",
      COD: "7897449703813",
      Capacidade: "23,20 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "382",
      Numero: "42",
      Dimensões: "42 cm",
      COD: "7897449703820",
      Capacidade: "27,9 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "413",
      Numero: "45",
      Dimensões: "45 cm",
      COD: "7897449704131",
      Capacidade: "34,2 L ",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "414",
      Numero: "50",
      Dimensões: "50 cm",
      COD: "7897449704148",
      Capacidade: "45,0 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "595",
      Numero: "55",
      Dimensões: "55 cm",
      COD: "7897449705954",
      Capacidade: "60,0 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Hotel C/ Alça",
      Código: "415",
      Numero: "60",
      Dimensões: "60 cm",
      COD: "7897449704155",
      Capacidade: "71,0 L",
      image_url: Extra1,
    },
  ],
};
