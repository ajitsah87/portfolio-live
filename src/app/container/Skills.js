"use client"

import {motion,  } from 'framer-motion';
import React, { useState } from "react";

function Skills() {
  const [descrip, setDescrip] = useState('');

  const svg = [
    {title: "html.svg", descrip: 'html'},
    {title: "css.svg", descrip: 'css'},
    {title:"javascript.svg", descrip: 'javaScript'},
    {title: "nodejs.svg", descrip: 'node'},
    {title: "react.svg", descrip: 'react'},
    {title: "next.svg", descrip: 'next'},
    {title: "tailwind-css.svg", descrip: 'tailwindcss'},
    {title:"express-js.svg", descrip: 'express'},
  ];

  return (
    <>
      <div id='/skills' className="h-[30rem]  w-[75%]  mx-auto">
        <h2 className="text-3xl font-semibold text-center  top-0 p-2 mb-20 delay-small-reveal">
          <span className="text-white">Skills</span>
          <span className="text-[#986dff]">{"{}"}</span>
        </h2>
        <div className="flex max-1200:flex-col max-1200:gap-12 justify-around">
          <div className="flex-1">
            <p className="text-[#9ca3af] ">
               {descrip ? (
            <span
            
            >{descrip}</span>
            ): (
              <span
             
              >*Click Or Hover Mouse Cursor Over Card To Read*</span>
            )}
           
            </p>
          </div>
          <div className="flex-1">
            <ul 
            onMouseLeave={() => setDescrip('')}
            className="grid grid-cols-4 gap-6 max-768:grid-cols-3 max-500:grid-cols-2">
              {svg.map((src, i) => (
                <motion.li
                initial={{opacity: 0, translateY: -10}}
                whileInView={{opacity: 1, translateY: 0}}
                whileHover={{scale: 1.1}}
                transition={{delay: .05*i}}
                onHoverStart={()=> setDescrip(src.descrip)}
                onClick={()=>setDescrip(src.descrip)}
                  key={i}
                  className="border-[1px] flex justify-center items-center hover:border-[#986dff] transition-colors duration-500 ease-linear border-neutral-800 rounded-[5px] p-8 bg-[#151515]"
                >
                  <img src={src.title} className="h-16 w-16 min-w-[48px] min-h-[48px] text-[#986dff]" />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

//
