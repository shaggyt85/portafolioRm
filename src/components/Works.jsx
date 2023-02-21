import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { Projects } from "../data/data";
import { motion } from "framer-motion";

const Works = () => {

  let project = Projects.map((n) => {
    return (
      <section
        key={n.id}
        className="flex flex-wrap md:max-w-screen-xl items-center justify-evenly my-8 gap-4  p-4"
      >
        <motion.div 
        whileTap={{scale:0.7}}
        className=" border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out ">
          <p className="text-lg text-textBase font-medium uppercase">
            {n.name}
          </p>
          <a href={n.web} alt={n.web} target="_blank" rel="noopener noreferrer">
          <img
            src={n.imageSrc}
            alt={n.name}
            className=" object-cover rounded-md my-4"
          />
          </a>
          <div className="flex flex-l items-center justify-between">
            <p className="text-lg text-gray-300">
              Technologies
              <span className="block text-sm text-gray-500">{n.techs}</span>
            </p>
            <a href={n.web} alt={n.web}target="_blank" rel="noopener noreferrer">
              <div className="">
                <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
              </div>
            </a>
          </div>
        </motion.div>
      </section>
    );
  });

  return (
    <div id="projects" className="flex  flex-wrap items-center justify-evenly relative bg-primary ">
      <div className="flex flex-wrap md:max-w-screen-xl items-center justify-evenly my-8 gap-4  p-4">
      {project}
      </div>
    </div>
  );
};

export default Works;
