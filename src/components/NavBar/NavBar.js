import NavItems from './NavItems';
import CartWidget from './CartWidget';
import './scss/NavBar.scss';
import { NavLink } from "react-router-dom";



function NavBar({ nombre }) {

    const links = [
        { href: "/categorias/todos", name: "Todos", id: 1, tipo: "todos" },
        { href: "/categorias/deporte", name: "Deporte", tipo: "deporte", id: 2 },
        { href: "/categorias/urbano", name: "Urbano", tipo: "urbano", id: 3 },
    ]

    return (
        <header>
            <div className="navBar">
                <div className="navLogoContainer">
                    <NavLink to="/">
                        <a className="navLogo" href="index.html" alt="logo">{nombre}</a>
                    </NavLink>
                </div>
                <div className="navItemsContainer">
                    <NavItems links={links} />
                </div>
                <CartWidget />
            </div>
        </header>
    );
}

export default NavBar;