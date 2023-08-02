import React from "react";
import Vision1 from "../assets/vision/linhaVision1.jpg";
import Vision2 from "../assets/vision/linhaVision2.jpg";
import Vision3 from "../assets/vision/linhaVision3.jpg";
import Vision4 from "../assets/vision/linhaVision4.jpg";
import Vision5 from "../assets/vision/linhaVision5.jpg";
import Vision6 from "../assets/vision/linhaVision6.jpg";

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
            <a href={item.name}>
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
      name: "Caçarola Vision Tampa Vidro com Alça",
      name1: "Cacarola Vision Tampa Vidro com Alca",
      image_url: Vision1,
    },
    {
      name: "Caçarola Vision Tampa Vidro com Cabo",
      name1: "Cacarola Vision Tampa Vidro com Cabo",
      image_url: Vision2,
    },
    {
      name: "Canecão Vision",
      name1: "Canecao Vision",
      image_url: Vision3,
    },
    {
      name: "Frigideira Vision com Tampa Vidro",
      name1: "Frigideira Vision com Tampa Vidro",
      image_url: Vision4,
    },
    {
      name: "Frigideira Vision Francesa",
      name1: "Frigideira Vision Francesa",
      image_url: Vision5,
    },
    {
      name: "Paellera Vision com Tampa Vidro",
      name1: "Paellera Vision com Tampa Vidro",
      image_url: Vision6,
    },
  ],
};
