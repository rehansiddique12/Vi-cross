const Play = () => {
  return (
    <div className="w-full flex items-center justify-center relative">
        <img src="/image.png" alt="bg-image" className="w-full  z-0" />
        <div className="absolute inset-0 w-full h-full flex flex-col items-center text-center md:mt-5 lg:mt-10 xl:mt-20 z-[1]">
            <p className="text-white text-xs  md:text-md xl:text-xl xl:mb-5">Upcoming Exibitions</p>
            <p className="text-white md:text-3xl lg:text-4xl xl:text-7xl font-bold font-plus w-[70%] ">Counting Time & Not Yet Registered?
            Hurry Up!</p>
        </div>
        <div className="flex absolute gap-5 md:gap-16 lg:gap-16 xl:gap-20 w-full h-full inset-0 mt-8 md:mt-10 lg:mt-16 xl:mt-20 z-[2] justify-center items-center ">
         <div className="backdrop-blur-xs xl:w-[260px] xl:h-[220px] hover:border hover:border-gray-400 rounded-2xl px-4 flex flex-col justify-center items-center">
          <p className="text-white md:text-5xl lg:text-7xl xl:text-9xl font-bold">21</p>
          <p className="text-white md:text-xl lg:text-2xl xl:text-3xl font-bold md:mt-3 lg:mt-2 xl:mt-4">Days</p>
         </div>
         <div className="backdrop-blur-xs xl:w-[260px] xl:h-[220px] hover:border hover:border-gray-400 rounded-2xl px-4 flex flex-col justify-center items-center ">
          <p className="text-white md:text-5xl lg:text-7xl xl:text-9xl font-bold">05</p>
          <p className="text-white md:text-xl lg:text-2xl xl:text-3xl font-bold md:mt-3 lg:mt-4">Hours</p>
         </div>
         <div className="backdrop-blur-xs xl:w-[260px] xl:h-[220px] hover:border hover:border-gray-400 rounded-2xl px-4 flex flex-col justify-center items-center ">
          <p className="text-white md:text-5xl lg:text-7xl xl:text-9xl font-bold">32</p>
          <p className="text-white md:text-xl lg:text-2xl xl:text-3xl font-bold md:mt-3 lg:mt-4">Minutes</p>
         </div>
         <div className="backdrop-blur-xs xl:w-[260px] xl:h-[220px] hover:border hover:border-gray-400 rounded-2xl px-4 flex flex-col justify-center items-center ">
          <p className="text-white md:text-5xl lg:text-7xl xl:text-9xl font-bold">18</p>
          <p className="text-white md:text-xl lg:text-2xl xl:text-3xl font-bold md:mt-3 lg:mt-4">Seconds</p>
         </div>
        </div>
        
         <div className="absolute inset-0 flex items-center justify-center top-[60%] z-[2] mt-10">
        <p className="rounded-xl text-white border hover:text-white bg-transparent font-plus text-xs md:text-xl xl:text-2xl text-center flex items-center justify-center   h-[20px] w-[100px] md:h-[40px] md:w-[160px] xl:h-[56px] xl:w-[200px] cursor-pointer">Register Now +</p>
        </div>
    </div>
  )
}

export default Play
