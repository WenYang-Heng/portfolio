import { MdArrowOutward } from "react-icons/md";
import { useElementInView } from "../../hooks/useElementInView";
import { IconContext } from "react-icons";

const projects = [
    {
        title: "Protocol 67",
        stacks: ["React.js", "FastAPI", "LoRA", "PostgreSQL"],
        description: "An agentic AI system that translates internet slang into formal english and performs sentiment analysis with user feedback to improve translation accuracy.",
        link: "https://github.com/hsyen78444/Protocol-67"
    },
    {
        title: "Programming League National 2025",
        stacks: ["Next.js", "Tailwind", "TypeScript"],
        description: "A website that showcases an overview of the event Programming League National 2025. A live leaderboard is implemented by fetching standings from Codeforces API",
        link: "https://programmingleaguenational2025.vercel.app/"
    },
    {
        title: "SmartGrow - IoT Plant Monitoring System",
        stacks: ["React.js", "Firebase", "Node.js"],
        description: "A website that automates plant management using IoT devices that monitors environmental conditions such as soil moisture, temperature, and humidity with actuators to control watering and lighting conditions.",
        link: "https://smartgrow-kappa.vercel.app/"
    },    
]

function Projects() {
    const [elementRef, isInView] = useElementInView({ threshold: 0.1, once: true });

    return(
        <div ref={elementRef} className="grid md:grid-cols-2 gap-4">
            {projects.map(project => (
                <div key={project.title} className={`rounded-md p-4 bg-[#0F0F10] ${isInView ? "animate-fadeinup" : "opacity-0"}`}>
                    <h2 className="mb-4 font-bold text-xl text-gray-light">{project.title}</h2>
                    <div className="flex gap-2 items-center">
                        {project.stacks.map((stack) => (
                            <p key={stack} className="text-sm bg-[#8DDDCB] text-[#08211B] rounded-sm px-2 py-0.5">{stack}</p>
                        ))}
                    </div>
                    <p className="text-base text-gray-400 mt-4">{project.description}</p>
                    <div className="flex items-center mt-6 gap-1 text-base group cursor-pointer w-fit">
                        <a href={project.link} target="_blank" className="text-primary hover:underline">
                            View
                        </a>
                        <span className="transition-transform duration-150 ease-in-out cursor-pointer group-hover:-translate-y-1 group-hover:translate-x-1">
                            <MdArrowOutward className="text-primary" />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
