import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WatchList from "./pages/WatchList"
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import { WatchListProvider } from './context/WatchListContext'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WatchListProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='watchlist' element={<WatchList/>}/>
          

        </Routes>
      </BrowserRouter>
      </WatchListProvider>
    </>
  )
}

export default App
