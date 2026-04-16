import React from 'react';
import ProjectBox from './ProjectBox.jsx';

import Tourist from '../images/Tourist.png';
import BloodDonerImage from '../images/blood.png';
import Vegitable from '../images/vegitable.png';
import NextJsPortfolio from '../images/portfolio.png';
import WaterDispension from '../images/water.png';
import WaterPollution from '../images/pollution.png';
import AiSolarCleaningRobot from '../images/solarpanel.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>

      <div className='project'>
        <ProjectBox projectPhoto={Vegitable} projectName="VegitableShop" />
        <ProjectBox projectPhoto={Tourist} projectName="TourismPlace" />
        <ProjectBox projectPhoto={NextJsPortfolio} projectName="NextJsPortfolio" />
        <ProjectBox projectPhoto={WaterDispension} projectName="WaterDispension" />
        <ProjectBox projectPhoto={WaterPollution} projectName="WaterPollution" />
        <ProjectBox projectPhoto={AiSolarCleaningRobot} projectName="AiSolarCleaningRobot" />
        <ProjectBox projectPhoto={BloodDonerImage} projectName="BloodDoner" />
      </div>
    </div>
  );
};

export default Projects;