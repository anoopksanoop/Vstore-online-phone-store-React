import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>

      <div className="Contact-Title" >
        <p className="text-big">Contact Us</p>
        <p className="center">You can Contact Us if you face any problem</p>
        <p className="center">Click on the below options to Contact Us</p>

        <img  className="arrowLogo" src="https://cdn-icons-gif.flaticon.com/8121/8121318.gif" alt="logo"/>
       </div>

      <div className="contact-img" data-aos="zoom-in-right">
        <div className="img">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3670/3670127.png"
            alt="twitter"
          />
          <h4>Contact with Twitter</h4>
        </div>
        <div className="img">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
            alt="instagram"
          />
          <h4>Contact with Instagram</h4>
        </div>
        <div className="img">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
            alt="FaceBook"
          />
          <h4>Contact with FaceBook</h4>
        </div>
      </div>
      <div>
        <Link style={{ color: "gray", marginLeft: "20%" }} to="/products">
          \Back to Home
        </Link>
      </div>
      <footer className="footer">
        Copyright@All rights are reserved
      </footer>
    </div>
  );
}

export default Contact;
