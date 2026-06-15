import profilePic from "../assets/profile-pic.png"
function Home() {
    return (
        <section className="px-10 py-16">
            <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col justify-center">
                    <p>Hi, I'm</p>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                        Yasaswini Samala
                    </h1>
                    <h2>
                        Full-Stack Developer & Computer Science Student
                    </h2>
                    <p className="text-gray-400 mt-3">
                        I love turning ideas into real web applications.
                        Currently learning, building and improving every day.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <button className="bg-purple-600 px-6 py-3 rounded-lg">View my work</button>
                        <button className="border border-white px-6 py-3 rounded-lg">Contact Me</button>
                    </div>
                </div>

                <div>
                    <img src={profilePic} alt="profile-pic"></img>
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
                        <p className="text-white">Make a Difference</p>
                    </div>
                </div>
            </div>
            <div className="py-20">
                stats
            </div>
        </section>
    );
}
export default Home;