import './App.css'
import EcommerceCarousel from './components/Carousel/Carousel'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import PartnerSection from './components/PartnerSection/PartnerSection'
import Process from './components/Process/Process'
import Services from './components/Services/Services'
import Technologies from './components/Technologies/Technologies'
import Testimonials from './components/Testimonials/Testimonials'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <HeroSection/>
      <Services/>
      <EcommerceCarousel/>
      <Technologies/>
      <PartnerSection/>
      <Process/>
      <WhyChooseUs/>
      <Clients/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
