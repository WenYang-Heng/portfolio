import { IconContext } from "react-icons";
import Header from "../Header";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
    {
        title: "Github",
        icon: <FaGithub />,
        link: "https://github.com/WenYang-Heng"
    },
    {
        title: "wenyang.heng@outlook.com",
        icon: <MdEmail />
    },
    {
        title: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/heng-wen-yang-10b5a8266"
    }
]

function Footer() {
    return(
        <footer id="contact" className="px-4 mt-24 text-center text-base text-gray-light border-t-1 border-gray-900">
            {/* <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent from-5% via-gray-700 to-transparent to-95%"></div> */}
            <div className="sm:flex justify-between items-center md:mx-auto md:w-[80%] max-w-5xl">
                <p className="mt-4 sm:mt-0 font-bold">Contact Me</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 py-4 sm:py-8"> 
                    {socials.map((social, idx) => (
                        <>
                            <div key={social.title} className={`flex items-center gap-1`}>
                                <IconContext.Provider value={{ size: "20px" }}>
                                    <span>{social.icon}</span>
                                </IconContext.Provider>
                                <a href={social.link} target="_blank">{social.title}</a>
                            </div>
                            {/* {(idx != socials.length - 1) && <hr className="rounded-full w-2 h-2 bg-primary border-0"/>} */}
                        </>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;