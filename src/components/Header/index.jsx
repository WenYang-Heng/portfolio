function Header({ title }) {
    return (
        <>
            <h1 className="text-2xl font-bold border-b-6 border-primary pb-1 mb-3 w-12 text-nowrap">{ title }</h1>
        </>
    );
}

export default Header