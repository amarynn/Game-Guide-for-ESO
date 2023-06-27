import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import VertNavBar from "./components/Vertnavbar";
import Search from "./components/Search";
import DisplaySpecificGuide from "./components/Displayspecificguide";
import DisplayPopularList from "./components/Popular";
import PostNewGuide from "./components/Create";
import "./static/styles.css"

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
                    <Route path="/search/:guideId" element={<DisplaySpecificGuide />} />
                    <Route path="/popular" element={<DisplayPopularList />} />
                    <Route path="/popular/:guideId" element={<DisplaySpecificGuide />} />
                    <Route path="/create" element={<PostNewGuide />} />
                </Routes>
            </section>
        </div>
    );
}

export default App;
