import React from "react";
import img from "../../images/contactus.jpg";
import "./contact.css";
import Back2 from "../../components/reusable/back2/Back2";
const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back2
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="container">
          <form className="shadow">
            <h4>Fill The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10"></textarea>
            <button className="btn3">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
