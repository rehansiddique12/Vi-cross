import { RiBox3Fill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useEffect } from "react";

const Choosus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white">
      <div className="pt-20 text-center">
        <p className="text-[#2E2460] text-2xl">Why Choose Us</p>
        <p className="text-[#2E2460] text-6xl font-bold">
          Why Choose VI Cross?
        </p>
        <p className="text-[#2E2460] mt-8 font-semibold md:pb-10 lg:pb-0 mx-5">
          We help companies of all sizes host incredible custom events with an
          Easy-To-Use <br />
          platform with complimentary Project Management.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 xl:max-w-screen-xl w-full justify-self-center items-center gap-4 sm:gap-4 lg:gap-4 pb-10">
        <div className="bg-[#F1F2F6] rounded-2xl text-center mx-4 lg:mt-16 pt-16 md:pt-14 hover:border-2 hover:border-[#2E2460]">
          <div className="bg-[#2E2460] group hover:bg-white  rounded-full w-[80px] sm:w-[100px] flex items-center justify-self-center justify-center h-[80px] sm:h-[100px] -mt-24">
            <RiBox3Fill className="size-12 sm:size-16 fill-white group-hover:fill-[#2E2460] drop-shadow-xl duration-500" />
          </div>
          <div className="mb-6 mx-4 sm:mx-8">
            <p className="text-[#2E2460] text-2xl sm:text-3xl font-bold font-plus mt-10 mb-5">
              Complete event tech <br className="hidden lg:block" />
              suite
            </p>
            <p className="text-sm sm:text-base pb-5">
              Plan, host and manage your events, engage the audience & measure
              results - all with a single platform.
            </p>
          </div>
        </div>

        <div className="bg-[#F1F2F6] rounded-2xl text-center mx-4 lg:mt-16 pt-14 md:h-[310px] lg:h-[365px] xl:h-fit hover:border-2 hover:border-[#2E2460]">
          <div className="bg-[#2E2460] group hover:bg-white rounded-full w-[80px] sm:w-[100px] flex items-center justify-self-center justify-center h-[80px] sm:h-[100px] -mt-24">
            <BsFillPeopleFill className="size-12 sm:size-16 fill-white group-hover:fill-[#2E2460] drop-shadow-xl duration-500" />
          </div>
          <div className="mb-6 mx-4 sm:mx-8">
            <p className="text-[#2E2460] text-2xl sm:text-3xl font-bold font-plus mt-10 mb-5">
              Inclusive events for <br className="hidden lg:block" />
              everyone
            </p>
            <p className="text-sm sm:text-base pb-5">
              Set up user-friendly, multi-lingual, and WCAG-compliant event
              websites, accessible for all.
            </p>
          </div>
        </div>

        <div className="bg-[#F1F2F6] rounded-2xl text-center mx-4 lg:mt-16 pt-14 hover:border-2 hover:border-[#2E2460]">
          <div className="bg-[#2E2460] group hover:bg-white rounded-full w-[80px] sm:w-[100px] flex items-center justify-self-center justify-center h-[80px] sm:h-[100px] -mt-24">
            <FaUser className="size-12 sm:size-16 fill-white group-hover:fill-[#2E2460] drop-shadow-xl duration-500" />
          </div>
          <div className="mb-6 mx-4 sm:mx-8">
            <p className="text-[#2E2460] text-2xl sm:text-3xl font-bold font-plus mt-10 mb-5">
              Done-for-you + Done- by-you
            </p>
            <p className="text-sm sm:text-base pb-5">
              Leverage our fully self-serve backend to set up events yourself or
              get a dedicated PM to handle it for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choosus;
