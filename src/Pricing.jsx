import React from 'react'
import './Pricing.css'
import chrome from './images/logo-chrome.svg';
import firefox from './images/logo-firefox.svg';
import opera from './images/logo-opera.svg';
import lineDots from './images/bg-dots.svg';
function Pricing() {
  return (
    <div className='pricing' id='pricing'>
            <div className="pricing__exTypo">
        <h1>Download Extension</h1>
        <p>
          {" "}
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
            <div className="pricing__exGrid">
        <div className="ex ex--1">
          <div className="chrome--con"><img src={chrome} alt="chrome-logo" className="chrome--pic ex--pic"/></div>
          <h2> Add to Chrome</h2>
          <p> Minimum version 62</p>  
          <div className="dotted--line"><img src={lineDots} alt="dotted line" className="dotted--line__pic" /></div>
          <div className="ex--btn">Add & Install Extension</div>
        </div>
        <div className="ex ex--2">
          <div className="firefox--con"><img src={firefox} alt="firefox-logo" className="firefox--pic ex--pic"/></div>
          <h2>Add to firefox</h2>
          <p>Minimum version 55</p>
          <div className="dotted--line"><img src={lineDots} alt="dotted line" className="dotted--line__pic" /></div>
          <div className="ex--btn">Add & Install Extension</div>
        </div>
        <div className="ex ex--3">
        <div className="firefox--con"><img src={opera} alt="opera-logo" className="opera--pic ex--pic"/></div>
        <h2>Add to Opera</h2>
        <p>Minimum version 46</p>
        <div className="dotted--line"><img src={lineDots} alt="dotted line" className="dotted--line__pic" /></div>
          <div className="ex--btn">Add & Install Extension</div>
        </div>
      </div>
    </div>
  )
}

export default Pricing