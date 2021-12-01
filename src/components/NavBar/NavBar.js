import NavItems from './NavItems';
import './NavBar.css';

function NavBar() {
    return (
        <header>
            <div className="navBar">
                <div className="navLogoContainer">
                    <a className="navLogo" href="index.html" alt="logo">THE FIT SHOP </a>
                </div>
                <div className="navItemsContainer">
                    <NavItems />
                </div>
            </div>
        </header>
    );
}

export default NavBar;