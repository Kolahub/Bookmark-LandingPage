import React from "react";
import "./Feature.css";
import featurePicOne from "./images/illustration-features-tab-1.svg";
import featurePicTwo from "./images/illustration-features-tab-2.svg";
import featurePicThree from "./images/illustration-features-tab-3.svg";
import { useState } from 'react';

function Feature() {
  const [displayA, setDisplayA] = useState(true);
  const [displayB, setDisplayB] = useState(false);
  const [displayC, setDisplayC] = useState(false);

  const showA = () => {
    setDisplayA(true);
    setDisplayB(false);
    setDisplayC(false);
  }
  const showB = () => {
    setDisplayA(false);
    setDisplayB(true);
    setDisplayC(false);
  };
  const showC = () => {
    setDisplayA(false);
    setDisplayB(false);
    setDisplayC(true);
  };
  return (
    <div className="feature" id="feature">
      <div className="feature__header">
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="feature__tab">
        <div className="feature__tab--option">
          <div className="feature__tab--option__one">
            <div onClick={showA}>Simple Bookmarking</div>{" "}
            {
              displayA && (
              <span className="feature__tab--option__one--line "></span>
            )}
          </div>
          <div className="feature__tab--option__two">
            <div onClick={showB}>Speedy Searching</div>{" "}
            {
              displayB && (
              <span className="feature__tab--option__two--line "></span>
            )}
          </div>
          <div className="feature__tab--option__three">
            <div onClick={showC}>Easy Sharing</div>{" "}
            {
              displayC && (
              <span className="feature__tab--option__three--line "></span>
            )}
          </div>
        </div>

        <div className="feature__tab--preview">
          {
            displayA && (
              <div className="feature__tab--preview__one feature__con">
              <div className="feature__tab--preview__one--left feature__left">
                <div className="feature__tab--preview__one--left__con">
                  <img
                    className="feature__tab--preview__one--left__pic feature__pic"
                    src={featurePicOne}
                    alt=""
                  />
                </div>
                <span></span>
              </div>
              <div className="feature__tab--preview__one--right feature__right">
                <h1 className="">BookMark in One Click</h1>
                <p>
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how you
                  manage your favourite sites.
                </p>
                <button className="feature__btn">More Info</button>
              </div>
            </div>
            )}

            {
              displayB && (
                <div className="feature__tab--preview__two feature__con">
                <div className="feature__tab--preview__two--left feature__left">
                  <div className="tabMain">
                    <img
                      className="feature__tab--preview__two--left__pic feature__pic"
                      src={featurePicTwo}
                      alt=""
                    />
                  </div>
                  <span className="tabSpan"></span>
                </div>
                <div className="feature__tab--preview__two--right feature__right">
                  <h1 className="">Intelligent search</h1>
                  <p>
                    Our powerful search feature will help you find saved sites in no
                    time at all. No need to trawl through all of your bookmarks
                  </p>
                  <button className="feature__btn">More Info</button>
                </div>
              </div>
              )
            }

            {
              displayC && (
                <div className="feature__tab--preview__three feature__con">
                <div className="feature__tab--preview__three--left feature__left">
                  <div className="tabMain">
                    <img
                      className="feature__tab--preview__three--left__pic feature__pic"
                      src={featurePicThree}
                      alt=""
                    />
                  </div>
                  <span className="tabSpan"></span>
                </div>
                <div className="feature__tab--preview__three--right feature__right">
                  <h1 className="">Share your bookmarks</h1>
                  <p>
                    Easily share your bookmarks and collections with others. Create
                    a shareable link that you can send at the click of a button.
                  </p>
                  <button className="feature__btn">More Info</button>
                </div>
              </div>
              )
            }
        </div>
      </div>
    </div>
  );
}
export default Feature;
