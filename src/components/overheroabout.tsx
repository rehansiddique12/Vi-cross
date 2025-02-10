import phome from "../assets/img/phone.png"

const Overheroabout = () => {
  return (
    <div className="xl:max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 justify-self-center w-full py-20 px-8">
      <div className="pt-20 h-full w-full  flex flex-col justify-center  md:text-start text-center">
        <p className='text-black font-plus font-bold '>About Us</p>
        <p className="text-[#2E2460] text-3xl md:text-4xl lg:text-5xl  font-bold  font-plus  lg:mt-3 mb-5">Mission Statements</p>
        <p className="text-[#2E2460] font-plus w-[95%] lg:w-[70%] px-3">Our mission is to transform the virtual event experience by providing an innovative 2.5D platform that seamlessly blends interactivity with accessibility. We aim to empower businesses, creators, and organizations to host dynamic virtual exhibitions that captivate audiences and foster meaningful engagement.</p>
      </div>
      <div className="flex items-center justify-center mt-10 px-5">
         <img src={phome} alt="" />
      </div>
    </div>
  )
}

export default Overheroabout
