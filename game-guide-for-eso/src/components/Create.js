import { useState } from "react"
import "../static/createStyles.css"

function PostNewGuide() {
    let [guideTitle, setGuideTitle] = useState("")
    let [className, setClassName] = useState("")
    let [roleName, setRoleName] = useState("")
    let [guideDescription, setGuideDescription] = useState("")
    let [characterRaceSuggestion, setCharacterRaceSuggestion] = useState("")
    let [headSetName, setHeadSetName] = useState("")
    let [headArmorWeight, setHeadArmorWeight] = useState("")
    let [headEnchantment, setHeadEnchantment] = useState("")
    let [headTrait, setHeadTrait] = useState("")
    let [headWhereToObtain, setHeadWhereToObtain] = useState("")
    let [shoulderSetName, setShoulderSetName] = useState("")
    let [shoulderArmorWeight, setShoulderArmorWeight] = useState("")
    let [shoulderEnchantment, setShoulderEnchantment] = useState("")
    let [shoulderTrait, setShoulderTrait] = useState("")
    let [shoulderWhereToObtain, setShoulderWhereToObtain] = useState("")
    let [bodySetName, setBodySetName] = useState("")
    let [bodyArmorWeight, setBodyArmorWeight] = useState("")
    let [bodyEnchantment, setBodyEnchantment] = useState("")
    let [bodyTrait, setBodyTrait] = useState("")
    let [bodyWhereToObtain, setBodyWhereToObtain] = useState("")
    let [handSetName, setHandSetName] = useState("")
    let [handArmorWeight, setHandArmorWeight] = useState("")
    let [handEnchantment, setHandEnchantment] = useState("")
    let [handTrait, setHandTrait] = useState("")
    let [handWhereToObtain, setHandWhereToObtain] = useState("")
    let [beltSetName, setBeltSetName] = useState("")
    let [beltArmorWeight, setBeltArmorWeight] = useState("")
    let [beltEnchantment, setBeltEnchantment] = useState("")
    let [beltTrait, setBeltTrait] = useState("")
    let [beltWhereToObtain, setBeltWhereToObtain] = useState("")
    let [legSetName, setLegSetName] = useState("")
    let [legArmorWeight, setLegArmorWeight] = useState("")
    let [legEnchantment, setLegEnchantment] = useState("")
    let [legTrait, setLegTrait] = useState("")
    let [legWhereToObtain, setLegWhereToObtain] = useState("")
    let [bootsSetName, setBootsSetName] = useState("")
    let [bootsArmorWeight, setBootsArmorWeight] = useState("")
    let [bootsEnchantment, setBootsEnchantment] = useState("")
    let [bootsTrait, setBootsTrait] = useState("")
    let [bootsWhereToObtain, setBootsWhereToObtain] = useState("")
    let [necklaceSetName, setNecklaceSetName] = useState("")
    let [necklaceEnchantment, setNecklaceEnchantment] = useState("")
    let [necklaceTrait, setNecklaceTrait] = useState("")
    let [necklaceWhereToObtain, setNecklaceWhereToObtain] = useState("")
    let [ring1SetName, setRing1SetName] = useState("")
    let [ring1Enchantment, setRing1Enchantment] = useState("")
    let [ring1Trait, setRing1Trait] = useState("")
    let [ring1WhereToObtain, setRing1WhereToObtain] = useState("")
    let [ring2SetName, setRing2SetName] = useState("")
    let [ring2Enchantment, setRing2Enchantment] = useState("")
    let [ring2Trait, setRing2Trait] = useState("")
    let [ring2WhereToObtain, setRing2WhereToObtain] = useState("")
    let [primaryMainhandSetName, setPrimaryMainhandSetName] = useState("")
    let [primaryMainhandWeaponType, setPrimaryMainhandWeaponType] = useState("")
    let [primaryMainhandEnchantment, setPrimaryMainhandEnchantment] = useState("")
    let [primaryMainhandTrait, setPrimaryMainhandTrait] = useState("")
    let [primaryMainhandWhereToObtain, setPrimaryMainhandWhereToObtain] = useState("")
    let [primaryOffhandSetName, setPrimaryOffhandSetName] = useState("")
    let [primaryOffhandWeaponType, setPrimaryOffhandWeaponType] = useState("")
    let [primaryOffhandEnchantment, setPrimaryOffhandEnchantment] = useState("")
    let [primaryOffhandTrait, setPrimaryOffhandTrait] = useState("")
    let [primaryOffhandWhereToObtain, setPrimaryOffhandWhereToObtain] = useState("")
    let [secondaryMainhandSetName, setSecondaryMainhandSetName] = useState("")
    let [secondaryMainhandWeaponType, setSecondaryMainhandWeaponType] = useState("")
    let [secondaryMainhandEnchantment, setSecondaryMainhandEnchantment] = useState("")
    let [secondaryMainhandTrait, setSecondaryMainhandTrait] = useState("")
    let [secondaryMainhandWhereToObtain, setSecondaryMainhandWhereToObtain] = useState("")
    let [secondaryOffhandSetName, setSecondaryOffhandSetName] = useState("")
    let [secondaryOffhandWeaponType, setSecondaryOffhandWeaponType] = useState("")
    let [secondaryOffhandEnchantment, setSecondaryOffhandEnchantment] = useState("")
    let [secondaryOffhandTrait, setSecondaryOffhandTrait] = useState("")
    let [secondaryOffhandWhereToObtain, setSecondaryOffhandWhereToObtain] = useState("")
    let [skillPrimary1, setSkillPrimary1] = useState("")
    let [skillPrimary2, setSkillPrimary2] = useState("")
    let [skillPrimary3, setSkillPrimary3] = useState("")
    let [skillPrimary4, setSkillPrimary4] = useState("")
    let [skillPrimary5, setSkillPrimary5] = useState("")
    let [skillPrimaryUltimate, setSkillPrimaryUltimate] = useState("")
    let [skillSecondary1, setSkillSecondary1] = useState("")
    let [skillSecondary2, setSkillSecondary2] = useState("")
    let [skillSecondary3, setSkillSecondary3] = useState("")
    let [skillSecondary4, setSkillSecondary4] = useState("")
    let [skillSecondary5, setSkillSecondary5] = useState("")
    let [skillSecondaryUltimate, setSkillSecondaryUltimate] = useState("")
    let [attributesHealth, setAttributesHealth] = useState("")
    let [attributesStamina, setAttributesStamina] = useState("")
    let [attributesMagicka, setAttributesMagicka] = useState("")
    let [cpBlueSlottable1, setCpBlueSlottable1] = useState("")
    let [cpBlueSlottable2, setCpBlueSlottable2] = useState("")
    let [cpBlueSlottable3, setCpBlueSlottable3] = useState("")
    let [cpBlueSlottable4, setCpBlueSlottable4] = useState("")
    let [cpBedSlottable1, setCpRedSlottable1] = useState("")
    let [cpRedSlottable2, setCpRedSlottable2] = useState("")
    let [cpRedSlottable3, setCpRedSlottable3] = useState("")
    let [cpRedSlottable4, setCpRedSlottable4] = useState("")
    let [cpGreenSlottable1, setCpGreenSlottable1] = useState("")
    let [cpGreenSlottable2, setCpGreenSlottable2] = useState("")
    let [cpGreenSlottable3, setCpGreenSlottable3] = useState("")
    let [cpGreenSlottable4, setCpGreenSlottable4] = useState("")
    let [consumableFood, setConsumableFood] = useState("")
    let [consumablePotion, setConsumablePotion] = useState("")
    let [mundusStone, setMundusStone] = useState("")

    let newGuideData = {
        newguideTitle: guideTitle,
        newclassName: className,
        newroleName: roleName,
        newguideDescription: guideDescription,
        newcharacterRaceSuggestion: characterRaceSuggestion,
        newheadSetName: headSetName,
        newheadArmorWeight: headArmorWeight,
        newheadEnchantment: headEnchantment,
        newheadTrait: headTrait,
        newheadWhereToObtain: headWhereToObtain,
        newshoulderSetName: shoulderSetName,
        newshoulderArmorWeight: shoulderArmorWeight,
        newshoulderEnchantment: shoulderEnchantment,
        newshoulderTrait: shoulderTrait,
        newshoulderWhereToObtain: shoulderWhereToObtain,
        newbodySetName: bodySetName,
        newbodyArmorWeight: bodyArmorWeight,
        newbodyEnchantment: bodyEnchantment,
        newbodyTrait: bodyTrait,
        newbodyWhereToObtain: bodyWhereToObtain,
        newhandSetName: handSetName,
        newhandArmorWeight: handArmorWeight,
        newhandEnchantment: handEnchantment,
        newhandTrait: handTrait,
        newhandWhereToObtain: handWhereToObtain,
        newbeltSetName: beltSetName,
        newbeltArmorWeight: beltArmorWeight,
        newbeltEnchantment: beltEnchantment,
        newbeltTrait: beltTrait,
        newbeltWhereToObtain: beltWhereToObtain,
        newlegSetName: legSetName,
        newlegArmorWeight: legArmorWeight,
        newlegEnchantment: legEnchantment,
        newlegTrait: legTrait,
        newlegWhereToObtain: legWhereToObtain,
        newbootsSetName: bootsSetName,
        newbootsArmorWeight: bootsArmorWeight,
        newbootsEnchantment: bootsEnchantment,
        newbootsTrait: bootsTrait,
        newbootsWhereToObtain: bootsWhereToObtain,
        newnecklaceSetName: necklaceSetName,
        newnecklaceEnchantment: necklaceEnchantment,
        newnecklaceTrait: necklaceTrait,
        newnecklaceWhereToObtain: necklaceWhereToObtain,
        newring1SetName: ring1SetName,
        newring1Enchantment: ring1Enchantment,
        newring1Trait: ring1Trait,
        newring1WhereToObtain: ring1WhereToObtain,
        newring2SetName: ring2SetName,
        newring2Enchantment: ring2Enchantment,
        newring2Trait: ring2Trait,
        newring2WhereToObtain: ring2WhereToObtain,
        newprimaryMainhandSetName: primaryMainhandSetName,
        newprimaryMainhandWeaponType: primaryMainhandWeaponType,
        newprimaryMainhandEnchantment: primaryMainhandEnchantment,
        newprimaryMainhandTrait: primaryMainhandTrait,
        newprimaryMainhandWhereToObtain: primaryMainhandWhereToObtain,
        newprimaryOffhandSetName: primaryOffhandSetName,
        newprimaryOffhandWeaponType: primaryOffhandWeaponType,
        newprimaryOffhandEnchantment: primaryOffhandEnchantment,
        newprimaryOffhandTrait: primaryOffhandTrait,
        newprimaryOffhandWhereToObtain: primaryOffhandWhereToObtain,
        newsecondaryMainhandSetName: secondaryMainhandSetName,
        newsecondaryMainhandWeaponType: secondaryMainhandWeaponType,
        newsecondaryMainhandEnchantment: secondaryMainhandEnchantment,
        newsecondaryMainhandTrait: secondaryMainhandTrait,
        newsecondaryMainhandWhereToObtain: secondaryMainhandWhereToObtain,
        newsecondaryOffhandSetName: secondaryOffhandSetName,
        newsecondaryOffhandWeaponType: secondaryOffhandWeaponType,
        newsecondaryOffhandEnchantment: secondaryOffhandEnchantment,
        newsecondaryOffhandTrait: secondaryOffhandTrait,
        newsecondaryOffhandWhereToObtain: secondaryOffhandWhereToObtain,
        newskillPrimary1: skillPrimary1,
        newskillPrimary2: skillPrimary2,
        newskillPrimary3: skillPrimary3,
        newskillPrimary4: skillPrimary4,
        newskillPrimary5: skillPrimary5,
        newskillPrimaryUltimate: skillPrimaryUltimate,
        newskillSecondary1: skillSecondary1,
        newskillSecondary2: skillSecondary2,
        newskillSecondary3: skillSecondary3,
        newskillSecondary4: skillSecondary4,
        newskillSecondary5: skillSecondary5,
        newskillSecondaryUltimate: skillSecondaryUltimate,
        newattributesHealth: attributesHealth,
        newattributesStamina: attributesStamina,
        newattributesMagicka: attributesMagicka,
        newcpBlueSlottable1: cpBlueSlottable1,
        newcpBlueSlottable2: cpBlueSlottable2,
        newcpBlueSlottable3: cpBlueSlottable3,
        newcpBlueSlottable4: cpBlueSlottable4,
        newcpBedSlottable1: cpBedSlottable1,
        newcpRedSlottable2: cpRedSlottable2,
        newcpRedSlottable3: cpRedSlottable3,
        newcpRedSlottable4: cpRedSlottable4,
        newcpGreenSlottable1: cpGreenSlottable1,
        newcpGreenSlottable2: cpGreenSlottable2,
        newcpGreenSlottable3: cpGreenSlottable3,
        newcpGreenSlottable4: cpGreenSlottable4,
        newconsumableFood: consumableFood,
        newconsumablePotion: consumablePotion,
        newmundusStone: mundusStone
    }

    function sendNewGuideData() {
        fetch("/guides/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newGuideData)
        })
    }

    return (
        <>
            <section>
                <h1>Create New Guide</h1>
                <section action="" className="new-guide-create-form">
                    <h3>Build Title</h3>
                    <section className="center-align">
                        <input className="build-title-input" placeholder="Type Here" type="text" onChange={e => { setGuideTitle(e.target.value) }} />
                    </section>
                    <h3>Build Description</h3>
                    <section className="center-align">
                        <textarea type="text" onChange={e => { setGuideDescription(e.target.value) }} className="new-comment-input" placeholder="Enter the builds description" />
                    </section>
                    <h3>Choose A Class</h3>
                    <section className="center-align">
                        <button onClick={() => { setClassName("DragonKnight") }} className="search-class">DragonKnight</button>
                        <button onClick={() => { setClassName("Templar") }} className="search-class">Templar</button>
                        <button onClick={() => { setClassName("Sorcerer") }} className="search-class">Sorcerer</button>
                        <button onClick={() => { setClassName("Nightblade") }} className="search-class">Nightblade</button>
                        <button onClick={() => { setClassName("Warden") }} className="search-class">Warden</button>
                        <button onClick={() => { setClassName("Necromancer") }} className="search-class">Necromancer</button>
                        <button onClick={() => { setClassName("Arcanist") }} className="search-class">Arcanist</button>
                    </section>
                    <section className="center-align">
                        <label htmlFor="">Currently: {className}</label>
                    </section>
                    <h3>Choose A Role</h3>
                    <section className="center-align">
                        <button onClick={() => { setRoleName("Tank") }} className="search-class">Tank</button>
                        <button onClick={() => { setRoleName("Healer") }} className="search-class">Healer</button>
                        <button onClick={() => { setRoleName("Dps") }} className="search-class">Dps</button>
                    </section>
                    <section className="center-align">
                        <label htmlFor="">Currently: {roleName}</label>
                    </section>
                    <h3>Enter a Preferred Character Race</h3>
                    <section className="center-align">
                        <input className="build-title-input" placeholder="Type Here" type="text" onChange={e => { setCharacterRaceSuggestion(e.target.value) }} />
                    </section>
                    <h3>Armor, Jewellery and Weapons</h3>
                    <section className="equipment">
                        <h4>Head Armor</h4>
                        <label htmlFor="">Armor Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setHeadSetName(e.target.value) }} />
                        <label htmlFor="">Choose Armor Weight: </label>
                        <section className="armor-weights">
                            <button className="armor-weight-button" onClick={e => { setHeadArmorWeight("Heavy") }}>Heavy</button>
                            <button className="armor-weight-button" onClick={e => { setHeadArmorWeight("Medium") }}>Medium</button>
                            <button className="armor-weight-button" onClick={e => { setHeadArmorWeight("Light") }}>Light</button>
                            <label className="current-armor-weight" htmlFor="">Currently: {headArmorWeight}</label>
                        </section>
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setHeadEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setHeadTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setHeadWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Shoulder Armor</h4>
                        <label htmlFor="">Armor Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setShoulderSetName(e.target.value) }} />
                        <label htmlFor="">Choose Armor Weight: </label>
                        <section className="armor-weights">
                            <button className="armor-weight-button" onClick={e => { setShoulderArmorWeight("Heavy") }}>Heavy</button>
                            <button className="armor-weight-button" onClick={e => { setShoulderArmorWeight("Medium") }}>Medium</button>
                            <button className="armor-weight-button" onClick={e => { setShoulderArmorWeight("Light") }}>Light</button>
                            <label className="current-armor-weight" htmlFor="">Currently: {shoulderArmorWeight}</label>
                        </section>
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setShoulderEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setShoulderTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setShoulderWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Body Armor</h4>
                        <label htmlFor="">Armor Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBodySetName(e.target.value) }} />
                        <label htmlFor="">Choose Armor Weight: </label>
                        <section className="armor-weights">
                            <button className="armor-weight-button" onClick={e => { setBodyArmorWeight("Heavy") }}>Heavy</button>
                            <button className="armor-weight-button" onClick={e => { setBodyArmorWeight("Medium") }}>Medium</button>
                            <button className="armor-weight-button" onClick={e => { setBodyArmorWeight("Light") }}>Light</button>
                            <label className="current-armor-weight" htmlFor="">Currently: {bodyArmorWeight}</label>
                        </section>
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBodyEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBodyTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBodyWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Hand Armor</h4>
                        <label htmlFor="">Armor Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setHandSetName(e.target.value) }} />
                        <label htmlFor="">Choose Armor Weight: </label>
                        <section className="armor-weights">
                            <button className="armor-weight-button" onClick={e => { setHandArmorWeight("Heavy") }}>Heavy</button>
                            <button className="armor-weight-button" onClick={e => { setHandArmorWeight("Medium") }}>Medium</button>
                            <button className="armor-weight-button" onClick={e => { setHandArmorWeight("Light") }}>Light</button>
                            <label className="current-armor-weight" htmlFor="">Currently: {handArmorWeight}</label>
                        </section>
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setHandEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setHandTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setHandWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Belt Armor</h4>
                        <label htmlFor="">Armor Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBeltSetName(e.target.value) }} />
                        <label htmlFor="">Choose Armor Weight: </label>
                        <section className="armor-weights">
                            <button className="armor-weight-button" onClick={e => { setBeltArmorWeight("Heavy") }}>Heavy</button>
                            <button className="armor-weight-button" onClick={e => { setBeltArmorWeight("Medium") }}>Medium</button>
                            <button className="armor-weight-button" onClick={e => { setBeltArmorWeight("Light") }}>Light</button>
                            <label className="current-armor-weight" htmlFor="">Currently: {beltArmorWeight}</label>
                        </section>
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBeltEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBeltTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBeltWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Leg Armor</h4>
                        <label htmlFor="">Armor Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setLegSetName(e.target.value) }} />
                        <label htmlFor="">Choose Armor Weight: </label>
                        <section className="armor-weights">
                            <button className="armor-weight-button" onClick={e => { setLegArmorWeight("Heavy") }}>Heavy</button>
                            <button className="armor-weight-button" onClick={e => { setLegArmorWeight("Medium") }}>Medium</button>
                            <button className="armor-weight-button" onClick={e => { setLegArmorWeight("Light") }}>Light</button>
                            <label className="current-armor-weight" htmlFor="">Currently: {legArmorWeight}</label>
                        </section>
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setLegEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setLegTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setLegWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Boots</h4>
                        <label htmlFor="">Armor Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBootsSetName(e.target.value) }} />
                        <label htmlFor="">Choose Armor Weight: </label>
                        <section className="armor-weights">
                            <button className="armor-weight-button" onClick={e => { setBootsArmorWeight("Heavy") }}>Heavy</button>
                            <button className="armor-weight-button" onClick={e => { setBootsArmorWeight("Medium") }}>Medium</button>
                            <button className="armor-weight-button" onClick={e => { setBootsArmorWeight("Light") }}>Light</button>
                            <label className="current-armor-weight" htmlFor="">Currently: {bootsArmorWeight}</label>
                        </section>
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBootsEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBootsTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setBootsWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Necklace</h4>
                        <label htmlFor="">Armor Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setNecklaceSetName(e.target.value) }} />
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setNecklaceEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setNecklaceTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setNecklaceWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Ring 1</h4>
                        <label htmlFor="">Armor Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setRing1SetName(e.target.value) }} />
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setRing1Enchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setRing1Trait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setRing1WhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Ring 2</h4>
                        <label htmlFor="">Armor Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setRing2SetName(e.target.value) }} />
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setRing2Enchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setRing2Trait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setRing2WhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Primary Mainhand Weapon</h4>
                        <label htmlFor="">Weapon Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setPrimaryMainhandSetName(e.target.value) }} />
                        <label htmlFor="">Weapon Type: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setPrimaryMainhandWeaponType(e.target.value) }} />
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setPrimaryMainhandEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setPrimaryMainhandTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setPrimaryMainhandWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Primary Offhand Weapon</h4>
                        <label htmlFor="">Weapon Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setPrimaryOffhandSetName(e.target.value) }} />
                        <label htmlFor="">Weapon Type: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setPrimaryOffhandWeaponType(e.target.value) }} />
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setPrimaryOffhandEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setPrimaryOffhandTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setPrimaryOffhandWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Secondary Mainhand Weapon</h4>
                        <label htmlFor="">Weapon Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setSecondaryMainhandSetName(e.target.value) }} />
                        <label htmlFor="">Weapon Type: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setSecondaryMainhandWeaponType(e.target.value) }} />
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setSecondaryMainhandEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setSecondaryMainhandTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setSecondaryMainhandWhereToObtain(e.target.value) }} />
                    </section>
                    <section className="equipment">
                        <h4>Secondary Offhand Weapon</h4>
                        <label htmlFor="">Weapon Set Name: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setSecondaryOffhandSetName(e.target.value) }} />
                        <label htmlFor="">Weapon Type: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setSecondaryOffhandWeaponType(e.target.value) }} />
                        <label htmlFor="">Enchantment: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setSecondaryOffhandEnchantment(e.target.value) }} />
                        <label htmlFor="">Trait: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setSecondaryOffhandTrait(e.target.value) }} />
                        <label htmlFor="">Where to obtain the Set: </label>
                        <input className="equipment-input" placeholder="Type Here" type="text" onChange={e => { setSecondaryOffhandWhereToObtain(e.target.value) }} />
                    </section>
                    <h3>Skills</h3>
                    <section className="new-skill-bars">
                        <section className="add-skills">
                            <h4>Primary Skill Bar</h4>
                            <section className="main-skills">
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillPrimary1(e.target.value) }} />
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillPrimary2(e.target.value) }} />
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillPrimary3(e.target.value) }} />
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillPrimary4(e.target.value) }} />
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillPrimary5(e.target.value) }} />
                            </section>
                            <section className="ultimate-skill">
                                <label htmlFor="">Ultimate: </label>
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillPrimaryUltimate(e.target.value) }} />
                            </section>
                        </section>
                        <section className="add-skills">
                            <h4>Secondary Skill Bar</h4>
                            <section className="main-skills">
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillSecondary1(e.target.value) }} />
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillSecondary2(e.target.value) }} />
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillSecondary3(e.target.value) }} />
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillSecondary4(e.target.value) }} />
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillSecondary5(e.target.value) }} />
                            </section>
                            <section className="ultimate-skill">
                                <label htmlFor="">Ultimate: </label>
                                <input className="skill-input" placeholder="Type Skill Name" type="text" onChange={e => { setSkillSecondaryUltimate(e.target.value) }} />
                            </section>
                        </section>
                    </section>
                    <section className="new-attributes">
                        <h3>Attributes</h3>
                        <section className="attribute-inputs">
                            <section>
                                <label htmlFor="">Health: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setAttributesHealth(e.target.value) }} />
                            </section>
                            <section>
                                <label htmlFor="">Stamina: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setAttributesStamina(e.target.value) }} />
                            </section>
                            <section>
                                <label htmlFor="">Magicka: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setAttributesMagicka(e.target.value) }} />
                            </section>
                        </section>
                    </section>
                    <h3>Champion Points</h3>
                    <section className="create-champion-points">
                        <section className="new-champion-points">
                            <h4>Blue Champion Points</h4>
                            <section>
                                <label htmlFor="">Slottable 1: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpBlueSlottable1(e.target.value) }} />
                                <label htmlFor="">Slottable 2: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpBlueSlottable2(e.target.value) }} />
                                <label htmlFor="">Slottable 3: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpBlueSlottable3(e.target.value) }} />
                                <label htmlFor="">Slottable 4: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpBlueSlottable4(e.target.value) }} />
                            </section>
                        </section>
                        <section className="new-champion-points">
                            <h4>Red Champion Points</h4>
                            <section>
                                <label htmlFor="">Slottable 1: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpRedSlottable1(e.target.value) }} />
                                <label htmlFor="">Slottable 2: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpRedSlottable2(e.target.value) }} />
                                <label htmlFor="">Slottable 3: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpRedSlottable3(e.target.value) }} />
                                <label htmlFor="">Slottable 4: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpRedSlottable4(e.target.value) }} />
                            </section>
                        </section>
                        <section className="new-champion-points">
                            <h4>Green Champion Points</h4>
                            <section>
                                <label htmlFor="">Slottable 1: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpGreenSlottable1(e.target.value) }} />
                                <label htmlFor="">Slottable 2: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpGreenSlottable2(e.target.value) }} />
                                <label htmlFor="">Slottable 3: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpGreenSlottable3(e.target.value) }} />
                                <label htmlFor="">Slottable 4: </label>
                                <input placeholder="Type Here" type="text" onChange={e => { setCpGreenSlottable4(e.target.value) }} />
                            </section>
                        </section>
                    </section>
                    <h3>Consumables and Mundus Stone</h3>
                    <section className="consumables-and-mundus">
                        <section className="new-consumables">
                            <label htmlFor="">Food: </label>
                            <input placeholder="Type Here" type="text" onChange={e => { setConsumableFood(e.target.value) }} />
                        </section>
                        <section className="new-consumables">
                            <label htmlFor="">Potion: </label>
                            <input placeholder="Type Here" type="text" onChange={e => { setConsumablePotion(e.target.value) }} />
                        </section>
                        <section className="new-consumables">
                            <label htmlFor="">Mundus: </label>
                            <input placeholder="Type Here" type="text" onChange={e => { setMundusStone(e.target.value) }} />
                        </section>
                    </section>
                    <section className="center-align">
                        <button className="create-new-submit" onClick={() => { sendNewGuideData() }}><h3>Submit</h3></button>
                    </section>
                </section>
            </section>
        </>
    )
}

export default PostNewGuide