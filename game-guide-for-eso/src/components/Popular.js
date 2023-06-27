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
            <section className="page-title">
                <h1>Popular Guides</h1>
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

export default DisplayPopularList