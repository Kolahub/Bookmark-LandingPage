import React from "react";
import './Home.css';
import BgDots from './images/illustration-hero.svg'

function Home() {
  return (
    <div className="home" id="home">
      <div className="home__left">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          {" "}
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="home__left--btn">
            <div className="home__left--btn__chrome">Get it on Chrome</div>
            <div className="home__left--btn__firefox">Get it on Firefox</div>
        </div>
      </div>
      
      <div className="home__right">
        <div className="home__right--bg">
        <img className="home__right--bg__pic" src={BgDots} alt="React Logo" />
        </div>
        <div className="home__right--sketch">
          
        </div>
        </div>
    </div>
  );
} 

export default Home;
