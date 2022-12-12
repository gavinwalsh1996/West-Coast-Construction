import React from 'react'

//Css
import '../css/ImageAndTextOpp.scss'

function ImageAndText({data}) {

  return (

    <div className='imageandtext-container'>
          <div className="one-opp">
                <img src={data.Image} className='grid-img' alt='' loading=" lazy"></img>
              <div className="textcontainer">
                  <h6 className='textheading'>{data.heading}</h6>
                  <h2 className='textsub-heading'>{data.subHeading}</h2>
                  <p className='textmain-text'>{data.mainText}</p>
              </div>
          </div>
    </div>

  )
}

export default ImageAndText