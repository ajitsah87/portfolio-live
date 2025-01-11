"use client";
import React, {useState, useEffect} from "react";
import { SlSocialGithub } from "react-icons/sl";
import { MdWhatsapp } from "react-icons/md";
import { FiMail } from "react-icons/fi";

import { PiLinkedinLogo, PiInstagramLogo } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";


function About() {

  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(()=> {
   setShouldAnimate(false)
  }, [])
  
  return (
    <>
      <div id="/about" className="border-[2px] border-neutral-800 rounded-[5px] bg-[#151515] p-10 flex items-center justify-between mb-[10rem] max-lg:mb-[6rem] gap-6 max-[1120px]:flex-col">
        <div className="w-1/2 max-[1120px]:w-full">
          <img className="w-full h-full object-cover" src="me.svg" alt="img" />
        </div>
        <div className="w-1/2 max-[1120px]:w-full mx-auto">
          <h2 className="text-[#986dff] text-[1.5rem] font-medium">About Me</h2>
          <h1 className="text-white text-[3rem] py-4">Ajit Sah</h1>
          <p className="text-[1.2rem] font-medium text-[#9ca3af] ">
            I am a highly motivated self taught Programmer with a passion for
            technology and its application in solving real-world problems. Goal
            is to work with an organization where I can learn new skills and
            increase my abilities for the organizational goals as well as
            myself. As a tech enthusiast, I'm currently exploring in Front-End
            Development.
          </p>
          <div className="pt-14 max-[1120px]:pt-6">
            <ul
              className="flex gap-4 justify-start flex-wrap"
            >
              <AnimatePresence >
              <motion.li
                initial={{ opacity: 0, translateY: -15 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                whileHover={{ scale: 1.1 }}  
                transition={{ delay: 0.07*1 }}
                className="border-[2px] hover:border-[#986dff] transition-colors duration-500 ease-linear border-neutral-800 rounded-[7px] p-4 bg-[#151515]"
              >
                <a href="https://github.com/ajitsah87">
                  <SlSocialGithub className="text-3xl text-[#986dff]" />
                </a>
              </motion.li>
              <motion.li
              whileHover={{ scale: 1.1 }}  initial={{ opacity: 0, translateY: -15 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.07*2 }}
                className="border-[2px] hover:border-[#986dff] transition-colors duration-500 ease-linear border-neutral-800  rounded-[7px]  p-4 bg-[#151515]"
              >
                <a href="https://www.linkedin.com/in/ajit-sah-277268259/">
                  <PiLinkedinLogo className="text-3xl text-[#986dff]" />
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }} 
              initial={{ opacity: 0, translateY: -15 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.07*3 }}
                className="border-[2px] hover:border-[#986dff] transition-colors duration-500 ease-linear border-neutral-800  rounded-[7px] p-4 bg-[#151515]"
              >
                <a href="https://www.instagram.com/ajitsah87?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <PiInstagramLogo className="text-3xl text-[#986dff]" />
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, translateY: -15 }}
                whileHover={{ scale: 1.1 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.07*4 }}
                className="border-[2px] hover:border-[#986dff] transition-colors duration-500 ease-linear border-neutral-800  rounded-[7px] p-4 bg-[#151515]"
              >
                <a href="https://wa.me/9199118582">
                  <MdWhatsapp className="text-3xl text-[#986dff]" />
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
             initial={{ opacity: 0, translateY: -15 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 0.07*5 }}
                className="border-[2px] hover:border-[#986dff] transition-colors duration-500 ease-linear border-neutral-800  rounded-[7px] p-4 bg-[#151515]"
              >
                <a href="mailto:sahajit119@gmail.com">
                  <FiMail className="text-[1.8rem] text-[#986dff]" />
                </a>
              </motion.li>
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
