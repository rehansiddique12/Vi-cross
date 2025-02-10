import { FaPhoneAlt } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { IoMailUnread } from "react-icons/io5";
import { useEffect } from "react";

const Form = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100 pt-10">
      <div className=" xl:max-w-screen-2xl justify-self-center w-full grid grid-cols-1 lg:grid-cols-2 ">
        <div className="text-[#2E2460] pt-10  mx-20 px-4">
          <p>Contact Us</p>
          <p className="text-4xl font-bold font-plus">Get in Touch</p>
          <p className="mt-5">
            Our team is here to help you create an <br /> engaging, immersive
            experience tailored to your <br /> needs. Let's bring your vision to
            life!
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex">
              <div className="text-white rounded-full flex justify-center bg-[#2E2460] w-[60px] h-[60px] items-center">
                <FaPhoneAlt className="size-8" />
              </div>
              <div className="flex flex-col justify-center ml-5">
                <p className="font-bold font-plus">Call Us</p>
                <p>+1-206-156 2849</p>
              </div>
            </div>

            <div className="flex">
              <div className="text-white rounded-full flex justify-center bg-[#2E2460] w-[60px] h-[60px] items-center">
                <TiLocation className="size-8" />
              </div>
              <div className="flex flex-col justify-center ml-5">
                <p className="font-bold font-plus">Visit Us</p>
                <p>123 Maple Street Toronto, ON M5J 2N8, Canada</p>
              </div>
            </div>
            <div className="flex">
              <div className="text-white rounded-full flex justify-center bg-[#2E2460] w-[60px] h-[60px] items-center">
                <IoMailUnread className="size-8" />
              </div>
              <div className="flex flex-col justify-center ml-5">
                <p className="font-bold font-plus">Mail Us</p>
                <p>info@vicross.ca</p>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="px-3 mx-auto">
          <div className="hover:border-2 hover:border-[#2E2460] md:h-[642px] lg:h-[642px] md:w-[600px] xl:w-[600px] lg:w-[480px] right-50 rounded-3xl bg-white mt-5">
            <p className="font-bold font-plus text-3xl text-[#2E2460] pt-10 px-10">
              Fill the Form Below
            </p>
            <div className="flex flex-col md:flex-row">
              <div className="pt-2 px-5 md:px-10">
                <p className="mb-3 mt-2">Name</p>
                <input
                  type="text"
                  placeholder="You'r Name"
                  className="border rounded-lg border-[#2E2460] p-5 py-3 w-full"
                />
              </div>
              <div className="pt-2 px-5 md:pl-1">
                <p className="mb-3 mt-2">Email</p>
                <input
                  type="email"
                  placeholder="You'r Email"
                  className="border rounded-lg border-[#2E2460] p-5 py-3 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="pt-2 px-5 md:px-10">
                <p className="mb-3 mt-2">Phone</p>
                <input
                  type="phone"
                  placeholder="You'r Phone"
                  className="border rounded-lg border-[#2E2460] p-5 py-3 w-full"
                />
              </div>
              <div className="pt-2 px-5 md:pl-1">
                <p className="mb-3 mt-2">Subject</p>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="border rounded-lg border-[#2E2460] p-5 py-3 w-full"
                />
              </div>
            </div>
            <div className="">
              <div className="pt-2 px-5 md:px-10">
                <p className="mb-3 mt-2">Message</p>
                <textarea
                  rows={5}
                  placeholder="Enter Massage"
                  className="border rounded-lg border-[#2E2460] p-5 py-3 w-full resize-none"
                ></textarea>
              </div>
            </div>
            <div className="px-10">
              <button className="text-white bg-[#2E2460] hover:bg-[#2E2460] hover:text-white p-5 rounded-lg mt-5 cursor-pointer w-full px-10 mb-5">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-hull bg-cover mt-10">
        <div className="bg-[url('/map1.png')] relative bg-cover bg-no-repeat flex flex-col justify-center items-center  w-full h-[500px]"></div>
      </div>
    </div>
  );
};

export default Form;
