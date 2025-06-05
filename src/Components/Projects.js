import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import OnlineQuizImage from '../images/OnlineQuiz.png';
import BloodDonerImage from '../images/Blood-Doner.png';
import ShopingImage from '../images/Shoping.png';
import CharitAble from '../images/CharitAble.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ShopingImage} projectName="Shoping" />
        <ProjectBox projectPhoto={CharitAble} projectName="Newsletter" />
        <ProjectBox projectPhoto={OnlineQuizImage} projectName="OnlineQuiz" />
        <ProjectBox projectPhoto={BloodDonerImage} projectName="BloodDoner" />
      </div>
    </div>
  );
};

export default Projects;
