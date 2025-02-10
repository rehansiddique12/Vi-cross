import Boxs from '../components/boxs'
import Colorsbg from '../components/colorsbg'
import Footer from '../components/footer'
import Nav from '../components/nav'
import Overherosolution from '../components/overherosolution'
import Play from '../components/play'
import Solutionhero from '../components/solutionhero'

const Solution = () => {
  return (
    <div className='bg-gray-200'>
      <Nav/>
      <Solutionhero/>
      <Overherosolution/>
      <Boxs/>
      <Colorsbg/>
      <Play/>
      <Footer/>
    </div>
  )
}

export default Solution
