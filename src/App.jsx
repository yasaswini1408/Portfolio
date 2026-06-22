import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Achievements from "./components/Achievements.jsx"
import Certifications from "./components/Certifications.jsx"
import Leadership from "./components/Leadership.jsx"
import Contact from "./components/Contact.jsx"
function App() {
  return(
    <div className="bg-[#0d0d1a] text-white min-h-screen pt-20">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Achievements></Achievements>
      <Leadership></Leadership>
      <Certifications></Certifications>
      <Contact></Contact>
    </div>
  );
}

export default App