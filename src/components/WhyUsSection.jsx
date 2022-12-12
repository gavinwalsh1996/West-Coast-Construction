import React from 'react'

//Css
import '../css/WhyUsSection.scss'


//Components
import ThreeImageGallery from './ThreeImageGallery';

//Icon
import CheckIcon from '@mui/icons-material/Check';

//Images
import ImageOne from '../newimages/worker1.jpg'
import ImageTwo from '../newimages/construction-worker2.jpg'
import ImageThree from '../newimages/construction-worker.jpg'



function WhyUsSection() {

  return (

    <div className='why-us-container'>

        <div className="checkbox-container">
        <h2 className='why-us-title'>WITH WEST COAST</h2>
             <ul>
                <li><CheckIcon/> Go from concept to reality</li>
                <li><CheckIcon/> There are no hidden fees</li>
                <li><CheckIcon/> Billing is transparent</li>
                <li><CheckIcon/>  You're not being taken advantage of</li>
                <li><CheckIcon/> Professionals are using the highest standards available</li>
                <li><CheckIcon/> Your house will maintain value and is in good hands</li>
            </ul>
        </div>

        <div className="team-services-container">
            <div className="services">
            <h2>SERVICES</h2>
                <p>HOME RENOVATIONS</p>
                <p>BATHROOM RENOVATIONS</p>
                <p>KITCHEN RENOVATIONS</p>
                <p>COMMERCIAL RENOVATIONS</p>
                <p>CUSTOM HOME BUILDING</p>
            </div>
            <div className="team">
            <h2>TEAM</h2>
            <p>Our construction knowledge is so large we’ve broken it into four brands, each with its own expertise.</p>
            <p>Our partners have years of experience in general contracting. It’s the only thing we like & love to do everyday. We constantly push to offer a better experience for home owners.</p>
            </div>
        </div>
        <ThreeImageGallery imageOne={ImageOne} imageTwo={ImageTwo} imageThree={ImageThree}/>
    </div>

  )
}

export default WhyUsSection