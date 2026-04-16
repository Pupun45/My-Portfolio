import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
  <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
  <p>
    Hi, my name is <b>Jyotiranjan Behera</b>, and I am from Cuttack, India.<br/><br/>

    I am a <b>Full-Stack Developer</b> specializing in the <b>MERN stack</b> (MongoDB, Express, React, Node.js), 
    currently working at <b>Robogenesis</b> in Bhubaneswar. I have professional experience as a Full-Stack Developer, 
    Junior Web Developer, and also completed a Full-Stack Developer internship, where I gained hands-on experience building 
    APIs, dashboards, and interactive web applications.<br/><br/>

    Through these roles, I have enhanced my expertise in full-stack development, application programming interfaces (API), 
    and modern web technologies. I enjoy creating practical, user-friendly projects that solve real-world problems.<br/><br/>

    I am <b>open</b> to collaborations and projects where I can contribute, learn, and grow. Feel free to connect with me—links are in the footer.<br/><br/>

    I also enjoy <b>traveling</b> and exploring new places, cultures, and experiences—it inspires me 
    to think creatively and approach problems from different perspectives.
    <a href="https://www.instagram.com/pupun_fzx?igsh=MTZxY2p4YmtkbXNkOQ==" target='blank'>Instagram</a>.
  </p>
</div>



        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Amazoneaws'/>
        <Skills skill='Redux'/>
        <Skills skill='Mysql'/>
        <Skills skill='MongoDb'/>
        <Skills skill='Vercel'/>
        <Skills skill='Hostinger'/>
        <Skills skill='DotNet'/>
        <Skills skill='Docker'/>
        
      </div>
    </>
  )
}

export default About