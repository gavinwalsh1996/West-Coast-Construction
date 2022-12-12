import React from 'react'
import '../css/Button.scss'

function Button({ value, link }) {

  return (

    <div className='smlbtn-container'>
        <a href={link}><button>{value}</button></a>
    </div>

  )
}

export default Button