const Navbar = () => {
    return (
        <nav className="bg-black">
            <div className="flex">
                <div>
                    <p className="text-white">Gabriel Zimmermann</p>
                    <p className="text-white">Applikationsentwickler in Ausbildung</p>
                </div>
                <ul className="flex ">
                    <li><a className="text-white">Home</a></li>
                    <li><a className="text-white">CV</a></li>
                    <li><a className="text-white">Kontakt</a></li>
                    <li><a className="text-white">About Me</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;