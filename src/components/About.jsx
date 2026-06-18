import profilePic from "../assets/profile-pic.png";
function About(){
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
                            <p className="text-white font-bold">SDE</p>
                        </div>
                    </div>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-700">
                    <div className="relative mb-10">
                        <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0d0d1a]"></div>
                        <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-5">
                            <h3 className="text-white font-bold text-lg mb-1">Bachelor of Technology in Computer Science</h3>
                            <p className="text-gray-400 text-sm mb-1">Vignan's Institute of Information Technology</p>
                            <p className="text-gray-500 text-sm mb-3">2023 – Present</p>
                            <p className="text-purple-400 font-bold">CGPA: 9.26</p>
                        </div>
                    </div>
                    <div className="relative mb-10">
                        <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0d0d1a]"></div>
                        <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-5">
                            <h3 className="text-white font-bold text-lg mb-1">Higher Secondary (MPC)</h3>
                            <p className="text-gray-400 text-sm mb-1">Sri Chaitanya Junior College</p>
                            <p className="text-gray-500 text-sm mb-3">2021 – 2023</p>
                            <p className="text-purple-400 font-bold">96.3%</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0d0d1a]"></div>
                        <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-5">
                            <h3 className="text-white font-bold text-lg mb-1">Secondary School Education</h3>
                            <p className="text-gray-400 text-sm mb-1">Kendriya Vidyalaya</p>
                            <p className="text-gray-500 text-sm mb-3">2021</p>
                            <p className="text-purple-400 font-bold">93.2%</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default About;