import React from 'react'

//Components 
import ImageAndText from '../components/ImageAndText'
import Footer from '../components/Footer'

//Image 
import Image from '../newimages/outside-house-3.jpg'
import Image1 from '../newimages/kitchen-2.jpg'
import Image2 from '../newimages/outside-house-5.jpg'

function Projects() {

  //Image and text data 
let imageAndTextOne = {
  heading: '#55 - 3968 WHEREVER DRIVE, CALIFORNIA, V0P 312',
  subHeading: "Custom Modern Home",
  mainText: 'This family lived a block away and wanted some additional space without leaving the neighborhood they loved. We had just the spot for them! We located a site within the area and got going with the build. This is a new project which is still in the early stages but it wont be too long until we will be handing the keys over to the new owners.',
  Image: Image
}
let imageAndTextTwo = {
  heading: '#342 - 98 WHEREVER DRIVE, CALIFORNIA, V0P 212',
  subHeading: "Kitchen Renovation",
  mainText: 'It was time to restore this kitchen to some of its original glory. This kitchen was renovated inside and out to expand the area and create a brighter living space. The owners kept original items like the marbel countertop and the timber ceiling, but infused their transitional style in all the right places. This project is due to be completed by the end of the month.',
  Image: Image1
}
let imageAndTextThree = {
  heading: '#632 - 2315 WHEREVER DRIVE, CALIFORNIA, V0P 212',
  subHeading: "Home Renovation",
  mainText: 'The client wanted to find a home to renovate that had existing charm but could be remodeled to add modern comforts. We accomplished this with a total design overhaul and an addition to the rear of the home. This home is due to be completed this summer.',
  Image: Image2
}

  return (
    <div>

      <h1 style={{paddingTop: '100px', textAlign: 'center', color: '#57c5c7'}}>Current Projects</h1>
      <ImageAndText data={imageAndTextOne} />
      <ImageAndText data={imageAndTextTwo} />
      <ImageAndText data={imageAndTextThree} />
      <Footer />
    </div>
  )
}

export default Projects