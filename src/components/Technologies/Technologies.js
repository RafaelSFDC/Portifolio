import React from "react";
import "./Technologies.css";
import {
  AiOutlineApi,
  AiOutlineDatabase,
  AiOutlineMobile,
} from "react-icons/ai";
import { DiReact, DiDatabase } from "react-icons/di";
import { MdDesignServices } from "react-icons/md";

const Technologies = () => {
  return (
    <div id="technologies" className="sectionContainer">
      <div className="divider"></div>
      <h2 className="sectionTitle">
        <AiOutlineApi className="icon" />
        Tecnologias
      </h2>
      <p className="sectionText">
        Essas são as ferramentas e tecnologias sobre qual eu tenho conhecimento
      </p>
      <ul className="tecList">
        <li className="tecItem">
          <DiReact className="icon tecIcon" />
          <div>
            <h4 className="tecTitle">Front-End</h4>
          </div>
          <p className="tecText">
            Conhecimento em
            <br />
            HTML, CSS, JavaScript e React.js
          </p>
        </li>
        <li className="tecItem">
          <DiDatabase className="icon tecIcon" />
          <div>
            <h4 className="tecTitle">Back-End</h4>
          </div>
          <p className="tecText">
            Conhecimento em
            <br />
            Node.js
          </p>
        </li>
        <li className="tecItem">
          <AiOutlineMobile className="icon tecIcon" />
          <div>
            <h4 className="tecTitle">Mobile</h4>
          </div>
          <p className="tecText">
            Conhecimento em
            <br />
            ReactNative
          </p>
        </li>
        <li className="tecItem">
          <AiOutlineDatabase className="icon tecIcon" />
          <div>
            <h4 className="tecTitle">Banco de dados</h4>
          </div>
          <p className="tecText">
            Conhecimento em
            <br />
            NoSql(MongoDB) e SQL
          </p>
        </li>
        <li className="tecItem">
          <MdDesignServices className="icon tecIcon" />
          <div>
            <h4 className="tecTitle">UI/UX</h4>
          </div>
          <p className="tecText">
            Conhecimento em
            <br />
            Photoshop e Figma
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Technologies;
