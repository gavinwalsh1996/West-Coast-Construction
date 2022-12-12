import React from 'react'

//Css
import '../css/ImageTextGrid.scss'

function ImageTextGrid({textGridData, textGridDataTwo}) {

  return (

<div className='imagetextgrid-container'>

        {/* Why us section */}
            <div className="why-us">
                <h6>WHY WEST COAST</h6>
                <h2>Professional Home Renovations</h2>
                <p>That’s what we’re known for. Our staff works closely with you to set attainable and realistic goals to see each home renovation project through with tenacious dedication.</p>
            </div>

            <div className="text-cont">
              <div className="text-container">
                  <h6 className='heading'>{textGridData.heading}</h6>
                  <h3 className='sub-heading'>{textGridData.subHeading}</h3>
                  <p className='grid-text'>{textGridData.gridText}</p>
              </div>
              <img src={textGridData.img} className='grid-img' alt=''></img>
          </div>

            <div className="text-cont">
                <img src={textGridDataTwo.img} className='grid-img' alt=''></img>
              <div className="text-container">
                  <h6 className='heading'>{textGridDataTwo.heading}</h6>
                  <h3 className='sub-heading'>{textGridDataTwo.subHeading}</h3>
                  <p className='grid-text'>{textGridDataTwo.gridText}</p>
              </div>
          </div>

    
</div>

  )
}

export default ImageTextGrid