import About from "./container/About";
import Contact from "./container/Contact";
import Intro from "./container/Intro";
import Navbar from "./container/Navbar";
import Project from "./container/Project";
import Skills from "./container/Skills";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <About/>
    <Project/>
    <Skills/>
    <Contact/>

    </>
  )
}
