const GenreFilter=({genreList, setselectedGenre})=>{
    return(
       <select name="" id="" className="bg-gray-700 p-2 
       text-white backdrop:blur-md bg-opacity-60 border rounded mb-4"
       onChange={(e)=> setselectedGenre(e.target.value)}>
        <option value="">All Genres</option>
        {genreList?.map((genre,idx)=>{
            return(
                <option key={idx} value={genre.id}>
                    {genre.name}
                </option>
            )
        })}
       </select>
    )
}
export default GenreFilter