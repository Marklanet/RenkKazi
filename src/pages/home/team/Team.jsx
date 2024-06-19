import React from "react";
import Heading from "../../../components/reusable/Heading";
import { team } from "../../../data/Data";
import { MdLocationPin } from "react-icons/md";
import { FaPhone, FaCheckCircle, FaEnvelope } from "react-icons/fa";
import "./team.css";

const Team = () => {
  return (
    <section className="team background">
      <div className="container">
        <Heading
          title="Our Housing Agents"
          subtitle="we have agents country wide ready to help you at any time"
        />

        <div className="content mtop flexbox mb">
          {team.map((val, index) => (
            <div className="box" key={index}>
              <button className="btn3">{val.name} </button>
              <div className="details">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <i>
                    <FaCheckCircle />
                  </i>
                </div>
                <i>
                  <MdLocationPin />
                </i>
                <label>{val.address}</label>
                <h4>{val.list} Listings</h4>

                <ul>
                  {val.icon.map((icon, index) => (
                    <li key={index}>{icon}</li>
                  ))}
                </ul>
                <div className="button flex">
                  <button className="btn6">
                    <i>
                      <FaEnvelope />
                    </i>
                    Message
                  </button>
                  <button className="btn4">
                    <i>
                      <FaPhone />
                    </i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
