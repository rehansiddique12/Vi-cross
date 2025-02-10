import  { useEffect } from 'react'

const Solutionhero = () => {
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="pt-20 w-full h-full">
      <div className="bg-[url('/hero1.png')] relative bg-cover bg-no-repeat flex flex-col justify-center items-center w-full h-[420px]">
      <div className="absolute inset-0 w-full h-full flex flex-col  justify-center items-center text-center md:mt-5 lg:mt-10 xl:mt-20 z-[1]">
            <p className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-plus w-[70%]  ">Our Solution</p>
            <p className="text-white md:text-xl lg:text-2xl xl:text-xl xl:mb-5">1st Canadian 2.5D Virtual Exhibition platform</p>
        </div>
      </div>
    </div>
  )
}

export default Solutionhero
