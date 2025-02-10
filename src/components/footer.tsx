import Slider from "react-slick";
import { useEffect } from "react";
import mm1 from "../assets/img/m1.png";
import b11 from "../assets/img/b1.png";
import "slick-carousel/slick/slick.css";
import g1 from "../assets/img/ggirl.png";
import { FaTwitter } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import card4 from "../assets/img/card4.png";
import card5 from "../assets/img/card5.png";
import png from "../assets/img/pnglogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import { IoMailUnread } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const leftSliderSettings = {
  dots: false,
  speed: 500,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplaySpeed: 1500,
};

const rightSliderSettings = {
  dots: false,
  speed: 500,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  autoplaySpeed: 1500,
  rtl: true,
};

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-black text-white px-8  xl:px-40 lg:pt-10 xl:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10">
        {/* logo */}
        <div>
          <img src={png} alt="" className="w-[100px] h-[40px] lg:w-[118px] lg:h-[69px]" />
        </div>
        {/* end logo */}

        {/*start services */}
        <div className="w-full mt-6 md:mt-0">
          <p className="text-xl font-bold font-plus">Our Services</p>
          <div className="flex gap-2 items-center mt-4">
            <MdKeyboardArrowRight />
            <p>Networking People</p>
          </div>
          <div className="flex gap-2 items-center mt-3">
            <MdKeyboardArrowRight />
            <p>Conference Planing</p>
          </div>
          <div className="flex gap-2 items-center mt-3">
            <MdKeyboardArrowRight />
            <p>Live Webinar</p>
          </div>
          <div className="flex gap-2 items-center mt-3">
            <MdKeyboardArrowRight />
            <p>Contact Us</p>
          </div>
        </div>
        {/* end services */}

        {/*start location */}
        <div className="pt-8 md:pt-0">
          <p className="text-xl font-bold font-plus">Our Location</p>
          <div className="flex gap-2 items-center mt-3">
            <TiLocation className="size-8 hover:fill-amber-200" />
            <p>Toronto, Canada </p>
          </div>
          <p className="text-xl font-bold font-plus mt-8">Support</p>
          <div className="flex gap-2 items-center mt-3">
            <IoMailUnread className="size-6 hover:fill-amber-200" />
            <p>support@vicross.com</p>
          </div>
        </div>
        {/* end location */}

        {/*start media */}
        <div className="hidden lg:block slider-container w-full max-w-6xl">
          <p className="text-xl font-bold font-plus">Media</p>

          {/* Left-moving slider */}
          <div className="mt-4">
            <Slider {...leftSliderSettings}>
              <div>
                <img src={g1} alt="Image 1" className="" />
              </div>
              <div>
                <img src={mm1} alt="Image 2" className="" />
              </div>
              <div>
                <img src={b11} alt="Image 3" className="" />
              </div>
              <div>
                <img src={g1} alt="Image 1" className="" />
              </div>
              <div>
                <img src={mm1} alt="Image 2" className="" />
              </div>
              <div>
                <img src={b11} alt="Image 3" className="" />
              </div>
            </Slider>
          </div>

          {/* Right-moving slider */}
          <div className="mt-4">
            <Slider {...rightSliderSettings}>
              <div>
                <img src={g1} alt="Image 1" className="" />
              </div>
              <div>
                <img src={mm1} alt="Image 2" className="" />
              </div>
              <div>
                <img src={b11} alt="Image 3" className="" />
              </div>
              <div>
                <img src={g1} alt="Image 1" className="" />
              </div>
              <div>
                <img src={mm1} alt="Image 2" className="" />
              </div>
              <div>
                <img src={b11} alt="Image 3" className="" />
              </div>
            </Slider>
          </div>
        </div>
        {/* end media */}
      </div>

      {/* next footer */}
      <div className="grid grid-cols-1 lg:grid-cols-4 py-8 border-t border-b border-[#A0AABA2B]  ">
        <div className="mt-4">
          <p className="text-xl font-bold font-plus ">Follow Us</p>
          {/* icons section */}
          <div className="flex gap-7 mt-5">
            <FaFacebookF className="size-6 hover:fill-blue-500" />
            <IoLogoYoutube className="size-6 hover:fill-[#FF0033] hover:bg-white" />
            <FaInstagram className="size-6 hover:fill-pink-500" />
            <FaTwitter className="size-6 hover:fill-blue-400" />
          </div>
        </div>
        {/* start Submit  */}
        <div className="md:justify-self-center col-span-2 mt-4">
          <p className="text-xl font-bold font-plus md:text-center">
            Subscribe Our Newsletter
          </p>
          <div className="mt-4 bg-[#A0AABA2B]  rounded-full px-3 md:pl-8 flex justify-between items-center py-3 xl:w-[488px] xl:h-[68px]  cursor-pointer">
            <input type="email" placeholder="Your email address" className="outline-none" />
            <button className="corsor-pointer py-1 md:py-2 px-4 md:px-8 rounded-full border border-[#379CFFFC] bg-[#0000002b]  cursor-pointer ">
              Subscribe
            </button>
          </div>
        </div>
        {/* card section */}
        <div className="mt-4">
          <p className="text-xl font-bold font-plus">Payment</p>
          <div className="flex gap-4 mt-3 cursor-pointer">
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
            <img src={card4} alt="" />
            <img src={card5} alt="" />
          </div>
        </div>
      </div>
      <div className="py-4 ">
      <p className="text-sm text-[#A0AABA] text-center">Copyright © 2024 VI Cross. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
