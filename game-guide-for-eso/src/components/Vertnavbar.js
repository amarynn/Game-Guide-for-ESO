import { Link } from "react-router-dom"
import logo from "./logo.png"

function VertNavBar() {
    return (
        <>
            <a href="/">
                <img src={logo} alt="" className="logo" />
            </a>
            <Link to="/" className="vert-nav-bar-links">Home </Link>
            <Link to="/search" className="vert-nav-bar-links">Search Guides</Link>
            <Link to="/popular" className="vert-nav-bar-links">Popular </Link>
            <Link to="/create" className="vert-nav-bar-links">Post New Guide </Link>
        </>
    )
}

export default VertNavBar