import React from 'react'

import '../css/TitlesAndText.scss'

function TitlesAndText({data}) {

  return (

    <div className="titles-and-text-container">
        <h6>{data.heading}</h6>
        <h2>{data.subHeading}</h2>
        <p>{data.paragraph}</p>
    </div>

  )
}

export default TitlesAndText