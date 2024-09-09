import "./Footer.css"
import logo from "../../assets/LogoVicius.png"
import Menu from "../Menu/Menu";

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
                <a className="footer__logo" href="/">
                    <figure className="footer__img">
                        <img src={logo} alt="" />
                    </figure>
                </a>
            </div>
            <Menu className="footer-menu" links={links}/>
        </footer>
    );
};

export default Footer;