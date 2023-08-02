import React from "react";
import pressao1 from "../assets/pressao/linhaPressao1.jpg";
import pressao2 from "../assets/pressao/linhaPressao2.png";
import pressao3 from "../assets/pressao/linhaPressao3.jpg";
import pressao4 from "../assets/pressao/linhaPressao4.png";
import pressao5 from "../assets/pressao/linhaPressao5.jpg";
import pressao6 from "../assets/pressao/linhaPressao6.png";
import pressao7 from "../assets/pressao/linhaPressao7.jpg";
import pressao8 from "../assets/pressao/linhaPressao8.png";
import pressao9 from "../assets/pressao/linhaPressao9.png";
import pressao10 from "../assets/pressao/linhaPressao10.jpg";
import pressao11 from "../assets/pressao/linhaPressao11.png";

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
            <a href={item.name1}>
              <div className="h-full">
                <button className="bg-white w-full h-full drop-shadow-2xl rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110">
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
                      <span className="font-poppins font-light text-base text-preto">
                        {item.description || "\u00A0"}
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </a>
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
      name1: "Panela de Pressao1",
      image_url: pressao1,
    },
    {
      name: "Panela de Pressão Nueva",
      name1: "Panela de Pressao Nueva",
      image_url: pressao2,
    },
    {
      name: "Panela de Pressão Marflon",
      name1: "Panela de Pressao Marflon",
      image_url: pressao3,
    },
    {
      name: "Panela de Pressão Nueva Marflon",
      name1: "Panela de Pressao Nueva Marflon",
      image_url: pressao4,
    },
    {
      name: "Panela de Pressão Craqueada",
      name1: "Panela de Pressao Craqueada",
      image_url: pressao5,
    },
    {
      name: "Panela de Pressão Nueva Craqueada",
      name1: "Panela de Pressao Nueva Craqueada",
      image_url: pressao6,
    },
    {
      name: "Panela de Pressão Industrial",
      name1: "Panela de Pressao Industrial",
      image_url: pressao7,
    },
    {
      name: "Panela de Pressão Com Fechamento Externo",
      name1: "Panela de Pressao Com Fechamento Externo",
      image_url: pressao8,
    },
    {
      name: "Conjunto Anel e Válvula",
      name1: "Conjunto Anel e Valvula",
      image_url: pressao9,
    },
    {
      name: "Borracha Panela Meia Pressão",
      name1: "Borracha Panela Meia Pressao",
      image_url: pressao10,
    },
    {
      name: "Peso para Panela de Pressão ",
      name1: "Peso para Panela de Pressao ",
      image_url: pressao11,
    },
  ],
};
