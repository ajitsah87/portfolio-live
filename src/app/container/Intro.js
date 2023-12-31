import React from "react";

function Intro() {
  return (
    <>
      <div id="/" className="mx-auto w-[75%] pt-[10rem] pb-[22rem] flex items-center justify-between gap-12 relative">
        <div className="min-[1120px]:flex-1 max-[1120px]:px-16">
          <h1 className="text-white text-[3rem]">
            Hi!<span className="text-[#986dff]">I am <span className="whitespace-nowrap">Ajit Sah</span></span>
          </h1>
          <p className="text-[#9ca3af] text-lg mb-5">
            As a passionate and self-taught front-end developer,Through my projects, I aim to blend aesthetics with functionality, crafting immersive web experiences that captivate users.You will get know about my journey of learning here.
          </p>
          <a
            href="#"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all shadow bg-white rounded hover:bg-white group"
          >
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#986dff] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-slate-600 transition-colors duration-300 ease-in-out group-hover:text-white">
              HIRE ME
            </span>
          </a>
        </div>
        <div className="flex-1 min-[1120px]:min-w-[50%]">
          <img className="w-[65%] ml-auto max-[1120px]:absolute max-[1120px]:-translate-x-[80%] max-[1120px]:-translate-y-1/2 max-[1120px]:blur-md" src="Curly.svg" alt="img" />
        </div>
      </div>
    </>
  );
}

export default Intro;
