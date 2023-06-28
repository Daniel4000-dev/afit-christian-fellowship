import React from "react";
import YouTubeVideoGrid from "../YoutubeVideoGrid";

function TubeLinks() {
  const videoIds = [
    "https://youtu.be/yfoYRb_ZeWk",
    "https://youtu.be/yfoYRb_ZeWk",
    "https://www.youtube.com/watch?v=xNRJwmlRBNU&t=165s",
    "videoId4",
    "videoId5",
    "videoId6",
  ];

  return (
    <div>
      <YouTubeVideoGrid videoIds={videoIds}/>
    </div>
  );
}

export default TubeLinks;
