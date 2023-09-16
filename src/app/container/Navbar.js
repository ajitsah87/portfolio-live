"use client";

import { Link } from "react-scroll";
import React, { useState } from "react";
import {motion} from 'framer-motion';

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const tabs = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Skills", href: "/skills" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-[#111111] z-10 h-22 sticky top-0 w-full">
      <div className="container mx-auto w-[75%] flex items-center justify-between p-7">
        <div className="text-white text-[1.8rem] font-semibold">
          <h1 className="cursor-pointer ">Ajit.dev</h1>
        </div>
        <span
         onClick={() => setToggleSidebar(prev => !prev)}
         className="fixed z-50 top-[35px] right-8 min-[920px]:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>

        <ul
        className="flex gap-8 max-[920px]:hidden">
          {tabs.map((tab, i) => (
            <motion.li
            initial={{opacity: 0, translateX: 20, scale: .6}}
            animate={{opacity: 1, translateX: 0, scale: 1}}
            transition={{delay: .06*i, type: 'tween'}} 
            key={i}>
              <Link
                to={tab.href}
                activeClass=""
                smooth={true}
                offset={-100}
                duration={400}
                className="text-[#9ca3af] text-[1.2rem] cursor-pointer hover:text-gray-400 transition duration-300 relative activeTab"
              >
                {tab.title}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
        initial={{opacity: 0}}
        animate={toggleSidebar ? {opacity: 1} : ''}
        onClick={()=> setToggleSidebar(false)}
        className={`fixed inset-0 bg-black/50 min-[920px]:hidden ${!toggleSidebar && 'pointer-events-none'}`}>
          <motion.ul
          onClick={(e)=>e.stopPropagation()}
          initial={{translateX: '110%'}}
          animate={toggleSidebar ? {translateX: 0} : ''}
          transition={{type: 'tween', duration: .3}}
          className="absolute top-0 bottom-0 p-6 right-0 w-60 z-40 backdrop-blur-md text-white border-l border-white/20 flex justify-center items-center gap-8 flex-col">
            {tabs.map((tab, i) => (
              <li
               key={i}>
                <Link
                  onClick={()=>setToggleSidebar(false)}
                  to={tab.href}
                  activeClass=""
                  smooth={true}
                  offset={-100}
                  duration={400}
                  className="text-[#9ca3af] font-medium text-[1.2rem] cursor-pointer hover:text-gray-400 transition duration-300 relative activeTab"
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
