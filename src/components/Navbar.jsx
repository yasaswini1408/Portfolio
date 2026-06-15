function Navbar(){
    return(
        <nav className="flex justify-between items-center px-9 py-5 border-b border-gray-800 fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-[#0d0d1a]">
            <div className="text-white font-bold text-xl">Yasaswini Samala</div>
            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Skills</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Journey</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Achievements</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
            </div>
            <div className="border border-purple-500 text-purple-400 px-4 py-2 rounded-lg">Resume</div>
        </nav>
    );
}
export default Navbar;