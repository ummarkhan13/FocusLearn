import React from 'react';
import YouTube from 'react-youtube';

const YouTubeApp = ({ videoId }) => {
  const opts = {
    height: '515',
    width: '903',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {videoId ? (
        // Embed YouTube video using react-youtube
        <YouTube videoId={videoId} opts={opts} />
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default YouTubeApp;


        // <video src={`https://www.youtube.com/watch?v=${videoId}`}></video>