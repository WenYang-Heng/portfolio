function Header({ title }) {
    return (
        <>
            <h1 className="text-4xl font-bold border-b-8 border-primary pb-2 w-16 text-nowrap">{ title }</h1>
            <span className="bg-primary h-4 w-4"></span>
        </>
    );
}

export default Header