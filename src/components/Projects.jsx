// import {useState} from "react"

// function Projects(){
//     const [showAll,setShowAll]=useState(false)
//     return(
//         <section className="px-10 py-16 border-t border-gray-800">
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-2xl font-bold">Projects</h1>
//                 <button
//                     onClick={() => setShowAll(!showAll)}
//                     className="border border-purple-500 text-purple-400 px-3 py-1 rounded-lg text-sm">
//                     {showAll ? "Show Less" : "View All Projects"}
//                 </button>
//             </div>
//             <div className="grid grid-cols-3 gap-6">
                
//                 {/* project one */}
//                 <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
//                     <div className="bg-black">
//                         <img src="/projects/note-hive.png" alt="NoteHive Preview" className="w-full object-contain"/>
//                     </div>
//                     <div className="p-5">
//                         <div className="flex justify-between items-center mb-3">
//                             <h2 className="font-bold text-lg">NoteHive</h2>
//                             <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded">Full Stack</span>
//                         </div>
//                         <p className="text-gray-400 text-sm mb-4">Secure Notes REST API with JWT auth, bcrypt encryption, search, pagination and sorting.</p>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Express.js</span>
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">MongoDB</span>
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">JWT</span>
//                         </div>
//                         <div className="flex gap-4 text-sm">
//                             <a href="https://notehive365.netlify.app/" target="_blank" className="text-purple-400">Live Demo ↗</a>
//                             <a href="https://github.com/yasaswini1408/NoteHive" target="_blank" className="text-purple-400">GitHub ↗</a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* project two */}
//                 <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
//                     <div className="bg-black">
//                         <img src="/projects/tiny-shift.png" alt="TinyShift Preview" className="w-full object-contain"/>
//                     </div>
//                     <div className="p-5">
//                         <div className="flex justify-between items-center mb-3">
//                             <h2 className="font-bold text-lg">TinyShift</h2>
//                             <span className="bg-blue-900 text-blue-400 text-xs px-2 py-1 rounded">AI Powered</span>
//                         </div>
//                         <p className="text-gray-400 text-sm mb-4">AI activity assistant with real time weather data and Groq AI to give personalized suggestions.</p>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Groq API</span>
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">OpenWeatherMap</span>
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Vercel</span>
//                         </div>
//                         <div className="flex gap-4 text-sm">
//                             <a href="https://tiny-shift.vercel.app/" target="_blank" className="text-purple-400">Live Demo ↗</a>
//                             <a href="https://github.com/yasaswini1408/TinyShift" target="_blank" className="text-purple-400">GitHub ↗</a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* project three */}
//                 <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
//                     <div className="bg-black">
//                         <img src="/projects/campus-connect.png" alt="Campus Connect Preview" className="w-full object-contain"/>
//                     </div>
//                     <div className="p-5">
//                         <div className="flex justify-between items-center mb-3">
//                             <h2 className="font-bold text-lg">Campus Connect</h2>
//                             <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded">Full Stack</span>
//                         </div>
//                         <p className="text-gray-400 text-sm mb-4">Campus communication platform with event & user management APIs and responsive UI.</p>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Javascript</span>
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Node.js</span>
//                             <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Express.js</span>
//                         </div>
//                         <div className="flex gap-4 text-sm">
//                             <a href="https://campus-connect-qpma.onrender.com/" target="_blank" className="text-purple-400">Live Demo ↗</a>
//                             <a href="https://github.com/yasaswini1408/Campus_Connect" target="_blank" className="text-purple-400">GitHub ↗</a>
//                         </div>
//                     </div>
//                 </div>

