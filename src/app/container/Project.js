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
            <article class="interval-card-reveal bg-[#151515] border-[#fff] border-[1px] px-4 py-4 shadow-md">
              <div className="w-full h-72 relative overflow-clip group mb-4" style={{backgroundImage: `url()`}}>
                <Link href="https://ionfragrances.com" target="_blank" className="">
                  <img src="/assets/ionSS.png" className="absolute inset-0 w-full object-fill group-hover:-translate-y-[2000px] max-768:group-hover:-translate-y-[1000px] transition-transform ease-linear duration-5000" />
                </Link>
              </div>
              <p className="text-[1rem] font-medium text-[#9ca3af] ">I worked on <span className="font-bold text-[#a782fb]">ionfragrances.com</span>, a <span className="font-bold text-[#a782fb]">Shopify project</span>, where I customized themes to align with the brand identity, developed dynamic sections linked to product pages, and designed a responsive testimonial carousel for enhanced user engagement. Additionally, I optimized the storefront for performance and integrated interactive elements to improve user experience. The tech stack included <span className="font-bold text-[#a782fb]">Liquid, HTML, CSS, and JavaScript.</span></p>
            </article>

            {/* <!-- Project 2 --> */}
            <article class="interval-card-reveal bg-[#151515] border-[#272e3f] border-[2px] px-4 py-4 shadow-md">
              <div className="w-full h-72 relative overflow-clip group mb-4" style={{backgroundImage: `url()`}}>
                <Link href="https://fakestoreapi.in" target="_blank" className="">
                  <img src="/assets/screenshot.png" className="absolute inset-0 w-full object-fill group-hover:-translate-y-[710px] max-768:group-hover:-translate-y-[400px] transition-transform ease-in-out duration-3000" />
                </Link>
              </div>
              <p className="text-[1rem] font-medium text-[#9ca3af]">I have created <span className="font-bold text-[#a782fb]">fakestoreapi.in</span> Our API fetches details in<span className="font-bold text-[#a782fb]"> under 400ms, handling 150 products seamlessly.</span> It offers all the features of the .com site, including product details, categories, cart functionalities, and user data, making it perfect for <span className="font-bold text-[#a782fb]">e-commerce prototypes.</span> The interface is designed to be user-friendly and accessible for beginner programmers, ensuring a smooth development experience.</p>
            </article>

            {/* <!-- Project 3 --> */}
            <article class="interval-card-reveal bg-[#151515] border-[#c59d5f] border-[1px] px-4 py-4 shadow-md">
              <div className="w-full h-72 relative overflow-clip group mb-4" style={{backgroundImage: `url()`}}>
                <Link href="https://eatopendoor.vercel.app" target="_blank" className="">
                  <img src="/assets/screenshot1.jpg" className="absolute inset-0 w-full object-fill group-hover:-translate-y-[7204px] max-768:group-hover:-translate-y-[4884px] transition-transform ease-linear duration-8000" />
                </Link>
              </div>
              <p className="text-[1rem] font-medium text-[#9ca3af] ">This cool restaurant app was made with React It's a demo that shows off what a full-blown restaurant system could look like. Using packages like <span className="font-bold text-[#a782fb]">React, Swiper, Framer Motion,Tailwind CSS,</span> and React Icons, we will create an aesthetic UI featuring smooth scroll, engaging scroll animations, and a beautiful, responsive design where you'll get to see delicious food 😋.</p>
            </article>

            {/* <!-- Project 4 --> */}
            <article class="interval-card-reveal bg-[#151515] border-red-700 border-[1px] px-4 py-4 shadow-md">
              <div className="w-full h-72 relative overflow-clip group mb-4" style={{backgroundImage: `url()`}}>
                <Link href="https://ajit-e-com-frontend.vercel.app/" target="_blank" className="">
                  <img src="/assets/e-comSS.png" className="absolute inset-0 w-full object-fill group-hover:-translate-y-[160px] hover:group-hover:-translate-y-[2100px] transition-transform ease-in-out duration-5000"/>
                </Link>
              </div>
              <p className="text-[1rem] font-medium text-[#9ca3af]">The project includes product listings with detailed information, a dynamic shopping cart with <span className="font-bold text-[#a782fb]">real-time updates</span>, category filtering for easy navigation, and seamless page transitions. It integrates a clean, modern UI/UX design to enhance user engagement and accessibility, providing a professional demonstration of functionality tailored for online stores .Using tech stack <span className="font-bold text-[#a782fb]">react, node, express, tailwindCss, jwt, lenis, framermotion.</span></p>
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
