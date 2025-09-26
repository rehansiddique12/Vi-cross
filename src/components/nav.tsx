import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/img/logo.png";
import { FaPersonBooth } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSolution } from "react-icons/ai";
import { navbarLinks } from "../constants/constants";
import { MdOutlinePermContactCalendar } from "react-icons/md";

const Nav = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  return (
    <nav className="fixed top-0 h-20 w-full backdrop-blur-sm p-5 px-5  lg:px-5 bg-white z-40">
      <div className="mx-auto flex h-full w-full items-center justify-between xl:max-w-screen-2xl">
        <img src={Logo} alt="Logo" className="mt-3 mb-4" />

        <div className="hidden lg:flex px-10 gap-4 items-end">
          {navbarLinks.map((p) => (
            <Link
              key={p.id}
              to={p.path}
              className={`text-[#2E2460] hover:text-white hover:bg-[#2E2460] px-4 py-2 rounded-xl drop-shadow-xl duration-500 relative ${
                location.pathname === p.path
                  ? "border-b-4 border-[#2E2460]"
                  : ""
              }`}
            >
              {p.title}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex justify-items-end gap-4">
          <Link
            to="https://vi-cross-login.vercel.app/"
            className="bg-[#2E2460] text-white hover:bg-white hover:text-[#2E2460] border border-[#2E2460] py-2 px-8 rounded-xl drop-shadow-xl duration-500 "
          >
            Join
          </Link>
        </div>

        <div
          onClick={() => setShow(!show)}
          className=" flex items-center justify-center lg:hidden cursor-pointer"
        >
          <FaBars className="size-6" />
        </div>
      </div>

      {show && (
        <div className="mt-8 bg-white rounded-br-3xl rounded-l-3xl ml-auto w-[80%] md:w-[40%]">
          <div className="flex flex-col p-5 items-start rounded-br-3xl rounded-l-3xl border border-gray-300 mt-5 space-y-3 lg:hidden">
            <a
              href="#"
              className="text-[#2E2460] hover:text-[#2E2460] flex gap-2 items-center font-semibold text-xl"
            >
              <IoHomeOutline className="size- hover:text-[#2E2460]" />
              Home
            </a>
            <div className=" w-full border border-gray-300 h-0.5 items-center justify-center"></div>
            <Link
              to={"/aboutus"}
              className="text-[#2E2460] hover:text-[#2E2460] flex gap-2 items-center font-semibold text-xl"
            >
              <AiOutlineSolution className="size-6 hover:text-[#2E2460]" />
              About Us
            </Link>
            <div className=" w-full border border-gray-300 h-0.5 items-center justify-center"></div>
            <Link
              to={"/solution"}
              className="text-[#2E2460] hover:text-[#2E2460] flex gap-2 items-center font-semibold text-xl "
            >
              <FaPersonBooth className="size-6 hover:text-[#2E2460]" />
              Our Solution
            </Link>
            <div className=" w-full border border-gray-300 h-0.5 items-center justify-center"></div>
            <Link
              to={"/contactus"}
              className="text-[#2E2460] hover:text-[#2E2460] flex gap-2 items-center font-semibold text-xl"
            >
              <MdOutlinePermContactCalendar className="size-6 hhover:text-[#2E2460]" />
              Contact Us
            </Link>
            <div className=" w-full border border-gray-300 h-0.5 items-center justify-center"></div>

            <div className="flex gap-2 justify-center">
              <Link
                to="https://vi-cross-login.vercel.app/"
                className="bg-[#2E2460] text-white hover:bg-white hover:text-[#2E2460] border border-[#2E2460]  py-2 px-8 rounded-xl text-xl"
              >
                Join
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
