import React from 'react'

//Css
import '../css/HomeRenovations.scss'

//Images
// import Image from '../image/laptop.jpg'
import officeWorkers from '../newimages/office-worker.jpg'
import newOffice from '../newimages/office-5.jpg'

//Three image gallery Images
import OfficeImage1 from '../newimages/office-2.jpg'
import OfficeImage2 from '../newimages/office-3.jpg'
import OfficeImage3 from '../newimages/office-4.jpg'

import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import ThreeImageGallery from '../components/ThreeImageGallery';
import TitlesAndText from '../components/TitlesAndText';
import Awards from '../components/Awards';
import ImageChecklist from '../components/ImageChecklist';
import ImageAndText from '../components/ImageAndText';
import ImageWithTextCopy from '../components/ImageWithTextCopy';

//Hero Content
import OfficeHeroImage from '../image/construction-image-office.jpg'

let subHeading = '';
// let subHeading = 'RENOVATE YOUR BUSINESS';
let heading = 'COMMERCIAL & CONSTRUCTION';

// Image and text data 
let imageAndTextOne = {
    heading: "WE'RE DEDICATED TO PROVIDING THE BEST OFFICE RENOVATION SERVICES TO OUR CUSTOMERS",
    subHeading: 'We have been serving California for over a decade and are proud of our reputation as one of the most trusted office renovation experts in town.',
    mainText: 'Companies in search of an office renovation service need look no further than us. We provide high-quality office renovations that are sure to meet your needs and exceed your expectations. Our team of experienced professionals will work closely with you to ensure that your office renovation project is completed on time and on budget.',
    Image: newOffice
}

//Titles and text section
let titleParagraphOne = {
    heading: '',
    subHeading: "We're here to add more business to your bottom line.",
    paragraph: 'Successful commercial construction calls for accuracy as well as speed to ensuring that a business can move in or resume work at full capacity under a deadline. West Coast Building Group has experience with time-effective scheduling and does what is needed to make sure the work is completed on time.',
}

//Titles and text section
let titleParagraphTwo = {
    heading: 'SPEED',
    subHeading: "Expand & renovate quickly.",
    paragraph: 'Whether running two shifts or working while a space is closed, we are accustomed to operating in a way that allows your business to remain functional while upgrades are being completed.',
}

//Image checklist
let imageChecklist = {
    subHeading: 'SERVICES',
    heading: 'We service all major & minor commercial renovations needs in California:',
    paragraph: 'West Coast Building Group has installed product displays and fixtures for retail and other commercial properties province-wide. We work with our clients to equip their commercial spaces for optimum use.',
    itemOne: 'RETAIL STORE AND RESTAURANTS',
    itemTwo: 'OFFICES AND INDUSTRIAL SPACES',
    itemThree: 'TENANT IMPROVEMENTS',
    itemFour: 'LIGHT INFRASTRUCTURES AND INSTITUTIONAL CONSTRUCTION',
    itemFive: 'PLAYGROUNDS AND RECREATIONAL SPACES',
    itemSix: 'REPAIRS',
  }

  //Image and text data 
let imageAndTextTwo= {
    heading: 'ON TIME & WITHIN BUDGET',
    subHeading: 'Dedicated project management.',
    mainText: 'Track status levels and cost with our real-time online portal. See how many hours we worked and how much materials cost – no more guessing, sudden bills or over-billing.',
    Image: officeWorkers
  }

  //Image with text data 
let imageWithText = {
    heading: 'Our experience, eye for detail & high quality cost-effectiveness puts us in the ideal spot for your next upgrade.',
    paragraph: ''
  }

function CommercialRenovations() {

  return (

    <div className='home-reno-container'>
        <HeroImage image={OfficeImage3} subHeading={subHeading} heading={heading}/>
        <ThreeImageGallery imageOne={OfficeImage1} imageTwo={OfficeImage2} imageThree={OfficeHeroImage}/>
        <TitlesAndText data={titleParagraphOne}/>
        <TitlesAndText data={titleParagraphTwo}/>
        <Awards />
        <ImageChecklist data={imageChecklist}/>
        <ImageAndText data={imageAndTextOne} />
        <ImageWithTextCopy data={imageWithText} />
        <ImageAndText data={imageAndTextTwo} />
        <Footer />
    </div>

  )
}

export default CommercialRenovations