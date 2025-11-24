import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Jyotiranjan</h4>
      <h4>Copyright &copy; 2024 JRB</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Pupun45" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/jyoti-ranjan-behera-2b50902aa" target='_blank'><FaLinkedin/></a>
        <a href="mailto:jyotiranjanbehera282@gmail.com" target='_blank'><GrMail/></a>
        {/* <a href="/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer