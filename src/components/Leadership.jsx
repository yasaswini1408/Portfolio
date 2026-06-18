function Leadership(){
    return(
        <section className="px-10 py-16 border-t border-gray-800">
            <div className="bg-[#11111f] border border-gray-800 rounded-xl p-8">
                <h1 className="text-2xl font-bold mb-6">Leadership Activities</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-5">
                        <p className="text-white text-lg font-semibold">
                            Conducted introductory C programming sessions for junior students (~10 days); mentored peers on core concepts.
                        </p>
                    </div>
                    <div className="bg-[#1a1a2e] border border-gray-700 rounded-lg p-5">
                        <p className="text-white text-lg font-semibold">
                            Coordinated fresher cultural events and participated in college technical events and coding contests.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Leadership;