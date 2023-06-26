import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Search() {
    let [guideList, setGuideList] = useState([])
    let [searchClassFilter, setSearchClassFilters] = useState("%20")
    let [searchRoleFilter, setSearchRoleFilters] = useState("%20")
    let [searchTerm, setSearchTerm] = useState("")

    function addClassSearchParam(classNameString) {
        setSearchClassFilters(classNameString)
    }

    function addRoleSearchParam(classNameString) {
        setSearchRoleFilters(classNameString)
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
    }

    useEffect(getFilteredGuides, [searchClassFilter, searchRoleFilter])
    useEffect(filterResults, [searchTerm])

    return (
        <>
            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" name="searchinput" className="search-input" placeholder="Search currently displayed guides" />
            <section className="search-class-buttons">
                <button onClick={() => addClassSearchParam("Dragonknight")} className="search-class">Dragon Knight</button>
                <button onClick={() => addClassSearchParam("Templar")} className="search-class" >Templar</button>
                <button onClick={() => addClassSearchParam("Sorcerer")} className="search-class">Sorcerer</button>
                <button onClick={() => addClassSearchParam("Nightblade")} className="search-class">Nightblade</button>
                <button onClick={() => addClassSearchParam("Warden")} className="search-class" >Warden</button>
                <button onClick={() => addClassSearchParam("Necromancer")} className="search-class">Necromancer</button>
                <button onClick={() => addClassSearchParam("Arcanist")} className="search-class">Arcanist</button>
            </section>
            <section className="search-role-buttons">
                <button onClick={() => addRoleSearchParam("Tank")} className="search-role-tank">Tank</button>
                <button onClick={() => addRoleSearchParam("Healer")} className="search-role-healer">Healer</button>
                <button onClick={() => addRoleSearchParam("Dps")} className="search-role-dps">Dps</button>
            </section>
            <button onClick={() => { clearFilters() }}>Clear Filters</button>
            <section className="guides">
                {guideList.map((guide) =>
                    <Link to={guide.id.toString()} key={guide.id}>{guide.guide_title}: {guide.class_name}, {guide.role_name}, Likes: {guide.likes}</Link>
                )}
            </section>
        </>
    )
}

export default Search