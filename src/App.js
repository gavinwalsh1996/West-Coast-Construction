import React from 'react'

//Css
import './css/main.scss'

//Components
import Navbar from './components/Navbar'

//Pages 
import HomePage from './pages/HomePage'
import Renovations from './pages/Renovations'
import CustomHomes from './pages/CustomHomes'
import Whyus from './pages/Whyus'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

return (

    <div>
      <Navbar HomePage={HomePage} Renovations={Renovations} CustomHomes={CustomHomes} Whyus={Whyus} Projects={Projects} Contact={Contact}/>
      {/* <div className='container-styles'> */}
        {/* <Slideshow slides={slides}/> */}
        {/* <About />
        <ImageGallery />
        <Awards />
        <ContactForm /> */}
        {/* <Footer /> */}
      {/* </div> */}
    </div>
  )
}

export default App
