import { IconContext } from "react-icons";
import Header from "../Header";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
    {
        title: "Github",
        icon: <FaGithub />
    },
    {
        title: "wenyang.heng@outlook.com",
        icon: <MdEmail />
    },
    {
        title: "LinkedIn",
        icon: <FaLinkedin /> 
    }
]

function Footer() {
    return(
        <footer className="font-roboto mt-24 text-center text-lg text-gray">
            <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent from-5% via-gray-700 to-transparent to-95%"></div>
            <div className="flex justify-center items-center gap-4 py-12">
                {socials.map((social, idx) => (
                    <>
                        <div key={social.title} className="flex items-center gap-1">
                            <IconContext.Provider value={{ size: "24px" }}>
                                {social.icon}
                            </IconContext.Provider>
                            <p>{social.title}</p>
                        </div>
                        {(idx != socials.length - 1) && <hr className="rounded-full w-2 h-2 bg-primary border-0"/>}
                    </>
                ))}
            </div>
        </footer>
    );
}

export default Footer;