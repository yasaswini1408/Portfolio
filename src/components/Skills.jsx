function Skills(){
    return(
        <section>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2>Skills & Tools</h2>
                    <div className="flex flex-wrap gap-3">
                        <p>Languages</p>
                        <div className="flex flex-wrap gap-3">
                            <span>C++</span>
                            <span>C</span>
                            <span>Python</span>
                            <span>Javascript</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <p>Frontend</p>
                        <div className="flex flex-wrap gap-3">
                            <span>HTML5</span>
                            <span>CSS</span>
                            <span>ReactJS</span>
                            <span>Javascript</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <p>Backend</p>
                        <div className="flex flex-wrap gap-3">
                            <span>ExpressJS</span>
                            <span>NodeJS</span>
                            <span>RestAPI's</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <p>Database</p>
                        <div className="flex flex-wrap gap-3">
                            <span>MongoDB</span>
                            <span>SQL</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <p>Tools</p>
                        <div className="flex flex-wrap gap-3">
                            <span>Git</span>
                            <span>GitHub</span>
                            <span>Postman</span>
                            <span>VSCode</span>
                            <span>Figma</span>
                            <span>Vercel</span>
                        </div>
                    </div>
                </div>
                <div>
                    git stats has to be filled here
                </div>
            </div>
        </section>
    );
}
export default Skills;