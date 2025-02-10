import map from "../assets/img/map.png";
import man1 from "../assets/img/man1.png";
import man2 from "../assets/img/man2.png";
import female1 from "../assets/img/female1.png";
import female2 from "../assets/img/female2.png";

const Mamber = () => {
  return (
    <div className="pb-32 md:pb-0">
      <div className="w-full flex items-center justify-center relative mt-10">
      <img src={map} alt="bg-image" className="w-[95%] h-[871px] z-0" />
      <div className="absolute inset-0 w-full h-full flex flex-col items-center text-center md:mt-5 lg:mt-10 xl:mt-20 z-[1]">
        <p className="text-[#2E2460] text-xs md:text-md xl:text-xl xl:mb-5">
          Best Team
        </p>
        <p className="text-[#2E2460] text-4xl md:text-3xl lg:text-4xl xl:text-7xl font-bold font-plus px-2 md:w-[70%] ">
          Expert Members
        </p>
      </div>
      <div className="absolute z-1 inset-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mt-16 md:px-4  md:mt-0 ">
        <div className="flex flex-col items-center">
          <img src={female1} alt="" className="w-32 h-32 md:w-52 md:h-52 xl:w-[282px] xl:h-[282px] mt-3 " />
          <p className="font-bold font-plus text-[#2E2460] md:text-2xl mt-2 md:mt-3 xl:mt-8 text-center">
            Eugene <br className="hidden md:block lg:hidden" />  Wells
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={man1} alt="" className="w-32 h-32 md:w-52 md:h-52 xl:w-[282px] xl:h-[282px] mt-3" />
          <p className="font-bold font-plus text-[#2E2460] md:text-2xl mt-2 md:mt-3 xl:mt-8 text-center">
            Donna Howard
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={man2} alt="" className="w-32 h-32 md:w-52 md:h-52 xl:w-[282px] xl:h-[282px] mt-3" />
          <p className="font-bold font-plus text-[#2E2460] md:text-2xl mt-2 md:mt-3 xl:mt-8 text-center">
            Donald Henderson
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <img src={female2} alt="" className="w-32 h-32 md:w-52 md:h-52 xl:w-[282px] xl:h-[282px] mt-3 " />
          <p className="font-bold font-plus text-[#2E2460] md:text-2xl mt-2  md:mt-3 xl:mt-8 text-center">
            Elizabeth Walker
          </p>
        </div>
      </div>
      <div className=" absolute -bottom-16 md:bottom-10 xl:bottom-35 z-[1] justify-self-center items-center ">
        <button className="bg-[#2E2460] cursor-pointer text-white hover:bg-white hover:text-[#2E2460] border hover:border-[#2E2460] py-3 px-8 rounded-xl drop-shadow-xl duration-500 ">
          View All Team
        </button>
      </div>
    </div>
    </div>
  );
};

export default Mamber;
