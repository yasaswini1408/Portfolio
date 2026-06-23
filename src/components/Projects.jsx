import { useState } from "react"

function Projects() {
    const [showAll, setShowAll] = useState(false)
    const projects = [
        {
            title: "NoteHive",
            badge: "Full Stack",
            badgeColor: "bg-green-900 text-green-400",
            image: "/projects/note-hive.png",
            description: "Secure Notes App with JWT auth, bcrypt encryption, search, pagination and sorting.",
            challenge: [
                "Building complete auth flow end-to-end",
                "Middleware to verify JWT on every protected route",
                "Preventing cross-user data access"
            ],
            solution: [
                "Built signup → login → middleware one step at a time",
                "Tested each step in Postman before moving forward",
                "Filtered every DB query with both note ID + userId"
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
            description: "AI-powered activity assistant with real-time weather and Groq AI suggestions.",
            challenge: [
                "API keys exposed in frontend JS code",
                "Needed secure architecture without breaking UX",
                "Deploying env variables correctly on Vercel"
            ],
            solution: [
                "Created Vercel serverless function as a middleman",
                "Stored keys as env variables, never in code",
                "Frontend calls /api/getplan instead of Groq directly"
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
            description: "Campus communication platform with event & user management APIs.",
            challenge: [
                "3 different calculations from one API response",
                "Subject-wise %, overall %, and safe-to-miss count",
                "Keeping all three in sync without errors"
            ],
            solution: [
                "Looped records once for subject-wise counts",
                "while loop increments missed classes until below 75%",
                "All three outputs from a single API call"
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
            description: "Responsive food ordering app with dynamic cart and checkout.",
            challenge: [
                "Managing cart state without any framework",
                "Keeping total price in sync on every change"
            ],
            solution: [
                "Built cart object with add/remove/update functions",
                "Re-rendered cart UI on every state change"
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
            description: "Tourism platform to enhance travel experience in Visakhapatnam.",
            challenge: [
                "Making it feel like a real product across devices"
            ],
            solution: [
                "CSS Grid + Flexbox for layout",
                "Smooth scroll + consistent visual hierarchy"
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
            description: "Task manager with dynamic progress tracker.",
            challenge: [
                "Progress bar breaking when all tasks removed"
            ],
            solution: [
                "Handled zero-task edge case before calculating %",
                "Updated bar width via inline styles on every change"
            ],
            tech: ["HTML5", "CSS", "JavaScript"],
            live: "https://todo-app-kappa-ten-33.vercel.app/",
            github: "https://github.com/yasaswini1408/TODO"
        }
    ]
    const visibleProjects = showAll ? projects : projects.slice(0, 3)
    return (
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
                                className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-gray-700" />
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