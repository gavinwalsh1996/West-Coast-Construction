import React from 'react'

//Css
import '../css/TextWithButton.scss'

//Components
import Button from './Button'

function TextWithButton({data}) {
    
  return (

    <div className="text-with-button-container">
        <p className='text'>{data.paragraph}</p>
        <Button type="submit" value="Contact Us" />
    </div>
  )
}

export default TextWithButton