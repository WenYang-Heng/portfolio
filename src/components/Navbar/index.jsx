import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";
import { useState } from "react";
const navlinks = [
    {
        name: "Skills"
    }, 
    {
        name: "Projects"
    },
    {
        name: "Contact"
    }
]

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

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
                        <li><a href="">{link.name}</a></li>
                    ))}
                </ul>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block md:w-[80%] mx-auto max-w-5xl text-gray-400">
                <ul className="flex justify-end text-lg gap-12">
                    {navlinks.map(link => (
                        <li>{link.name}</li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;