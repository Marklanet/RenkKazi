import React from "react";
import "./footer.css";
import { MdLocationOn } from "react-icons/md";
import { footer } from "../../../data/Data";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <section className="footer">
      <div className="cont">
        <div className="name">
          <h1>Rent Kazi</h1>
          <p>
            We are a mordern real estate website feauturing new, modern and
            rental appartments .We connect more than 100,000 landlords with
            tenants. Don't just get a home, we help you get the best home.
          </p>
          <div className="icons">
            <FaFacebookSquare className="socialicon fb" />
            <FaInstagram className="socialicon in" />
            <FaTwitterSquare className="socialicon tw" />
            <FaLinkedin className="socialicon li" />
          </div>
        </div>
        <div className="useful d_flex">
          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li>
                    <Link to="/home">{items.list}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="news">
          <h3>News Letter</h3>
          <p>
            Get updates on new deals, promotions, houses and appartments listed
            near you Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="inbut">
            <input type="text" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="boxesss">
        <div className="callus callone">
          <div className="ff">
            <FaPhone className="fft" />
          </div>
          <div className="grgr">
            <span>+254-710605896</span>
            <span>Need Help? Call</span>
          </div>
        </div>
        <div className="callus calltwo">
          <div className="ff">
            <SiGmail className="fft" />
          </div>

          <div className="grgr">
            <span>support@tafutahomes.co.ke</span>
            <span>Email us on</span>
          </div>
        </div>
        <div className="callus callone">
          <div className="ff">
            <MdLocationOn className="fft" />
          </div>
          <div className="grgr">
            <span>Ambwere Plaza - Kakamega Town</span>
            <span>Office Location</span>
          </div>
        </div>
      </div>

      <div className="copright">
        <span>© 2022 Rent Kazi. Powered by Guanthalab Engineering</span>
      </div>
    </section>
  );
};

export default Footer;
