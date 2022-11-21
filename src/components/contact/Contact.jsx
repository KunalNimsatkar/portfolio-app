import React from "react";
import Title from "../ReuseComponent/Title";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__title">
        <Title
          title="Contact"
          subtitle="Let’s get this conversation started. Tell us a bit about yourself, and I'll get in touch as soon as Possible."
        />
      </div>
      <div className="contact__wrapper">
        <div className="contact__content">
          <div className="content__first">
            <label htmlFor="#">First name</label>
            <input type="text" />
          </div>
          <div className="content__last">
            <label htmlFor="#">Last name</label>
            <input type="text" />
          </div>
        </div>
        <div className="contact__email">
          <label htmlFor="#">Work Email</label>
          <input type="text" />
        </div>
        <div className="contact__message">
          <label htmlFor="#">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="contact__btn">Contact</button>
      </div>
    </div>
  );
};

export default Contact;
