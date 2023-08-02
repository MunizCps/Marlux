import React from "react";
import Madeira1 from "../assets/madeira/linhamadeira1.jpg";
import Madeira2 from "../assets/madeira/linhamadeira2.jpg";
import Madeira3 from "../assets/madeira/linhamadeira3.jpg";
import Madeira4 from "../assets/madeira/linhamadeira4.jpg";
import Madeira5 from "../assets/madeira/linhamadeira5.jpg";

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
      name: "Caçarola Bojuda",
      name1: "Cacarola Bojuda",
      image_url: Madeira1,
    },
    {
      name: "Caçarola Cônica Lixada C/ Alça",
      name1: "Cacarola Alca Madeira",
      image_url: Madeira2,
    },
    {
      name: "Caçarola Cônica Lixada C/ Cabo",
      name1: "Cacarola Conica Lixada C Cabo",
      image_url: Madeira3,
    },
    {
      name: "Canecão Extra Cabo de Madeira",
      name1: "Canecao Extra Cabo de Madeira",
      image_url: Madeira4,
    },
    {
      name: "Frigideira Cônica",
      name1: "Frigideira Conica",
      image_url: Madeira5,
    },
  ],
};
