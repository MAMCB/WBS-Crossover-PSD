import "./Section6Style.css";
import City from "../Section6/images/City.png";
import Nature from "../Section6/images/Nature.png";

const Section6 = () => {
  return (
    <div className="section6">
      <div className="nature">
        <h3>PROMOTION</h3>
        <h1>Explore Nature</h1>
        <button>View Packages</button>
      </div>
      <div className="city">
        <h3>PROMOTION</h3>
        <h1>Explore Cities</h1>
        <button>View Packages</button>
      </div>
    </div>
  );
};

export default Section6;
