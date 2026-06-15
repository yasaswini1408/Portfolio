import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
function App() {
  return(
    <div className="bg-[#0d0d1a] text-white min-h-screen pt-20">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App