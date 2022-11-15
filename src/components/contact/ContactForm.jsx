import React ,{useRef} from "react";
import emailjs from 'emailjs-com';
import "./contactForm.css"

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_21l6w4p', 'template_otkmaig', form.current, '_mSyl-ltZ3abzfd__')
      .then((result) => {
          console.log(result.text);
          alert("Message Send Successfully")
      }, (error) => {
          console.log(error.text);
          alert(error.text)
      });
  };
  return (
    <div className="contact_form">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="text" name="name" placeholder="Your Email" required/>
        <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
        <button className="footer_btn" type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
