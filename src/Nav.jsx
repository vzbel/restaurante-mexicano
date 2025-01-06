function Nav(){
    return (
        <nav className="flex flex-col md:flex-row gap-4 items-center flex-wrap justify-center md:justify-between p-0 md:px-24 sticky top-0 w-full font-mono font-semibold text-xl min-h-24 bg-amber-100">
            {/* Nav Links UL*/}
            <ul className="flex gap-7">
                <li><a href="#testimonial">ABOUT</a></li>
                <li><a href="#favorites">MENU</a></li>
                <li><a href="#locations">LOCATIONS</a></li>
            </ul>

            {/* CTA Button*/}
            <a href="#locations">
                <button className="whitespace-nowrap outline outline-lime-800 py-1 px-8 rounded-md ">ORDER NOW</button>
            </a>
        </nav>
    );
}

export default Nav