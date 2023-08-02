import React from "react";
import Fundida1 from "../assets/fundida/linhafundida1.jpg";
import Fundida2 from "../assets/fundida/linhafundida2.jpg";
import Fundida3 from "../assets/fundida/linhafundida3.jpg";
import Fundida4 from "../assets/fundida/linhafundida4.jpg";
import Fundida5 from "../assets/fundida/linhafundida5.jpg";
import Fundida6 from "../assets/fundida/linhafundida6.jpg";
import Fundida7 from "../assets/fundida/linhafundida7.jpg";

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
      name: "Caçarola Fundida c/ alça",
      name1: "Cacarola Fundida c alca",
      image_url: Fundida1,
    },
    {
      name: "Caçarola Fundida c/ alça fundida",
      name1: "Cacarola Fundida c alca fundida",
      image_url: Fundida2,
    },
    {
      name: "Caldeirão Fundido",
      name1: "Caldeirao Fundido",
      image_url: Fundida3,
    },
    {
      name: "Churrasqueira Lumigrill Fundida",
      name1: "Churrasqueira Lumigrill Fundida",
      image_url: Fundida4,
    },
    {
      name: "Frigideira Fundida com Tampa",
      name1: "Frigideira Fundida com Tampa",
      image_url: Fundida5,
    },
    {
      name: "Pilão Fundido",
      name1: "Pilao Fundido",
      image_url: Fundida6,
    },
    {
      name: "Tacho Fundido com Tampa",
      name1: "Tacho Fundido com Tampa",
      image_url: Fundida7,
    },
  ],
};
