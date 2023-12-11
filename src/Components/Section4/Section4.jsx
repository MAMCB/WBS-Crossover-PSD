import React from "react";
import Airplane from "../Section4/images/Airplane.png";
import BlueSquare from "../Section4/images/BlueSquare.png";
import BuildingIcon from "../Section4/images/BuildingIcon.png";
import Hawaii from "../Section4/images/Hawaii.png";
import Heart from "../Section4/images/Heart.png";
import Leaf from "../Section4/images/LEAF.png";
import mapIcon from "../Section4/images/map icon.png";
import RedSquare from "../Section4/images/RedSquare.png";
import send from "../Section4/images/send.png";
import sunset from "../Section4/images/Sunset.png";
import YellowSquare from "../Section4/images/YellowSquare.png";
import Background from "../Section4/images/Background Element.png";
import "./Section4Style.css"

const Section4 = () => {
  return (
    <div className="section">
      <div className="subSection">
        <h1>Get Your Favourite Resort Bookings</h1>

        <div className="bulletPoint">
          <img src={YellowSquare} alt="yellow-square" />
          <div>
            <h5>Choose Destination</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              molestiae illo!
            </p>
          </div>
        </div>

        <div className="bulletPoint">
          <img src={RedSquare} alt="red-square" />
          <div>
            <h5>Check Availability</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              molestiae illo!
            </p>
          </div>
        </div>

        <div className="bulletPoint">
          <img src={BlueSquare} alt="blue-square" />
          <div>
            <h5>Let's Go</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              molestiae illo!
            </p>
          </div>
        </div>
      </div>
      <img id="background-grid" src={Background} alt="background-grid" />
      <div className="subSection" id="subsection2">
        <div className="card-background">
          <div className="card">
            <img src={Hawaii} alt="Hawaii" />
            <h3>Trip to Hawaii</h3>
            <p>14-29 June| by JR Martinax</p>
            <div className="icons">
              <img src={Leaf} alt="Leaf" />
              <img src={mapIcon} alt="map-icon" />
              <img src={send} alt="send-icon" />
            </div>
            <div className="card-footer">
              <img src={BuildingIcon} alt="building-icon" />
              <p>60 people are interested</p>
              <img src={Heart} alt="Heart" />
            </div>
          </div>
        </div>

        <div className="popUp-card">
          <img src={sunset} alt="sunset" />
          <div>
            <p>Ongoing</p>
            <h3>Trip to Rome</h3>
          </div>
          <h4>
            <span>40%</span>completed
          </h4>
          <div className="progressBar-container">
            <div className="progressBarr-fill"></div>
          </div>
        </div>
        <img src={Airplane} alt="airplane" />
      </div>
    </div>
  );
};

export default Section4;
