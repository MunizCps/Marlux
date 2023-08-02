import React from "react";
import hotel1 from "../assets/hotel/linhahotel1.jpg";
import hotel2 from "../assets/hotel/linhahotel2.jpg";
import hotel3 from "../assets/hotel/linhahotel3.jpg";
import hotel4 from "../assets/hotel/linhahotel4.jpg";
import hotel5 from "../assets/hotel/linhahotel5.jpg";
import hotel6 from "../assets/hotel/linhahotel6.jpg";
import hotel7 from "../assets/hotel/linhahotel7.jpg";
import hotel8 from "../assets/hotel/linhahotel8.jpg";
import hotel9 from "../assets/hotel/linhahotel9.jpg";
import hotel10 from "../assets/hotel/linhahotel10.jpg";
import hotel11 from "../assets/hotel/linhahotel11.jpg";
import hotel12 from "../assets/hotel/linhahotel12.jpg";
import hotel13 from "../assets/hotel/linhahotel13.jpg";
import hotel14 from "../assets/hotel/linhahotel14.jpg";
import hotel15 from "../assets/hotel/linhahotel15.jpg";
import hotel16 from "../assets/hotel/linhahotel16.jpg";
import hotel17 from "../assets/hotel/linhahotel17.jpg";
import hotel18 from "../assets/hotel/linhahotel18.jpg";

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
      name: "Assadeira Hotel Retangular Alta",
      name1: "Assadeira Hotel Retangular Alta",
      image_url: hotel1,
    },
    {
      name: "Assadeira Hotel Retangular Alta c/ Alça",
      name1: "Assadeira Hotel Alca",
      image_url: hotel2,
    },
    {
      name: "Bule Hotel",
      name1: "Bule Hotel",
      image_url: hotel3,
    },
    {
      name: "Caçarola Hotel",
      name1: "Cacarola Hotel",
      image_url: hotel4,
    },
    {
      name: "Caçarola Vapor Hotel",
      name1: "Cacarola Vapor Hotel",
      image_url: hotel5,
    },
    {
      name: "Cafeteira Hotel",
      name1: "Cafeteira Hotel",
      image_url: hotel6,
    },
    {
      name: "Caldeirão Hotel",
      name1: "Caldeirao Hotel",
      image_url: hotel7,
    },
    {
      name: "Canecão Hotel",
      name1: "Canecao Hotel",
      image_url: hotel8,
    },
    {
      name: "Chaleira Hotel",
      name1: "Chaleira Hotel",
      image_url: hotel9,
    },
    {
      name: "Concha Industrial",
      name1: "Concha Industrial",
      image_url: hotel10,
    },
    {
      name: "Escorredor para Arroz",
      name1: "Escorredor para Arroz",
      image_url: hotel11,
    },
    {
      name: "Escorredor para Macarrão",
      name1: "Escorredor para Macarrao",
      image_url: hotel12,
    },
    {
      name: "Espumadeira Industrial",
      name1: "Espumadeira Industrial",
      image_url: hotel13,
    },
    {
      name: "Fervedor Inderramável Hotel",
      name1: "Fervedor Inderramavel Hotel",
      image_url: hotel14,
    },
    {
      name: "Forma para Bolo Hotel s/ Tampa",
      name1: "Forma para Bolo Hotel s Tampa",
      image_url: hotel15,
    },
    {
      name: "Forma para Cuscuz Hotel",
      name1: "Forma para Cuscuz Hotel",
      image_url: hotel16,
    },
    {
      name: "Frigideira Hotel",
      name1: "Frigideira Hotel",
      image_url: hotel17,
    },
    {
      name: "Latão para Leite Hotel",
      name1: "Latao para Leite Hotel",
      image_url: hotel18,
    },
  ],
};
