import React from "react";
import Me from "../image/me.jpg";
import { motion } from "framer-motion";
import cv from '../cvpdf/RobertMedina.pdf'

const About = () => {
  return (
    <div id="about" className="flex w-screen  flex-col items-center justify-center relative bg-primary pb-10">
      <section
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-xl"
        
      >
        <div className="w-full h-420 flex items-center justify-center">
          <div className="w-275 h-340 bg-[#0096FF] rounded-md relative">
            <img
              className="w-full h-full absolute left-4 top-4 object-cover rounded-lg drop-shadow-2xl"
              src={Me}
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-320 flex flex-col items-center justify-center">
          <p className="text-lg text-textBase text-left p-4">
          Software developer with 3 years of experience. Specialized in Full Stack
          </p>
          <p className="text-lg text-textBase text-left p-4">
          Experienced with all stages of the development cycle for dynamic web projects, I have knowledge in different areas in development. Frameworks favorite React.js and Express.JS  
          </p>
          <p className="text-lg text-textBase text-left p-4">
          I am passionate about extreme sports and video games, I love making videos while I explain the code and play for a while.  
          </p>
          <motion.button 
            whileTap={{scale: 0.8}}
          className='  md:w-auto relative mt-6 inline-flex items-center justify-center p-0.4 mb-2 mr-4 ml-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg
             group bg-gradient-to-br from-blue-400 to-blue-700 group-hover:from-green-300 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300
             dark:focus:ring-green-300 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-700/90'>
              <a href={cv} target="_blank" rel="noopener noreferrer">
              <span className='w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-400/80 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Download CV</span>
              </a>
            </motion.button>
        </div>
      </section>
    </div>
  );
};

export default About;
