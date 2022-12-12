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
// import Footer from '../components/Footer'

//Pages 
// import HomePage from './pages/HomePage'
// import Renovations from './pages/Renovations'
// import CustomHomes from './pages/CustomHomes'
// import Whyus from './pages/Whyus'
// import Projects from './pages/Projects'
// import Contact from './pages/Contact'

//Images
// import construction1 from '../image/construction-image.jpg'
// import construction2 from '../image/construction-image2.jpg'
// import construction3 from '../image/construction-image3.jpg'
// import construction4 from '../image/construction-image4.jpg'

//test
// import lowres from '../newimages/office-2.jpg'
import slideshowHouse1 from '../newimages/outside-house.jpg'
import slideshowHouse2 from '../newimages/bathroom-image2.jpg'
import slideshowHouse3 from '../newimages/construction-image-office-min.jpg'

//gallery
// import kitchenGallery from '../newimages/kitchen-2.jpg'
import CommercialGallery from '../newimages/office-3.jpg'
import kitchenGallery2 from '../newimages/kitchen-image.jpg'
import kitchenGallery from '../newimages/kitchen-2.jpg'
// import kitchenGallery from '../newimages/kitchen-2.jpg'
import BathroomGallery from '../newimages/bathroom-image.jpg'

//About text

function App() {

  // Image Array
  const slides = [
    // { url: construction2},
    // { url: construction3},
    // { url: construction1},
    // { url: construction4},
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
        <ContactForm />
        {/* <Footer /> */}
      </div>
    </div>

  )
}

export default App
