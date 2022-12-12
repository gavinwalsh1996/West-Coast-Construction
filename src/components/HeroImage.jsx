import React from 'react'

//Css
import '../css/HeroImage.scss'


function HeroImage({image, subHeading, heading}) {

  return (

    <div className='heroimage-container'>
        <img src={image} alt='' loading=" lazy"/>
        <div className="image-text">
            <p className='subheading'>{subHeading}</p>
            <h4 className='heading'>{heading}</h4>
        </div>
    </div>

  )
}

export default HeroImage