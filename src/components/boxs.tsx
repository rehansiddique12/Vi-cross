import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png"
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
import icon5 from "../assets/img/icon5.png";

const Boxs = () => {
  return (
    <div className="text-[#2E2460]">
      <div className="xl:max-w-screen-xl justify-self-center items-center w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          <div className="">
            <p className="font-bold text-3xl font-plus">Key Benefits:</p>
            <p className="mt-3">
              Our 2.5D virtual exhibition platform is here to revolutionize the
              way you connect with potential buyers
            </p>
          </div>
          <div className="bg-white rounded-xl hover:border-2 cursor-pointer">
            <div className=" rounded-2xl  gap-5 px-2.5 py-4 w-full ">
              <img src={icon5} alt="" />
              <p className="mt-4 font-bold font-plus">Seamless Connections</p>
              <p className="mt-2">
                Connect with potential buyers from the Asia-Pacific region in a
                virtual space.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl hover:border-2 cursor-pointer">
            <div className=" rounded-2xl  gap-5 px-2.5 py-4 w-full ">
              <img src={icon1} alt="" />
              <p className="mt-4 font-bold font-plus">Immersive Experience</p>
              <p className="mt-2">
              Explore a visually appealing 2.5D environment that enhances engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 py-5">
          <div className="bg-white rounded-xl hover:border-2 cursor-pointer">
            <div className=" rounded-2xl  gap-5 px-2.5 py-4 w-full ">
              <img src={icon2} alt="" />
              <p className="mt-4 font-bold font-plus">Efficient Business
              Matching</p>
              <p className="mt-2">
              Find and connect with relevant buyers using advanced matching tools.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl hover:border-2 cursor-pointer">
            <div className=" rounded-2xl  gap-5 px-2.5 py-4 w-full ">
              <img src={icon3} alt="" />
              <p className="mt-4 font-bold font-plus">Real-Time
              Communication</p>
              <p className="mt-2">
              Communicate directly with potential partners through built-in tools.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl hover:border-2 border-[#2E2460]">
            <div className=" rounded-2xl  gap-5 px-2.5 py-4 w-full cursor-pointer">
              <img src={icon4} alt="" />
              <p className="mt-4 font-bold font-plus">Accessibility</p>
              <p className="mt-2">
              Enjoy a responsive design compatible with various devices and browsers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxs;