//                 {showAll && (
//                     <>
//                         {/* project four */}
//                         <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
//                             <div className="bg-black">
//                                 <img src="/projects/flavors-of-india.png" alt="Flavors of India Preview" className="w-full object-contain"/>
//                             </div>
//                             <div className="p-5">
//                                 <div className="flex justify-between items-center mb-3">
//                                     <h2 className="font-bold text-lg">Flavors of India</h2>
//                                     <span className="bg-purple-900 text-purple-400 text-xs px-2 py-1 rounded">Frontend</span>
//                                 </div>
//                                 <p className="text-gray-400 text-sm mb-4">A responsive food ordering web application with menu browsing, dynamic cart management, and checkout.</p>
//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">HTML5</span>
//                                     <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">CSS</span>
//                                     <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Javascript</span>
//                                 </div>
//                                 <div className="flex gap-4 text-sm">
//                                     <a href="https://food-ordering-website-blue.vercel.app/" target="_blank" className="text-purple-400">Live Demo ↗</a>
//                                     <a href="https://github.com/yasaswini1408/Food_Ordering_Website" target="_blank" className="text-purple-400">GitHub ↗</a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* project five */}
//                         <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
//                             <div className="bg-black">
//                                 <img src="/projects/visit-vizag.png" alt="Visit Vizag Preview" className="w-full object-contain"/>
//                             </div>
//                             <div className="p-5">
//                                 <div className="flex justify-between items-center mb-3">
//                                     <h2 className="font-bold text-lg">Visit Vizag</h2>
//                                     <span className="bg-purple-900 text-purple-400 text-xs px-2 py-1 rounded">Frontend</span>
//                                 </div>
//                                 <p className="text-gray-400 text-sm mb-4">A comprehensive tourism platform designed to enhance the travel experience in Visakhapatnam.</p>
//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">HTML5</span>
//                                     <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">CSS</span>
//                                     <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Javascript</span>
//                                 </div>
//                                 <div className="flex gap-4 text-sm">
//                                     <a href="https://visitvizag.github.io/visitvizag/" target="_blank" className="text-purple-400">Live Demo ↗</a>
//                                     <a href="https://github.com/yasaswini1408/Visit_Vizag" target="_blank" className="text-purple-400">GitHub ↗</a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* project six */}
//                         <div className="bg-[#11111f] border border-gray-800 rounded-xl overflow-hidden">
//                             <div className="bg-black">
//                                 <img src="/projects/to-do.png" alt="To-Do Preview" className="w-full object-contain"/>
//                             </div>
//                             <div className="p-5">
//                                 <div className="flex justify-between items-center mb-3">
//                                     <h2 className="font-bold text-lg">To-Do</h2>
//                                     <span className="bg-purple-900 text-purple-400 text-xs px-2 py-1 rounded">Frontend</span>
//                                 </div>
//                                 <p className="text-gray-400 text-sm mb-4">A clean interactive app to manage daily tasks with a dynamic progress tracker.</p>
//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">HTML5</span>
//                                     <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">CSS</span>
//                                     <span className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs">Javascript</span>
//                                 </div>
//                                 <div className="flex gap-4 text-sm">
//                                     <a href="https://todo-app-kappa-ten-33.vercel.app/" target="_blank" className="text-purple-400">Live Demo ↗</a>
//                                     <a href="https://github.com/yasaswini1408/TODO" target="_blank" className="text-purple-400">GitHub ↗</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                 )}

//             </div>
//         </section>
//     );
// }
// export default Projects;

import {useState} from "react"

