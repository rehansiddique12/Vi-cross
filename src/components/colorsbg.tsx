import icon1 from "../assets/img/i1.png"
import icon2 from "../assets/img/i2.png"
import icon3 from "../assets/img/i3.png"
import icon4 from "../assets/img/i4.png"
import icon5 from "../assets/img/i5.png"

const Colorsbg = () => {
  return (
    <div className="bg-white text-[#2E2460] ">
      <div className="xl:max-w-screen-xl justify-self-center items-center w-full py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-8">
          <div>
            <p>Fatures</p>
            <p className="text-7xl font-bold font-plus w-full"> Solution We offer</p>
            <p className="mt-32 md:mt-56">
              We've created an environment that <br /> fosters meaningful connections
              and <br /> drives business growth.
            </p>
            <button className="text-white  bg-[#2E2460] hover:bg-white hover:text-[#2E2460] hover:border  py-2 px-8 rounded-xl mt-5 cursor-pointer">
            Get Started
        </button>
          </div>
          <div className="md:pl-48 col-span-2 space-y-5 flex flex-col ">
            <div className="bg-amber-100 hover:border-2 border-amber-300 rounded-2xl flex items-center gap-5 px-2.5 w-full h-24">
                <img src={icon1} alt="" />
                <p>2.5D Virtual Environment</p>
            </div>
            <div className="bg-green-100 hover:border-2 border-green-300 rounded-2xl flex items-center gap-5 px-2.5 w-full h-24">
                <img src={icon2} alt="" />
                <p>Event & Session Management</p>
            </div>
            <div className="bg-blue-100 hover:border-2 border-blue-400 rounded-2xl flex items-center gap-5 px-2.5 w-full h-24">
                <img src={icon3} alt="" />
                <p>⁠Business Matching & Networking</p>
            </div>
            <div className="bg-purple-100 hover:border-2 border-purple-300 rounded-2xl flex items-center gap-5 px-2.5 w-full h-24">
                <img src={icon4} alt="" />
                <p>Multi Language Support</p>
            </div>
            <div className="bg-red-100 hover:border-2 border-red-300 rounded-2xl flex items-center gap-5 px-2.5 w-full h-24">
                <img src={icon5} alt="" />
                <p>Real Time Analyticst</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colorsbg;
