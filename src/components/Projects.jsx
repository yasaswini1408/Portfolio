function Projects(){
    return(
        <section className="px-10 py-16 border-t border-gray-800">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Projects</h1>
                <button className="border border-purple-500 text-purple-400 px-3 py-1 rounded-lg text-sm">
                    View All Projects
                </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
                
                {/* project one */}
                <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
                    <div className="bg-black">
                        <img
                            src="/projects/note-hive.png"
                            alt="NoteHive Preview"
                            className="w-full object-contain"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="font-bold text-lg">NoteHive</h2>
                            <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded">Full Stack</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            Secure Notes REST API with JWT auth, bcrypt encryption, search, pagination and sorting.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Express.js</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">MongoDB</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">JWT</span>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <a href="https://notehive365.netlify.app/" target="_blank" className="text-purple-400">Live Demo ↗</a>
                            <a href="https://github.com/yasaswini1408/NoteHive" target="_blank" className="text-purple-400">GitHub ↗</a>
                        </div>
                    </div>
                </div>

                {/* project two */}
                <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
                    <div className="bg-black">
                        <img
                            src="/projects/tiny-shift.png"
                            alt="TinyShift Preview"
                            className="w-full object-contain"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="font-bold text-lg">TinyShift</h2>
                            <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded">AI Powered</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            AI activity assistant with real time weather data and Groq AI to give personalized suggestions.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Groq API</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">OpenWeatherMap</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Vercel</span>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <a href="https://tiny-shift.vercel.app/" target="_blank" className="text-purple-400">Live Demo ↗</a>
                            <a href="https://github.com/yasaswini1408/TinyShift" target="_blank" className="text-purple-400">GitHub ↗</a>
                        </div>
                    </div>
                </div>

                {/* project three */}
                <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
                    <div className="bg-black">
                        <img
                            src="/projects/campus-connect.png"
                            alt="Campus Connect Preview"
                            className="w-full object-contain"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="font-bold text-lg">Campus Connect</h2>
                            <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded">Full Stack</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            Campus communication platform with event & user management APIs and responsive UI.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Javascript</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Express.js</span>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <a href="https://campus-connect-qpma.onrender.com/" target="_blank" className="text-purple-400">Live Demo ↗</a>
                            <a href="https://github.com/yasaswini1408/Campus_Connect" target="_blank" className="text-purple-400">GitHub ↗</a>
                        </div>
                    </div>
                </div>

                {/* project four */}
                <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
                    <div className="bg-black">
                        <img
                            src="/projects/flavors-of-india.png"
                            alt="Flavors of India Preview"
                            className="w-full object-contain"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="font-bold text-lg">Flavors of India</h2>
                            <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded">Frontend</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            A responsive food ordering web application. Features menu browsing, dynamic cart management, and a structured checkout interface.                                </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">HTML5</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">CSS</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Javascript</span>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <a href="https://food-ordering-website-blue.vercel.app/" target="_blank" className="text-purple-400">Live Demo ↗</a>
                            <a href="https://github.com/yasaswini1408/Food_Ordering_Website" target="_blank" className="text-purple-400">GitHub ↗</a>
                        </div>
                    </div>
                </div>

                {/* project five */}
                <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
                    <div className="bg-black">
                        <img
                            src="/projects/visit-vizag.png"
                            alt="Visit Vizag Preview"
                            className="w-full object-contain"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="font-bold text-lg">Visit Vizag</h2>
                            <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded">Frontend</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            VisitVizag is a comprehensive tourism platform designed to enhance the travel experience in Visakhapatnam.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">HTML5</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">CSS</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Javascript</span>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <a href="https://visitvizag.github.io/visitvizag/" target="_blank" className="text-purple-400">Live Demo ↗</a>
                            <a href="https://github.com/yasaswini1408/Visit_Vizag" target="_blank" className="text-purple-400">GitHub ↗</a>
                        </div>
                    </div>
                </div>

                {/* project six*/}
                <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
                    <div className="bg-black">
                        <img
                            src="/projects/to-do.png"
                            alt="To-Do Preview"
                            className="w-full object-contain"
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="font-bold text-lg">To-Do</h2>
                            <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded">Frontend</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            A clean and interactive application that helps users manage daily tasks with a dynamic progress tracker.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">HTML5</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">CSS</span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Javascript</span>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <a href="https://todo-app-kappa-ten-33.vercel.app/" target="_blank" className="text-purple-400">Live Demo ↗</a>
                            <a href="https://github.com/yasaswini1408/TODO" target="_blank" className="text-purple-400">GitHub ↗</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Projects;