function Projects(){
    const [showAll, setShowAll] = useState(false)
    const projects = [
        {
            title: "NoteHive",
            badge: "Full Stack",
            badgeColor: "bg-green-900 text-green-400",
            image: "/projects/note-hive.png",
            description: "Secure Notes App with JWT auth, bcrypt encryption, search, pagination and sorting.",
            challenge: [
                "Implementing complete auth flow end-to-end — signup, login, token generation and middleware",
                "Writing middleware that intercepts every route, verifies JWT, and attaches userId to req.user",
                "Ensuring User A cannot access User B's notes even with a valid token"
            ],
            solution: [
                "Broke it into small steps — got signup working first, then login, then tested in Postman before building middleware",
                "Protected routes one by one, verifying each step before moving to the next",
                "Filtered every DB query with both note ID and userId together for proper data isolation"
            ],
            tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
            live: "https://notehive365.netlify.app/",
            github: "https://github.com/yasaswini1408/NoteHive"
        },
        {
            title: "TinyShift",
            badge: "AI Powered",
            badgeColor: "bg-blue-900 text-blue-400",
            image: "/projects/tiny-shift.png",
            description: "AI-powered activity assistant with real-time weather data and Groq AI for personalized suggestions.",
            challenge: [
                "API keys were initially exposed in frontend JS — anyone could steal them from browser source",
                "Had to redesign the entire architecture to secure them without breaking the user experience",
                "Understanding how serverless functions work and deploying env variables correctly on Vercel"
            ],
            solution: [
                "Created a Vercel serverless function as a middleman — frontend never touches the API keys directly",
                "Stored API keys as environment variables in Vercel dashboard, never in code",
                "Updated frontend to call /api/getplan (own endpoint) instead of Groq directly"
            ],
            tech: ["Node.js", "Groq API", "OpenWeatherMap", "Vercel Serverless"],
            live: "https://tiny-shift.vercel.app/",
            github: "https://github.com/yasaswini1408/TinyShift"
        },
        {
            title: "Campus Connect",
            badge: "Full Stack",
            badgeColor: "bg-green-900 text-green-400",
            image: "/projects/campus-connect.png",
            description: "Campus communication platform with event & user management APIs and responsive UI.",
            challenge: [
                "Attendance page needed three different calculations from one raw API response simultaneously",
                "Subject-wise summary, overall percentage, and a 'safe-to-miss' class counter — all from one list",
                "Getting all three to stay in sync without numbers going wrong across edge cases"
            ],
            solution: [
                "Looped records once to build subject-wise present/total counts and overall percentage",
                "Wrote a while loop that increments missed classes and recalculates until percentage drops below 75%",
                "Handled all three outputs from a single API call — no redundant requests"
            ],
            tech: ["HTML5", "CSS", "JavaScript", "Node.js", "Express.js"],
            live: "https://campus-connect-qpma.onrender.com/",
            github: "https://github.com/yasaswini1408/Campus_Connect"
        },
        {
            title: "Flavors of India",
            badge: "Frontend",
            badgeColor: "bg-purple-900 text-purple-400",
            image: "/projects/flavors-of-india.png",
            description: "Responsive food ordering web app with menu browsing, dynamic cart management, and checkout.",
            challenge: [
                "Managing cart state dynamically without any framework",
                "Keeping total price in sync when items are added, removed or quantity updated"
            ],
            solution: [
                "Built a cart object in vanilla JS with add/remove/update functions",
                "Re-rendered the cart UI on every change — learned state management before touching React"
            ],
            tech: ["HTML5", "CSS", "JavaScript"],
            live: "https://food-ordering-website-blue.vercel.app/",
            github: "https://github.com/yasaswini1408/Food_Ordering_Website"
        },
        {
            title: "Visit Vizag",
            badge: "Frontend",
            badgeColor: "bg-purple-900 text-purple-400",
            image: "/projects/visit-vizag.png",
            description: "Comprehensive tourism platform to enhance the travel experience in Visakhapatnam.",
            challenge: [
                "Making the site feel like a real product — responsive, visually appealing, multi-section"
            ],
            solution: [
                "Used CSS Grid and Flexbox throughout for layout",
                "Added smooth scroll and consistent visual hierarchy across all sections"
            ],
            tech: ["HTML5", "CSS", "JavaScript"],
            live: "https://visitvizag.github.io/visitvizag/",
            github: "https://github.com/yasaswini1408/Visit_Vizag"
        },
        {
            title: "To-Do",
            badge: "Frontend",
            badgeColor: "bg-purple-900 text-purple-400",
            image: "/projects/to-do.png",
            description: "Clean interactive task manager with a dynamic progress tracker.",
            challenge: [
                "Progress bar glitching when all tasks are removed — division by zero error"
            ],
            solution: [
                "Handled zero-task edge case separately before calculating (completed/total)*100",
                "Updated bar width using inline styles on every state change"
            ],
            tech: ["HTML5", "CSS", "JavaScript"],
            live: "https://todo-app-kappa-ten-33.vercel.app/",
            github: "https://github.com/yasaswini1408/TODO"
        }
    ]

    const visibleProjects = showAll ? projects : projects.slice(0, 3)
    return(
        <section className="px-10 py-16 border-t border-gray-800">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Featured Projects</h1>
                <button onClick={() => setShowAll(!showAll)}
                    className="border border-purple-500 text-purple-400 px-3 py-1 rounded-lg text-sm">
                    {showAll ? "Show Less ↑" : "View All Projects →"}
                </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {visibleProjects.map((project, index) => (
                    <div key={index} className="bg-[#11111f] border border-gray-800 rounded-xl p-6 flex flex-col">
                        <div className="flex items-start gap-4 mb-4">
                            <img src={project.image}
                                alt={project.title}
                                className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-gray-700"/>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h2 className="font-bold text-lg leading-tight">{project.title}</h2>
                                    <a href={project.live} target="_blank" className="text-gray-400 hover:text-white text-lg ml-2">↗</a>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded mt-1 inline-block ${project.badgeColor}`}>
                                    {project.badge}
                                </span>
                            </div>
                        </div>

                        <div className="border-t border-gray-700 mb-4"></div>
                        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                        <div className="mb-4">
                            <p className="text-yellow-400 text-xs font-semibold mb-2">Challenge</p>
                            <ul className="space-y-1">
                                {project.challenge.map((point, i) => (
                                    <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                                        <span className="text-yellow-400 mt-0.5 flex-shrink-0">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <p className="text-green-400 text-xs font-semibold mb-2">Solution</p>
                            <ul className="space-y-1">
                                {project.solution.map((point, i) => (
                                    <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                                        <span className="text-green-400 mt-0.5 flex-shrink-0">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-500 text-xs font-semibold mb-2">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="bg-[#1a1a2e] border border-gray-700 px-2 py-1 rounded text-xs text-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4 text-sm mt-auto pt-4 border-t border-gray-700">
                            <a href={project.live} target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors">
                                Live Demo ↗
                            </a>
                            <a href={project.github} target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors">
                                GitHub ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Projects;