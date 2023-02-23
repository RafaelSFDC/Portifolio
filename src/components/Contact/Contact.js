import React from "react";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="sectionContainer">
      <div className="divider"></div>
      <h2 className="sectionTitle">
        <AiOutlinePhone className="icon" />
        Contato
      </h2>
      <p className="sectionText contactInfoContainer">
        <p className="contactInfo">
          <AiOutlineWhatsApp className="space" />
          (21)97967-4045
        </p>
        <p className="contactInfo">
          <AiOutlineMail className="space" />
          rafael.20.03@hotmail.com
        </p>
      </p>
      <ul></ul>
    </div>
  );
};

export default Contact;
