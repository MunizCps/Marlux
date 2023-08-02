import React from "react";
import Extra1 from "../../assets/tampa de vidro/linhaTampaDeVidro1.jpg";
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
      name: "Caçarola Longa Vida C/ Tampa de Vidro C/ Alça",
      Código: "446",
      Numero: "16",
      Dimensões: "16 cm",
      COD: "7897449704469",
      Capacidade: "1,45 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Longa Vida C/ Tampa de Vidro C/ Alça",
      Código: "447",
      Numero: "18",
      Dimensões: "18 cm",
      COD: "7897449704476",
      Capacidade: "2,0 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Longa Vida C/ Tampa de Vidro C/ Alça",
      Código: "448",
      Numero: "20",
      Dimensões: "20 cm",
      COD: "7897449704483",
      Capacidade: "2,6 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Longa Vida C/ Tampa de Vidro C/ Alça",
      Código: "449",
      Numero: "22",
      Dimensões: "22 cm",
      COD: "7897449704490",
      Capacidade: "3,6 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Longa Vida C/ Tampa de Vidro C/ Alça",
      Código: "450",
      Numero: "24",
      Dimensões: "25 cm",
      COD: "7897449704506",
      Capacidade: "5,0 L",
      image_url: Extra1,
    },
    {
      name: "Caçarola Longa Vida C/ Tampa de Vidro C/ Alça",
      Código: "561",
      Numero: "26",
      Dimensões: "26 cm",
      COD: "7897449705619",
      Capacidade: "6,3 L",
      image_url: Extra1,
    },
  ],
};
