import React from "react";
import Extra1 from "../../assets/hotel/linhahotel7.jpg";
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
      name: "Caldeirão Hotel",
      Código: "390",
      Numero: "24",
      Dimensões: "24 cm",
      COD: "7897449703905",
      Capacidade: "10.1 L",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "469",
      Numero: "26",
      Dimensões: "26 cm",
      COD: "7897449704698",
      Capacidade: "12,7 L ",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "372",
      Numero: "28",
      Dimensões: "28 cm",
      COD: "7897449703721",
      Capacidade: "15,3 L",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "470",
      Numero: "30",
      Dimensões: "30 cm",
      COD: "7897449704704",
      Capacidade: "19.0 L",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "373",
      Numero: "32",
      Dimensões: "32 cm",
      COD: "7897449703738",
      Capacidade: "22,5 L ",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "471",
      Numero: "34",
      Dimensões: "34 cm",
      COD: "7897449704711",
      Capacidade: "27,3 L",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "374",
      Numero: "36",
      Dimensões: "36 cm",
      COD: "7897449703745",
      Capacidade: "32,0 L ",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "472",
      Numero: "38",
      Dimensões: "38 cm",
      COD: "7897449704728",
      Capacidade: "38,1 L",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "375",
      Numero: "40",
      Dimensões: "40 cm",
      COD: "7897449703752",
      Capacidade: "45,2 L",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "408",
      Numero: "45",
      Dimensões: "45 cm",
      COD: "7897449704087",
      Capacidade: "64,0 L ",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "409",
      Numero: "50",
      Dimensões: "50 cm",
      COD: "7897449704094",
      Capacidade: "87,0 L",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "596",
      Numero: "55",
      Dimensões: "55 cm",
      COD: "7897449705961",
      Capacidade: "110,0 L",
      image_url: Extra1,
    },
    {
      name: "Caldeirão Hotel",
      Código: "410",
      Numero: "60",
      Dimensões: "60 cm",
      COD: "7897449704100",
      Capacidade: "130,0 L",
      image_url: Extra1,
    },
  ],
};
