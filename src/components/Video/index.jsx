import React from "react";
import './style.css'
import Video from "../../assets/videos/Rob.mp4"

export default function App() {
  return (
    <div className="video">
        <video controls autostart autoPlay src={Video} type="video/mp4" />
    </div>
  );
}

