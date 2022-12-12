import React from 'react'

//Components
import HeroImage from '../components/HeroImage'
import ContactForm from '../components/ContactForm';
// import Footer from '../components/Footer';

import Image from '../newimages/construction-image-pencil.jpg'
let subHeading = '';
let heading = 'CONTACT US';

function Contact() {

  return (

    <div className="contact-container">
       <HeroImage image={Image} subHeading={subHeading} heading={heading}/>
       <ContactForm />
       {/* <Footer /> */}
    </div>

  )
}

export default Contact