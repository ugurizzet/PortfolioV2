// import React, { useState, useEffect} from 'react'
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const About = () => {
  return (
    //     <div className='app__about app__flex'>
    //       <motion.div
    //       whileInView={{ x:[-200, 0], y:[80,0], opacity: [ 0,1]}}
    //       transition={{ duration: 1}}
    //       className='app__about-hakkimda'
    //       >
    //         <div className='app__about-img'>
    //           <img src={images.logo} alt="" />
    //           <div className='hakkimda'>
    //           <h2 className='h-text'>About Me</h2>
    //           <motion.p className='p-text'
    //           whileInView={{ opacity: [ 0,1]}}
    //           transition={{ duration: 2}}
    //           >
    //           Hi, Im Here To Help Your Next Project
    // I am curious Full Stack Developer, interested in writing new codes, skilled at developing complex solution, possessing strong creative thinking skills, high energy and integrity. I have ability to create algorithms effectively, interact positively and communicate appropriately with team members. I am quick to grasp new technologies and concepts to develop innovative and creative solutions to problems. Always eager to learn various technologies, tools and libraries. Especially interested in the Front end/Web Development, HTML, CSS, JS, React. I have teamwork skills. I'm good at problem solving. I am excited to learn new things and improve myself.
    //           </motion.p>
    //           </div>
    //         </div>
    //       </motion.div>
    // </div>
    <motion.div
    whileInView={{ x:[-200, 0], y:[80,0], opacity: [ 0,1]}}
    transition={{ duration: 1}}
    className='app__about'
    >

    <div className="card">
      <div className="tools">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>
      <div className="card__content">
          <div className="about__content">
            <div className="img">
              <img src={images.logo} alt="" />
            </div>
            <div className="content">
              <h1>About Me</h1>
              <p>I am curious Front-End Developer, interested in writing new codes, skilled at developing complex solution, possessing strong creative thinking skills, high energy and integrity. I have ability to create algorithms effectively, interact positively and communicate appropriately with team members. I am quick to grasp new technologies and concepts to develop innovative and creative solutions to problems. Always eager to learn various technologies, tools and libraries. Especially interested in the Front end/Web Development, HTML, CSS, JS, React. I have teamwork skills. I'm good at problem solving. I am excited to learn new things and improve myself.</p>
            </div>
          </div>
      </div>
    </div>
    </motion.div>
  );
};

export default About;
