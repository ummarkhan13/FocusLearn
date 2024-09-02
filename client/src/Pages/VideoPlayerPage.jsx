import React, { useEffect, useState } from "react";
import YouTubeApp from "../Components/YoutubeApp.jsx";
import AddNotes from "../Components/forms/AddNotes";

const VideoPlayerPage = () => {
  const vid_url = "https://youtu.be/1yrh60og6qc?si=ELH9-T9LnMphPQvW";
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    handleVid();
  }, []);

  const handleVid = () => {
    const url = vid_url;
    const id = extractVideoId(url);
    setVideoId(id);
  };

  const extractVideoId = (url) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  return (
    <div className="flex flex-col  md:flex-row gap-2 p-4 w-full border-t-2  bg-gray-800 text-white">
     
      <div className="w-full md:w-3/4 ">
        <YouTubeApp videoId={videoId} />
      </div>

      <div className="w-full md:w-1/2 mt-4 md:mt-0 ">
        <AddNotes />
      </div>

    </div>
  );
};

export default VideoPlayerPage;
