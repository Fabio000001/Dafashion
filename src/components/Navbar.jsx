import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">ModaTrend</div>
                <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link to="/collection" className="hover:text-gray-400">Collection</Link></li>
                    <li><Link to="/trends" className="hover:text-gray-400">Trends</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;