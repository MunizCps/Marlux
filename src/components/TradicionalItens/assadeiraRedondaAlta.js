import React from "react";
import Extra1 from "../../assets/tradicional/linhatradicional6.jpg";
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
      name: "Assadeira Redonda Alta",
      Código: "694",
      Numero: "16",
      Dimensões: "16 Ø X 10",
      COD: "7897449706944",
      Capacidade: "2.00 L",
      image_url: Extra1,
    },
    {
      name: "Assadeira Redonda Alta",
      Código: "695",
      Numero: "18",
      Dimensões: "18 Ø X 10",
      COD: "7897449706951",
      Capacidade: "2.50 L",
      image_url: Extra1,
    },
    {
      name: "Assadeira Redonda Alta",
      Código: "656",
      Numero: "20",
      Dimensões: "20 Ø X 10",
      COD: "7897449706562",
      Capacidade: "3.00 L",
      image_url: Extra1,
    },
    {
      name: "Assadeira Redonda Alta",
      Código: "657",
      Numero: "22",
      Dimensões: "22 Ø X 10",
      COD: "7897449706579",
      Capacidade: "3.60 L",
      image_url: Extra1,
    },
    {
      name: "Assadeira Redonda Alta",
      Código: "658",
      Numero: "24",
      Dimensões: "24 Ø X 10",
      COD: "7897449706586",
      Capacidade: "4.30 L",
      image_url: Extra1,
    },
    {
      name: "Assadeira Redonda Alta",
      Código: "628",
      Numero: "26",
      Dimensões: "26 Ø X 10",
      COD: "7897449706289",
      Capacidade: "5.00 L",
      image_url: Extra1,
    },
  ],
};
