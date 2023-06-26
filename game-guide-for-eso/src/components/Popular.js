import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function DisplayPopularList() {
    let [guideList, setGuideList] = useState([])

    function getAllGuides() {
        fetch(`/guides`)
            .then(res => res.json())
            .then(res => setGuideList(res.reverse()))
    }

    useEffect(getAllGuides, [])

    return (
        <>
            <section className="guides">
                {guideList.map((guide) =>
                    <Link to={guide.id.toString()} key={guide.id}>{guide.guide_title}: {guide.class_name}, {guide.role_name}, Likes: {guide.likes}</Link>
                )}
            </section>
        </>
    )
}

export default DisplayPopularList