import '../styles/HomePages.css'


function HomePages() {
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
                        <li>
                            <input
                                type="text"
                                placeholder="Search..."
                                style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                        </li>
                        <li>
                            <a href="#profil" title="Profil">
                                <img
                                    src="/image/profil.png"
                                    alt="profil"
                                    className="navbar-icon-profil"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HomePages
