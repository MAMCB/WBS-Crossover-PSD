import React from "react";
import "../Section1/Section1Style.css";

const Section1 = () => {
  return (
    <>
      <div className="homePage">
        <section>
          <div className="navBar">
            <div className="navLeft">
              <h1>Travel</h1>
              <img src="../src/assets/Arrow.svg" alt="arrow logo" />
            </div>
            <div className="links">
              <div>
                <p>Home</p>
              </div>
              <div>About</div>
              <div>
                <div className="services">
                  <p>Services</p>
                  <img className="vector" src="../src/assets/Vector.png" />
                </div>
                <div className="dropDown">
                  <p>Honemoon Packages</p>
                  <p>Tours Packages</p>
                  <p>Musical Events</p>
                  <p>Build Package</p>
                </div>
              </div>
              <div className="packages">Upcoming Packages</div>
            </div>
            <div className="button">
              <p className="touch">Get in Touch</p>
            </div>
          </div>
        </section>
        <section className="midSection">
          <div>
            <img src="../src/assets/VectorMid.png" alt="" />
          </div>
          <div className="midText">
            No matter where you're going to, we'll take you there
          </div>
          <div className="midBar">
            <div>Where to?</div>
            <div className="vertical-line"></div>
            <div className="traveltype">
              <p>Travel Type</p>
              <img className="arrow" src="../src/assets/arrowdown.png" alt="" />
            </div>
            <div className="vertical-line"></div>
            <div className="duration">
              <p>Duration</p>
              <img className="arrow" src="../src/assets/arrowdown.png" alt="" />
            </div>
            <div className="submit">
              <div className="btnText">Submit</div>
            </div>
          </div>
          <div className="lowerSection">
            <div className="users">
              <img src="../src/assets/user1.svg" alt="" />
              <img src="../src/assets/user2.svg" alt="" />
              <img src="../src/assets/user3.svg" alt="" />
              <img src="../src/assets/user4.svg" alt="" />
              <img src="../src/assets/user5.svg" alt="" />
              <img src="../src/assets/user6.svg" alt="" />
              <div className="circle">+</div>
            </div>
            <div className="lowerText">
              2,500 people booked Tommorowland Event in last 24 hours
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="airlines">
          <img src="../src/assets/airbnb.png" alt="" />
          <img className="resize" src="../src/assets/airline1.png" alt="" />
          <img className="resize" src="../src/assets/airline5.png" alt="" />
          <img className="resize" src="../src/assets/trivago.png" alt="" />
          <img className="turkish" src="../src/assets/turkish.png" alt="" />
        </section>
      </div>
    </>
  );
};

export default Section1;
