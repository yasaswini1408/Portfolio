import profilePic from "../assets/profile-pic.png";
function About() {
    return (
        <section className="px-10 py-16 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-10">About Me</h2>
            <div className=" grid grid-cols-2 gap-12">
                <div>
                    <p className="text-gray-400 mb-4">
                        I'm a final year Computer Science undergraduate with a passion
                        for building scalable and user-friendly web applications.
                    </p>
                    <p className="text-gray-400 mb-4">
                        I enjoy solving problems, learning new technologies
                        and turning ideas into real-world solutions.
                    </p>
                    <p className="text-gray-400 mb-8">
                        I have strong foundation in Data Structures & Algorithms,
                        OOP and DBMS.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">Education</p>
                            <p className="text-white font-bold">B.Tech CSE</p>
                        </div>
                        <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">College</p>
                            <p className="text-white font-bold">Vignan's IIT, Visakhapatnam</p>
                        </div>
                        <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">CGPA</p>
                            <p className="text-white font-bold">9.26</p>
                        </div>
                        <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-4">
                            <p className="text-gray-400 text-sm">Focus</p>
                            <p className="text-white font-bold">MERN Stack</p>
                        </div>
                    </div>
                </div>

                <div className="relative pl-6 border-l-2 border-gray-700">
                    <div className="relative mb-6">
                        <div className="absolute -left-[33px] top-2 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#0d0d1a]"></div>
                        <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-white font-bold text-sm">B.Tech in Computer Science</h3>
                                    <p className="text-gray-400 text-xs">Vignan's Institute of Information Technology</p>
                                </div>
                                <span className="text-purple-400 font-bold text-xs ml-2 whitespace-nowrap">CGPA: 9.26</span>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">2023 – Present</p>
                        </div>
                    </div>
                    <div className="relative mb-6">
                        <div className="absolute -left-[33px] top-2 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#0d0d1a]"></div>
                        <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-white font-bold text-sm">Higher Secondary (MPC)</h3>
                                    <p className="text-gray-400 text-xs">Sri Chaitanya Junior College</p>
                                </div>
                                <span className="text-purple-400 font-bold text-xs ml-2 whitespace-nowrap">96.3%</span>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">2021 – 2023</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[33px] top-2 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#0d0d1a]"></div>
                        <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-white font-bold text-sm">Secondary School Education</h3>
                                    <p className="text-gray-400 text-xs">Kendriya Vidyalaya</p>
                                </div>
                                <span className="text-purple-400 font-bold text-xs ml-2 whitespace-nowrap">93.2%</span>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">2021</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default About;