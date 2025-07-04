import { useContext } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { WatchListContext } from "../context/WatchListContext"

// const movie = {
//     poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpKmKjjO4UrVMhU9JGNDK6qf7BW793wpFJQ&s",
//     title: "Thallumaala",
//     relese_date: "2023-3-23"
// }

const MovieCard = ({movie}) => {
    const {toggleWatchlist, watchList}=useContext(WatchListContext)
    console.log("wachlist",watchList);
    
    const isWatchList=watchList.some((m)=>m.id==movie.id)
    return (
        <div className="relative bg-gray-800 p-4 rounded-lg shadow-md text-white ">
            <img className="w-full h-80 rounded-sm object-contain" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h2 className="text-xl font-bold mt-4">{movie.title}</h2>
            <p className="text-sm text-gray-400">{movie.relese_date}</p>
            <button 
            onClick={()=>toggleWatchlist(movie)}
            className="absolute right-2 top-2 text-red-500 text-xl">
                {isWatchList ? <FaHeart /> : <FaRegHeart />}</button>
        </div>
    )
}
export default MovieCard