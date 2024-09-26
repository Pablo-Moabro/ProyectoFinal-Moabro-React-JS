import "./Header.css";
import logo from "../../assets/LogoVicius.png";
import Menu from "../Menu/Menu";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

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
                <Link to="/" className="navbar__logo">
                    <figure className="navbar__img">
                        <img src={logo} alt="" />
                    </figure>
                </Link>
                <Menu className="navbar" links={links}>
                    <div className="navbar__link-button">
                        <CartWidget/>
                    </div>
                </Menu>


            </nav>
        </header>
    );
};

export default Header;