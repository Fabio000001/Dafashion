import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/collection">Collection</Link></li>
                <li><Link to="/trends">Trends</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;