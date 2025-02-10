// import heroimg from "../assets/img/hero.png"
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-20 h-full w-full ">
      <div className=" bg-[url('/hero.png')] relative bg-cover bg-no-repeat  w-full h-screen flex flex-col justify-center items-center ">
       <div className="px-4 xl:max-w-screen-2xl w-full">
       <p className="text-6xl font-bold text-white mb-5 font-plus">
          2.5D Web-Based virtual <br /> exhibition platform
        </p>
        <button className="text-[#2E2460] bg-white hover:bg-[#2E2460] hover:text-white  py-2 px-8 rounded-xl mt-10 cursor-pointer">
            Get Started
        </button>
       </div>
      </div>
    </div>
  );
};

export default Hero;
