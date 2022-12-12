import React from 'react'

//Css
import '../css/ImageAndText.scss'
// import Image from '../image/construction-team.jpg'

function ImageAndText({data}) {

  return (

    // <div className='imagetextgrid-container'>
    //       <div className="one">
    //             <img src={textGridDataTwo.img} className='grid-img'></img>
    //           <div className="text-container">
    //               <h6 className='heading'>{textGridDataTwo.heading}</h6>
    //               <h2 className='sub-heading'>{textGridDataTwo.subHeading}</h2>
    //               <p className='grid-text'>{textGridDataTwo.gridText}</p>
    //           </div>
    //       </div>
    // </div>
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