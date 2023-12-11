import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <div className="section">
      <div className="bg">
        <div className="container">
          <div className="title">
            <div className="subtitle">
              <h4>CATEGORY</h4>
            </div>
            <div className="maintitle">
              <h3>We Offer Best Services</h3>
            </div>
          </div>
          <div className="cards">
            <div className="card1">
              <img src="src/assets/Section2_3/tour-guide 1.png" alt="" />
              <h4>Guided Tours</h4>
              <p>
                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
              </p>
            </div>
            <div className="card2">
              <img src="src/assets/Section2_3/travelling 1.png" alt="" />
              <h4>Best Flights Options</h4>
              <p>
                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
              </p>
              <img
                className="orange"
                src="src/assets/Section2_3/Rectangle 157.png"
                alt=""
              />
            </div>
            <div className="card3">
              <img src="src/assets/Section2_3/hands 1.png" alt="" />
              <h4>Religious Tours</h4>
              <p>
                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
              </p>
            </div>
            <div className="card4">
              <img src="src/assets/Section2_3/medical-team 1.png" alt="" />
              <h4>Medical insurance</h4>
              <p>
                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
