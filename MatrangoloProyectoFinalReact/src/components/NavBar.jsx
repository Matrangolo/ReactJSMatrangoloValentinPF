import CartWidget from "./CartWidget";
import Logo from "../assets/logoDrop.webp";
import { NavLink, Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="container-fluid fondoNav text-center">
            <div className="row">
                <div className="col-2">
                    <Link to="/">
                <img src={Logo} alt="Logo-Drop" style={{ width: '100px', height: '100px' }} />
                </Link>
                </div>
                <div className="col-8 d-flex align-items-center">
                    
                <NavLink to="/category/Playstation" className="btn btn-primary mx-2">PlayStation</NavLink>
                <NavLink to="/category/Xbox" className="btn btn-success mx-2">Xbox</NavLink>
                <NavLink to="/category/Nintendo" className="btn btn-danger">Nintendo</NavLink></div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
