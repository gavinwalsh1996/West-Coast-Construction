import React from 'react'

//Components 
import HeroImage from '../components/HeroImage'
import TitlesAndText from '../components/TitlesAndText';
import ImageAndText from '../components/ImageAndText';
import ImageAndTextOpp from '../components/ImageAndTextOpp'
import ImageWithTextQuote from '../components/ImageWithTextQuote';
import CertifiedStamp from '../components/CertifiedStamp';
import Awards from '../components/Awards';
import ContactForm from '../components/ContactForm'
// import Footer from '../components/Footer'

//Images 
import HeroImageFile from '../newimages/outside-house-3.jpg'
import ImageAndText1 from '../newimages/outside-house-2.jpg'
import ImageAndText2 from '../newimages/outside-house-5.jpg'
import ImageAndText3 from '../newimages/outside-house-3.jpg'

//Hero banner
let herobannerHeading = 'CUSTOM HOME BUILDER CALIFORNIA';
let heroBannerSubheading = '';

//Title and text banner
let titleAndTextData = {
  heading: '',
  subHeading: 'The highest standards in home building.',
  paragraph: 'The climate is changing.  Build a custom home which helps the environment.  At West Coast we build brand new custom homes to the highest energy standards.  Efficiency is so high, you can save up to 90% on your heating costs.  An energy efficient home also boasts the highest comfort level – the air stays steadily warmer in the winter and remains cool in summers.'
}

//Image and text data 
let imageAndTextOne = {
  heading: 'MODERN CUSTOM HOMES',
  subHeading: "We're trusted home builders by California's home owners.",
  mainText: 'Homeowners in search of a new home need to look no further than us. We provide high-quality custom homes that are sure to meet your needs and exceed your expectations. Our team of experienced professionals will work closely with you to ensure that your home is completed on time and on budget.',
  Image: ImageAndText1
}

let imageAndTextTwo = {
  heading: 'AWARD WINNING HOME BUILDER',
  subHeading: 'Build your home to the highest standards.',
  mainText: 'Not only are our custom built homes energy efficient and good for the environment, they’re beautiful. Home designs are changing and we’re leading the forefront of modern home building. Let us help design and construct the home of your future.',
  Image: ImageAndText2
}

let imageAndTextThree = {
  heading: 'MODERN & CUSTOM NEW BUILDS',
  subHeading: 'A home built just for you.',
  mainText: 'Our designers & architects apply the right amount of help so you can visualize the process from conceptualization to construction.  Build with the top North Vancouver custom home builder.',
  Image: ImageAndText3
}


function CustomHomes() {

  return (

    <div>
      <HeroImage image={HeroImageFile} subHeading={heroBannerSubheading} heading={herobannerHeading}/>
      <TitlesAndText data={titleAndTextData} />
      <ImageAndText data={imageAndTextOne} />
      <ImageAndTextOpp data={imageAndTextTwo} />
      <ImageAndText data={imageAndTextThree} />
      <ImageWithTextQuote />
      <CertifiedStamp />
      <Awards />
      <ContactForm />
      {/* <Footer /> */}

    </div>

  )
}

export default CustomHomes