import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Jyotiranjan</h4>
      <h4>Copyright &copy; 2024 JRB</h4>

      <div className="footerLinks">
        <a
          href="https://github.com/Pupun45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/jyoti-ranjan-behera-2b50902aa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jyotiranjanbehera282@gmail.com&su=Subject&body=Hello%20Jyoti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
