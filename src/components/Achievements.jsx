function Achievements(){
    return(
        <section className="px-10 py-16 border-t border-gray-800">
            <div className="bg-[#11111f] border border-gray-800 rounded-xl p-8">
                <h1 className="text-2xl font-bold mb-8">Achievements</h1>
                <div className="grid grid-cols-4 gap-4">

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-xl p-6 min-h-[280px]">
                        <p className="text-purple-400 text-3xl font-bold mb-3">01</p>
                        <h2 className="text-white text-lg font-semibold mb-2">Runner-Up – Google Gen AI Study Jams</h2>
                        <p className="text-gray-400 text-sm">
                            Secured runner-up position in the Google Gen AI Study Jams 2024 among participating student teams.
                        </p>
                    </div>

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-xl p-6 min-h-[280px]">
                        <p className="text-purple-400 text-3xl font-bold mb-3">02</p>
                        <h2 className="text-white text-lg font-semibold mb-2">Infosys Springboard Pragathi</h2>
                        <p className="text-gray-400 text-sm">
                            Selected for Infosys Springboard Pragathi Cohort 5, a competitive industry learning program.
                        </p>
                    </div>

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-xl p-6 min-h-[280px]">
                        <p className="text-purple-400 text-3xl font-bold mb-3">03</p>
                        <h2 className="text-white text-lg font-semibold mb-2">3-Star Coder – CodeChef</h2>
                        <p className="text-gray-400 text-sm">
                            Reached a 3-star rating with a maximum of 1611 on CodeChef, solving 850+ problems across both competitive programming platforms.
                        </p>
                    </div>

                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-xl p-6 min-h-[280px]">
                        <p className="text-purple-400 text-3xl font-bold mb-3">04</p>
                        <h2 className="text-white text-lg font-semibold mb-2">LeetCode</h2>
                        <p className="text-gray-400 text-sm">
                            Achieved a maximum rating of 1778 on LeetCode with 500+ problems solved, reflecting strong Data Structures & Algorithms proficiency.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Achievements;