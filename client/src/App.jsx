import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Login } from './Pages/Login'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Explore from './Pages/Explore'
import JourneyPage from './Pages/JourneyPage'
import ProfileDashboard from './Pages/ProfileDashboard'
import VideoPlayerPage from './Pages/VideoPlayerPage'

function App() {

  const [user,setUser] = useState(null);

  


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/explore'} element={<Explore/>}/>
        <Route path={'/profile'} element={<ProfileDashboard/>}/>
        <Route path={'/journey/:jId'} element={<JourneyPage/>}/>
        <Route path={'/player/:chapter_id'} element={<VideoPlayerPage/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/signup'} element={<Register/>}/>
      </Routes>

      <Footer/>
 
    </>
  )
}

export default App
