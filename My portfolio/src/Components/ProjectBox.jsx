import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {

  const desc = {
    BloodDonerDesc: "A simple Blood Donation Management System built with HTML, CSS, JavaScript frontend and PHP backend running on an Apache server with MySQL database.",
    BloodDonerGithub: "https://github.com/Pupun45/Blood-Bank",
    BloodDonerWebsite: "https://blood-doner-finder.vercel.app/",

    VegitableShopDesc: "Vegetable Shop",
    VegitableShopGithub: "https://github.com/Pupun45/Vegetable-Shop-",
    VegitableShopWebsite: "https://vegies-shop.netlify.app",

    BloodDonerDesc: "Blood Donation Management System",
    BloodDonerGithub: "https://github.com/Pupun45/Blood-Bank",
    BloodDonerWebsite: "https://blood-doner-finder.vercel.app/",

    TourismPlaceDesc: "Tourism Place Web App",
    TourismPlaceGithub: "https://github.com/Pupun45/Tourism-Management-System",
    TourismPlaceWebsite: "https://tourism-management-system-pi.vercel.app/",

    NextJsPortfolioDesc: "Next.js Portfolio Website",
    NextJsPortfolioGithub: "https://github.com/Pupun45/Portfolio-on-Next.js",
    NextJsPortfolioWebsite: "https://portfolio-jrb.vercel.app/",

    WaterDispensionDesc: "Water Dispension System",
    WaterDispensionGithub: "https://github.com/ionode-cloud/Water-Dispension-pro",
    WaterDispensionWebsite: "https://water-dispenser.ionode.cloud/",

    WaterPollutionDesc: "Water Pollution Monitoring System",
    WaterPollutionGithub: "https://github.com/ionode-cloud/water-pollution",
    WaterPollutionWebsite: "https://waterpollution.ionode.cloud/",

    AiSolarCleaningRobotDesc: "AI Based Solar Cleaning Robot",
    AiSolarCleaningRobotGithub: "https://github.com/ionode-cloud/Ai-Based-Solar-Cleaning-Robot",
    AiSolarCleaningRobotWebsite: "https://solar-clening.ionode.cloud/",

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
