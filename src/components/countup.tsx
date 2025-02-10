import gool from "../assets/img/gol.png";
import CountUp from 'react-countup';
import { useEffect } from "react";

const Countup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-16 justify-self-center xl:max-w-screen-2xl w-full">
      <div className="bg-[url('/dote.png')] mt-10 bg-cover bg-no-repeat justify-self-center xl:max-w-screen-2xl mb-20">
        <p className="text-[#2E2460] text-2xl text-center ">Why Join VI Cross</p>
        <p className="text-[#2E2460] text-4xl md:text-5xl lg:text-7xl text-center font-bold">
          Our Measurable Results
        </p>
        <div className="md:flex justify-center md:gap-10 md:px-5 lg:gap-20 text-center">
          <div className="mt-20 w-full flex justify-center items-center relative">
            <img src={gool} alt="" />
            <div className="absolute">
              <p className="text-[#2E2460] text-7xl md:text-5xl lg:text-7xl font-bold">
                <CountUp delay={5} end={5} duration={1} enableScrollSpy />
                M+
              </p>
              <p className="text-[#2E2460] lg:text-2xl">Participants served</p>
            </div>
          </div>
          <div className="mt-20 w-full flex justify-center items-center relative">
            <img src={gool} alt="" />
            <div className="absolute">
              <p className="text-[#2E2460] text-7xl md:text-5xl lg:text-7xl font-bold">
                <CountUp delay={5} end={5} duration={1} enableScrollSpy />
                K+
              </p>
              <p className="text-[#2E2460] text-2xl lg:text-2xl">Exhibition served</p>
            </div>
          </div>
          <div className="mt-20 w-full flex justify-center items-center relative">
            <img src={gool} alt="" />
            <div className="absolute">
              <p className="text-[#2E2460] text-7xl md:text-5xl lg:text-7xl font-bold">
                <CountUp delay={5} end={5} duration={1} enableScrollSpy />
                +
              </p>
              <p className="text-[#2E2460] text-2xl lg:text-2xl">Years in Industry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countup;
