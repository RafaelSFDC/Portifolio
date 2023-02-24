import React from "react";
import "./Header.css";
import { AiFillGithub, AiFillBuild, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <div id="portfolio" className="container">
      <div className="div1">
        <a href="#portfolio" className="introContainer">
          <AiFillBuild size="3rem" color="#22d1ee" />
          <span>Portfólio</span>
        </a>
      </div>
      <div className="div2">
        <li>
          <a href="#project" className="link components">
            Projetos
          </a>
        </li>
        <li>
          <a href="#technologies" className="link components">
            Tecnologias
          </a>
        </li>
        <li>
          <a href="#about" className="link components">
            Sobre
          </a>
        </li>
        <li>
          <a href="#contact" className="link components">
            Contato
          </a>
        </li>
      </div>
      <div className="div3">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/RafaelSFDC"
          className=" components"
        >
          <AiFillGithub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/rafael-silva-ferreira-de-carvalho-902a47173/"
          className="components"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Header;
