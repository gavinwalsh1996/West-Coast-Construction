import React from 'react'

//Css
import '../css/WhyUs.scss'

//Components
import Hero from '../components/HeroImage'
import HeroImage from '../newimages/office-worker.jpg'
// import CertifiedStamp from '../components/CertifiedStamp'
import WhyUsSection from '../components/WhyUsSection'
import Awards from '../components/Awards'
import Footer from '../components/Footer'

let subHeading = '';
let heading = 'CALIFORNIAN GENERAL CONTRACTOR';

function Whyus() {

  return (

    <div>
      <Hero image={HeroImage} subHeading={subHeading} heading={heading}/>
      {/* <CertifiedStamp /> */}
      {/* Slideshow */}
      <WhyUsSection />
      <Awards />
    {/* Needs to be fixed */}
      {/* <h2 className='team-title'>PUT US TO WORK</h2>
      <div className="team-image">
        <img src={TeamImage} alt='team-img' />
      </div> */}
      {/* Add the same image styles for grid */}
      <Footer />

    </div>
  )
}

export default Whyus