
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav nav-pills justify-content-center p-2 shadow ">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
                 Home
            </NavLink>
            <NavLink to="/people" className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
                View People
            </NavLink>
            <NavLink to="/films" className={({ isActive }) => `nav-link ${isActive && 'active'}`}>
                View Films
            </NavLink>
        </nav>
    );
};

export default Navbar;