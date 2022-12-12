import React from 'react'

// Css
import '../css/ImageWithText.scss'

function ImageWithText({data}) {

  return (

    <div className='imagewithtext-container'>
        <div className="quote-text">
                <h3 className='quote'>{data.heading}</h3>
                <p>{data.paragraph}</p>
            </div>
    </div>


  )
}

export default ImageWithText