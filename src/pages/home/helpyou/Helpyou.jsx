import React from "react";
import "./helpyou.css";
import Buy from "../../../images/helpyou/BuyAHome.svg";
import Rent from "../../../images/helpyou/RentAHome.svg";
import Neighbour from "../../../images/helpyou/Neighborhoods.svg";

const Helpyou = () => {
  return (
    <div className="helpyou">
      <h1> See how we can help you</h1>
      <div className="helpdiv ">
        <div className="ite">
          <img src={Buy} alt="buy a home" />
          <span>Find a home</span>
          <p>
            With over 10,000+ homes for sale available on the website, Tafuta
            Homes can match you with a house you really need.
          </p>
          <button>Find a home</button>
        </div>
        <div className="ite">
          <img src={Rent} alt="rent a home" />
          <span>Rent a home</span>
          <p>
            With 35+ filters and custom keyword search, Rent Kazi can help you
            easily find a home or apartment for rent that you'll love.
          </p>
          <button>Rent a home</button>
        </div>
        <div className="ite">
          <img src={Neighbour} alt="advertise a home" />
          <span>Advertise a home</span>
          <p>
            We have a wide market of customers looking for homes, Rent Kazi will
            match you with your next client . It's simple and transtparent.
          </p>
          <button>Advertise a home</button>
        </div>
      </div>
    </div>
  );
};

export default Helpyou;
