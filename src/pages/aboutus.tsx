import Abouthero from "../components/abouthero"
import Footer from "../components/footer"
import Mamber from "../components/mamber"
import Nav from "../components/nav"
import Overheroabout from "../components/overheroabout"
import Testimonial from "../components/testimonial"
import Vedio from "../components/vedio"


const Aboutus = () => {
  return (
    
    <div>
      <Nav/>
      <Abouthero/>
      <Overheroabout/>
      <Vedio/>
      <Testimonial bgColor="bg-black"  textColor="text-white"/>
      <Mamber/>
      <Footer/>
    </div>
  )
}

export default Aboutus
