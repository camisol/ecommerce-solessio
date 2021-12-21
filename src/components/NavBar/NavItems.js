import './scss/NavItems.scss';
import { Link } from "react-router-dom";

function NavItems({ links }) {
    return (
        <>
            {links.map((elemento) => {
                return <Link key={elemento.id} to={elemento.href}>{elemento.name}</Link>
            })}

        </>
    )
}

export default NavItems;