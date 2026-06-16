import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
function App() {
  return(
    <div className="bg-[#0d0d1a] text-white min-h-screen pt-20">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
    </div>
  );
}

export default App