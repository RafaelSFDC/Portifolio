import React from "react";
import "./About.css";
import { AiOutlineIdcard } from "react-icons/ai";

const About = () => {
  return (
    <div id="about" className="sectionContainer">
      <div className="divider"> </div>
      <h2 className="sectionTitle">
        <AiOutlineIdcard className="icon headerIcon" /> <span>Sobre</span>
      </h2>
      <p className="sectionText">
        Sou um programador Front-End com conhecimento em diversar ferramentas.
        Pessoalmente adoro trabalhar com desenvolvimento web, mas outras áreas
        também me agradam como Mobile. Gosto bastante de criar coisas e por isso
        estudo um pouco de design quando posso.
      </p>
    </div>
  );
};

export default About;
