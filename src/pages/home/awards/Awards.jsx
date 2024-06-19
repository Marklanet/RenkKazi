import React from "react";
import Heading from "../../../components/reusable/Heading";
import { awards } from "../../../data/Data";
import "./awards.css";

const Awards = () => {
  return (
    <>
      <section className="awards">
        <div className="container mb5">
          <Heading
            title="Over 100,000+ Happy User Who Love Our Services"
            subtitle="Our Awards"
          />

          <div className="content grid4">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
