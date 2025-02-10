import image from "../assets/img/image 7.png"

const Overherosolution = () => {
  return (
    <div className="bg-black rounded-b-4xl text-white xl:max-w-screen-xl justify-self-center items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 px-10">
        <div className="col-span-1 flex-col md:col-span-2 py-16 w-[80%] text-center jystify-self-center md:text-start">
          <p className="text-4xl font-bold font-plus">
            Enhance Your Business with Our 2.5D Virtual Exhibition Platform
          </p>
          <p className="mt-5 font-plus ">
            Are you a Canadian supplier looking to expand your reach into the
            dynamic Asia-Pacific market? Our innovative platform bridges the gap
            between Canadian suppliers and Asia-Pacific buyers, offering an
            immersive and engaging experience. With advanced features like
            business matching, real-time communication, and a visually appealing
            2.5D environment, our platform is designed to facilitate
            cross-border trade and drive business growth.
          </p>
        </div>
        <div className="md:justify-self-center md:items-center md:flex">
            <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Overherosolution;
