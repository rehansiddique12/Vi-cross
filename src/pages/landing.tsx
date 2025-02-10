import Nav from "../components/nav"
import Hero from "../components/hero"
import Overhero from "../components/overhero"
import Laptop from "../components/laptop"
import Place from "../components/place"
import Countup from "../components/countup"
import Choosus from "../components/choosus"
import Play from "../components/play"
import Testimonial from "../components/testimonial"
import Footer from "../components/footer"

const Landing = () => {
  return (
    <div className="bg-gray-200">
      <Nav/>
      <Hero/>
      <Overhero/>
      <Laptop/>
      <Place/>
      <Countup/>
      <Choosus/>
      <Play/>
      <Testimonial bgColor="bg-white" textColor="text-[#2E2460]"/>
      <Footer/>
    </div>
  )
}

export default Landing
