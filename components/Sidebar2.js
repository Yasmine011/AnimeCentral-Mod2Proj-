import React from 'react'

function Sidebar2({RecommendManga}) {
    console.log(RecommendManga)
    return (
        <aside>
        <nav>
            <h3>Recommended <strong>Manga</strong></h3>
        
            {RecommendManga.map(manga =>( 
            <a 
                href={manga.url} 
                target="_blank" 
                key={manga.mal_id}
                rel="noreferrer">
                {manga.title}
            </a>
        ))}
        </nav>
    </aside>
)

}

export default Sidebar2
