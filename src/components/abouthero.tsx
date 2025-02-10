import long from "../assets/img/long.png";
import round1 from "../assets/img/rondbl.png";
import round2 from "../assets/img/roungbl.png";
import doted from "../assets/img/doted.png";
import blue1 from "../assets/img/blue1.png";
import blue2 from "../assets/img/blue2.png";
import { useEffect } from "react";

const Abouthero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100 py-20 h-full w-full flex flex-col justify-center items-center px-4">
      <div className="text-center pt-10">
        <p className="text-6xl font-bold text-[#2E2460]">About Us</p>
        <p className="text-[#2E2460] mt-4 ">
          We provide a cutting-edge 2.5D virtual exhibition platform that <br className="hidden md:block"/>{" "}
          combines the immersive qualities of 3D environments with the
          simplicity <br  className="hidden md:block"/> and accessibility of 2D.
        </p>
      </div>
      <div className=" xl:max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 mt-10 gap-3">
        <div className="relative  flex flex-col  items-center">
          <div>
            <img src={doted} alt="" className="absolute z-1 top-0 left-0"  />
          </div>
          <img
            src={long}
            alt=""
            className="rounded-tl-full rounded-tr-full rounded-br-full  h-[683px] w-[435px] z-10"
          />
          <img
            src={blue1}
            alt=""
            className="h-[120px] w-[100px] absolute -bottom-20 xl:-bottom-20 right-0 drop-shadow-2xl shadow-blue-500"
          />
        </div>
        <div className="relative hidden md:block ">
          <div className="flex">
          <img src={blue2} alt="" className="w-[130px] h-[200px] drop-shadow-2xl shadow-blue-500"/>
          <img src={round1} alt="" className="drop-shadow-2xl w-[253px] h-[180px] shadow-[#2E2460] " />
          </div>
          <img src={round2} alt="" className="w-[557px] h-[480px] " />
        </div>
      </div>
    </div>
  );
};

export default Abouthero;
