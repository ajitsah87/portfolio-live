import React from "react";
import { TbBraces } from "react-icons/tb";
export default function Project() {
  return (
    <>
      <section id="/projects" class="bg-[#111111]  w-[75%] mx-auto mb-60 py-12">
        <div class="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-20 flex justify-center delay-small-reveal">
  <span className="text-white">Projects</span>
  <span className="text-[#986dff]">{"{}"}</span>
</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Project 1 --> */}
            <article class="interval-card-reveal bg-[#151515] border-red-500 border-[1px] px-4 py-4 shadow-md">
              <h3 class="text-lg font-semibold  pb-4 text-white">Snake game </h3>
              <p className=" text-[1.2rem] font-medium text-[#9ca3af] mb-4 ">
               Snake game
              </p>
              <a
                href="#home"
                rel="noopener"
                id="teslabank"
                class="text-red-500"
              >
                Live Link
              </a>
            </article>

            {/* <!-- Project 2 --> */}
            <article class="interval-card-reveal bg-[#151515] border-blue-500 border-[1px] px-4 py-4 shadow-md">
              <h3 class="text-lg font-semibold  pb-4 text-white">Food Photography</h3>
              <p className=" text-[1.1rem] font-medium text-[#9ca3af] mb-4 ">
              I designed and developed a captivating and user-friendly food photography website using React, combining passion for photography with web development skills. Vsually appealing and responsive user interface that elegantly showcases the artistry of food through stunning imagery. Fast-loading website that enhances the presentation of food photography.
              </p>
              <a
                href=""
                rel="noopener"
                target="_blank"
                id="naped"
                class="text-blue-500"
              >
                Live Link
              </a>
            </article>

            {/* <!-- Project 3 --> */}
            <article class="interval-card-reveal bg-[#151515] border-green-500 border-[1px] px-4 py-4 shadow-md">
              <h3 class="text-lg  font-semibold  pb-4 text-white">ToDo App</h3>
              <p className=" text-[1.2rem] font-medium text-[#9ca3af]  mb-4 ">
               todo list 
              </p>
              <a
                href=""
                rel="noopener"
                target="_blank"
                id="efront"
                class="text-green-500"
              >
                Live Link
              </a>
            </article>

            {/* <!-- Project 4 --> */}
            <article class="interval-card-reveal bg-[#151515] border-[#986dff] border-[1px] px-4 py-4 shadow-md">
              <h3 class="text-lg font-semibold pb-4 text-[#986dff]">
               Amazon Clone Front-End
              </h3>
              <p className=" text-[1.2rem] font-medium text-[#9ca3af] mb-4 ">
                Amazon
              </p>
              <a
                href=""
                rel="noopener"
                target="_blank"
                id="teslabank"
                class="text-[#986dff]"
              >
                GitHub Link
              </a>
            </article>
          </div>

          <a
            href="https://github.com/ajitsah87"
            rel="noopener"
            target="_blank"
            class="block text-center text-blue-600 mt-6 delay-extra-big-reveal"
          >
            More At GitHub
          </a>
        </div>
      </section>
    </>
  );
}
