import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="wrapper">
                <div className="logo"><a href="" target="_blank" rel="noopener noreferrer">
                    <img src="/image/Logo.png" width={200} />
                </a></div>
                <div className="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#product">Product</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="" className="tbl-biru">Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
