import { useContext } from "react"
import { Link } from "react-router-dom"
import { WatchListContext } from "../context/WatchListContext"

const Navbar=()=>{
    const{watchList}=useContext(WatchListContext)
    return(
       
        <nav className="z-10 bg-black fixed w-full flex justify-between text-white mx-auto p-4 top-0">
       <Link to="/" className="text-xl font-bold">Movie App</Link>
       <Link to="/watchlist" className="text-xl">
       Watchlist
       ({watchList.length})</Link>
       </nav>

    )
}
export default Navbar