import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import { useRef } from "react";
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
          <h1 className="c-title">Lets discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 12 1234 45
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              pratikmaru80762@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Sector-7 Shanti nagar Mira Road (East) 401107
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>
              Whats your story ?
            </b>
            <p> Get in touch. Always ready and available for freelancing if the right project comes along me.</p>
          </p>

          <form action="" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea name="5" id="" cols="30" rows="10" placeholder="Message" name="message" className="msg"></textarea>

            <button>Submit</button><br />
            {done && "Thank you.... Got ur msg. I'll reply ASAP"}

          </form>
        </div>
      </div>


    </div>
  );
};

export default Contact;
