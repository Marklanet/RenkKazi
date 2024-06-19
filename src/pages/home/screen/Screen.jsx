import React from "react";
import "./screen.css";
import Heading from "../../../components/reusable/Heading";
//import "../../common/common.css";
import { city, house } from "../../../data/Data";

const Screen = () => {
  const pricerange = [];
  for (let i = 1; i < 30; i++) {
    pricerange.push(`${i * 1000} ksh  -  ${1000 * i + 1000} ksh`);
  }
  const [formData, setFormData] = React.useState({
    county: "",
    houseType: "",
    priceRange: "",
    search: "",
  });

  const handleChange = (event) => {
    //const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <section className="screen">
      <div className="container">
        <Heading
          title="Search Your Next Home "
          subtitle="Find new & featured property located in your local city."
        />
        <form className="flexbox2" onSubmit={handleSearch}>
          <div className="box">
            <span>Location</span>
            <select name={"county"} onChange={handleChange}>
              {city.map((list, index) => (
                <option key={index} value={list.value}>
                  {list.county}
                </option>
              ))}
            </select>
          </div>
          <div className="box">
            <span>House Type</span>
            <select onChange={handleChange} name={"houseType"}>
              {house.map((list, index) => (
                <option key={index} value={list.type}>
                  {list.type}
                </option>
              ))}
            </select>
          </div>
          <div className="box">
            <span>Price Range</span>
            <select onChange={handleChange} name={"priceRange"}>
              {pricerange.map((list, index) => (
                <option key={index} value={list}>
                  {list}
                </option>
              ))}
            </select>
          </div>
          <div className="box">
            <span>Search For</span>
            <input
              type="text"
              placeholder="Search For"
              onChange={handleChange}
              name={"search"}
            />
          </div>
          <div className="lastbx">
            <br />
            <button className="btn1" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Screen;
