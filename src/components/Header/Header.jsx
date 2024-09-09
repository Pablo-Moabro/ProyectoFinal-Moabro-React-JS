import "./Header.css";
import logo from "../../assets/LogoVicius.png";
import Menu from "../Menu/Menu";
import CartWidget from "../CartWidget/CartWidget";

const links = [
    {
        label: "home",
        href: "/"
    },
    {
        label: "Store",
        href: "store"
    },
    {
        label: "Contact",
        href: "contact"
    }
];


const Header = () => {
    return (
        <header>
            <nav className="navbar-container">
                <a href="/" className="navbar__logo">
                    <figure className="navbar__img">
                        <img src={logo} alt="" />
                    </figure>
                </a>
                <Menu className="navbar" links={links}>
                    <a href="#" className="navbar__link-button">
                        <CartWidget/>
                    </a>
                </Menu>


            </nav>
        </header>
    );
};

export default Header;