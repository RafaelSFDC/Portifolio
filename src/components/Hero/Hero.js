import React from "react";
import "./Hero.css";
import HeroAnimation from "./HeroAnimation";
const Hero = () => {
  return (
    <div className="hero">
      <div className="leftSection ">
        <h2 className="leftTitle ">
          Bem vindo ao <br /> meu Portfólio
        </h2>
        <p className="leftText">
          Meu nome é Rafael sou um desenvolvedor JavaScript FullStack com foco
          no React.js.
        </p>
      </div>
      <div className="animationContainer">
        <HeroAnimation />
      </div>
    </div>
  );
};

export default Hero;
