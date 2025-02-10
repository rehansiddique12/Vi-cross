import mark from "../assets/img/Mask.png";
import { IoPlayCircle } from "react-icons/io5";

const Vedio = () => {
  return (
    <div className=" w-full py-20 bg-gray-100">
      <div className="xl:max-w-screen-2xl  grid grid-cols-1 md:grid-cols-2 justify-self-center">
        <div className="flex items-center justify-center px-5 relative ">
           <img src={mark} alt="" className="w-full h-full"/>
        <div className="absolute cursor-pointer text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <IoPlayCircle className="size-16"/>
        </div> 
          {/* <video
            className="aspect-video h-full w-full rounded-2xl"
            controls
            muted
          >
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div className=" h-full w-full  flex flex-col justify-center  md:text-start text-center px-10 ">
          <p className="text-black font-plus font-bold text-start hidden md:block">VIDEO</p>
          <p className="text-[#2E2460] text-3xl md:text-4xl lg:text-4xl  font-bold  font-plus mt-5 lg:mt-3 mb-5">
            Vision and Values
          </p>
          <p className="text-[#2E2460] font-plus w-[95%] lg:w-[80%]">
            Our vision is to become the leading platform for immersive virtual
            exhibitions, empowering organizations and creators to engage global
            audiences through innovative, interactive environments. We are
            committed to fostering a future where virtual events are as
            impactful and accessible as in-person experiences, breaking down
            geographical barriers to create meaningful connections.
          </p>
          <div className="mt-10">
            <button className="bg-[#2E2460] text-white hover:bg-white hover:text-[#2E2460] border border-[#2E2460] py-2 px-8 rounded-xl drop-shadow-xl duration-500 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vedio;
