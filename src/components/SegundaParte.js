import React from "react";
import imagePan from "../assets/panela.png";
const Segunda = () => {
  return (
    <div
      className="
      flex flex-col mx-10 items-center space-y-12
      sm:flex-col sm:mx-10 sm:space-x-0 sm:space-y-12
      md:flex-row md:mx-10 md:space-x-5 md:space-y-0
      lg:flex-row lg:mx-28 lg:justify-around lg:space-y-0
      xl:flex-row xl:mx-28 xl:space-x-10 xl:space-y-0
      2xl:flex-row 2xl:mx-28 2xl:space-x-10 2xl:space-y-0
      "
    >
      <div
        className="
          relative h-48 w-[18rem]
          sm:h-48 sm:w-[18rem]
          md:h-60 md:w-[44rem]
          lg:h-80 lg:w-[56rem]
          xl:h-80 xl:w-[32rem]
          2xl:h-80 2xl:w-[32rem]
          "
      >
        <img
          src={imagePan}
          alt="imagem panela"
          className="relative z-10 h-full w-full"
        />
        <div
          className="absolute inset-0 filter blur-3xl h-[70%] w-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3"
          style={{ backgroundColor: "#FFE719" }}
        />
      </div>

      <div className="max-w-[400px] text-preto">
        <h1
          className="
              font-poppins font-medium text-xl w-full break-words
              sm:text-xl
              md:text-xl
              lg:text-2xl
              xl:text-2xl
              2xl:text-2xl
              "
        >
          Nossas Panelas de Pressão e Panelas Metálicas
        </h1>
        <p
          className="
              font-poppins font-light text-xl w-full break-words leading-loose
              sm:text-xl
              md:text-xl
              lg:text-2xl
              xl:text-2xl
              2xl:text-2xl
              "
        >
          são{" "}
          <span className="z-10 before:block before:absolute before:inset-0 before:inset-y-1 before:bg-[#FFE719] relative inline-block before:-z-10">
            avaliadas
          </span>{" "}
          e{" "}
          <span className="z-10 before:block before:absolute before:inset-0 before:inset-y-1 before:bg-[#FFE719] relative inline-block before:-z-10">
            certificadas
          </span>
          conforme Portaria n° 419, do Inmetro.
        </p>
      </div>
    </div>
  );
};
export default Segunda;
