import "./flashdeals.css";
import React from "react";
import { list } from "../../../data/Data";
import { IoLocationSharp } from "react-icons/io5";

const Flashdeals = () => {
  return (
    <div className="flashdeals mb">
      <div className="slider">
        <div className="headss">
          <h1>Hot Deals</h1>
        </div>
        <div className="slide-track">
          {list.map((val, index) => {
            const { cover, category, location, name, price } = val;
            return (
              <div className="slide shadow2 " key={index}>
                <h4>{name}</h4>
                <div className="location">
                  <IoLocationSharp className="locicon" />
                  <p>{location}</p>
                </div>
                <img src={cover} alt="" />
                <div className="text"></div>
                <div className="button ">
                  <button className="btnflash">{price}</button>
                  <span
                    className="categoryspan"
                    style={{
                      padding: "5px 15px",
                      display: "inline-block",
                      borderRadius: "4px",
                      fontWeight: "550",
                      fontSize: "13px",
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Flashdeals;
