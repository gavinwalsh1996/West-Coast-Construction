import React from 'react'

//Css
import '../css/ImageGallery.scss'

//Image 
// import Image from '../image/construction-image3.jpg'


function ImageGallery({Image1, Image2, Image3, Image4, Image5, Image6}) {

  return (

    <div className='gallery-container'>
        <img src={Image1} className='image' alt='' loading=" lazy" />
        <img src={Image2} className='image' alt='' loading=" lazy" />
        <img src={Image3} className='image' alt='' loading=" lazy" />
        <img src={Image4} className='image' alt='' loading=" lazy" />
        {/* <img src={Image5} className='image' />
        <img src={Image6} className='image' /> */}
    </div>

  )
}

export default ImageGallery