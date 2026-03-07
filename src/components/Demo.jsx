import { useRef, useState } from "react";
import demoVideo from "../assets/demo.mp4";

export default function Demo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section id="demo" className="section">
      <h2 className="section-title">📱 App Demo</h2>

      <div className="demo-container">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="demo-video"
            controls
            onPause={handlePause}
            onEnded={handleEnded}
          >
            <source src={demoVideo} type="video/mp4" />
          </video>

          {!isPlaying && (
            <div className="play-button" onClick={handlePlayClick}>
              ▶
            </div>
          )}
        </div>
      </div>
    </section>
  );
}