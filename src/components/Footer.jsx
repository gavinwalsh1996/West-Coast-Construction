import React from 'react'
import CopyRight from './CopyRight'

//Css 
import '../css/Footer.scss'

//Logo
import FooterLogo from '../newimages/West Coast Construction Logo White.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {

  return (

    <>

  <div className="footer-container">
    <div className="logo-container">
        <img src={FooterLogo} className='footer-logo' alt='' loading=" lazy"/>
    </div>

    <div className="contact-info-container">
        <p>123-456-0000</p>
        <p>office@west-coast-construction.com</p>
        <p>#195 - 998 Wherever Drive, California, V0P 302</p>
        <div className="social">
        <InstagramIcon sx={{color: '#57c5c7', cursor: 'pointer'}}/>
        <FacebookIcon sx={{color: '#57c5c7', cursor: 'pointer'}}/>
        <YouTubeIcon sx={{color: '#57c5c7', cursor: 'pointer'}}/>
        </div>
    </div>
  </div>
   <CopyRight />
   </>

  )
}

export default Footer