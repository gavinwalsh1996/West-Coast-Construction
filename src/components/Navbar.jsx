import React from 'react'
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LogoImage from '../newimages/eastcoast-logo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

//Css
import '../css/Navbar.scss'

//Pages 
// import Renovations from '../pages/Renovations'
// import CustomHomes from '../pages/CustomHomes'
// import Whyus from '../pages/Whyus'
// import Projects from '../pages/Projects'
// import Contact from '../pages/Contact'
// import HomePage from '../pages/HomePage'
import HomeRenovations from '../pages/HomeRenovations';
import BathroomRenovations from '../pages/BathroomRenovations';
import KitchenRenovations from '../pages/KitchenRenovations';
import CommercialRenovations from '../pages/CommercialRenovations';

// Helper component to scroll to top on route change
import ScrollToTop from '../helpers/ScrollToTop';

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Navbar({HomePage, Renovations, CustomHomes, Whyus, Projects, Contact}) {

    const navRef = useRef();

    function showNavBar() {
        navRef.current.classList.toggle('responsive-nav');
    }

  return (

    <>

    <Router>

      <ScrollToTop />
      {/* <header>
          <Link to='/'><h3 className='logo'>Logo.</h3></Link>
          <nav ref={navRef}>
              <Link to="/renovations">Renovations</Link>
              <Link to="/customhomes">Custom Homes</Link>
              <Link to="/whyus">Why Us?</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <button className='nav-btn nav-close-btn' onClick={showNavBar}><CloseIcon sx={{color: 'grey'}}/></button>
          </nav>
          <button className='nav-btn' onClick={showNavBar}><MenuIcon /></button>
      </header> */}

      {/* test */}

      <header>
          <Link to='/'>
            <img src={LogoImage} className='logo-img' alt=''/>
          </Link>
          <nav ref={navRef}>

          <div className="dropdown">
              <Link to="#" className='dropbtn links'>RENOVATIONS<KeyboardArrowDownIcon sx={{paddingTop: '.2rem'}}/></Link>
            <div className="dropdown-content">
              <Link to="/home-renovation" onClick={showNavBar}>HOME RENOVATIONS</Link>
              <Link to="/bathroom-renovation" onClick={showNavBar}>BATHROOM RENOVATIONS</Link>
              <Link to="/kitchen-renovation" onClick={showNavBar}>KITCHEN RENOVATIONS</Link>
              <Link to="/commercial-renovation" onClick={showNavBar}>COMMERCIAL RENOVATIONS</Link>
            </div>
          </div>
              <Link to="/customhomes" className='links'onClick={showNavBar}>CUSTOM HOMES</Link>
              <Link to="/whyus" className='links'onClick={showNavBar}>WHY US?</Link>
              <Link to="/projects" className='links'onClick={showNavBar}>PROJECTS</Link>
              <Link to="/contact" className='links'onClick={showNavBar}>CONTACT</Link>
              {/* <FacebookIcon sx={{textAlign: 'center'}}/>
              <InstagramIcon />
              <LocalPhoneIcon />
              <MailOutlineIcon /> */}
              <button className='nav-btn nav-close-btn' onClick={showNavBar}><CloseIcon sx={{color: 'grey'}}/></button>
          </nav>
          <button className='nav-btn' onClick={showNavBar}><MenuIcon /></button>
      </header>



      {/* Routes */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/renovations' element={<Renovations />} />
        <Route path='/customhomes' element={<CustomHomes />} />
        <Route path='/whyus' element={<Whyus />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home-renovation' element={<HomeRenovations />} />
        <Route path='/bathroom-renovation' element={<BathroomRenovations />} />
        <Route path='/kitchen-renovation' element={<KitchenRenovations />} />
        <Route path='/commercial-renovation' element={<CommercialRenovations />} />
      </Routes>

    </Router>

    </>
  )

}

export default Navbar
