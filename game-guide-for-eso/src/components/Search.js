import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Search() {
    let [guideList, setGuideList] = useState([])
    let [searchClassFilter, setSearchClassFilters] = useState("%20")
    let [searchRoleFilter, setSearchRoleFilters] = useState("%20")
    let [searchClassFilterDisplay, setSearchClassFiltersDisplay] = useState("None")
    let [searchRoleFilterDisplay, setSearchRoleFiltersDisplay] = useState("None")
    let [searchTerm, setSearchTerm] = useState("")

    function addClassSearchParam(classNameString) {
        setSearchClassFilters(classNameString)
        setSearchClassFiltersDisplay(classNameString)
    }

    function addRoleSearchParam(classNameString) {
        setSearchRoleFilters(classNameString)
        setSearchRoleFiltersDisplay(classNameString)
    }

    function getFilteredGuides() {
        fetch(`/guides/filtered/${searchClassFilter}/${searchRoleFilter}`)
            .then(res => res.json())
            .then(res => setGuideList(res.reverse()))
    }

    function filterResults() {
        let itemsSearchedFor = guideList.filter((items, index) => {
            if (guideList[index].guide_title.includes(searchTerm)) {
                return [].push(items)
            }
        }, [])
        setGuideList(itemsSearchedFor)
        if (searchTerm.length === 0) {
            getFilteredGuides()
        }
    }

    function clearFilters() {
        setSearchClassFilters("%20")
        setSearchRoleFilters("%20")
        setSearchClassFiltersDisplay("None")
        setSearchRoleFiltersDisplay("None")
    }

    useEffect(getFilteredGuides, [searchClassFilter, searchRoleFilter])
    useEffect(filterResults, [searchTerm])

    return (
        <>
            <section>
                <section className="center-page-align">
                    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" name="searchinput" className="search-input" placeholder="Search currently displayed guides" />
                </section>
                <section className="center-page-align">

                    <section className="search-class-buttons">
                        <button onClick={() => addClassSearchParam("Dragonknight")} className="search-class">Dragon Knight</button>
                        <button onClick={() => addClassSearchParam("Templar")} className="search-class" >Templar</button>
                        <button onClick={() => addClassSearchParam("Sorcerer")} className="search-class">Sorcerer</button>
                        <button onClick={() => addClassSearchParam("Nightblade")} className="search-class">Nightblade</button>
                        <button onClick={() => addClassSearchParam("Warden")} className="search-class" >Warden</button>
                        <button onClick={() => addClassSearchParam("Necromancer")} className="search-class">Necromancer</button>
                        <button onClick={() => addClassSearchParam("Arcanist")} className="search-class">Arcanist</button>
                    </section>
                </section>
                <section className="center-page-align">
                    <section className="search-role-buttons">
                        <button onClick={() => addRoleSearchParam("Tank")} className="search-class">Tank</button>
                        <button onClick={() => addRoleSearchParam("Healer")} className="search-class">Healer</button>
                        <button onClick={() => addRoleSearchParam("Dps")} className="search-class">Dps</button>
                    </section>
                </section>
                <section className="center-page-align">
                    <h4 className="filters">Current Class Filter: {searchClassFilterDisplay}</h4>
                    <h4 className="filters">Current Role Filter: {searchRoleFilterDisplay}</h4>
                </section>
                <section className="center-page-align">
                    <button onClick={() => { clearFilters() }} className="search-class" >Clear Filters</button>
                </section>
                <section className="guides">
                    {guideList.map((guide) =>
                        <Link to={guide.id.toString()} key={guide.id} className="guide-link">
                            <h4>{guide.guide_title}</h4>
                            <p>Class: {guide.class_name}</p>
                            <p>Role: {guide.role_name}</p>
                            <p>Likes: {guide.likes}</p></Link>
                    )}
                </section>
            </section>

        </>
    )
}

export default Search