import NoteHive from "../assets/note-hive.png";
import TinyShift from "../assets/tiny-shift.png"; 
import CampusConnect from "../assets/campus-connect.png"; 
function Projects(){
    return(
        <section>
            <h1>Featured Projects</h1>
            {/* project one */}
            <div>
                <div className="flex flex-wrap gap-3">
                    <span>NoteHive</span>
                    <span>FullStack</span>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <img src={NoteHive} alt="NH" />
                    </div>
                    <div>
                        <div>
                        <p>Secure Notes Rest API with JWT auth, bycrpt encryption, searching, pagination and sorting.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>JWT</span>
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-wrap gap-3">
                    <a href="https://notehive365.netlify.app/" target="_blank">Live Demo</a>
                    <a href="https://github.com/yasaswini1408/NoteHive" target="_blank">GitHub</a>
                </div>
            </div>
            {/* project two */}
            <div>
                <div className="flex flex-wrap gap-3">
                    <span>TinyShift</span>
                    <span>AI powered</span>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <img src={TinyShift} alt="TinyShift" />
                    </div>
                    <div>
                        <p>AI powered activity assistant with real time weather data and Groq AI to give personalized suggestions.</p>
                        <div className="flex flex-wrap gap-3">
                            <span>Node.js</span>
                            <span>Groq API</span>
                            <span>OpenWeatherMap</span>
                            <span>Vercel</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3">
                    <a href="https://tiny-shift.vercel.app/" target="_blank">Live Demo</a>
                    <a href="https://github.com/yasaswini1408/TinyShift" target="_blank">GitHub</a>
                </div>
            </div>
            {/* project three */}
            <div>
                <div className="flex flex-wrap gap-3">
                    <span>Campus Connect</span>
                    <span>Full Stack</span>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <img src={CampusConnect} alt="Campus Connect" />
                    </div>
                    <div>
                        <p>Campus communication platform with event & user management APIs and responsive UI.</p>
                        <div className="flex flex-wrap gap-3">
                            <span>HTML5</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3">
                    <a href="https://campus-connect-qpma.onrender.com/" target="_blank">Live Demo</a>
                    <a href="https://github.com/yasaswini1408/Campus_Connect" target="_blank">GitHub</a>
                </div>
            </div>


        </section>
    );
}
export default Projects;