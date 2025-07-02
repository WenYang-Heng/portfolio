import Header from "../Header";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiSqlite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { IconContext } from "react-icons";
import FirebaseLogo from "../../logos/Firebase-Logo";
import { useElementInView } from "../../hooks/useElementInView";

const techStacks = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                icon: <FaReact />,
                color: "#61DBFB"
                
            },
            {
                name: "Next.js",
                icon: <SiNextdotjs />
            },
            {
                name: "Tailwind",
                icon: <RiTailwindCssFill />,
                color: "#38BDF8"                          
            },
            {
                name: "JavaScript",
                icon: <SiJavascript />,
                color: "#F7DF1E"                         
            },
            {
                name: "Typscript",
                icon: <SiTypescript />,
                color: "#3178C6"                       
            }           
        ]
    },
    {
        title: "Backend",
        skills: [
            {
                name: "MySQL",
                icon: <GrMysql />,
                color: "#00758F"
            },
            {
                name: "SQLite",
                icon: <SiSqlite />,
                color: "#003B57"
            },
            {
                name: "Firebase",
                icon: <FirebaseLogo />
            }
        ]
    },
]

function Skills() {
    const [elementRef, isInView] = useElementInView({ threshold: 0.1 });
    return (
        <section>
            <Header title={"Skills"}/>
            {techStacks.map((stack, idx) => 
                <>
                    <div key={stack.title} className={`grid md:grid-cols-2 text-gray-light ${idx != techStacks.length - 1 ? "my-6" : "mt-6"} ${isInView ? "animate-fadeinup" : "opacity-0"}`}>
                        <h2 ref={elementRef} className="text-xl">{stack.title}</h2>
                        <div className="flex flex-wrap gap-6 gap-y-3 mt-2">
                            {stack.skills.map((skill, index) => (
                                <div key={skill.name} className={`flex items-center gap-2`}>
                                    <IconContext.Provider value={{ size: '24px', color: skill.color }}>
                                        <span>{skill.icon}</span>
                                    </IconContext.Provider>
                                    <p>{skill.name}</p> 
                                </div>
                            ))}
                        </div>
                    </div>
                    {idx != techStacks.length - 1 && <div className={`w-full h-[0.5px] bg-gradient-to-r from-transparent from-5% via-gray-700 to-transparent to-95% ${isInView ? "animate-fadeinup" : "opacity-0"}`}></div>}          
                </>
            )}
        </section>
    );
}

export default Skills