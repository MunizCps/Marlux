import React from "react";
import Marflon1 from "../assets/Marflon/linhamarflon1.jpg";
import Marflon2 from "../assets/Marflon/linhamarflon2.jpg";
import Marflon3 from "../assets/Marflon/linhamarflon3.jpg";
import Marflon4 from "../assets/Marflon/linhamarflon4.jpg";
import Marflon5 from "../assets/Marflon/linhamarflon5.jpg";
import Marflon6 from "../assets/Marflon/linhamarflon6.jpg";
import Marflon7 from "../assets/Marflon/linhamarflon7.jpg";
import Marflon8 from "../assets/Marflon/linhamarflon8.jpg";
import Marflon9 from "../assets/Marflon/linhamarflon9.jpg";
import Marflon10 from "../assets/Marflon/linhamarflon10.jpg";
import Marflon11 from "../assets/Marflon/linhamarflon11.jpg";
import Marflon12 from "../assets/Marflon/linhamarflon12.jpg";
import Marflon13 from "../assets/Marflon/linhamarflon13.jpg";
import Marflon14 from "../assets/Marflon/linhamarflon14.jpg";
import Marflon15 from "../assets/Marflon/linhamarflon15.jpg";
import Marflon16 from "../assets/Marflon/linhamarflon16.jpg";
import Marflon17 from "../assets/Marflon/linhamarflon17.jpg";
import Marflon18 from "../assets/Marflon/linhamarflon18.jpg";
import Marflon19 from "../assets/Marflon/linhamarflon19.jpg";

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
      name: "Assadeira Redonda Marflon",
      name1: "Assadeira Redonda Marflon",
      image_url: Marflon1,
    },
    {
      name: "Assadeira Retangular Marflon Alta",
      name1: "Assadeira Retangular Marflon Alta",
      image_url: Marflon2,
    },
    {
      name: "Caçarola Marflon com Alça",
      name1: "Cacarola Marflon com Alca",
      image_url: Marflon3,
    },
    {
      name: "Caçarola Marflon com Cabo",
      name1: "Cacarola Marflon com Cabo",
      image_url: Marflon4,
    },
    {
      name: "Caldeirão Reto Marflon",
      name1: "Caldeirao Reto Marflon",
      image_url: Marflon5,
    },
    {
      name: "Canecão Marflon",
      name1: "Canecao Marflon",
      image_url: Marflon6,
    },
    {
      name: "Forma para Cuscuz Marflon",
      name1: "Forma para Cuscuz Marflon",
      image_url: Marflon7,
    },
    {
      name: "Forma para Pão Marflon",
      name1: "Forma para Pao Marflon",
      image_url: Marflon8,
    },
    {
      name: "Frigideira Antiaderente",
      name1: "Frigideira Antiaderente",
      image_url: Marflon9,
    },
    {
      name: "Frigideira Antiaderente com Tampa",
      name1: "Frigideira Antiaderente com Tampa",
      image_url: Marflon10,
    },
    {
      name: "Frigideira Marflon",
      name1: "Frigideira Marflon",
      image_url: Marflon11,
    },
    {
      name: "Frigideira Marflon com Tampa",
      name1: "Frigideira Marflon com Tampa",
      image_url: Marflon12,
    },
    {
      name: "Frigideira Marflon Francesa",
      name1: "Frigideira Marflon Francesa",
      image_url: Marflon13,
    },
    {
      name: "Frita Ovo Marflon",
      name1: "Frita Ovo Marflon",
      image_url: Marflon14,
    },
    {
      name: "Hamburgueira Marflon",
      name1: "Hamburgueira Marflon",
      image_url: Marflon15,
    },
    {
      name: "Jogo Frigideira Marflon",
      name1: "Jogo Frigideira Marflon",
      image_url: Marflon16,
    },
    {
      name: "Omeleteira Marflon",
      name1: "Omeleteira Marflon",
      image_url: Marflon17,
    },
    {
      name: "Paellera Antiaderente com Tampa Vidro",
      name1: "Paellera Antiaderente com Tampa Vidro",
      image_url: Marflon18,
    },
    {
      name: "Panquequeira Marflon",
      name1: "Panquequeira Marflon",
      image_url: Marflon19,
    },
  ],
};
