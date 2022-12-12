import React from 'react'

//Css
import '../css/HomeRenovations.scss'

// import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import ImageGallery from '../components/ImageGallery';
import TextWithButton from '../components/TextWithButton';

//Hero Content
import BathroomHeroImage from '../newimages/bathroom-image.jpg'
import ImageAndText from '../components/ImageAndText';
import Awards from '../components/Awards';
import ContactForm from '../components/ContactForm';

//Images
import ImageAndTextBathroom from '../newimages/bathroom-image2.jpg'
import Gallerybathroom1 from '../newimages/bathroom-image3.jpg'
import Gallerybathroom2 from '../newimages/bathroom-image4.jpg'
import Gallerybathroom3 from '../newimages/bathroom-image5.jpg'
import Gallerybathroom4 from '../newimages/bathroom-image6.jpg'
import Gallerybathroom5 from '../newimages/bathroom-image7.jpg'
import Gallerybathroom6 from '../newimages/bathroom-image8.jpg'

let subHeading = '';
let heading = 'BATHROOM RENOVATIONS';

// Image and text data 
let bathroomData = {
    heading: "WE'RE DEDICATED TO PROVIDING THE BEST BATHROOM RENOVATION SERVICES TO OUR CUSTOMERS",
    subHeading: 'We have been serving California for over a decade and are proud of our reputation as one of the most trusted bathroom renovation experts in town.',
    mainText: 'Homeowners in search of a bathroom renovation service need look no further than us. We provide high-quality bathroom renovations that are sure to meet your needs and exceed your expectations. Our team of experienced professionals will work closely with you to ensure that your bathroom renovation project is completed on time and on budget.',
    Image: ImageAndTextBathroom
}

//text with button
let bathroomDetails = {
  paragraph: 'Our bathroom renovation service is second to none. We take care of everything from start to finish, so you can relax and enjoy your new bathroom. We begin by meeting with you to discuss your vision and needs. From there, we create a detailed plan and design that fits your budget and timeline. We then begin the construction process, carefully and expertly renovating your bathroom to your specifications.  So if you’re looking for a bathroom renovation service that will exceed your expectations, look no further than West Coast Building Group.',
  buttonText: 'CONTACT US'
}


function BathroomRenovations() {

  return (

    <div className='home-reno-container'>
        <HeroImage image={BathroomHeroImage} subHeading={subHeading} heading={heading}/>
        <ImageAndText data={bathroomData}/>
        <ImageGallery Image1={Gallerybathroom1} Image2={Gallerybathroom2} Image3={Gallerybathroom3} Image4={Gallerybathroom4} Image5={Gallerybathroom5} Image6={Gallerybathroom6} />
        <TextWithButton data={bathroomDetails}/>
        <Awards />
        <ContactForm />
        {/* <Footer /> */}
    </div>

  )
}

export default BathroomRenovations