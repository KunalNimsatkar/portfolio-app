import React, { useRef, useState } from "react";
import Title from "../ReuseComponent/Title";
import "./contact.css";
import emailjs from "@emailjs/browser";
import Result from "../ReuseComponent/Result";

const Contact = () => {
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
          SetPopup(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="contact__title">
        <Title title="Contact" subtitle="I will get in Touch soon" />
      </div>
      <form
        className="contact__wrapper"
        ref={form}
        onSubmit={sendEmail}
        data-scroll
      >
        <div className="contact__content">
          <div
            className="content__first"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <label htmlFor="#">First name</label>
            <input type="text" name="firstname" required />
          </div>
          <div
            className="content__last"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <label htmlFor="#">Last name</label>
            <input type="text" name="lastname" required />
          </div>
        </div>
        <div className="contact__email" data-aos="zoom-in" data-aos-delay="900">
          <label htmlFor="#">Work Email</label>
          <input type="text" name="email" required />
        </div>
        <div
          className="contact__message"
          data-aos="zoom-in"
          data-aos-delay="1100"
        >
          <label htmlFor="#">Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        <button className="contact__btn" data-aos="zoom-out" data-aos-delay="1000">Contact</button>
      </form>
      <Result trigger={popup} setTrigger={SetPopup} />
    </div>
  );
};

export default Contact;
