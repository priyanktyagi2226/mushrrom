import Link from 'next/link'
const Header = () => {
    return (
        <header className="header-section">
            <div className="container">
                <ul className="main-menu-left site-menu-style">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About the Brand </a></Link></li>
                    
                </ul>
                <Link href="/">
                <a className="site-logo">
                    <img src="/img/logo.jpg"
                        alt="" />
                </a>
                </Link>
                <ul className="main-menu-right site-menu-style">
                    <li> <Link href="/shop"><a>Shop </a></Link></li>
                    <li> <Link href="/contact"><a>Contact</a></Link></li>
                </ul>
            </div>
            
        </header>
    )
}

export default Header;