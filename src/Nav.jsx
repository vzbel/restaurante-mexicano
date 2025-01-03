function Nav(){
    return (
        <nav className="flex flex-col md:flex-row gap-4 items-center flex-wrap justify-center md:justify-between px-24 sticky top-0 w-screen font-mono font-semibold text-xl min-h-32 bg-amber-100">
            {/* Nav Links UL*/}
            <ul className="flex gap-7">
                <li><a href="">ABOUT</a></li>
                <li><a href="">MENU</a></li>
                <li><a href="">LOCATIONS</a></li>
            </ul>

            {/* CTA Button*/}
            <button className="whitespace-nowrap outline outline-lime-800 py-1 px-8 rounded-md ">ORDER NOW</button>
        </nav>
    );
}

export default Nav