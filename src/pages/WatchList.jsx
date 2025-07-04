// import MovieCard from "../components/MovieCard"

import { useContext, useState } from "react"
import GenreFilter from "../components/GenreFilter"
import { WatchListContext } from "../context/WatchListContext"
import MovieCard from "../components/MovieCard"

const WatchList = () => {
  const [selectedGenre, setselectedGenre]=useState("")

  const { watchList, genreList } = useContext(WatchListContext);

  const [search, setSearch]=useState("")

  const filterdMovies=watchList.filter((movie)=>
  movie.title.toLowerCase().includes(search.toLocaleLowerCase()))
.filter(movie=>{
  return !selectedGenre || 
  movie.genre_ids .includes(Number(selectedGenre))
})

  return (
    // <MovieCard/>
    <div className="p-4 pt-16 ">
      <input type="text" placeholder="name" 
      onChange={(e)=>{
        setSearch(e.target.value)
      }}
      className="fixed top-16 left-1/2 
        z-10 transform -translate-x-1/2 bg-gray-800  
        bg-opacity-60 backdrop:md w-3/4 md:w-1/2 text-white 
        border border-blue-700 focus:border-blue-500 rounded-md p-2"/>
      <div className="mt-16 flex justify-center">
        <GenreFilter genreList={genreList} setselectedGenre={setselectedGenre}/>
      </div>
      <div className="movies-container grid grid-cols-1
             md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
       
                {filterdMovies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />
                    
                })}
            </div>

      
    </div>

  )
}
export default WatchList