import React from "react";
import Extra1 from "../../assets/tradicional/linhatradicional67.jpg";
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
      name: "Tampa Avulsa",
      Código: "1109",
      Numero: "16 X 2",
      Dimensões: "14 cm",
      COD: "7897449711092",
      Capacidade: "0,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "327",
      Numero: "16 X 3",
      Dimensões: "16 cm",
      COD: "789744970327",
      Capacidade: "1.0 L ",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "328",
      Numero: "16 X 4",
      Dimensões: "18 cm",
      COD: "7897449703288",
      Capacidade: "1,3 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "329",
      Numero: "16 X 5",
      Dimensões: "20 cm",
      COD: "7897449703295",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "330",
      Numero: "16 X 6",
      Dimensões: "22 cm",
      COD: "7897449703301",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "331",
      Numero: "18 X 2",
      Dimensões: "24 cm",
      COD: "7897449703318",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "332",
      Numero: "18 X 3",
      Dimensões: "26 cm",
      COD: "7897449703325",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "333",
      Numero: "18 X 4",
      Dimensões: "28 cm",
      COD: "7897449703332",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "334",
      Numero: "18 X 5",
      Dimensões: "30 cm",
      COD: "7897449703332",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "335",
      Numero: "18 X 6",
      Dimensões: "32 cm",
      COD: "7897449703356",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "336",
      Numero: "16 X 4",
      Dimensões: "34 cm",
      COD: "7897449703363",
      Capacidade: "1,3 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "337",
      Numero: "16 X 5",
      Dimensões: "36 cm",
      COD: "7897449703370",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "338",
      Numero: "16 X 6",
      Dimensões: "38 cm",
      COD: "7897449703387",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "339",
      Numero: "18 X 2",
      Dimensões: "40 cm",
      COD: "7897449703394",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "340",
      Numero: "18 X 3",
      Dimensões: "45 cm",
      COD: "7897449703400",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "341",
      Numero: "18 X 4",
      Dimensões: "50 cm",
      COD: "7897449703417",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "342",
      Numero: "18 X 5",
      Dimensões: "55 cm",
      COD: "7897449703424",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
    {
      name: "Tampa Avulsa",
      Código: "343",
      Numero: "18 X 6",
      Dimensões: "60 cm",
      COD: "7897449703431",
      Capacidade: "1,6 L",
      image_url: Extra1,
    },
  ],
};
