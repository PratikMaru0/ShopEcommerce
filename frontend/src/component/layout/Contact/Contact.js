import React , { useState }from "react";
import "./Contact.css";
// import { Button } from "@material-ui/core";
import { useRef } from "react";
import Phone from "../../../images/call.jpeg"
import Email from "../../../images/mail.jpeg"
import Address from "../../../images/address.jpeg"
import emailjs from "emailjs-com";

const Contact = () => {

  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wi8d9c3', 'template_s4z1vap', formRef.current, 'user_X09caa3MZOKp9GmEf5spu')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });


  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your issue</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9112023344
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              pratikmarutest@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Shanti Nagar Mira Road (East) Thane Maharashtra Pin code :- 401107
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>
              What's your Feedback / Complaints ?
            </b>
            <p> Get in touch with us. Always ready and available for best service and user experience.</p>
          </p>

          <form className="contactForm" action="" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea name="5" id="" cols="30" rows="6" placeholder="Message" name="message" className="msg"></textarea>

            <button className="contactBtn">Submit</button><br />
            {done && "Thank you.... Got ur msg. I'll reply ASAP"}

          </form>
        </div>
      </div>


    </div>
  );
};

export default Contact;
