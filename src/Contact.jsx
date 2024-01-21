import React from 'react';
import './Contact.css';
import error from './images/icon-error.svg';
import { useState, useRef } from 'react';
import validator from 'validator';

function Contact() {
  const [inputValue, setInputValue] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const myElementRef = useRef([])
    const handleSubmit = (e) => {
      e.preventDefault()
      const isValid = validator.isEmail('example@example.com');
      setValidEmail(isValid);
      if (inputValue === '' || !isValid) {
        myElementRef.current.forEach((ref) => {
          ref.classList.remove("hidden")
        })
        setTimeout(() => {
          myElementRef.current.forEach((ref) => {
            ref.classList.add("hidden")
          })}, 3000)
          setInputValue ("")
      }
      else {
        alert(`Thank you for your message! We will get back to you soon.`);
        setInputValue ("")
      }
    }
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
        <div className="input--section">
        <input type="email" placeholder='example@gmail.com' value={inputValue} onChange = {(e) => setInputValue(e.target.value)}/>
        <div className="errMsg--box hidden" ref={(el) => (myElementRef.current[0] = el)}>
        </div>
        <p className='errMsg--box--text hidden' ref={(el) => (myElementRef.current[1] = el)}><i>whoops make sure it's an email</i></p>
        <div className="errIcon--box hidden" ref={(el) => (myElementRef.current[2] = el)}>
        <img src={error} alt="error svg"/>
        </div>
        </div>
        <div className="contactUS__btn" onClick={handleSubmit}>Contact Us</div>
        {!validEmail && <p>Please enter a valid email address.</p>}
      </div>
      </div>
    </div>
  )
}

export default Contact