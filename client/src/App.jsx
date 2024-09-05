import { useState, useEffect } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import JourneyPage from "./Pages/JourneyPage";
import ProfileDashboard from "./Pages/ProfileDashboard";
import VideoPlayerPage from "./Pages/VideoPlayerPage";
import Cookies from "js-cookie";
import { token } from "./Constants";
import Auth from "./Pages/Auth";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('authToken');

    if (!token ) {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Routes>
     
         
          <Route path="/" element={<Home />} />
       
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<ProfileDashboard />} />
        <Route path="/journey/:jId" element={<JourneyPage />} />
        <Route path="/player/:videoId" element={<VideoPlayerPage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
