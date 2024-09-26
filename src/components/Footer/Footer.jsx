import "./Footer.css"
import logo from "../../assets/LogoVicius.png"
import Menu from "../Menu/Menu";
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


const Footer = () => {


    return(
        <footer className="footer">
            <div className="footer-container">
                <Link className="footer__logo" to="/">
                    <figure className="footer__img">
                        <img src={logo} alt="" />
                    </figure>
                </Link>
            </div>
            <Menu className="footer-menu" links={links}/>
        </footer>
    );
};

export default Footer;