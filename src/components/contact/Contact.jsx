import React from "react";
import Title from "../ReuseComponent/Title";
import { BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact_wrapper" id="contact">
      <Title subtitle="get in touch" />
      <Title title="contact" />
      <div className="contact_container">
        <div className="contact_info">
          <div className="contact">
            {<BsPhone className="icons" />}
            <h3 className="contact_no">9699998921</h3>
          </div>
          <div className="contact">
            {<FiMail className="icons" />}
            <h3>kunal.nimsatkar@gmail.com</h3>
          </div>
          <div className="contact">
            {<HiOutlineLocationMarker className="icons" />}
            <h3>Maharashtra,India</h3>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
