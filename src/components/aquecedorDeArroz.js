import React from "react";
import Extra1 from "../assets/extra/linhaextra1.jpg";
import Extra2 from "../assets/extra/linhaextra2.jpg";
import Extra3 from "../assets/extra/linhaextra3.jpg";
import Extra4 from "../assets/extra/linhaextra4.jpg";
import Extra5 from "../assets/extra/linhaextra5.jpg";
import Extra6 from "../assets/extra/linhaextra6.jpg";

import { Fade, Reveal } from "react-reveal";
console.log("what");
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
      name: "Caçarola Extra C/ Alça",
      image_url: Extra1,
    },
    {
      name: "Caçarola Extra C/ Cabo",
      image_url: Extra2,
    },
    {
      name: "Canecão Extra",
      image_url: Extra3,
    },
    {
      name: "Canecão Extra Luxo",
      image_url: Extra4,
    },
    {
      name: "Frigideira Extra C/ Tampa",
      image_url: Extra5,
    },
    {
      name: "Frigideira Extra Francesa",
      image_url: Extra6,
    },
  ],
};
