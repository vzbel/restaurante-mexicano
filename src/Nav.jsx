function Nav(){
    return (
        <nav className="flex flex-col md:flex-row gap-4 items-center flex-wrap justify-between py-10 px-20 fixed top-0 w-screen font-mono font-semibold text-xl">
            {/* Nav Links UL*/}
            <ul className="flex gap-5">
                <li><a href="">ABOUT</a></li>
                <li><a href="">MENU</a></li>
                <li><a href="">LOCATIONS</a></li>
            </ul>

            {/* CTA Button*/}
            <button className="whitespace-nowrap outline outline-lime-700 py-1 px-8 rounded-md ">ORDER NOW</button>
        </nav>
    );
}

export default Nav