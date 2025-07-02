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
        <footer className="mx-4 mt-24 text-center text-lg text-gray">
            <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent from-5% via-gray-700 to-transparent to-95%"></div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 py-12">
                {socials.map((social, idx) => (
                    <>
                        <div key={social.title} className={`flex items-center gap-2`}>
                            <IconContext.Provider value={{ size: "24px" }}>
                                <span>{social.icon}</span>
                            </IconContext.Provider>
                            <a href={social.link} target="_blank" className="text-base">{social.title}</a>
                        </div>
                        {(idx != socials.length - 1) && <hr className="rounded-full w-2 h-2 bg-primary border-0"/>}
                    </>
                ))}
            </div>
        </footer>
    );
}

export default Footer;