import React from 'react'

//Css
import '../css/Awards.scss'

//Image
import ConstructionAward from '../image/construction-award.png'
import RooftopAward from '../image/rooftop-award.png'


function Awards() {

  return (

    <div className="main-container">

      <h2>Award Winning Company</h2>

      <div className="awards-text"><p>{`This construction company has a solid reputation with full transparency, honesty & integrity. Work with our trusted general contractor team for home renovations and custom home building.`}</p></div>

    <div className='awards-container'>
      <div className="award">
        <img src={ConstructionAward} alt='award' loading=" lazy" />
      </div>
      <div className="award">
        <img src={RooftopAward} alt='award' loading=" lazy" />
      </div>
      <div className="award">
        <img src={ConstructionAward} alt='award' loading=" lazy" />
      </div>
    </div>

    </div>

  )
}

export default Awards