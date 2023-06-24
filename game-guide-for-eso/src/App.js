import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home";
import VertNavBar from "./components/Vertnavbar";
import Search from "./components/Search";

function App() {
    return (
        <div className="App">
            <nav className="vertical-nav">
                <VertNavBar />
            </nav>
            <section className="page-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </section>
        </div>
    );
}

export default App;
