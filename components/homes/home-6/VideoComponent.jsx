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
    return () => {
      if (playerRef.current) playerRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !playerRef.current || floatingStopped) return;

      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const shouldFloat = sectionBottom <= 0 && scrollY < windowHeight * 5;

      if (shouldFloat) {
        setIsFloating(true);
      } else {
        if (isFloating) {
          setIsFloating(false);
          if (!isMuted) {
            playerRef.current.setVolume(0);
            setIsMuted(true);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMuted, isFloating, floatingStopped]);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
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
      if (isPaused) {
        playerRef.current.play();
        setIsPaused(false);
      } else {
        playerRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const stopFloating = () => {
    setFloatingStopped(true);
    setIsFloating(false);
    if (playerRef.current && !isMuted) {
      playerRef.current.setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <>
      <div
        id="how_it_works"
        ref={sectionRef}
        className="how-it-works section panel scrollSpysection"
      >
        <div className="section-outer panel bg-secondary p-2 p-xl-6 rounded-2 rounded-lg-3">
          <h1 className="h3 h-lg-2 h-xl-1 m-0 text-black text-center mb-4 mb-lg-6 mb-xl-8">
            Why We Exist
          </h1>

          <div className="container d-flex justify-content-center">
            <div
              style={{ width: "250px", maxWidth: "90vw" }}
              className={`mx-auto  mb-4 rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg video-wrapper ${isFloating ? "floating-video" : ""
                }`}
            >
              <div className="position-relative overflow-hidden rounded-2 rounded-lg-3 border border-2 border-white dark:border-gray-700">
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
                  ></iframe>

                  <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10, display: "flex", gap: "6px" }}>
                    <button
                      onClick={toggleMute}
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        border: "none",
                        padding: "6px 10px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    >
                      {isMuted ? "Unmute" : "Mute"}
                    </button>

                    <button
                      onClick={togglePause}
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        border: "none",
                        padding: "6px 10px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    >
                      {isPaused ? "Play" : "Pause"}
                    </button>

                    {isFloating && (
                      <button
                        onClick={stopFloating}
                        style={{
                          background: "rgba(255, 0, 0, 0.7)",
                          color: "#fff",
                          border: "none",
                          padding: "6px 10px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "12px",
                        }}
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel d-flex flex-column align-items-center gap-2 mt-4 mt-lg-6 mt-xl-8">
            <p
              className="fs-6 fs-xl-4 text-black fw-bold text-center mx-auto"
              style={{ opacity: "0.7", maxWidth: "800px" }}
            >
              Spacenos was born not in a boardroom, but on the battlefield of ideas — where we lost
              deals, hacked systems, and outworked giants to help those without capital build
              billion-dollar dreams.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-video {
          position: fixed !important;
          top: 370px;
          right: 20px;
          z-index: 9999;
          width: 180px !important;
          max-width: 90vw;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transform: translateY(0);
          transition: transform 0.4s ease, opacity 0.4s ease;
        }

        .video-wrapper {
          transition: all 0.4s ease;
        }
      `}</style>
    </>
  );
}
