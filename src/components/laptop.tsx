import laptop from "../assets/img/laptop.png";
import { useEffect } from "react";

const Laptop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mt-20">
        <p>Features</p>
        <p className="text-[#2E2460] font-plus font-extrabold text-5xl mt-2">
          Core Features
        </p>
        <p className="mt-5 text-center font-plus">
          The platform offers several core features to enhance the user
          experience and foster <br /> business connections. It provides a 2.5D
          virtual space, creating an immersive but accessible <br/> environment
          for product showcases and networking opportunities.
        </p>
      </div>
      <div className="lg:flex  justify-center items-center mt-5">
        <div className="w-full lg:w-[20%] text-center lg:text-end px-5">
          <div>
            <p className="text-2xl mb-2 text-[#2E2460] font-plus font-bold">
              2.5D Virtual Environment
            </p>
            <p className=" mb-2">
              The platform will utilize 2.5D graphics to create an engaging and
              interactive virtual exhibition space.
            </p>
          </div>
          <div>
            <p className="text-2xl mb-2 text-[#2E2460] font-plus font-bold">
              Responsive User Interface
            </p>
            <p className=" mb-2">
              Developed using React, the platform will offer a dynamic and
              responsive interface that adapts to different screen sizes and
              devices
            </p>
          </div>
          <div>
            <p className="text-2xl mb-2 text-[#2E2460] font-plus font-bold">
              Exhibitor Booths
            </p>
            <p className=" mb-2">
              Each exhibitor will have a customizable virtual booth where they
              can showcase their products, services, and brand.
            </p>
          </div>
          <div>
            <p className="text-2xl mb-2 text-[#2E2460] font-plus font-bold">
              Product Search & Filtering
            </p>
            <p className=" mb-2">
              Each exhibitor will have a customizable virtual booth where they
              can showcase their products, services, and brand.
            </p>
          </div>
          <div>
            <p className="text-2xl mb-2 text-[#2E2460] font-plus font-bold">
              Presentation & Webinar Rooms
            </p>
            <p className=" mb-2">
              Sellers will have the ability to host live presentations, product
              launches, and webinars within the platform.
            </p>
          </div>
        </div>
        <div className="">
          <img src={laptop} alt="" className="w-full h-full md:mt-10 lg:mt-0" />
        </div>
        <div className="w-full lg:w-[20%] text-center lg:text-start px-5 md:mt-10 lg:mt-0">
          <div className="">
            <div>
              <p className="text-2xl  mb-2  text-[#2E2460] font-plus font-bold">
                Business Matching & Networking
              </p>
              <p className=" mb-2">
                The platform will feature AI-driven business matching services
                that connect buyers with the most relevant exhibitors based on
                their interests and needs.
              </p>
            </div>
            <div>
              <p className="text-2xl  mb-2 text-[#2E2460] font-plus font-bold">
                Content Management System (CMS)
              </p>
              <p className=" mb-2">
                An integrated CMS will allow exhibitors and organizers to easily
                manage their content, including updating booth materials,
                scheduling presentations, and managing attendee lists.
              </p>
            </div>
            <div>
              <p className="text-2xl mb-2 text-[#2E2460] font-plus font-bold">
                Digital Invitations and Engagement Tools
              </p>
              <p className=" mb-2">
                The platform will support the creation and distribution of
                digital invitations to potential buyers.
              </p>
            </div>
            <div>
              <p className="text-2xl mb-2 text-[#2E2460] font-plus font-bold">
                Analytics and Reporting
              </p>
              <p>
                The platform will include analytics tools that provide
                exhibitors and event organizers with insights into attendee
                behavior, booth visits, engagement levels, and other key
                metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
