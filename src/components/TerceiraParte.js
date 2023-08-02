import { FaArrowRight } from "react-icons/fa";
const Terceira = () => {
  return (
    <a href="/catalogo">
      <div
        className="
                mt-14 flex justify-center mx-10
                sm:justify-center
                md:justify-start
                lg:mx-28
                xl:mx-28
                2xl:mx-28
            "
      >
        <button
          className="
                    bg-[#FFE719] w-full py-3 rounded-md drop-shadow-lg 
                    flex flex-row items-center space-x-5 transition ease-in-out justify-center
                    hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl
                    sm:w-full
                    md:w-[30%]
                    lg:w-[30%]
                    xl:w-[20%]
                    2xl:w-[20%]
                    "
        >
          <a href="/catalogo">
            <span className="font-poppins text-preto font-bold text-xl">
              Ver catálogo
            </span>
          </a>
          <FaArrowRight size={22} />
        </button>
      </div>
    </a>
  );
};
export default Terceira;
