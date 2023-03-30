import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    
      <div className="contact">
        <h1>CONTACT</h1>
        <p>
          Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
          vehicula enim, non aliquam risus.
        </p>
        <div className="contact-data">
          <div className="left-form">
            <form>
              <input type="text" placeholder="Your Name" />
              <br />
              <input type="email" placeholder="Youur Email" />
              <br />
              <input type="number" placeholder="Your Phone" />
            </form>
          </div>
          <div className="right-form">
            <textarea placeholder="Your Message"></textarea>
          </div>
        </div>
        <div className="send-button">
          <button className="send-contact">Send Message</button>
        </div>
      </div>
    
  );
};

export default Contact;
