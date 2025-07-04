import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

const Home = () => {
    const [movies, setmovies]=useState([])
    const [page, setPage]=useState(1)
    const [search, setSearch]=useState("")
useEffect(()=>{


        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=7d74fdefd5144900e2393989ae5f214a`

        if (search) {
            url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=7d74fdefd5144900e2393989ae5f214a`
        }

        fetch(url)

    .then((res)=>res.json())
    .then((data)=>setmovies(data.results))
},[page, search])

    return (
        <div className="p-4 pt-16 ">
            <input type="text" placeholder="name" 
            onChange={(e)=>setSearch(e.target.value)}
            className="fixed top-16 left-1/2 
        z-10 transform -translate-x-1/2 bg-gray-800  
        bg-opacity-60 backdrop:md w-3/4 md:w-1/2 text-white 
        border border-blue-700 focus:border-blue-500 rounded-md p-2"/>
            <div className="movies-container grid grid-cols-1
             md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />
                    
                })}
            </div>
            <div className="pagination-container flex justify-between mt-5">
                <button 
                disabled={page==1}
                className="bg-gray-700 text-white rounded p-2  "
                onClick={()=>{
                    setPage((prev)=>prev - 1)
                }}
                >Previous</button>
                <button 
                onClick={()=>{
                    setPage((prev)=>prev + 1)
                }}
                className="bg-gray-700 text-white rounded p-2">Next</button>
            </div>
        </div>
    )
}
export default Home