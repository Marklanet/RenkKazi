import React from "react";
import img from "../../images/services.jpg";
import Back2 from "../../components/reusable/back2/Back2";
import "../home/featured/featured.css";
import FeaturedCard from "../home/featured/FeaturedCard";

const Services = () => {
  return (
    <>
      <section className="services mb ">
        <Back2 name="Services" title="Services - Our  Services" cover={img} />
        <div className="featured container mt">
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Services;
