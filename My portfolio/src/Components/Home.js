import React, { useRef } from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";
import Draggable from "react-draggable";

const Home = () => {

  const dragRef = useRef(null);

  return (
    <div>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Jyotiranjan Behera</b></h1>
          <Typed />   
        </div>

        {/*  Draggable FIX */}
        <Draggable nodeRef={dragRef}>
          <div
            ref={dragRef}
            style={{ width: "300px", cursor: "grab" }}
          >
            <Lottie 
              className="illustration" 
              animationData={SpaceBoy} 
              loop={true} 
            />
          </div>
        </Draggable>

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>
            Brief <b>Introduction</b>
          </h1>

          <p>
            I enjoy turning ideas into real, interactive applications that make life easier.
            Currently, I focus on building <b>full-stack web applications</b> using the <b>MERN stack</b>
            (MongoDB, Express, React, Node.js).<br /><br />

            I am fluent in <b>JavaScript</b>, <b>React.js</b>, and <b>Node.js</b>, and currently learning
            <b> TypeScript</b> and <b>.NET</b>.<br /><br />

            When I'm not coding, I enjoy <b>coffee</b>
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>

        <Tilt>
          <img className='Avatar' src={Avatar} alt="My Avatar" />
        </Tilt>
      </div>

    </div>
  );
};

export default Home;
