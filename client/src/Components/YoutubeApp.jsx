import React, { useState } from 'react';
import YouTube from 'react-youtube';

const YouTubeApp = ({videoId}) => {


  const opts = {
    height: '585',
    width: '963',
    playerVars: {
      autoplay: 1,
    },
  };
  
  return (
    <div>
      {videoId && (
        <YouTube videoId={videoId} opts={opts} />
      )}
    </div>
  );
};

export default YouTubeApp;
