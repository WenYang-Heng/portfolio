import { FiExternalLink } from "react-icons/fi";

const projects = [
    {
        title: "Programming League National 2025",
        stacks: ["Next.js", "Tailwind", "TypeScript"],
        description: "Website of competitive programming event with. A live leaderbaord is implemented by fetching standings from external API to display it.",
        link: "https://programmingleaguenational2025.vercel.app/"
    }
]

function Projects() {
    return(
        <div className="grid grid-cols-2 gap-4">
            {projects.map(project => (
                <div key={project.title} className="rounded-md px-4 py-2 bg-[#0F0F10]">
                    <h2 className="mb-2 font-bold text-xl">{project.title}</h2>
                    <div className="flex gap-2 mb-2 items-center">
                        {project.stacks.map((stack, idx) => (
                            <>
                                <p className="text-sm bg-[#8DDDCB] text-[#08211B] rounded-sm px-2 py-0.5">{stack}</p>
                            </>
                        ))}
                    </div>
                    <p className="text-base text-gray-400">{project.description}</p>
                    <div className="flex items-center mt-4 gap-2 text-base">
                        <button className="text-primary">View</button>
                        <FiExternalLink />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;