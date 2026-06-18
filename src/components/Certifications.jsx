function Certifications() {
    return (
        <section className="px-10 py-16 border-t border-gray-800">
            <div className="bg-[#11111f] border border-gray-800 rounded-xl p-8">
                <h1 className="text-2xl font-bold mb-6">Certifications</h1>

                <div className="grid grid-cols-3 gap-4">

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-black aspect-video"></div>
                        <div className="p-4">
                            <p className="text-white font-semibold">Operating System Fundamentals (Elite)</p>
                            <p className="text-gray-400 text-sm mb-3">NPTEL</p>
                            <button className="text-purple-400 text-sm">View Certificate ↗</button>
                        </div>
                    </div>

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-black aspect-video"></div>
                        <div className="p-4">
                            <p className="text-white font-semibold">Database Management Systems (Elite)</p>
                            <p className="text-gray-400 text-sm mb-3">NPTEL</p>
                            <button className="text-purple-400 text-sm">View Certificate ↗</button>
                        </div>
                    </div>

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-black aspect-video"></div>
                        <div className="p-4">
                            <p className="text-white font-semibold">Programming in Java (Elite)</p>
                            <p className="text-gray-400 text-sm mb-3">NPTEL</p>
                            <button className="text-purple-400 text-sm">View Certificate ↗</button>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center gap-4 mt-4">

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden w-full md:w-[calc(33.333%-0.67rem)]">
                        <div className="bg-black aspect-video"></div>
                        <div className="p-4">
                            <p className="text-white font-semibold">Python Essentials 1 & 2</p>
                            <p className="text-gray-400 text-sm mb-3">Cisco</p>
                            <button className="text-purple-400 text-sm">View Certificate ↗</button>
                        </div>
                    </div>

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden w-full md:w-[calc(33.333%-0.67rem)]">
                        <div className="bg-black aspect-video"></div>
                        <div className="p-4">
                            <p className="text-white font-semibold">Front End Web Developer</p>
                            <p className="text-gray-400 text-sm mb-3">Infosys Springboard</p>
                            <button className="text-purple-400 text-sm">View Certificate ↗</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
export default Certifications;