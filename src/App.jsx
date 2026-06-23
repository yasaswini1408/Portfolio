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
  return (
    <div className="bg-[#0d0d1a] text-white min-h-screen pt-20">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="achievements"><Achievements /></div>
      <div id="leadership"><Leadership /></div>
      <div id="certifications"><Certifications /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App