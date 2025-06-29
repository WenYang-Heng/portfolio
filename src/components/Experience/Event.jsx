function Event({ position, location, date, type }){
    return(
        <>
            <div className="relative pl-6 pb-4 group">
                <div className="
                    flex items-center 
                    before:w-2 before:h-2 before:bg-primary before:rounded-full before:absolute before:left-0 before:top-2.5
                    group-last:after:hidden after:w-px after:h-full after:bg-primary after:absolute after:left-[3.5px] after:top-3"
                >
                    <h3 className="font-bold leading-0">{position}</h3>
                    <p className="text-primary ml-auto text-base">{type}</p>
                </div>
                <p className="text-base">{location}</p>
                <p className="text-sm">{date}</p>
            </div>
        </>
    );
}

export default Event;