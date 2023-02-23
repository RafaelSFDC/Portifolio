import React from "react";
import "./Project.css";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { projects } from "../../Constants/constants";

const Projects = () => {
  return (
    <div id="project" className="sectionContainer">
      <div className="divider"></div>
      <h2 className="sectionTitle">
        <AiOutlineCodeSandbox className="icon" /> Projetos
      </h2>
      <div className="projectsContainer">
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <div key={id} className="projectCard">
              <img src={image} alt="projectImg" className="projectImg" />
              <div className="projectContent">
                <div className="projectTitle">{title}</div>
                <div className="hr"></div>
              </div>
              <div className="projectDescription">{description}</div>
              <div>
                <div className="projectContent stack">Stack usada</div>
                <div className="tagList">
                  {tags.map((tag, i) => (
                    <div className="tag" key={i}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className="projectUtility">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={visit}
                  className="projectLinks"
                >
                  Código
                </a>
                {source && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={source}
                    className="projectLinks"
                  >
                    Projeto
                  </a>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
