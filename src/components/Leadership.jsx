import {FaCheckCircle} from "react-icons/fa"
function Leadership() {
    return (
        <section className="px-10 py-16 border-t border-gray-800">
            <div className="bg-[#11111f] border border-gray-800 rounded-xl p-8">
                <h1 className="text-2xl font-bold mb-6">Leadership Activities</h1>
                <div className="space-y-3">
                    <p className="text-gray-300 flex items-center gap-2">
                        <FaCheckCircle className="text-purple-400 flex-shrink-0" />Conducted introductory C programming sessions for junior students (~10 days); mentored peers on core concepts.</p>
                    <p className="text-gray-300 flex items-center gap-2">
                        <FaCheckCircle className="text-purple-400 flex-shrink-0" />Coordinated fresher cultural events and participated in college technical events and coding contests.</p>
                </div>
            </div>
        </section>
    );
}
export default Leadership;