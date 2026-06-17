function Achievements(){
    return(
        <section className="px-10 py-16 border-t border-gray-800">
            <div className="bg-[#11111f] border border-gray-800 rounded-xl p-8">
                <h1 className="text-2xl font-bold mb-6">Achievements</h1>
                <div className="space-y-3">
                    <p className="text-gray-300">LeetCode Max Rating: 1778 | 500+ problems solved.</p>
                    <p className="text-gray-300">CodeChef 2-Star (Max Rating: 1611) | 850+ problems solved.</p>
                    <p className="text-gray-300">Runner-Up – Google Gen AI Study Jams 2024.</p>
                    <p className="text-gray-300">Selected for Infosys Springboard Pragathi Cohort 5.</p>
                </div>
            </div>
        </section>
    );
}
export default Achievements;