import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { IconContext } from "react-icons";

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
                icon: <GrMysql />
            },
        ]
    },
]

function TechStacks () {
    return(
        (techStacks.map((stack, idx) => 
            <>
                <div key={stack.title} className={`grid grid-cols-2 text-xl ${idx != techStacks.length - 1 ? "my-6" : "mt-6"}`}>
                    <h2>{stack.title}</h2>
                    <div className="flex flex-wrap gap-6 gap-y-3">
                        {stack.skills.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-2">
                                <IconContext.Provider value={{ size: '24px', color: skill.color }}>
                                    <span>{skill.icon}</span>
                                </IconContext.Provider>
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {idx != techStacks.length - 1 && <div className="w-full h-[0.5px] bg-gradient-to-r from-transparent from-5% via-primary to-transparent to-95%"></div>  }          
            </>
        ))
    );
}

export default TechStacks;