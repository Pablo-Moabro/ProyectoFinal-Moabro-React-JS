import "./Menu.css"
import LinkButton from "../LinkButton/LinkButton";
import { Children } from "react";
import { NavLink } from "react-router-dom";


const Menu = ( {links, className, children} ) => {


    return(
        <menu className={`menu ${className}__menu`}>
            {links.map((links, i) => <li key={`navlink-${i}`} className={`menu__item ${className} menu__item`}>
                <NavLink to={links.href}>{links.label}</NavLink>
            </li>)}
            {children}
        </menu>
    );
};

export default Menu;