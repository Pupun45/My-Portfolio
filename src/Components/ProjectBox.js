import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {

  const desc = {
    BloodDonerDesc: "A simple Blood Donation Management System built with HTML, CSS, JavaScript frontend and PHP backend running on an Apache server with MySQL database.",
    BloodDonerGithub: "https://github.com/Pupun45/Blood-Doner-Finder",
    BloodDonerWebsite: " https://pupun45.github.io/Blood-Doner-Finder/",

    OnlineQuizDesc: "Online-Quiz-Management-System",
    OnlineQuizGithub: "https://github.com/Pupun45/Online-Quiz-Management-System",
    OnlineQuizWebsite: "https://pupun45.github.io/Online-Quiz-Management-System/",

    NewsletterDesc: "",
    NewsletterGithub: "",
    NewsletterWebsite: "",

    ShopingDesc: "An Ornament e-commerce store.",
    ShopingGithub: "https://github.com/Pupun45/Shoping.web",
    ShopingWebsite: "https://pupun45.github.io/Shoping.web/",
  };

  
  const githubLink = desc[projectName + 'Github'];
  const websiteLink = desc[projectName + 'Website'];
  const description = desc[projectName + 'Desc'];

  if (!githubLink && !websiteLink) {
    return (
      <div className="projectBox">
        <p style={{ color: 'red' }}>
          ⚠ Invalid or missing projectName: <b>{projectName || 'undefined'}</b>
        </p>
      </div>
    );
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project" />

      <div style={{ marginTop: "10px" }}>
        <h3>{projectName}</h3>
        <p>{description}</p>

        <div style={{ marginTop: "10px" }}>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className="projectbtn">
                <FaGithub /> GitHub
              </button>
            </a>
          )}

          {websiteLink && (
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
              <button className="projectbtn">
                <CgFileDocument /> Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
