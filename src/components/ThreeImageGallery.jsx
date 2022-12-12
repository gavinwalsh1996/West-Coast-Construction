import React from 'react'

//Css
import '../css/ThreeImageGallery.scss'

function ThreeImageGallery({imageOne, imageTwo, imageThree}) {

  return (

    <div className='three-image-gallery-container'>
        <img src={imageOne} alt='' className='gallery-image' loading=" lazy"/>
        <img src={imageTwo} alt='' className='gallery-image' loading=" lazy"/>
        <img src={imageThree} alt='' className='gallery-image' loading=" lazy"/>
    </div>

  )
}

export default ThreeImageGallery