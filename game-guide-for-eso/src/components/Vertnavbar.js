import { Routes, Route, Link } from "react-router-dom"

function VertNavBar() {
    return (
        <>
            <section>

            </section>
            <Link to="/" className="vert-nav-bar-links">Home </Link>
            <Link to="/search" className="vert-nav-bar-links">Search Guides</Link>
            <Link to="/popular" className="vert-nav-bar-links">Popular </Link>
            <Link to="/create" className="vert-nav-bar-links">Post New Guide </Link>
        </>
    )
}

export default VertNavBar