import profilePic from "../assets/profilepic.png"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { SiCodechef, SiLeetcode } from "react-icons/si"
import { useState, useEffect } from "react"

const titles = [
    "Frontend Developer",
    "Full Stack Developer",
    "Problem Solver",
    "Computer Science Student"
]

function Home() {
    const [titleIndex, setTitleIndex] = useState(0)
    const [displayed, setDisplayed] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const current = titles[titleIndex]

        if (!isDeleting && displayed === current) {
            const pause = setTimeout(() => setIsDeleting(true), 1500)
            return () => clearTimeout(pause)
        }

        if (isDeleting && displayed === "") {
            setIsDeleting(false)
            setTitleIndex((prev) => (prev + 1) % titles.length)
            return
        }

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayed(current.slice(0, displayed.length + 1))
            } else {
                setDisplayed(current.slice(0, displayed.length - 1))
            }
        }, isDeleting ? 60 : 100)

        return () => clearTimeout(timeout)
    }, [displayed, isDeleting, titleIndex])

    return (
        <section className="px-10 py-10">
            <div className="inline-flex items-center gap-2 bg-[#1a1a2e] border border-gray-700 px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-gray-300 text-sm">Open to Internships</span>
            </div>

            <div className="grid grid-cols-3 gap-8 items-center">

                <div className="flex flex-col justify-center">
                    <p className="text-gray-300 text-lg">Hi, I'm</p>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-1">
                        Yasaswini Samala
                    </h1>
                    <h2 className="text-xl font-bold text-white mt-3 min-h-[2rem]">
                        {displayed}
                        <span className="animate-pulse text-purple-400">|</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                        I love turning ideas into real web applications.
                        Currently learning, building and improving every day.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="#projects" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors">
                            View My Work
                        </a>
                        <a href="#contact" className="border border-gray-600 hover:border-purple-400 px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors">
                            Let's Connect
                        </a>
                    </div>

                    <p className="text-gray-500 text-sm mt-6 mb-3">Connect with me</p>
                    <div className="flex gap-3">
                        {[
                            { href: "https://github.com/yasaswini1408", icon: <FaGithub /> },
                            { href: "https://www.linkedin.com/in/yasaswini-samala-8007022a6/", icon: <FaLinkedin /> },
                            { href: "https://www.codechef.com/users/yasaswini_05", icon: <SiCodechef /> },
                            { href: "https://leetcode.com/u/yasaswini14/", icon: <SiLeetcode /> },
                            { href: "mailto:yasaswinisamala2005@gmail.com", icon: <FaEnvelope /> },
                        ].map((social, i) => (
                            <a key={i} href={social.href} target="_blank"
                               className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400 transition-colors">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-2xl scale-110"></div>
                        <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[3px]">
                            <div className="w-full h-full rounded-full overflow-hidden bg-[#0d0d1a]">
                                <img
                                    src={profilePic}
                                    alt="Yasaswini"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1a1a2e] border border-gray-700 rounded-xl p-6 font-mono text-sm">
                    <p className="text-yellow-400">yasaswini@developer:~$</p>
                    <div className="mt-4">
                        <span className="text-green-400">&gt; whoami</span>
                        <p className="text-white">A passionate learner</p>
                        <p className="text-white">Problem solver</p>
                        <p className="text-white">Future Full Stack Developer</p>
                    </div>
                    <div className="mt-4">
                        <span className="text-green-400">&gt; skills --load</span>
                        <p className="text-white">C++, Python, JavaScript,</p>
                        <p className="text-white">React, Node.js, MongoDB</p>
                    </div>
                    <div className="mt-4">
                        <span className="text-green-400">&gt; goal --next</span>
                        <p className="text-white">Build • Learn • Grow</p>
                        <p className="text-white">Get Internship</p>
                        <p className="text-white">Build real world applications</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-12 border border-gray-700 rounded-xl p-6">
                <div className="text-center flex items-center justify-center gap-3">
                    <div>
                        <p className="text-2xl font-bold text-purple-400">10+</p>
                        <p className="text-gray-400 text-xs">Projects Built</p>
                    </div>
                </div>
                <div className="text-center flex items-center justify-center gap-3">
                    <div>
                        <p className="text-2xl font-bold text-purple-400">1000+</p>
                        <p className="text-gray-400 text-xs">Problems Solved</p>
                    </div>
                </div>
                <div className="text-center flex items-center justify-center gap-3">
                    <div>
                        <p className="text-2xl font-bold text-purple-400">9.32</p>
                        <p className="text-gray-400 text-xs">CGPA</p>
                    </div>
                </div>
                <div className="text-center flex items-center justify-center gap-3">
                    <div>
                        <p className="text-gray-400 text-xs">Class of</p>
                        <p className="text-2xl font-bold text-purple-400">2027</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Home;