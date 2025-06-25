"use client";

import { useState, useRef, useEffect } from "react";
import { useParallax } from "react-scroll-parallax";
import Player from "@vimeo/player";

export default function PersonalStory() {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const parallax = useParallax({ scale: [0.8, 1] });

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      player.setVolume(0);
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
        playerRef.current.setVolume(1);
        setIsMuted(false);
      } else {
        playerRef.current.setVolume(0);
        setIsMuted(true);
      }
    }
  };

  return (
    <div id="how_it_works" ref={parallax.ref} className="how-it-works section panel scrollSpysection">
      <div className="section-outer panel pb-4 xl:pb-6" data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;">
        
        <div className="container xl:max-w-xl">
          <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 mx-auto">
            
            <h1 className="h2 lg:display-6 m-0 text-center">The Saga Begins</h1>

            {/* Video Reel Section */}
            <div className="d-flex justify-content-center">
              <div style={{ width: "250px", maxWidth: "90vw" }} className="mx-auto">
                
                <div className="position-relative overflow-hidden rounded-2 lg:rounded-3 border border-2 border-white dark:border-gray-700">
                  
                  <div className="position-relative" style={{ paddingBottom: "177.78%" }}>
                    
                    <iframe
                      ref={iframeRef}
                      src="https://player.vimeo.com/video/1095555264?autoplay=1&muted=1&loop=1&background=1"
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

          </div>
        </div>

      </div>
    </div>
  );
}
