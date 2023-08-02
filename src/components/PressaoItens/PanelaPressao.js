import React from "react";
import Extra1 from "../../assets/pressao/linhaPressao1.jpg";
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
      name: "Panela de Pressão",
      Código: "555",
      Numero: "16",
      Dimensões: "16 cm",
      COD: "7897449705558",
      Capacidade: "2,5 L",
      image_url: Extra1,
    },
    {
      name: "Panela de Pressão",
      Código: "262",
      Numero: "18",
      Dimensões: "18 cm",
      COD: "7897449702625",
      Capacidade: "3,0 L",
      image_url: Extra1,
    },
    {
      name: "Panela de Pressão",
      Código: "207",
      Numero: "20",
      Dimensões: "20 cm",
      COD: "7897449702076",
      Capacidade: "4,5 L",
      image_url: Extra1,
    },
    {
      name: "Panela de Pressão",
      Código: "512",
      Numero: "22",
      Dimensões: "22 cm",
      COD: "7897449705121",
      Capacidade: "5,5 L",
      image_url: Extra1,
    },
    {
      name: "Panela de Pressão",
      Código: "263",
      Numero: "24",
      Dimensões: "25 cm",
      COD: "7897449702632",
      Capacidade: "7,0 L",
      image_url: Extra1,
    },
    {
      name: "Panela de Pressão",
      Código: "384",
      Numero: "26",
      Dimensões: "26 cm",
      COD: "7897449703844",
      Capacidade: "10,0 L",
      image_url: Extra1,
    },
  ],
};
