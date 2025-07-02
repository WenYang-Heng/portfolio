function Event({ position, location, date, type }){
    return(
        <>
            <div className="relative pl-6 pb-4 group">
                <div className="
                    md:flex items-center 
                    before:w-2 before:h-2 before:bg-primary before:rounded-full before:absolute before:left-0 before:top-2.5
                    group-last:after:hidden after:w-px after:h-full after:bg-primary after:absolute after:left-[3.5px] after:top-3"
                >
                    <p className="font-bold text-gray-light">{position}</p>
                    <p className="text-primary ml-auto text-base">{type}</p>
                </div>
                <p className="text-base text-gray-400">{location}</p>
                <p className="text-sm text-gray-600">{date}</p>
            </div>
        </>
    );
}

export default Event;