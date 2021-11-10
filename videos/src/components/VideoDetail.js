import React from 'react';

export default function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }

  return <div>{video.snippet.title}</div>;
}
