import React from 'react'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Css
import '../css/ImageChecklist.scss'

function ImageChecklist({data}) {

  return (

    <div className='imagechecklist-container'>
        <div className="checklist-text">
            <div className="text">
                <h6 className='subheading'>{data.subHeading}</h6>
                <h2 className='heading'>{data.heading}</h2>
                <p className='paragraph'>{data.paragraph}</p>
            </div>
            <div className="checklist">
              <div className="list itemOne"><CheckCircleOutlineIcon sx={{fontSize: '2rem'}} />{data.itemOne}</div>
              <div className="list itemTwo"><CheckCircleOutlineIcon sx={{fontSize: '2rem'}} />{data.itemTwo}</div>
              <div className="list itemThree"><CheckCircleOutlineIcon sx={{fontSize: '2rem'}} />{data.itemThree}</div>
              <div className="list itemFour"><CheckCircleOutlineIcon sx={{fontSize: '2rem'}} />{data.itemFour}</div>
              <div className="list itemFive"><CheckCircleOutlineIcon sx={{fontSize: '2rem'}} />{data.itemFive}</div>
              <div className="list itemSix"><CheckCircleOutlineIcon sx={{fontSize: '2rem'}} />{data.itemSix}</div>
            </div>
        </div>
    </div>

  )
}

export default ImageChecklist