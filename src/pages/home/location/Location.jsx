import React from "react";
import Heading from "../../../components/reusable/Heading";
import { location } from "../../../data/Data";
import "./location.css";

const Location = () => {
  return (
    <>
      <section className="location ">
        <div className="container">
          <Heading
            title="Explore By Location"
            subtitle="find the  best house and property deals in any city of your choice"
          />

          <div className="content grid3 mtop mb">
            {location.map((item, index) => (
              <div className="box " key={index}>
                <div className="overlay">
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>

                <img src={item.cover} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
