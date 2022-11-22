import React, { useRef, useState } from "react";
import Title from "../ReuseComponent/Title";
import "./contact.css";
import emailjs from "@emailjs/browser";
import Result from "../ReuseComponent/Result";

const Contact = () => {
  const [result, Setresult] = useState(false);
  const [popup, SetPopup] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_shoxljd",
        "template_otkmaig",
        form.current,
        "tocHnpHidsD6-KcH0"
      )
      .then(
        (result) => {
          console.log(result.text);
          SetPopup(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    Setresult(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__title">
        <Title title="Contact" subtitle="I will get in Touch soon" />
      </div>
      <form className="contact__wrapper" ref={form} onSubmit={sendEmail}>
        <div className="contact__content">
          <div className="content__first">
            <label htmlFor="#">First name</label>
            <input type="text" name="firstname" required />
          </div>
          <div className="content__last">
            <label htmlFor="#">Last name</label>
            <input type="text" name="lastname" required/>
          </div>
        </div>
        <div className="contact__email">
          <label htmlFor="#">Work Email</label>
          <input type="text" name="email" required/>
        </div>
        <div className="contact__message">
          <label htmlFor="#">Message</label>
          <textarea name="message" id="" cols="30" rows="10" required></textarea>
        </div>
        <button className="contact__btn">Contact</button>
      </form>
      <Result trigger={popup} setTrigger={SetPopup} />
    </div>
  );
};

export default Contact;
