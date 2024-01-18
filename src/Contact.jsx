import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="contact--container">
      <div className="contact--typo">
      <p>
      35,000+ already joined
      </p>
      <h1>Stay up-to-date with what we’re doing</h1>
      </div>
      <div className="contact--main">
        <input type="email" placeholder='Enter your email'/>
        <div className="contactUS__btn">Contact Us</div>
      </div>
      </div>
    </div>
  )
}

export default Contact