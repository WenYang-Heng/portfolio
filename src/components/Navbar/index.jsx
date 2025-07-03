import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useState } from "react";
const navlinks = [
    {
        name: "Home",
        href: "#home"
    },
    {
        name: "Skills",
        href: "#skills"
    }, 
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Contact",
        href: "#contact"
    }
]

function Navbar({ activeSection }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const handleNavClick = (href) => {
        setIsNavOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <nav className="text-gray-light fixed z-20 w-full bg-main-bg py-8 md:py-4 px-4 md:px-0 border-b-1 border-gray-900">
            <button className="p-4 z-30 fixed top-0 right-0 md:hidden" onClick={toggleNav}>
                <IconContext.Provider value={{ size: 32 }}>
                    {isNavOpen ? <IoClose className="text-gray-light" /> : <RxHamburgerMenu className="text-gray-light" /> }
                </IconContext.Provider>
            </button>
            {/* Mobile Nav */}
            <div className={`fixed top-0 right-0 h-full w-full z-10 p-4 bg-[#0F0F10] text-2xl transition-transform duration-250 ${isNavOpen ? "translate-x-0" : "translate-x-full" }`}>
                <ul className="flex flex-col justify-center items-center h-full gap-12">
                    {navlinks.map(link => (
                        <li>                            
                            <button onClick={() => handleNavClick(link.href)} className="hover:text-primary transition-colors duration-200">
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block md:w-[80%] mx-auto max-w-5xl text-gray-400">
                <ul className="flex justify-end text-lg gap-12">
                    {navlinks.map(link => (
                        <li key={link.name} className="hover:text-primary transition-colors duration-200">
                            <button onClick={() => handleNavClick(link.href)}>{link.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;