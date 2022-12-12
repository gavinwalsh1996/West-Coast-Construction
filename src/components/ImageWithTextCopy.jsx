import React from 'react'

// Css
import '../css/ImageWithTextCopy.scss'

function ImageWithText({data}) {

  return (

    <div className='imagewithtextcopy-container'>
        <div className="quote-textcopy">
                <h3 className='quotecopy'>{data.heading}</h3>
                <p>{data.paragraph}</p>
            </div>
    </div>


  )
}

export default ImageWithText