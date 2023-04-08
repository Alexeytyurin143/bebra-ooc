import React from "react";
import cl from "./Navbar.module.css"

const Navbar = () => {
    return (
        <header className={cl.Header}>
            <nav className={cl.NavBody}>
                <ul className={cl.NavList}>
                    <li className={cl.NavItem}><a  className={cl.NavLink} href="https://placehold.co/600x400" target="blank">Ссылка</a></li>
                    <li className={cl.NavItem}><a  className={cl.NavLink} href="https://placehold.co/600x400" target="blank">Ссылка</a></li>
                    <li className={cl.NavItem}><a  className={cl.NavLink} href="https://placehold.co/600x400" target="blank">Ссылка</a></li>
                    <li className={cl.NavItem}><a  className={cl.NavLink} href="https://placehold.co/600x400" target="blank">Ссылка</a></li>
                </ul>
            </nav>
            <div className={cl.Login}>
                <img className={cl.Avatar} src="https://placehold.co/50x50/teal/white" alt="" />
            </div>
        </header>
    )
}

export default Navbar