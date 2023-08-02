import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { RxDoubleArrowDown } from "react-icons/rx";
import img from "../assets/panela_tradicional.png";

import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
  return (
    <AutoplaySlider
      bullets={false}
      className="h-[90vh]"
      play={true}
      cancelOnInteraction={false}
      interval={3000}
    >
      <div className="bg-[#FFE719] h-full w-full justify-center items-center flex flex-col">
        <div className="text-center space-y-10">
          <h1
            className="
                    font-poppins font-bold text-3xl px-10 text break-words max-w-[600px]
                    sm:text-4xl
                    md:text-4xl
                    lg:text-5xl
                    xl:text-5xl
                    2xl:text-6xl 2xl:max-w-[800px]"
          >
            Produtos ricos em qualidade.
          </h1>
          <p
            className="
                    text-[#414041] font-poppins font-normal text-xs px-10
                    sm:text-sm
                    md:text-sm
                    lg:text-base
                    xl:text-base
                    2xl:text-lg"
          >
            Garantir a total satisfação de nossos clientes.
          </p>
        </div>

        <RxDoubleArrowDown
          size={50}
          className="
                absolute bottom-10 animate-bounce
                sm:w-[70px] sm:h-[70px]
                md:w-[70px] md:h-[70px]
                lg:w-[85px] lg:h-[85px]
                xl:w-[85px] xl:h-[85px]
                2xl:w-[95px] 2xl:h-[95px]
                "
        />
      </div>

      <div className="w-full h-full">
        <img
          alt=""
          src="https://cdn.create.vista.com/api/media/medium/475448014/stock-photo-ladle-two-stainless-steel-pans?token="
          className="w-full brightness-50 object-cover h-full"
        />
      </div>
    </AutoplaySlider>
  );
};

export default Carousel;
