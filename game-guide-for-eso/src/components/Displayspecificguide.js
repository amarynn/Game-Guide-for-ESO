import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function DisplaySpecificGuide() {
    let { guideId } = useParams()
    let [guideData, setGuideData] = useState([])
    let [commentData, setCommentData] = useState([])
    let [newCommentData, setNewCommentData] = useState([])

    function getChosenGuide() {
        fetch(`/guides/${guideId}`)
            .then(res => res.json())
            .then(res => {
                setGuideData(res[0])
            })
    }

    function addLike() {
        let numOfLikes = guideData.likes
        let id = guideId
        numOfLikes += 1
        fetch(`/guides/${id}/${numOfLikes}`, {
            method: "POST"
        })
        getChosenGuide()
    }

    function createNewComment() {
        let sendNewCommentData = {
            guideId: guideId,
            commentText: newCommentData
        }
        fetch("/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sendNewCommentData)
        })
        setTimeout(getChosenGuidesComments(), 3000)
        setNewCommentData("")
    }

    function getChosenGuidesComments() {
        fetch(`/comments/${guideId}`)
            .then(res => res.json())
            .then(res => {
                setCommentData(res)
            })
    }

    useEffect(getChosenGuide, [guideId])
    useEffect(getChosenGuidesComments, [guideId])

    return (
        <>
            <h1>{guideData.guide_title}</h1>
            <h3>{guideData.class_name} {guideData.role_name}</h3>
            <section className="likes">
                <button onClick={() => { addLike() }}>Like</button>
                <label htmlFor="">{guideData.likes}</label>
            </section>
            <p>{guideData.guide_description}</p>
            <h5>Suggested Race: {guideData.character_race_suggestion}</h5>
            <h3>Equipment</h3>
            <section className="equipment">
                <h4>Head Armor</h4>
                <p>Set Name: {guideData.head_set_name}</p>
                <p>Armor Weight: {guideData.head_armor_weight},  Enchantment: {guideData.head_enchantment},  Trait: {guideData.head_trait}</p>
                <p>Where to obtain the set: {guideData.head_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Shoulder Armor</h4>
                <p>Set Name: {guideData.shoulder_set_name}</p>
                <p>Armor Weight: {guideData.shoulder_armor_weight},  Enchantment: {guideData.shoulder_enchantment},  Trait: {guideData.shoulder_trait}</p>
                <p>Where to obtain the set: {guideData.shoulder_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Body Armor</h4>
                <p>Set Name: {guideData.body_set_name}</p>
                <p>Armor Weight: {guideData.body_armor_weight},  Enchantment: {guideData.body_enchantment},  Trait: {guideData.body_trait}</p>
                <p>Where to obtain the set: {guideData.body_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Hand Armor</h4>
                <p>Set Name: {guideData.hand_set_name}</p>
                <p>Armor Weight: {guideData.hand_armor_weight},  Enchantment: {guideData.hand_enchantment},  Trait: {guideData.hand_trait}</p>
                <p>Where to obtain the set: {guideData.hand_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Belt Armor</h4>
                <p>Set Name: {guideData.belt_set_name}</p>
                <p>Armor Weight: {guideData.belt_armor_weight},  Enchantment: {guideData.belt_enchantment},  Trait: {guideData.belt_trait}</p>
                <p>Where to obtain the set: {guideData.belt_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Leg Armor</h4>
                <p>Set Name: {guideData.leg_set_name}</p>
                <p>Armor Weight: {guideData.leg_armor_weight},  Enchantment: {guideData.leg_enchantment},  Trait: {guideData.leg_trait}</p>
                <p>Where to obtain the set: {guideData.leg_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Boots Armor</h4>
                <p>Set Name: {guideData.boots_set_name}</p>
                <p>Armor Weight: {guideData.boots_armor_weight},  Enchantment: {guideData.boots_enchantment},  Trait: {guideData.boots_trait}</p>
                <p>Where to obtain the set: {guideData.boots_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Necklace</h4>
                <p>Set Name: {guideData.necklace_set_name}</p>
                <p>Enchantment: {guideData.necklace_enchantment}, Trait: {guideData.necklace_trait}</p>
                <p>Where to obtain the set: {guideData.necklace_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Ring 1</h4>
                <p>Set Name: {guideData.ring_1_set_name}</p>
                <p>Enchantment: {guideData.ring_1_enchantment}, Trait: {guideData.ring_1_trait}</p>
                <p>Where to obtain the set: {guideData.ring_1_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Ring 2</h4>
                <p>Set Name: {guideData.ring_2_set_name}</p>
                <p>Enchantment: {guideData.ring_2_enchantment}, Trait: {guideData.ring_2_trait}</p>
                <p>Where to obtain the set: {guideData.ring_2_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Mainhand Primary Weapon</h4>
                <p>Set Name: {guideData.primary_mainhand_set_name}</p>
                <p>Weapon Type: {guideData.primary_mainhand_weapon_type}, Enchantment: {guideData.primary_mainhand_enchantment}, Trait: {guideData.primary_mainhand_trait}</p>
                <p>Where to obtain the set: {guideData.primary_mainhand_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Offhand Primary Weapon</h4>
                <p>Set Name: {guideData.primary_offhand_set_name}</p>
                <p>Weapon Type: {guideData.primary_offhand_weapon_type}, Enchantment: {guideData.primary_offhand_enchantment}, Trait: {guideData.primary_offhand_trait}</p>
                <p>Where to obtain the set: {guideData.primary_offhand_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Mainhand Secondary Weapon</h4>
                <p>Set Name: {guideData.secondary_mainhand_set_name}</p>
                <p>Weapon Type: {guideData.secondary_mainhand_weapon_type}, Enchantment: {guideData.secondary_mainhand_enchantment}, Trait: {guideData.secondary_mainhand_trait}</p>
                <p>Where to obtain the set: {guideData.secondary_mainhand_where_to_obtain}</p>
            </section>
            <section className="equipment">
                <h4>Offhand Secondary Weapon</h4>
                <p>Set Name: {guideData.secondary_offhand_set_name}</p>
                <p>Weapon Type: {guideData.secondary_offhand_weapon_type}, Enchantment: {guideData.secondary_offhand_enchantment}, Trait: {guideData.secondary_offhand_trait}</p>
                <p>Where to obtain the set: {guideData.secondary_offhand_where_to_obtain}</p>
            </section>
            <h3>Skills</h3>
            <section className="skills">
                <h4>Bar 1</h4>
                <ul>
                    <li>{guideData.skill_primary_1}</li>
                    <li>{guideData.skill_primary_2}</li>
                    <li>{guideData.skill_primary_3}</li>
                    <li>{guideData.skill_primary_4}</li>
                    <li>{guideData.skill_primary_5}</li>
                    <li className="ultimate">Ultimate: {guideData.skill_primary_ultimate}</li>
                </ul>
                <h4>Bar 2</h4>
                <ul>
                    <li>{guideData.skill_secondary_1}</li>
                    <li>{guideData.skill_secondary_2}</li>
                    <li>{guideData.skill_secondary_3}</li>
                    <li>{guideData.skill_secondary_4}</li>
                    <li>{guideData.skill_secondary_5}</li>
                    <li className="ultimate">Ultimate: {guideData.skill_secondary_ultimate}</li>
                </ul>
            </section>
            <h3>Attributes</h3>
            <section className="attributes">
                <ul>
                    <li>Health: {guideData.attributes_health}</li>
                    <li>Stamina: {guideData.attributes_stamina}</li>
                    <li>Magicka: {guideData.attributes_magicka}</li>
                </ul>
            </section>
            <h3>Champion Point Slottables</h3>
            <section className="champion-points">
                <section>
                    <h4>Blue Slottables</h4>
                    <ul>
                        <li>{guideData.cp_blue_slottable_1}</li>
                        <li>{guideData.cp_blue_slottable_2}</li>
                        <li>{guideData.cp_blue_slottable_3}</li>
                        <li>{guideData.cp_blue_slottable_4}</li>
                    </ul>
                </section>
                <section>
                    <h4>Red Slottables</h4>
                    <ul>
                        <li>{guideData.cp_red_slottable_1}</li>
                        <li>{guideData.cp_red_slottable_2}</li>
                        <li>{guideData.cp_red_slottable_3}</li>
                        <li>{guideData.cp_red_slottable_4}</li>
                    </ul>
                </section>
                <section>
                    <h4>Green Slottables</h4>
                    <ul>
                        <li>{guideData.cp_green_slottable_1}</li>
                        <li>{guideData.cp_green_slottable_2}</li>
                        <li>{guideData.cp_green_slottable_3}</li>
                        <li>{guideData.cp_green_slottable_4}</li>
                    </ul>
                </section>
            </section>
            <h3>Consumables and Mundus Stone</h3>
            <section className="consumables-and-mundus">
                <h4>Food</h4>
                <p>{guideData.consumable_food}</p>
                <h4>Potions</h4>
                <p>{guideData.consumable_potion}</p>
                <h4>Mundus Stone</h4>
                <p>{guideData.mundus_stone}</p>
            </section>
            <br />
            <h3>Comments</h3>
            <section>
                <textarea value={newCommentData} onChange={e => setNewCommentData(e.target.value)} cols="30" rows="10"></textarea>
                <button onClick={() => { createNewComment() }}>Submit</button>
            </section>
            {commentData?.map(comment =>
                <p>Anonymous: {comment.comment}</p>
            )}
        </>
    )
}

export default DisplaySpecificGuide