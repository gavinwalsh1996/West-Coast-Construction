import React from 'react'

//Css
import '../css/HomeRenovations.scss'

// import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import ImageGallery from '../components/ImageGallery';
import TextWithButton from '../components/TextWithButton';

//Hero Content
import KitchenHeroImage from '../image/kitchen-renovation-image.jpg'
import ImageAndText from '../components/ImageAndText';
import Awards from '../components/Awards';
import ContactForm from '../components/ContactForm';

//Image and text image
import kitchenImage from '../newimages/kitchen-3.jpg'

//Image gallery images
import kitchenGallery1 from '../newimages/kitchen-image.jpg'
import kitchenGallery2 from '../newimages/kitchen-2.jpg'
import kitchenGallery3 from '../newimages/kitchen-4.jpg'
import kitchenGallery4 from '../newimages/kitchen-5.jpg'
import kitchenGallery5 from '../newimages/kitchen-6.jpg'
import kitchenGallery6 from '../newimages/kitchen-8.jpg'

let subHeading = '';
let heading = 'KITCHEN RENOVATIONS';

// Image and text data 
let kitchenData = {
    heading: 'We’re dedicated to providing the best kitchen renovation services to our customers.',
    subHeading: 'We have been serving California for over a decade and are proud of our reputation as one of the most trusted kitchen renovation experts in town.',
    mainText: 'Homeowners in search of a kitchen renovation service need look no further than us. We provide high-quality kitchen renovations that are sure to meet your needs and exceed your expectations. Our team of experienced professionals will work closely with you to ensure that your kitchen renovation project is completed on time and on budget.',
    Image: kitchenImage
}

//text with button
let kitchenDetails = {
    paragraph: 'The kitchen is the most central room in any house – it’s where we cook, eat and socialize. So, when it comes to kitchen renovations, we understand that it’s not just a cosmetic exercise, but a chance to really transform the heart of your home. Our kitchen renovation services are designed to be completely tailored to your specific needs and budget, whether you’re looking for a complete kitchen makeover or just a few simple updates.',
    buttonText: 'CONTACT US'
}



function BathroomRenovations() {

  return (

    <div className='home-reno-container'>
        <HeroImage image={KitchenHeroImage} subHeading={subHeading} heading={heading}/>
        <ImageAndText data={kitchenData}/>
        <ImageGallery Image1={kitchenGallery1} Image2={kitchenGallery2} Image3={kitchenGallery3} Image4={kitchenGallery4} Image5={kitchenGallery5} Image6={kitchenGallery6} />
        <TextWithButton data={kitchenDetails} />
        <Awards />
        <ContactForm />
        {/* <Footer /> */}
    </div>

  )
}

export default BathroomRenovations