import React from "react";
import Presente2 from "../assets/presentes/linhapresente2.jpg";
import Presente3 from "../assets/presentes/linhapresente3.jpg";
import Presente4 from "../assets/presentes/linhapresente4.jpg";
import Presente5 from "../assets/presentes/linhapresente5.jpg";
import Presente7 from "../assets/presentes/linhapresente7.jpg";
import Presente8 from "../assets/presentes/linhapresente8.jpg";
import Presente9 from "../assets/presentes/linhapresente9.jpg";
import Presente10 from "../assets/presentes/linhapresente10.jpg";
import Presente11 from "../assets/presentes/linhapresente11.jpg";
import Presente12 from "../assets/presentes/linhapresente12.jpg";
import Presente13 from "../assets/presentes/linhapresente13.jpg";
import Presente14 from "../assets/presentes/linhapresente14.jpg";
import Presente15 from "../assets/presentes/linhapresente15.jpg";
import Presente16 from "../assets/presentes/linhapresente16.jpg";
import Presente17 from "../assets/presentes/linhapresente17.jpg";
import Presente18 from "../assets/presentes/linhapresente18.jpg";
import Presente19 from "../assets/presentes/linhapresente19.jpg";
import Presente20 from "../assets/presentes/linhapresente20.jpg";
import Presente21 from "../assets/presentes/linhapresente21.jpg";
import Presente22 from "../assets/presentes/linhapresente22.jpg";
import Presente23 from "../assets/presentes/linhapresente23.jpg";
import Presente28 from "../assets/presentes/linhapresente28.jpg";
import Presente30 from "../assets/presentes/linhapresente30.jpg";

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
      name: "Caçarola Multi-Uso",
      name1: "Cacarola MultiUso",
      image_url: Presente2,
    },
    {
      name: "Churrasqueira Elétrica Super Grill II",
      name1: "Churrasqueira Eletrica Super Grill ",
      image_url: Presente3,
    },
    {
      name: "Churrasqueira Marlux Grill",
      name1: "Churrasqueira Marlux Grill",
      image_url: Presente4,
    },
    {
      name: "Conjunto Ana Maria 5 pçs",
      name1: "Conjunto Ana Maria 5 pcs",
      image_url: Presente5,
    },
    {
      name: "Conjunto Bahia 5 pçs",
      name1: "Conjunto Bahia 5 pcs",
      image_url: Presente7,
    },
    {
      name: "Conjunto Cida 5 pçs",
      name1: "Conjunto Cida 5 pcs",
      image_url: Presente8,
    },
    {
      name: "Conjunto Cristal 6 pçs",
      name1: "Conjunto Cristal 6 pcs",
      image_url: Presente9,
    },
    {
      name: "Conjunto Esmeralda 6 pçs",
      name1: "Conjunto Esmeralda 6 pcs",
      image_url: Presente10,
    },
    {
      name: "Conjunto Flávia 6 pçs",
      name1: "Conjunto Flavia 6 pcs",
      image_url: Presente11,
    },
    {
      name: "Conjunto Keka 5 pçs",
      name1: "Conjunto Keka 5 pcs",
      image_url: Presente12,
    },
    {
      name: "Conjunto Marcia 7 pçs",
      name1: "Conjunto Marcia 7 pcs",
      image_url: Presente13,
    },
    {
      name: "Conjunto Melissa 6 pçs",
      name1: "Conjunto Melissa 6 pcs",
      image_url: Presente14,
    },
    {
      name: "Conjunto Regina 7 pçs",
      name1: "Conjunto Regina 7 pcs",
      image_url: Presente15,
    },
    {
      name: "Conjunto Rubi 7 pçs",
      name1: "Conjunto Rubi 7 pcs",
      image_url: Presente16,
    },
    {
      name: "Conjunto Topázio 6 pçs",
      name1: "Conjunto Topazio 6 pcs",
      image_url: Presente17,
    },
    {
      name: "Conjunto Turquesa 6 pçs",
      name1: "Conjunto Turquesa 6 pcs",
      image_url: Presente18,
    },
    {
      name: "Espagueteira Marflon",
      name1: "Espagueteira Marflon",
      image_url: Presente19,
    },
    {
      name: "Frigideira Frita Fácil",
      name1: "Frigideira Frita Facil",
      image_url: Presente20,
    },
    {
      name: "Jogo para Água 6 pçs",
      name1: "Jogo para Agua 6 pcs",
      image_url: Presente21,
    },
    {
      name: "Jogo para Mantimentos 5 pçs",
      name1: "Jogo para Mantimentos 5 pcs",
      image_url: Presente22,
    },
    {
      name: "Moringa Boca Larga c/ Caixa",
      name1: "Moringa Boca Larga c Caixa",
      image_url: Presente23,
    },
    {
      name: "Panela Meia Pressão Conjugada",
      name1: "Panela Meia Pressao Conjugada",
      image_url: Presente28,
    },
    {
      name: "Pipoqueira Kids",
      name1: "Pipoqueira Kids",
      image_url: Presente30,
    },
  ],
};
