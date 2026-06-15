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

                <div className="flex justify-center items-center">
                    <img src={profilePic} alt="profile" className="rounded-2xl w-80 h-80 object-cover"/>
                </div>
            </div>
        </section>
    );
}
export default About;