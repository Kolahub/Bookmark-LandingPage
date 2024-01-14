import React from 'react'
import './Pricing.css'
import chrome from './images/logo-chrome.svg';
import firefox from './images/logo-firefox.svg';
import opera from './images/logo-opera.svg';
import lineDots from './images/bg-dots.svg';
import arrow from './images/icon-arrow.svg';
function Pricing() {
  const action = function (question, questionArrowNum) {
    document.querySelector(`.${question}`).classList.toggle('hidden')
    const arrowBtn = document.querySelector(`.arrow--${questionArrowNum}`)
      arrowBtn.classList.toggle('rotate')

  }
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
          <div className="chrome--con ex--con"><img src={chrome} alt="chrome-logo" className="chrome--pic ex--pic"/></div>
          <h2> Add to Chrome</h2>
          <p> Minimum version 62</p>  
          <div className="dotted--line"><img src={lineDots} alt="dotted line" className="dotted--line__pic" /></div>
          <div className="ex--btn">Add & Install Extension</div>
        </div>
        <div className="ex ex--2">
          <div className="firefox--con ex--con"><img src={firefox} alt="firefox-logo" className="firefox--pic ex--pic"/></div>
          <h2>Add to firefox</h2>
          <p>Minimum version 55</p>
          <div className="dotted--line"><img src={lineDots} alt="dotted line" className="dotted--line__pic" /></div>
          <div className="ex--btn">Add & Install Extension</div>
        </div>
        <div className="ex ex--3">
        <div className="opera--con ex--con"><img src={opera} alt="opera-logo" className="opera--pic ex--pic"/></div>
        <h2>Add to Opera</h2>
        <p>Minimum version 46</p>
        <div className="dotted--line"><img src={lineDots} alt="dotted line" className="dotted--line__pic" /></div>
          <div className="ex--btn">Add & Install Extension</div>
        </div>
      </div>

      <div className="pricing__faq">
      <div className="pricing__faq--typo">
        <h1>Frequently Asked Questions</h1>
        <p>
  Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.
        </p>
      </div>
      <div className="pricing__faq--main">
        <div className="selectfield">
          <div className="selectquestion" onClick={() => action("question--one", "one")}>
            <p>What is Bookmark?</p>
            <img className='arrow--one' src={arrow} alt=""/>
          </div>
          <p className="selectanswer question--one hidden">
          With an Internet browser, a bookmark or electronic bookmark is a method of saving a web page's address. While using most browsers, pressing Ctrl+D bookmarks the page you are viewing. To bookmark a page using your mouse, click the Bookmark icon (star) icon (or a similar symbol) to the right of the address bar.
          </p>
        </div>

        <div className="selectfield"  onClick={() => action("question--two", "two")}>
          <div className="selectquestion">
            <p>How can I request a new browser?</p>
            <img className='arrow--two' src={arrow} alt=""/>
          </div>
          <p className="selectanswer question--two hidden">
          If you're looking to request a new browser, you can simply download and install a different browser on your device. There are several popular browsers available, such as Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. Visit the respective websites of these browsers and look for the download or installation options. Once you've installed the new browser, you can use it as your default browser and enjoy its features. Let me know if you need any further assistance!
          </p>
        </div>

        <div className="selectfield" onClick={() => action("question--three", "three")}>
          <div className="selectquestion">
            <p>Is there a mobile app?</p>
            <img className='arrow--three' src={arrow} alt=""/>
          </div>
          <p className="selectanswer question--three hidden">
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
          urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
          sollicitudin ex et ultricies bibendum.
          </p>
        </div>

        <div className="selectfield" onClick={() => action("question--four", "four")}>
          <div className="selectquestion">
            <p>What about other Chromium browsers?</p>
            <img className='arrow--four' src={arrow} alt=""/>
          </div>
          <p className="selectanswer question--four hidden">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.
          </p>
        </div>
        
        <center>
        <button className="faqMoreInfor__btn">More Info</button>
        </center>

      </div> 
      </div>
    </div>
  )
}

export default Pricing