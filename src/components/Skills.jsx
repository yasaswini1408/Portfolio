import { SiCplusplus, SiC, SiPython, SiJavascript, SiHtml5, SiCss, SiReact, SiExpress, SiNodedotjs, SiMongodb, SiMysql, SiGit, SiGithub, SiPostman, SiFigma, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const languageData = [
    { name: "JavaScript", value: 52, color: "#facc15" },
    { name: "Python", value: 20, color: "#3b82f6" },
    { name: "HTML", value: 13, color: "#ef4444" },
    { name: "C++", value: 7, color: "#a855f7" },
    { name: "Other", value: 8, color: "#9ca3af" },
];
function Skills() {
    return (
        <section className="px-10 py-16 border-t border-gray-800">
            <div className="grid grid-cols-2 gap-12">
                <div className="bg-[#11111f] border border-gray-800 rounded-xl p-8">
                    <h1 className="text-2xl font-bold mb-8">Skills & Tools</h1>

                    <div className="mb-5 flex items-start gap-4">
                        <p className="text-gray-400 w-20 pt-2 text-sm">Languages</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiCplusplus /> C++
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiC />C
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiPython />Python
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiJavascript />Javascript
                            </span>
                        </div>
                    </div>

                    <div className="mb-5 flex items-start gap-4">
                        <p className="text-gray-400 w-20 pt-2 text-sm">Frontend</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiHtml5 />HTML5
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiCss />CSS
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiReact />ReactJS
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiJavascript />Javascript
                            </span>
                        </div>
                    </div>

                    <div className="mb-5 flex items-start gap-4">
                        <p className="text-gray-400 w-20 pt-2 text-sm">Backend</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiExpress />ExpressJS
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiNodedotjs />NodeJS
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                RestAPI's
                            </span>
                        </div>
                    </div>

                    <div className="mb-5 flex items-start gap-4">
                        <p className="text-gray-400 w-20 pt-2 text-sm">Database</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiMongodb />MongoDB
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiMysql />SQL
                            </span>
                        </div>
                    </div>

                    <div className="mb-5 flex items-start gap-4">
                        <p className="text-gray-400 w-20 pt-2 text-sm">Tools</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiGit />Git
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiGithub />GitHub
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiPostman />Postman
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <VscVscode />VS Code
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiFigma />Figma
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiVercel />Vercel
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#11111f] border border-gray-800 rounded-xl p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">GitHub Stats</h1>
                        <button className="border border-purple-500 text-purple-400 px-3 py-1 rounded-lg text-sm">
                            View Profile
                        </button>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm mb-1">🔁 Contribution Streak</p>
                        <p className="text-3xl font-bold text-purple-400 mb-6">24 <span className="text-sm text-gray-400">days</span></p>

                        <p className="text-gray-400 text-sm mb-1">📊 Total Contributions</p>
                        <p className="text-3xl font-bold text-purple-400 mb-6">487</p>

                        <p className="text-gray-300 font-semibold mb-3">Top Languages</p>
                        <div className="flex items-center gap-6">
                            <div style={{ width: 120, height: 120 }}>
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Pie
                                            data={languageData}
                                            dataKey="value"
                                            innerRadius={35}
                                            outerRadius={55}
                                        >
                                            {languageData.map((entry, index) => (
                                                <Cell key={index} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="space-y-2 flex-1">
                                {languageData.map((lang, index) => (
                                    <div key={index} className="flex justify-between text-sm">
                                        <span className="text-gray-300 flex items-center gap-2">
                                            <span style={{ backgroundColor: lang.color }} className="w-2 h-2 rounded-full inline-block"></span>
                                            {lang.name}
                                        </span>
                                        <span className="text-gray-400">{lang.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Skills;