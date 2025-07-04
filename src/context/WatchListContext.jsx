import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext()


export const WatchListProvider = ({ children }) => {
    const [genreList, setGenreList]=useState()
useEffect(()=>{


        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=7d74fdefd5144900e2393989ae5f214a`

        

        fetch(url)

    .then((res)=>res.json())
    .then((data)=>setGenreList(data.genres || []))
},[])

    const [watchList, setWatchList] = useState([])
    const toggleWatchlist = (movie) => {
        const index = watchList.findIndex((m) => m.id === movie.id)
        if (index === -1) {
            setWatchList([...watchList, movie])
        } else {
            setWatchList([...watchList.slice(0, index)
                , ...watchList.slice(index + 1)])
        }
    }
// console.log("watch",watchList);

    return (
        <WatchListContext.Provider value={{
            genreList,
            watchList,
            toggleWatchlist
        }}>
            {children}
        </WatchListContext.Provider>
    )
}