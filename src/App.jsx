import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Project from "./components/projects/Project";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectOpen, setProjectOpen] = useState(false)
  return (
    <div className="app">
     
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        
        <Intro/>
        <Portfolio/>
        <Works projectOpen={projectOpen} setProjectOpen={setProjectOpen}/>
        <Project projectOpen={projectOpen} setProjectOpen={setProjectOpen}/>
        <Testimonials/>
        <Contact/>

      </div>

    </div>
  );
}

export default App;
