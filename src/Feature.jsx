import React from "react";
import "./Feature.css";
import featurePicOne from "./images/illustration-features-tab-1.svg";
import featurePicTwo from "./images/illustration-features-tab-2.svg";
import featurePicThree from "./images/illustration-features-tab-3.svg";

function Feature() {
  const handleClickMain = () => {
    if (
      (!document
        .querySelector(".feature__tab--preview__two")
        .classList.contains("hidden") &&
        !document
          .querySelector(".feature__tab--option__two--line")
          .classList.contains("hidden")) ||
      (!document
        .querySelector(".feature__tab--preview__three")
        .classList.contains("hidden") &&
        !document
          .querySelector(".feature__tab--option__three--line")
          .classList.contains("hidden"))
    ) {
      document
        .querySelector(".feature__tab--preview__one")
        .classList.remove("hidden");
      document
        .querySelector(".feature__tab--option__one--line")
        .classList.remove("hidden");
      document
        .querySelector(".feature__tab--preview__two")
        .classList.add("hidden");
      document
        .querySelector(".feature__tab--option__two--line")
        .classList.add("hidden");
      document
        .querySelector(".feature__tab--preview__three")
        .classList.add("hidden");
      document
        .querySelector(".feature__tab--option__three--line")
        .classList.add("hidden");
    }
  };
  const handleClick = () => {
    if (
      (!document
        .querySelector(".feature__tab--preview__one")
        .classList.contains("hidden") &&
        !document
          .querySelector(".feature__tab--option__one--line")
          .classList.contains("hidden")) ||
      (!document
        .querySelector(".feature__tab--preview__three")
        .classList.contains("hidden") &&
        !document
          .querySelector(".feature__tab--option__three--line")
          .classList.contains("hidden"))
    ) {
      document
        .querySelector(".feature__tab--preview__one")
        .classList.add("hidden");
      document
        .querySelector(".feature__tab--option__one--line")
        .classList.add("hidden");
      document
        .querySelector(".feature__tab--preview__two")
        .classList.remove("hidden");
      document
        .querySelector(".feature__tab--option__two--line")
        .classList.remove("hidden");
      document
        .querySelector(".feature__tab--preview__three")
        .classList.add("hidden");
      document
        .querySelector(".feature__tab--option__three--line")
        .classList.add("hidden");
    }
  };
  const handleClickLast = () => {
    if (
      (!document
        .querySelector(".feature__tab--preview__one")
        .classList.contains("hidden") &&
        !document
          .querySelector(".feature__tab--option__one--line")
          .classList.contains("hidden")) ||
      (!document
        .querySelector(".feature__tab--preview__two")
        .classList.contains("hidden") &&
        !document
          .querySelector(".feature__tab--option__two--line")
          .classList.contains("hidden"))
    ) {
      document
        .querySelector(".feature__tab--preview__one")
        .classList.add("hidden");
      document
        .querySelector(".feature__tab--option__one--line")
        .classList.add("hidden");
      document
        .querySelector(".feature__tab--preview__two")
        .classList.add("hidden");
      document
        .querySelector(".feature__tab--option__two--line")
        .classList.add("hidden");
      document
        .querySelector(".feature__tab--preview__three")
        .classList.remove("hidden");
      document
        .querySelector(".feature__tab--option__three--line")
        .classList.remove("hidden");
    }
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
            <button onClick={handleClickMain}>Simple Bookmarking</button>{" "}
            <div className="feature__tab--option__one--line "></div>
          </div>
          <div className="feature__tab--option__two">
            <button onClick={handleClick}>Speedy Searching</button>{" "}
            <div className="feature__tab--option__two--line hidden"></div>
          </div>
          <div className="feature__tab--option__three">
            <button onClick={handleClickLast}>Easy Sharing</button>{" "}
            <div className="feature__tab--option__three--line hidden"></div>
          </div>
        </div>

        <div className="feature__tab--preview">
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

          <div className="feature__tab--preview__two feature__con hidden">
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

          <div className="feature__tab--preview__three feature__con hidden">
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
        </div>
      </div>
    </div>
  );
}
export default Feature;
