import React from 'react'

//Css
// import '../css/main.scss'

//Components
// import Navbar from './components/Navbar'
import Slideshow from '../components/Slideshow'
import About from '../components/About'
import ImageGallery from '../components/ImageGallery'
import Awards from '../components/Awards'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import ImageWithTextQuote from '../components/ImageWithTextQuote'

//test
import slideshowHouse1 from '../newimages/outside-house.jpg'
import slideshowHouse2 from '../newimages/bathroom-image2.jpg'
import slideshowHouse3 from '../newimages/construction-image-office-min.jpg'

//gallery
import CommercialGallery from '../newimages/office-3.jpg'
import kitchenGallery2 from '../newimages/kitchen-image.jpg'
import kitchenGallery from '../newimages/kitchen-2.jpg'
import BathroomGallery from '../newimages/bathroom-image.jpg'


function App() {

  // Image Array
  const slides = [
    { url: slideshowHouse1},
    { url: slideshowHouse2},
    { url: slideshowHouse3},
  ];


  return (

    <div>
      {/* <Navbar HomePage={HomePage} Renovations={Renovations} CustomHomes={CustomHomes} Whyus={Whyus} Projects={Projects} Contact={Contact}/> */}
      <div className='container-styles'>
        <Slideshow slides={slides}/>
        <About />
        <ImageGallery Image1={BathroomGallery} Image2={CommercialGallery} Image3={BathroomGallery} Image4={kitchenGallery2} Image5={slideshowHouse1} Image6={kitchenGallery} />
        {/* <ImageGallery Image1={construction1} Image2={construction2} Image3={construction3} Image4={construction4} Image5={construction2} Image6={construction4} /> */}
        <Awards />
        <ImageWithTextQuote />
        <ContactForm />
        <Footer />
      </div>
    </div>

  )
}

export default App
