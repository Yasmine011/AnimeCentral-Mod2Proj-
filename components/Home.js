import React from 'react'
import Header from "./Header";
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import { useState, useEffect} from 'react';


function Home() {
        const [animeList, SetAnimeList] = useState([]); //main anime
        const [topAnime, SetTopAnime] = useState([]); //tab that show the top anime when selected
        const [search, SetSearch] = useState(""); //search to find certain on search bar
        
        //TopAnime Fetch
        const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res => res.json());

        SetTopAnime(temp.top.slice(0,5)); //filters top 10 out of the 50 anime
        }

        const HandleSearch = e => {
        e.preventDefault();


        FetchAnime(search);
        }

        //Search Bar Fetch
        const FetchAnime = async (query) => {
        const temp = await fetch (`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=15`)
        .then(res => res.json());

        console.log(temp.results);
        SetAnimeList(temp.results);
        }

        useEffect(() => {
        GetTopAnime();
        }, []);


        return (
            <div className="content-wrap">
        <Header/>
        <Sidebar 
        topAnime={topAnime}/>
        <MainContent
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        animeList={animeList} />
            </div>

    )
}

export default Home

