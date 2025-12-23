import { useEffect, useRef, useState } from "react";
import Video from "./components/Video";

export default function ExerciseRef() {
  const videoRef = useRef();
  const [isPlaying, setPlaying] = useState(false);
  const currentTimeRef = useRef(0);
  const handlePlay = () => {
    if (!videoRef.current) {
      return;
    }
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    const videoEl = videoRef.current;
    const handlePlay = () => {
      setPlaying(true);
    };
    const handlePause = () => {
      setPlaying(false);
    };
    const handleTimeUpdate = () => {
      currentTimeRef.current.innerText = videoEl.currentTime;
    };
    videoEl.addEventListener("play", handlePlay);
    videoEl.addEventListener("pause", handlePause);
    videoEl.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      videoEl.removeEventListener("play", handlePlay);
      videoEl.removeEventListener("pause", handlePause);
      videoEl.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  console.log("re-render");

  return (
    <div>
      <Video ref={videoRef} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <span ref={currentTimeRef}></span>
      </div>
    </div>
  );
}
