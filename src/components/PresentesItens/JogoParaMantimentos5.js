import React from "react";
import Extra1 from "../../assets/presentes/linhapresente22.jpg";

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
                      <b>Cod .EAN: </b>
                      {item.COD}
                    </span>
                    <span className="font-poppins font-semibold text-preto text-2xl p-1 max-w-max before:block before:absolute before:transform before:translate-y-3 before:inset-0 before:inset-y-2 before:bg-[#FFE719] relative inline-block before:-z-10">
                      <b>Dimensões: </b>
                      <br></br>
                      {item.Dimensões1}
                    </span>
                    <span className="font-poppins font-semibold text-preto text-2xl p-1 max-w-max before:block before:absolute before:transform before:translate-y-3 before:inset-0 before:inset-y-2 before:bg-[#FFE719] relative inline-block before:-z-10">
                      <b>Capacidades: </b>
                      <br></br>
                      {item.Capacidade1}
                    </span>
                    <span className="font-poppins font-semibold text-preto text-2xl p-1 max-w-max before:block before:absolute before:transform before:translate-y-3 before:inset-0 before:inset-y-2 before:bg-[#FFE719] relative inline-block before:-z-10">
                      <b>Numero: </b>
                      <br></br>
                      {item.num1}
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
      name: "Jogo P/ Mantimento 5 Pçs",
      Código: "132",
      Dimensões1: "-",
      Capacidade1: "-",
      COD: "7897449701321",
      num1: "-",
      image_url: Extra1,
    },
    {
      name: "-",
      Código: "-",
      Dimensões1: "14 cm",
      Capacidade1: "1,6 Lts",
      COD: "-",
      num1: "14",
      image_url: Extra1,
    },
    {
      name: "-",
      Código: "-",
      Dimensões1: "16 cm",
      Capacidade1: "2,35 Lts",
      COD: "-",
      num1: "16",
      image_url: Extra1,
    },
    {
      name: "-",
      Código: "-",
      Dimensões1: "18 cm",
      Capacidade1: "3,85 Lts",
      COD: "-",
      num1: "18",
      image_url: Extra1,
    },
    {
      name: "-",
      Código: "-",
      Dimensões1: "20 cm",
      Capacidade1: "5,3 Lts",
      COD: "-",
      num1: "20",
      image_url: Extra1,
    },
    {
      name: "-",
      Código: "-",
      Dimensões1: "22 cm",
      Capacidade1: "7,7 Lts",
      COD: "-",
      num1: "22",
      image_url: Extra1,
    },
  ],
};
