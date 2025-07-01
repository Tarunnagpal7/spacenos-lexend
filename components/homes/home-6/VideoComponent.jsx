"use client";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

export default function VideoComponent() {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const sectionRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isFloating, setIsFloating] = useState(false);
  const [floatingStopped, setFloatingStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      player.setVolume(0);
      setIsMuted(true);
      playerRef.current = player;
    }
    return () => playerRef.current?.destroy();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || floatingStopped) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      const beyondSection = sectionBottom <= 0 || sectionTop > windowHeight;
      setIsFloating(beyondSection && !floatingStopped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [floatingStopped]);

  useEffect(() => {
    const handleControl = (e) => {
      const { source, action } = e.detail;
      if (source !== "VideoComponent" && action === "muteOthers") {
        playerRef.current?.setVolume(0);
        setIsMuted(true);
        setIsFloating(false);
      }
    };
    window.addEventListener("controlVideo", handleControl);
    return () => window.removeEventListener("controlVideo", handleControl);
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        window.dispatchEvent(new CustomEvent("unmuteRequest", { detail: { source: "VideoComponent" } }));
        playerRef.current.setVolume(1);
        setIsMuted(false);
      } else {
        playerRef.current.setVolume(0);
        setIsMuted(true);
      }
    }
  };

  const togglePause = () => {
    if (playerRef.current) {
      isPaused ? playerRef.current.play() : playerRef.current.pause();
      setIsPaused(!isPaused);
    }
  };

  const stopFloating = () => {
    setFloatingStopped(true);
    setIsFloating(false);
    playerRef.current?.setVolume(0);
    setIsMuted(true);
  };

  return (
    <>
      <div id="how_it_works" ref={sectionRef} className="how-it-works section panel scrollSpysection">
        <div className="section-outer panel bg-secondary p-2 p-xl-6 rounded-2 rounded-lg-3">
          <h1 className="h3 h-lg-2 h-xl-1 m-0 text-black text-center mb-4 mb-lg-6 mb-xl-8">Why We Exist</h1>

          <div className="container d-flex justify-content-center">
            <div
              className={`mx-auto mb-4 rounded border border-dark contrast-shadow-lg video-wrapper ${
                isFloating ? "floating-video active" : "floating-video"
              }`}
              style={{ width: "250px", maxWidth: "90vw" }}
            >
              <div className="position-relative overflow-hidden rounded-2 border border-2 border-white">
                <div className="position-relative" style={{ paddingBottom: "177.78%" }}>
                  <iframe
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/1096805774?autoplay=1&muted=1&loop=1&background=1"
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ objectFit: "cover" }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10, display: "flex", gap: "6px" }}>
                    <button onClick={toggleMute} style={btnStyle}>{isMuted ? "Unmute" : "Mute"}</button>
                    <button onClick={togglePause} style={btnStyle}>{isPaused ? "Play" : "Pause"}</button>
                    {isFloating && <button onClick={stopFloating} style={closeStyle}>✕</button>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel d-flex flex-column align-items-center gap-2 mt-4">
            <p className="fs-6 text-black fw-bold text-center mx-auto" style={{ opacity: "0.7", maxWidth: "800px" }}>
              Spacenos was born not in a boardroom, but on the battlefield of ideas — where we lost deals, hacked systems, and outworked giants to help those without capital build billion-dollar dreams.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-wrapper {
          transition: all 0.4s ease;
        }
        .floating-video {
          position: relative;
          top: 0;
          right: 0;
          width: 250px;
          z-index: 1;
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .floating-video.active {
          position: fixed !important;
          top: 370px;
          right: 20px;
          width: 180px !important;
          max-width: 90vw;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
    </>
  );
}

const btnStyle = {
  background: "rgba(0,0,0,0.6)",
  color: "#fff",
  border: "none",
  padding: "6px 10px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "12px",
};

const closeStyle = {
  ...btnStyle,
  background: "rgba(255, 0, 0, 0.7)",
};
