import '../styles/Navbar.css'


function Navbar() {
    return (
        <nav className="bg-nav py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <img
                        alt="Hikmah"
                        src="public\image\Logo.png"
                        className="h-8 w-auto"
                    />
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a className="text-[#362706]">Home</a>
                    </li>
                    <li>
                        <a className="text-[#362706]">Product</a>
                    </li>
                    <li>
                        <a className="text-[#362706]">Contact Us</a>
                    </li>
                </ul>
                <ul className="flex space-x-4">
                    <div className="relative ...">
                        <div className="pointer-events-auto absolute ...">
                            <svg className="absolute h-5 w-5 text-gray-400">
                            </svg>
                        </div>
                        <input type="text" placeholder="Search" class="flex items-center justify-between" />
                    </div>
                    <img
                        alt="Hikmah"
                        src="public\image\profil.png"
                        className="h-8 w-auto"
                    />
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;
