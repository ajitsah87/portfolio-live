import React from "react";
import { TbBraces } from "react-icons/tb";
import Link from "next/link"

export default function Project() {
  return (
    <>
      <section id="/projects" class="bg-[#111111] mb-60 max-lg:mb-16 py-12">
        <div class="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-20 flex justify-center delay-small-reveal">
            <span className="text-white">Projects</span>
            <span className="text-[#986dff]">{"{}"}</span>
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* <!-- Project 1 --> */}
            <article class="interval-card-reveal bg-[#151515] border-[#c59d5f] border-[1px] px-4 py-4 shadow-md">
              <div className="w-full h-72 relative overflow-clip group mb-4" style={{backgroundImage: `url()`}}>
                <Link href="https://eatopendoor.vercel.app" target="_blank" className="">
                  <img src="/assets/screenshot1.jpg" className="absolute inset-0 w-full object-fill group-hover:-translate-y-[7204px] max-768:group-hover:-translate-y-[4884px] transition-transform ease-linear duration-8000" />
                </Link>
              </div>
              <p className="text-[1rem] font-medium text-[#9ca3af] ">This cool restaurant app was made with React It's a demo that shows off what a full-blown restaurant system could look like. Using packages like <span className="font-bold text-[#a782fb]">React, Swiper, Framer Motion,Tailwind CSS,</span> and React Icons, we will create an aesthetic UI featuring smooth scroll, engaging scroll animations, and a beautiful, responsive design where you'll get to see delicious food 😋.</p>
            </article>

            {/* <!-- Project 2 --> */}
            <article class="interval-card-reveal bg-[#151515] border-[#ec4899] border-[1px] px-4 py-4 shadow-md">
              <div className="w-full h-72 relative overflow-clip group mb-4" style={{backgroundImage: `url()`}}>
                <Link href="https://fakestoreapi.in" target="_blank" className="">
                  <img src="/assets/screenshot.png" className="absolute inset-0 w-full object-fill group-hover:-translate-y-[710px] max-768:group-hover:-translate-y-[400px] transition-transform ease-in-out duration-3000" />
                </Link>
              </div>
              <p className="text-[1rem] font-medium text-[#9ca3af]">I have created <span className="font-bold text-[#a782fb]">fakestoreapi.in</span> Our API fetches details in<span className="font-bold text-[#a782fb]"> under 400ms, handling 150 products seamlessly.</span> It offers all the features of the .com site, including product details, categories, cart functionalities, and user data, making it perfect for <span className="font-bold text-[#a782fb]">e-commerce prototypes.</span> The interface is designed to be user-friendly and accessible for beginner programmers, ensuring a smooth development experience.</p>
            </article>

            {/* <!-- Project 3 --> */}
            <article class="interval-card-reveal bg-[#151515] border-[#384e6f] border-[1px] px-4 py-4 shadow-md">
              <div className="w-full h-72 relative overflow-clip group mb-4" style={{backgroundImage: `url()`}}>
                <Link href="https://keepyourselfupdated.vercel.app/" target="_blank" className="">
                  <img src="/assets/screenshot2.png" className="absolute inset-0 w-full object-fill group-hover:-translate-y-[100px] max-768:group-hover:-translate-y-[42px] transition-transform ease-in-out duration-3000" />
                </Link>
              </div>
              <p className="text-[1rem] font-medium text-[#9ca3af]">"Keep Yourself Updated" It features a modern, responsive UI with a focus on user experience. Built using Next.js for server-side rendering , it efficiently manages state with React hooks. The app allows users to <span className="font-bold text-[#a782fb]">add, edit, and delete tasks seamlessly. </span> CSS-in-JS is employed for maintainable styling, and the application is optimized for performance, ensuring quick loading and smooth user interactions. </p>
            </article>

            {/* <!-- Project 4 --> */}
            <article class="interval-card-reveal bg-[#151515] border-[#4355ca] border-[1px] px-4 py-4 shadow-md">
              <div className="w-full h-72 relative overflow-clip group mb-4" style={{backgroundImage: `url()`}}>
                <Link href="https://react-travelwebsite.vercel.app/" target="_blank" className="">
                  <img src="/assets/screenshot3.png" className="absolute inset-0 w-full object-fill group-hover:-translate-y-[160px] hover:group-hover:-translate-y-[136px] transition-transform ease-in-out duration-3000"/>
                </Link>
              </div>
              <p className="text-[1rem] font-medium text-[#9ca3af]">React-based travel platform designed for seamless destination and appointment bookings. It boasts a secure<span className="font-bold text-[#a782fb]"> authentication system, allowing users to sign up, log in, and manage their accounts effortlessly.</span> With an intuitive interface, users can explore a diverse range of destinations and services offered. The booking process is streamlined, offering transparency on availability and pricing. Whether users seek a leisurely vacation or specific appointments, your website caters to their needs.</p>
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
