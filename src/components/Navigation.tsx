import {Link} from "react-router-dom";

function Navigation() {

    return (
        <nav className="flex justify-between items-center h-[50px] px-10 shadow-md bg-gray-600 text-white text-xl">
            <h3 className="font-bold">GitHub search</h3>
            <span className="flex items-center gap-4">
                <Link to="/"  className="hover:underline">Home</Link>
                <Link to="/favourites" className="hover:underline">Favourites</Link>
            </span>
        </nav>
    );
}

export default Navigation;