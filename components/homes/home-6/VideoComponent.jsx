"use client";
import { useParallax } from "react-scroll-parallax";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

export default function VideoComponent() {
  const parallax = useParallax({
    scale: [0.8, 1],
  });

  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);

      player.setVolume(0); // Start muted
      setIsMuted(true);

      player.on("loaded", () => {
        console.log("Video is ready");
      });

      playerRef.current = player;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.setVolume(1); // Unmute
        setIsMuted(false);
      } else {
        playerRef.current.setVolume(0); // Mute
        setIsMuted(true);
      }
    }
  };

  return (
    <>
      <div
        id="how_it_works"
        ref={parallax.ref}
        className="how-it-works section panel scrollSpysection"
      >
        <div
          className="section-outer panel bg-secondary p-2 p-xl-6 rounded-2 rounded-lg-3"
          data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;"
        >
          <h1 className="h3 h-lg-2 h-xl-1 m-0 text-black text-center mb-4 mb-lg-6 mb-xl-8">
            Why We Exist
          </h1>

          <div className="container d-flex justify-content-center">
            <div style={{ width: "250px", maxWidth: "90vw" }} className="mx-auto">
              <div className="position-relative overflow-hidden rounded-2 rounded-lg-3 border border-2 border-white">
                <div className="position-relative" style={{ paddingBottom: "177.78%" }}>
                  <iframe
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/1095499997?autoplay=1&muted=1&loop=1&background=1"
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ objectFit: "cover" }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  <button
                    onClick={toggleMute}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      zIndex: 10,
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
    </>
  );
}
