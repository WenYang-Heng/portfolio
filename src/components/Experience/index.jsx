import Event from "./Event";

const experiences = [
    {
        position: "Assistant Head of Technical Dept.",
        location: "Universiti Malaya",
        date: "Mar 2025 - Jun 2025",
        type: "Event"
    },
    {
        position: "Frontend Developer",
        location: "Alpha Red Solutions Sdn. Bhd",
        date: "Jun 2023 - Aug 2023",
        type: "Internship"
    }
]

function Experience(){
    return(
        <div>
            <h2 className="font-bold text-2xl mb-2">Experience</h2>
            {experiences.map(experience => (
                <Event position={experience.position} location={experience.location} date={experience.date} type={experience.type} />
            ))}
        </div>
    );
}

export default Experience;