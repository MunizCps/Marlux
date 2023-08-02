import About from "./About";
const SOBRE = () => {
  return (
    <div className="bg-[#28292A] pt-10 mt-36">
      <div>
        <div
          className="
                        mx-10 flex flex-row items-center text-[#FAFBFF] whitespace-nowrap space-x-5
                        sm:mx-10 sm:space-x-5 
                        md:mx-10 md:space-x-10
                        lg:mx-28 lg:space-x-10
                        xl:mx-28 xl:space-x-10
                        2xl:mx-28 2xl:space-x-10
                        "
        >
          <h1
            className="
                            font-poppins font-bold text-xl
                            sm:text-xl
                            md:text-2xl
                            lg:text-3xl
                            xl:text-3xl
                            2xl:text-3xl
                            "
          >
            SOBRE NÓS
          </h1>
          <div className="bg-[#FAFBFF] h-[2px] rounded-md w-full" />
        </div>

        <About />
      </div>

      <div
        className="
                    mx-10 py-10
                    sm:mx-10
                    md:mx-10
                    lg:mx-28
                    xl:mx-28
                    2xl:mx-28
                    "
      >
        <div className="bg-[#FAFBFF] h-[2px] rounded-md w-full" />

        <div className="flex justify-center mt-10 flex-col space-y-2">
          <span
            className="
                            text-[#FAFBFF] font-bold text-xs font-poppins text-center
                            sm:text-xs
                            md:text-xs
                            lg:text-sm
                            xl:text-sm
                            2xl:text-sm
                            "
          >
            Alúminio MARLUX
          </span>
          <span
            className="
                            text-[#FAFBFF] font-light text-xs font-poppins text-center
                            sm:text-xs
                            md:text-xs
                            lg:text-sm
                            xl:text-sm
                            2xl:text-sm
                            "
          >
            Garantia de Qualidade
          </span>
        </div>
      </div>
    </div>
  );
};
export default SOBRE;
