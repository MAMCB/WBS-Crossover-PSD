import React from "react";
import "../Section5/Section5Style.css";

const Section5 = () => {
  return (
    <div>
      <section className="liberty">
        <div className="holidayText"> Let's Make Your Next Holiday Amazing</div>
        <div className="amazingLine"></div>
      </section>
      <section className="sightseeing">
        <div className="promotion">
          <p>PROMOTION</p>
          <h3>We Provide You The Best Europe Sightseeing Tours</h3>
          <p className="promotionPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            culpa, officia molestiae minima vel inventore quas! Est eligendi
            molestias debitis commodi obcaecati harum ea repudiandae laudantium
            quasi nulla minus quae necessitatibus dolorum excepturi, a
            praesentium accusantium, tenetur laboriosam.
          </p>
          <div className="Packa">
            <p>View Packages</p>
          </div>
        </div>
        <div className="pictureTravels">
          <div className="travel1">
            <div className="price">$700</div>
          </div>
          <div className="travel2">
            <div className="price">$900</div>
          </div>
          <div className="travel3">
            <div className="price">$400</div>
          </div>
          <div className="travel4">
            <div className="price">$650</div>
          </div>
          <div className="travel5"></div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
