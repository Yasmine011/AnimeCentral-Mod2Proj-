import React from 'react'
import Header2 from './components/Header2'
import { useState, useEffect} from 'react';
import Sidebar2 from './components/Sidebar2';
import MainContent2 from './components/MainContent2';

function Manga() {
        const [mangaList, SetMangaList] = useState([]); //main anime
        const [RecommendManga, SetRecommendManga] = useState([]); //tab that show the top anime when selected
        const [search, SetSearch] = useState(""); //search to find certain on search bar
        
        // Recommended Manga Fetch
        const GetRecommendManga = async () => {
        const res = await fetch(`https://api.jikan.moe/v3/manga/1/recommendations`)
        //.then(res => res.json());
            let json = await res.json();
            console.log(json);
            let recommendations = json.recommendations
        SetRecommendManga(recommendations); //filters  5 of recommended animes
        }

        const HandleSearch = e => {
        e.preventDefault();


        FetchManga(search);
        }

        //Search Bar Fetch
        const FetchManga = async (query) => {
        const temp = await fetch (`https://api.jikan.moe/v3/search/manga/?q=${query}&order_by=characters&sort=asc&limit=15`)
        .then(res => res.json());

        console.log(temp.results);
        SetMangaList(temp.results);
        }

        useEffect(() => {
        GetRecommendManga();
        }, []);
    
    
    
    return (
        <div className="Manga">
            <div className="content-wrap">
        <Header2/>
        <Sidebar2 
        RecommendManga={RecommendManga}/>
        <MainContent2
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        mangaList={mangaList} />
            </div>
        </div>
    )
}

export default Manga
