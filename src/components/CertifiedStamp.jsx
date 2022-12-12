// import { width } from '@mui/system'
import React from 'react'

//Css
import '../css/CertifiedStamp.scss'

// Image
import Stamp from '../newimages/build-better-stamp.png'

function CertifiedStamp() {

  return (

    <div className="stamp-container">
        <img src={Stamp} style={{height: '250px'}} alt="" loading=" lazy"/>
        {/* <h4>CERTIFIED</h4> */}
        <p>Besides being PHC certified, we can also meet any level of the BC Building Step Code. Every three years the Provincial and National Code are going up one level or step, requiring homes to be built to a higher standard. At Lower Coast, we’re always staying ahead and building nothing but inspiration.</p>
    </div>

  )
}

export default CertifiedStamp