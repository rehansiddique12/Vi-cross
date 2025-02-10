import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import coma from "../assets/img/comas.png";
import inage1 from "../assets/img/image1.png";
import inage2 from "../assets/img/image2.png";
import inage3 from "../assets/img/image3.png";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ bgColor, textColor }: { bgColor: string , textColor: string}) => {
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    pauseOnHover: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          initialSlide: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={`flex flex-col justify-center items-center py-20 ${bgColor}`}>
      <p className={`${textColor}  font-semibold`}>TESTIMONIAL</p>
      <p className={`${textColor} text-3xl md:text-3xl lg:text-4xl text-center xl:text-7xl font-bold font-plus w-[90%]`}>
        What Peoples Says About Us
      </p>

      <div className=" slider-container w-full max-w-6xl">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="px-2  hover:scale-105 mt-16 mb-6">
            <div className="bg-[#F1F2F6] rounded-3xl w-full h-[299px] px-8">
              <p className="text-[#2E2460] pt-10 font-plus">
                The 2.5D virtual exhibition platform exceeded our expectations
                with its interactive, yet easy-to-use interface. Visitors loved
                exploring the customized booths and engaging with our content
                seamlessly.
              </p>
              <div className="flex mt-5 items-center justify-between">
                <div className="flex items-center pl-3">
                  <img src={inage1} alt="Sarah Jack" />
                  <div className="ml-4">
                    <p className="text-[#2E2460] font-semibold font-plus">
                      Sarah Jack
                    </p>
                    <p className="text-[#2E2460]">TV Model</p>
                  </div>
                </div>
                <img src={coma} alt="Quotation mark" />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="px-2 hover:scale-105 mt-16 mb-6">
            <div className="bg-[#F1F2F6] rounded-3xl w-full h-[299px] px-8">
              <p className="text-[#2E2460] pt-10 font-plus">
                The platform offered the perfect blend of simplicity and
                interactivity. Our audience was fully immersed, and the ability
                to explore exhibits in a virtual space added a unique dimension
                to the experience.......
              </p>
              <div className="flex mt-5 items-center justify-between">
                <div className="flex items-center pl-3">
                  <img src={inage2} alt="Jhon Smit" />
                  <div className="ml-4">
                    <p className="text-[#2E2460] font-semibold font-plus">
                      Jhon Smit
                    </p>
                    <p className="text-[#2E2460]">Developer</p>
                  </div>
                </div>
                <img src={coma} alt="Quotation mark" />
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="px-2 hover:scale-105 mt-16 mb-6">
            <div className="bg-[#F1F2F6] rounded-3xl w-full h-[299px] px-8">
              <p className="text-[#2E2460] pt-10 font-plus">
                Setting up the exhibition was a breeze, and the response from
                attendees was fantastic. The platform made it easy to showcase
                our work while keeping visitors engaged. It's the perfect
                solution for hosting virtual events.
              </p>
              <div className="flex mt-5 items-center justify-between">
                <div className="flex items-center pl-3">
                  <img src={inage3} alt="Ramos Leo" />
                  <div className="ml-4">
                    <p className="text-[#2E2460] font-semibold font-plus">
                      Ramos Leo
                    </p>
                    <p className="text-[#2E2460]">Designer</p>
                  </div>
                </div>
                <img src={coma} alt="Quotation mark" />
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="px-2 hover:scale-105 mt-16 mb-6">
            <div className="bg-[#F1F2F6] rounded-3xl w-full h-[299px] px-8">
              <p className="text-[#2E2460] pt-10 font-plus">
                The 2.5D virtual exhibition platform exceeded our expectations
                with its interactive, yet easy-to-use interface. Visitors loved
                exploring the customized booths and engaging with our content
                seamlessly.
              </p>
              <div className="flex mt-5 items-center justify-between">
                <div className="flex items-center pl-3">
                  <img src={inage1} alt="Sarah Jack" />
                  <div className="ml-4">
                    <p className="text-[#2E2460] font-semibold font-plus">
                      Sarah Jack
                    </p>
                    <p className="text-[#2E2460]">TV Model</p>
                  </div>
                </div>
                <img src={coma} alt="Quotation mark" />
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="px-2 hover:scale-105 mt-16 mb-6">
            <div className="bg-[#F1F2F6] rounded-3xl w-full h-[299px] px-8">
              <p className="text-[#2E2460] pt-10 font-plus">
                The platform offered the perfect blend of simplicity and
                interactivity. Our audience was fully immersed, and the ability
                to explore exhibits in a virtual space added a unique dimension
                to the experience......
              </p>
              <div className="flex mt-5 items-center justify-between">
                <div className="flex items-center pl-3">
                  <img src={inage2} alt="Jhon Smit" />
                  <div className="ml-4">
                    <p className="text-[#2E2460] font-semibold font-plus">
                      Jhon Smit
                    </p>
                    <p className="text-[#2E2460]">Developer</p>
                  </div>
                </div>
                <img src={coma} alt="Quotation mark" />
              </div>
            </div>
          </div>

          {/* Slide 6 */}
          <div className="px-2 hover:scale-105 mt-16 mb-6">
            <div className="bg-[#F1F2F6] rounded-3xl w-full h-[299px] px-8">
              <p className="text-[#2E2460] pt-10 font-plus">
                Setting up the exhibition was a breeze, and the response from
                attendees was fantastic. The platform made it easy to showcase
                our work while keeping visitors engaged. It's the perfect
                solution for hosting virtual events.
              </p>
              <div className="flex mt-5 items-center justify-between">
                <div className="flex items-center pl-3">
                  <img src={inage3} alt="Ramos Leo" />
                  <div className="ml-4">
                    <p className="text-[#2E2460] font-semibold font-plus">
                      Ramos Leo
                    </p>
                    <p className="text-[#2E2460]">Designer</p>
                  </div>
                </div>
                <img src={coma} alt="Quotation mark" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;