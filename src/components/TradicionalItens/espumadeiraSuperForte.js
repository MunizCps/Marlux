import React from "react";
import Extra1 from "../../assets/tradicional/linhatradicional41.jpg";

import { Fade, Reveal } from "react-reveal";

const Products = () => {
  const products = PRODUCTS.products;

  return (
    <div
      className="
               
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
                      <b>Dimensões: </b>
                      {item.Dimensões}
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
      name: "Espumadeira Extra C/ Cabo Baquelite",
      Código: "111",
      Dimensões: "1.0 cm",
      Capacidade: "0,30 L",
      COD: "7897449701116",
      image_url: Extra1,
    },
  ],
};
