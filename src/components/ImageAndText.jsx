import React from 'react'

//Css
import '../css/ImageAndText.scss'
// import Image from '../image/construction-team.jpg'

function ImageAndText({data}) {

  return (
    <div className='imageandtext-container'>
          <div className="one">
                <img src={data.Image} className='grid-img' alt='' loading=" lazy" ></img>
              <div className="textcontainer">
                  <h6 className='textheading'>{data.heading}</h6>
                  <h3 className='textsub-heading'>{data.subHeading}</h3>
                  <p className='textmain-text'>{data.mainText}</p>
              </div>
          </div>
    </div>

  )
}

export default ImageAndText