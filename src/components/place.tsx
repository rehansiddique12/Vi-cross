import girl from "../assets/img/girl.png";
import mools from "../assets/img/mool.png";
import booth from "../assets/img/booths.png";

const Place = () => {
  return (
    <div className="bg-black text-center mt-20 ">
      <p className="text-gray-400 pt-16 text-xl">Why Join VI Cross</p>
      <p className="text-white text-4xl md:text-6xl font-bold">
        Why attend VI Cross Events
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3  mt-10 gap-10 px-10 lg:px-32">
        <div className="relative flex justify-center mb-10 ">
          <img src={mools} alt="" />
          <div className="backdrop-blur-md w-[90%] rounded-xl absolute bottom-8 px-4 md:h-14 flex justify-center items-center hover:border-2 hover:border-[#2E2460]">
          <p className="text-white text-3xl hover:text-[#2E2460] cursor-pointer"> Networking Events</p>
          </div>
        </div>
        <div className="relative flex justify-center  mb-10 ">
          <img src={booth} alt="" />
          <div className="backdrop-blur-md w-[90%] rounded-xl absolute bottom-8 px-5 md:h-14 flex justify-center items-center hover:border-2 hover:border-[#2E2460]">
          <p className="text-white text-3xl hover:text-[#2E2460] cursor-pointer"> Virtual Environment</p>
          </div>
        </div>
        <div className="relative flex justify-center  mb-10">
          <img src={girl} alt="" />
          <div className="backdrop-blur-md w-[90%] rounded-xl absolute bottom-8 h-14 flex justify-center items-center  hover:border-2 hover:border-[#2E2460] ">
          <button className="text-white text-3xl hover:text-[#2E2460] cursor-pointer"> Live Webinar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
