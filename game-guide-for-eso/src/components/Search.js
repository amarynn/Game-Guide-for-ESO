function Search() {
    return (
        <>
            <input type="text" name="searchinput" className="search-input" />
            <section className="search-class-buttons">
                <button className="search-class-dragonknight" name="Dragonknight">Dragon Knight</button>
                <button className="search-class-templar" name="Templar">Templar</button>
                <button className="search-class-sorcerer" name="Sorcerer">Sorcerer</button>
                <button className="search-class-nightblade" name="Nightblade">Nightblade</button>
                <button className="search-class-warden" name="Warden">Warden</button>
                <button className="search-class-necromancer" name="Necromancer">Necromancer</button>
                <button className="search-class-arcanist" name="Arcanist">Arcanist</button>
            </section>
            <section className="search-role-buttons">
                <button className="search-role-tank" name="Tank">Tank</button>
                <button className="search-role-healer" name="Healer">Healer</button>
                <button className="search-role-dps" name="Dps">Dps</button>
            </section>
        </>
    )
}

export default Search