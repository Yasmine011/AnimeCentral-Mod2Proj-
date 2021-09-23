import React from "react"
import MangaCard from "./MangaCard"

function MainContent2(props) {
    return (
        <main>
            <div className="main-head">
                <form 
                className="search-box"
                onSubmit={props.HandleSearch}>
                    <input
                        type="search"
                        placeholder="Search for a manga..."
                        required
                        value={props.search}
                        onChange={e => props.SetSearch(e.target.value)}
                        />
                </form>
            </div>
            <div className="manga-list">
                {props.mangaList.map(manga => (
                    <MangaCard
                        manga={manga}
                        key={manga.mal_id} />
                ))}
            </div>
        </main>
    )
}

export default MainContent2
