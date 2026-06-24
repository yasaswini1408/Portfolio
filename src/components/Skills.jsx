import { SiCplusplus, SiC, SiPython, SiJava, SiHtml5, SiCss, SiReact, SiExpress, SiNodedotjs, SiMongodb, SiMysql, SiGit, SiGithub, SiPostman, SiFigma, SiVercel } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

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
                                <SiJava /> Java
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

                <div className="bg-[#11111f] border border-gray-800 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-xl font-bold">GitHub Stats</h1>
                        <a href="https://github.com/yasaswini1408" target="_blank"
                            className="border border-purple-500 text-purple-400 px-3 py-1 rounded-lg text-sm">
                            View Profile
                        </a>
                    </div>
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=yasaswini1408&show_icons=true&theme=tokyonight&hide_border=true&bg_color=11111f&title_color=a855f7&icon_color=a855f7&text_color=9ca3af&count_private=true"
                        alt="GitHub Stats"
                        className="w-full rounded-lg mb-3"
                    />
                    <img
                        src="https://github-readme-streak-stats.herokuapp.com?user=yasaswini1408&theme=tokyonight&hide_border=true&background=11111f&ring=a855f7&fire=a855f7&currStreakLabel=a855f7&sideLabels=9ca3af&dates=9ca3af&sideNums=ffffff&currStreakNum=ffffff"
                        alt="GitHub Streak"
                        className="w-full rounded-lg mb-3"
                    />
                </div>

            </div>
        </section >
    );
}
export default Skills;