import React, { useState } from "react";
import "./topbar.css";
import { nav } from "../../../data/Data";
import { Link } from "react-router-dom";
import tafutalogo from "../../../images/logo.png";
import togle from "../../../images/togle.png";
import untogle from "../../../images/untogle.png";

export default function Topbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(click === false ? true : false);
  };

  return (
    <header className="topbar shadow">
      <div className="upss">
        <div className="imgname">
          <img src={tafutalogo} alt="" />
          <h1>Rent Kazi</h1>
        </div>

        <ul className="largescreen">
          {nav.map((list, index) => (
            <li key={index}>
              <Link to={list.path}>{list.text}</Link>
            </li>
          ))}
        </ul>

        <div className="account">
          <div>0</div>
          <span>My List</span>
          <button className="btn1">Sign in</button>
        </div>

        <div className="togle">
          {click === true ? (
            <img
              src={untogle}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            />
          ) : (
            <img
              src={togle}
              alt=""
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            />
          )}
        </div>
      </div>
      <div className={click ? "downs" : "nodowns"}>
        {nav.map((list, index) => (
          <li
            key={index}
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            <Link to={list.path}>{list.text}</Link>
          </li>
        ))}
      </div>
    </header>
  );
}
