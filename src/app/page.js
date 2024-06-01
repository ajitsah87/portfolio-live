import About from "./container/About";
import Contact from "./container/Contact";
import Intro from "./container/Intro";
import Navbar from "./container/Navbar";
import Project from "./container/Project";
import Skills from "./container/Skills";


export default function Home() {
  return (
    <div className="w-[min(1250px,100%-3rem)] mx-auto">
    <Navbar/>
    <Intro/>
    <About/>
    <Project/>
    <Skills/>
    <Contact/>

    </div>
  )
}
