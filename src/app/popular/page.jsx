"use client"

import AnimeLIst from "@/components/Animelist";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useState, useEffect } from "react";
import { getAnimeResponse } from "../libs/api-libs";
const Page =  () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime ] = useState([])

    const fetchData = async() => {
        const populerAnime = await getAnimeResponse("top/anime",`page=${page}`)
        setTopAnime(populerAnime)
    }
    
    useEffect(() => {
        fetchData()
    }, [page])
    
    
    return(
        <>
        <HeaderMenu title={`TOP ANIME #${page}`} />
        <AnimeLIst api={topAnime}/>   
        <Pagination page={page}  lastPage={topAnime.pagination ? topAnime.pagination.last_visible_page : null}
        setPage={setPage}
        />
        
        </>
    )
}       

export default Page