import {SiCplusplus,SiC,SiPython,SiJavascript,SiHtml5,SiCss,SiReact,SiExpress,SiNodedotjs,SiMongodb,SiMysql,SiGit,SiGithub,SiPostman,SiFigma,SiVercel} from "react-icons/si";
import {VscVscode} from "react-icons/vsc";
function Skills(){
    return(
        <section className="px-10 py-16 border-t border-gray-800">
            <div className="grid grid-cols-2 gap-12">
                <div className="bg-[#11111f] border border-gray-800 rounded-xl p-8">
                    <h1 className="text-2xl font-bold mb-8">Skills & Tools</h1>

                    <div className="mb-5 flex items-start gap-4">
                        <p className="text-gray-400 w-20 pt-2 text-sm">Languages</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiCplusplus/> C++
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiC/>C
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiPython/>Python
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiJavascript/>Javascript
                            </span>
                        </div>
                    </div>

                    <div className="mb-5 flex items-start gap-4">
                        <p className="text-gray-400 w-20 pt-2 text-sm">Frontend</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiHtml5/>HTML5
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiCss/>CSS
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiReact/>ReactJS
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiJavascript/>Javascript
                            </span>
                        </div>
                    </div>

                    <div className="mb-5 flex items-start gap-4">
                        <p className="text-gray-400 w-20 pt-2 text-sm">Backend</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiExpress/>ExpressJS
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiNodedotjs/>NodeJS
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
                                <SiMongodb/>MongoDB
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiMysql/>SQL
                            </span>
                        </div>
                    </div>

                    <div className="mb-5 flex items-start gap-4">
                        <p className="text-gray-400 w-20 pt-2 text-sm">Tools</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiGit/>Git
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiGithub/>GitHub
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiPostman/>Postman
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <VscVscode/>VS Code
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiFigma/>Figma
                            </span>
                            <span className="bg-[#1a1a2e] border border-gray-700 px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2">
                                <SiVercel/>Vercel
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
                    git stats content will go here next
                </div>

            </div>
        </section>
    );
}
export default Skills;