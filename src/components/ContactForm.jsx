import React from 'react';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import '../css/ContactForm.scss'
// import SmlButton from './SmlButton';
import Button from './Button'

function ContactForm() {

    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_3rs7qyj', 'template_8r9mzob', form.current, 'GY1GNoLWTLkj2z7eF') 
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };

  return (

    <div className="form-container">

      <h2>CALL US AT 000-000-0000</h2>

      <form >
      {/* <form ref={form} onSubmit={sendEmail}> */}
      {/* <label>Name</label> */}
      <input type="text" name="user_name" placeholder='Name' />
      {/* <label>Email</label> */}
      <input type="email" name="user_email" placeholder='Email'/>
      {/* <label>Message</label> */}
      <textarea name="message" placeholder='Message'/>
      {/* <input type="submit" value="Send" /> */}
      {/* <SmlButton type="submit" value="Submit" /> */}
    </form>

    {/* <button>INQUIRE</button> */}
    <Button type="submit" value="Submit" />

  </div>

  );
};

export default ContactForm