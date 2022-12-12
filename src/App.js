import React from 'react'

//Css
import './css/main.scss'

//Components
import Navbar from './components/Navbar'
// import Slideshow from './components/Slideshow'
// import About from './components/About'
// import ImageGallery from './components/ImageGallery'
// import Awards from './components/Awards'
// import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

//Pages 
import HomePage from './pages/HomePage'
import Renovations from './pages/Renovations'
import CustomHomes from './pages/CustomHomes'
import Whyus from './pages/Whyus'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

//Images
// import construction1 from './image/construction-image.jpg'
// import construction2 from './image/construction-image2.jpg'
// import construction3 from './image/construction-image3.jpg'
// import construction4 from './image/construction-image4.jpg'

function App() {

  // Image Array
  // const slides = [
  //   { url: construction1},
  //   { url: construction2},
  //   { url: construction3},
  //   { url: construction4},
  // ];


  return (

    <div>
      <Navbar HomePage={HomePage} Renovations={Renovations} CustomHomes={CustomHomes} Whyus={Whyus} Projects={Projects} Contact={Contact}/>
      {/* <div className='container-styles'> */}
        {/* <Slideshow slides={slides}/> */}
        {/* <About />
        <ImageGallery />
        <Awards />
        <ContactForm /> */}
        <Footer />
      {/* </div> */}
    </div>
  )
}

export default App
