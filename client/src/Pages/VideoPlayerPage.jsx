import React, { useEffect, useState } from "react";
import YouTubeApp from "../Components/YoutubeApp.jsx";
import AddNotes from "../Components/forms/AddNotes";
import { useParams } from "react-router-dom";

const VideoPlayerPage = () => {

  const {videoId} = useParams()
 
  // const handleVid = () => {
  //   console.log(video_link);
  //   const url = video_link;
  //   const id = extractVideoId(url);
  //   setVideoId(id);
  // };

  
  // useEffect(() => {
  //   handleVid();
  // }, []);



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
