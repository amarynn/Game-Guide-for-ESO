import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function DisplaySpecificGuide() {
    let { guideId } = useParams()
    let [guideData, setGuideData] = useState([])
    function getChosenGuide() {
        fetch(`/guides/${guideId}`)
            .then(res => res.json())
            .then(res => {
                setGuideData(res[0])
            })
    }

    useEffect(getChosenGuide, [guideId])

    return (
        <>
            <h1>{guideData.guide_title}</h1>
            <h3>{guideData.class_name} {guideData.role_name}</h3>
        </>
    )
}

export default DisplaySpecificGuide