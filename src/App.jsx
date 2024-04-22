
import './App.css'
import SecondaryNav from './components/SecondaryNav'
import PrimaryNav from './components/PrimaryNav'
import Hero from './components/Hero'
import Display from './components/Display'
import Camera from './components/Camera'
import Colors from './components/Colors'
import Carousel from './components/Carousel'
import Pixels from './components/Pixels'
import Footer from './components/Footer'

function App() {

  

  return (
    <div className=' relative reset-style'>
    <SecondaryNav />
    <PrimaryNav />
    <Hero />
   <Display />
   <Camera />
   
   <div className='h-screen w-screen reset-style'>
    <Colors />
   </div>
   <div className='h-screen w-screen relative top-48'>
   <Carousel />
   </div>
  <div className='h-screen w-screen relative  top-48'>
    <Pixels />
  </div>
  <div className='h-screen w-screen relative top-48'>
  <Footer />
  </div>
  
    </div>
  )
}

export default App
