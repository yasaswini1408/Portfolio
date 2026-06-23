function Certifications() {
    return (
        <section className="px-10 py-16 border-t border-gray-800">
            <div className="bg-[#11111f] border border-gray-800 rounded-xl p-8">
                <h1 className="text-2xl font-bold mb-6">Certifications</h1>

                <div className="grid grid-cols-3 gap-4">

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden">
                        <div className="h-40 overflow-hidden">
                            <img
                                src="/certificates/os.png"
                                alt="Operating System Fundamentals Certificate"
                                className="w-full object-cover object-top"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-white font-semibold">Operating System Fundamentals (Elite)</p>
                            <p className="text-gray-400 text-sm mb-3">NPTEL</p>
                            <button onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/1UjM9ongAozu-iqZapuQZnUObCMQ7nEGB/view?usp=sharing",
                                    "_blank"
                                )}
                                className="text-purple-400 text-sm">View Certificate ↗</button>
                        </div>
                    </div>

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden">
                        <div className="h-40 overflow-hidden">
                            <img
                                src="/certificates/dbms.png"
                                alt="DBMS Certificate"
                                className="w-full object-cover object-top"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-white font-semibold">Database Management Systems (Elite)</p>
                            <p className="text-gray-400 text-sm mb-3">NPTEL</p>
                            <button onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/1gmqsp9obCibccN2NOJ4xmiOwwAgf9UwB/view?usp=sharing",
                                    "_blank"
                                )}
                                className="text-purple-400 text-sm">View Certificate ↗</button>
                        </div>
                    </div>

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden">
                        <div className="h-40 overflow-hidden">
                            <img
                                src="/certificates/java.png"
                                alt="Programming in Java Certificate"
                                className="w-full object-cover object-top"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-white font-semibold">Programming in Java (Elite)</p>
                            <p className="text-gray-400 text-sm mb-3">NPTEL</p>
                            <button onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/1wOhR5yzU2_wOxArxiO7qjlORqUZF34UL/view?usp=sharing",
                                    "_blank"
                                )}
                                className="text-purple-400 text-sm">View Certificate ↗</button>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center gap-4 mt-4">

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden w-full md:w-[calc(33.333%-0.67rem)]">
                        <div className="h-40 overflow-hidden">
                            <img
                                src="/certificates/python-essentials.png"
                                alt="Python Essentials 1 & 2"
                                className="w-full object-cover object-top"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-white font-semibold">Python Essentials 1 & 2</p>
                            <p className="text-gray-400 text-sm mb-3">Cisco</p>
                            <button onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/1VxyPAPhnzvgIxxZJXEV-VJwrSCOmYPez/view?usp=sharing",
                                    "_blank"
                                )}
                                className="text-purple-400 text-sm">View Certificate ↗</button>
                        </div>
                    </div>

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden w-full md:w-[calc(33.333%-0.67rem)]">
                        <div className="h-40 overflow-hidden">
                            <img
                                src="/certificates/frontend-web-developer.png"
                                alt="Front End Web Developer"
                                className="w-full object-cover object-top"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-white font-semibold">Front End Web Developer</p>
                            <p className="text-gray-400 text-sm mb-3">Infosys Springboard</p>
                            <button onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/1hEM22Y6QUr2pTdVPVuQ1JR5N6VGS8nGk/view?usp=sharing",
                                    "_blank"
                                )}
                                className="text-purple-400 text-sm">View Certificate ↗</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
export default Certifications;