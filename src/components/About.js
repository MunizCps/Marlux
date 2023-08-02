import React from "react";
import {
  IoMailOutline,
  IoLocationOutline,
  IoCallOutline,
  IoTimeOutline,
} from "react-icons/io5";

const About = () => {
  return (
    <div
      className="
            grid grid-cols-1 mx-10 mt-7 gap-y-12 items-center gap-x-10
            sm:grid-cols-1 sm:gap-y-12
            md:grid-cols-1 md:gap-y-12
            lg:grid-cols-2 lg:mx-28
            xl:grid-cols-2 xl:mx-28
            2xl:grid-cols-2 2xl:mx-28
            "
    >
      <div
        className="
                flex-col flex p-0
                sm:p-0
                md:p-0
                lg:p-10
                xl:p-10
                2xl:p-10
                "
      >
        <div
          className="
                    flex-row flex items-center justify-center
                    sm:justify-center
                    md:justify-start
                    lg:justify-start
                    xl:justify-start
                    2xl:justify-start
                    "
        >
          <img
            src="https://marlux.com.br/novo/view/img/marlux_logo.png"
            alt=""
            className="w-20 h-16 rounded-md"
          />
        </div>
        <p className="text-[#dcdcdc] font-light text-sm font-poppins mt-5 text-justify">
          A{" "}
          <span className="font-bold text-[#dcdcdc] text-sm">
            Marlux Indústria de Alumínio Ltda.
          </span>
          , vem atuando no mercado de fabricação de utensílios domésticos em
          alumínios desde 1995. Com amplo conhecimento e técnicas contínuas de
          aperfeiçoamento de nossos produtos, temos nos empenhado constantemente
          em obter cada vez mais a total satisfação de nossos clientes. Além da
          qualidade e preços competitivos concentramos nossos esforços na
          inovação constante, no desenvolvimento de produtos diferenciados, e na
          busca da excelência na prestação de nossos serviços.
        </p>
      </div>

      <div
        className="
                    grid grid-cols-1 flex-col gap-y-5
                    sm:grid-cols-1 
                    md:grid-cols-2
                    lg:grid-cols-1
                    xl:grid-cols-1
                    2xl:grid-cols-1
                "
      >
        <div className="space-y-5 flex flex-col">
          <div className="flex flex-row space-x-3 items-center">
            <IoCallOutline size={20} color="#FAFBFF" />
            <div className="flex flex-col">
              <span
                className="
                                font-poppins text-[#FAFBFF] font-medium text-base
                                sm:text-base
                                md:text-lg
                                lg:text-lg
                                xl:text-lg
                                2xl:text-lg
                                "
              >
                TELEFONE:
              </span>
              <span
                className="
                                font-poppins text-[#FAFBFF] font-light text-xs
                                sm:text-xs
                                md:text-sm
                                lg:text-sm
                                xl:text-sm
                                2xl:text-sm
                                "
              >
                (17) 3272-3300
              </span>
            </div>
          </div>

          <div className="flex flex-row space-x-3 items-center">
            <IoLocationOutline size={20} color="#FAFBFF" />
            <div className="flex flex-col">
              <span
                className="
                                font-poppins text-[#FAFBFF] font-medium text-base
                                sm:text-base
                                md:text-lg
                                lg:text-lg
                                xl:text-lg
                                2xl:text-lg
                                "
              >
                ENDEREÇO:
              </span>
              <span
                className="
                                font-poppins text-[#FAFBFF] font-light text-xs max-w-[200px]
                                sm:text-xs sm:max-w-[200px]
                                md:text-sm md:max-w-[280px]
                                lg:text-sm lg:max-w-[280px]
                                xl:text-sm xl:max-w-[280px]
                                2xl:text-sm 2xl:max-w-[280px]
                                "
              >
                Av. Antônio Gonçalves de Oliveira, 120 Distrito Industrial -
                Tanabi / SP
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-5 flex flex-col">
          <div className="flex flex-row space-x-3 items-center">
            <IoMailOutline size={20} color="#FAFBFF" />
            <div className="flex flex-col">
              <span
                className="
                                font-poppins text-[#FAFBFF] font-medium text-base
                                sm:text-base
                                md:text-lg
                                lg:text-lg
                                xl:text-lg
                                2xl:text-lg
                                "
              >
                EMAIL:
              </span>
              <span
                className="
                                font-poppins text-[#FAFBFF] font-light text-xs
                                sm:text-xs
                                md:text-sm
                                lg:text-sm
                                xl:text-sm
                                2xl:text-sm
                                "
              >
                marlux@marlux.com.br
              </span>
            </div>
          </div>

          <div className="flex flex-row space-x-3 items-center">
            <IoTimeOutline size={20} color="#FAFBFF" />
            <div className="flex flex-col">
              <span
                className="
                                font-poppins text-[#FAFBFF] font-medium text-base
                                sm:text-base
                                md:text-lg
                                lg:text-lg
                                xl:text-lg
                                2xl:text-lg
                                "
              >
                HORÁRIO DE ATENDIMENTO:
              </span>
              <span
                className="
                                font-poppins text-[#FAFBFF] font-light text-xs max-w-[245px]
                                sm:text-xs sm:max-w-[245px]
                                md:text-sm md:max-w-[280px]
                                lg:text-sm lg:max-w-[280px]
                                xl:text-sm xl:max-w-[280px]
                                2xl:text-sm 2xl:max-w-[280px]
                                "
              >
                Seg a Sexta: 8h às 11h e 13h às 17h Sábados: 8h às 11h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
