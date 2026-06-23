import {FaGithub,FaLinkedin,FaEnvelope,FaDownload} from "react-icons/fa"
function Contact() {
    return (
        <footer className="px-10 py-16 border-t border-gray-800">
            <div className="bg-[#11111f] border border-gray-800 rounded-xl p-10 text-center">
                <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                    I'm always open to discussing new opportunities, collaborations.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <a href="mailto:yasaswinisamala2005@gmail.com"
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-lg text-white transition duration-300">
                        <FaEnvelope /> Email Me
                    </a>
                    <a href="https://www.linkedin.com/in/yasaswini-samala-8007022a6/"
                        target="_blank"
                        className="flex items-center gap-2 border border-gray-600 hover:border-purple-500 hover:text-purple-400 px-5 py-3 rounded-lg text-white transition duration-300">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/yasaswini1408"
                        target="_blank"
                        className="flex items-center gap-2 border border-gray-600 hover:border-purple-500 hover:text-purple-400 px-5 py-3 rounded-lg text-white transition duration-300">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://drive.google.com/file/d/1mNIiSl2BoAXcAxFX9MsaqqVoR3eq4q2Y/view?usp=sharing"
                        target="_blank"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg text-white transition duration-300">
                        <FaDownload /> Resume
                    </a>
                </div>
                <div className="border-t border-gray-800 pt-6 flex justify-center items-center text-sm text-gray-500">
                    <p>© 2026 Yasaswini Samala. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default Contact;