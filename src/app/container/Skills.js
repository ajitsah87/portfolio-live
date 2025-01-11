"use client"

import {motion,  } from 'framer-motion';
import React, { useState } from "react";

function Skills() {
  const [descrip, setDescrip] = useState('');

  const svg = [
    {title: "html.svg", descrip: 'HTML is the standard markup language for creating Web pages.'},
    {title: "tailwind-css.svg", descrip: 'Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.'},
    {title:"javascript.svg", descrip: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages'},
    {title: "nodejs.svg", descrip: 'noAs an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.de'},
    {title: "react.svg", descrip: 'React.js, more commonly known as React, is a free, open-source JavaScript library. It works best to build user interfaces by combining sections of code (components) into full websites.'},
    {title: "next.svg", descrip: 'Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.'},
    {title:"Shopify.svg", descrip:'Shopify is an e-commerce platform that allows businesses to create and manage online stores easily, offering tools for product management, payments, shipping, and customer data.'},
    {title:"express-js.svg", descrip: 'Express.js is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js'},
  ];

  return (
    <>
      <div id='/skills' className="h-[30rem] ">
        <h2 className="text-3xl font-semibold text-center  top-0 p-2 mb-20 delay-small-reveal">
          <span className="text-white">Skills</span>
          <span className="text-[#986dff]">{"{}"}</span>
        </h2>
        <div className="flex max-1200:flex-col max-1200:gap-12 justify-around gap-4">
          <div className="flex-1">
            <p className="text-[#9ca3af] max-1200:hidden">
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
