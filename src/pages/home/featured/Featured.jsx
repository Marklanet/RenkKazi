import React from "react";
import Heading from "../../../components/reusable/Heading";
import "./featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <section className="featured background">
      <div className="container">
        <Heading
          title="Types of Featured Properties"
          subtitle="discover all forms of properties"
        />
      </div>
      <FeaturedCard />
    </section>
  );
};

export default Featured;
