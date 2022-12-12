import React from 'react'

//Css
import '../css/HomeRenovations.scss'

//images 
import image1 from '../newimages/outside-house-3.jpg'
import image2 from '../newimages/kitchen-4.jpg'
import Image from '../newimages/construction-worker.jpg'

//test image
// import office from '../testimage/construction-image-office-min.jpg'

//Components 
import HeroImage from '../components/HeroImage'
// import ThreeImageGallery from '../components/ThreeImageGallery'
import ImageTextGrid from '../components/ImageTextGrid'
import ImageChecklist from '../components/ImageChecklist'
// import ImageWithText from '../components/ImageWithText'
import ImageAndText from '../components/ImageAndText'
import Awards from '../components/Awards'
// import ContactForm from '../components/ContactForm'
// import Footer from '../components/Footer'
// import Slideshow from '../components/Slideshow'

// Image gallery content
// import imageOne from '../image/construction-image2.jpg'
// import imageTwo from '../image/construction-image5.jpg'
// import imageThree from '../image/construction-image4.jpg'

//Hero Content
import KitchenHeroImage from '../newimages/kitchen-3.jpg'
let subHeading = '';
let heading = 'RESIDENTIAL RENOVATIONS';

let textGridDataOne = {
  heading: 'ON TIME & WITHIN BUDGET',
  subHeading: 'ON TIME & WITHIN BUDGET',
  gridText: 'Track status levels and cost with our real-time online portal. See how many hours we worked and how much materials cost – no more guessing, sudden bills or over-billing.',
  img: image1,
}

let textGridDataTwo = {
  heading: 'EXTRA KNOWLEDGE',
  subHeading: 'Heritage home experts.',
  gridText: 'A good portion of Californian homes are over 60 years old.  If you have a heritage home you know this requires an extra level of expertise and knowledge to renovate.  At West Coast, our team is trained and experienced in revitalizing heritage homes to code while adhering to bylaws.',
  img: image2,
}

//Image and text data 
let imageAndText = {
  heading: 'OUR TRUE PASSION',
  subHeading: 'Connecting owners to their homes.',
  mainText: 'When you change your home, you change your life. Let us help you match the lifestyle you’ve created with the home you deserve.  We love making it happen.',
  Image: Image
}

//Image checklist
let imageChecklist = {
  subHeading: 'HOME RENOVATION EXPERTS',
  heading: 'We service a wide range of interior & exterior renovations along the West Coast.',
  paragraph: 'Our diverse range of experience and a reputation for timely, clear communication makes West Coast consistently deliver results in:',
  itemOne: 'LANEWAY HOUSES AND ADDITIONS',
  itemTwo: 'DECKS AND PATIOS',
  itemThree: 'ARCHITECTURAL CONCRETE AND RETAINING WALLS',
  itemFour: 'OUTDOOR KITCHENS AND ENTERTAINMENT',
  itemFive: 'FULL INTERIOR RENOVATIONS',
  itemSix: 'KITCHENS AND FAMILY ROOMS',
}


function HomeRenovations() {

  return (

    <div className='home-reno-container'>
        <HeroImage image={KitchenHeroImage} subHeading={subHeading} heading={heading}/>
        {/* <ThreeImageGallery imageOne={imageOne} imageTwo={imageTwo} imageThree={imageThree}/> */}
        <ImageTextGrid textGridData={textGridDataOne} textGridDataTwo={textGridDataTwo}/>
        <Awards />
        <ImageAndText data={imageAndText} />
        <ImageChecklist data={imageChecklist}/>
        {/* <ImageWithText /> */}
        {/* <ContactForm /> */}
        {/* <Footer /> */}
    </div>

  )
}

export default HomeRenovations