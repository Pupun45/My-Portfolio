import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact,FaGithub,FaAngular, FaNpm, FaFigma, FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {
  SiDotnet,
  SiMongodb,
  SiHostinger,
  SiAmazonwebservices,
  SiMysql,
  SiRedux,SiGit,SiDocker ,
  SiExpress,SiVercel,SiPostman
} from "react-icons/si";


const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        DotNet:<SiDotnet/>,
        Hostinger:<SiHostinger/>,
        Amazoneaws:<SiAmazonwebservices/>,
        Redux:<SiRedux/>,
        Mysql:<SiMysql/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <SiGit/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Docker:<SiDocker/>,
        Angular:<FaAngular/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
