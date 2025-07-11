"use client";
import { useState, useRef, useEffect } from "react";
import Player from "@vimeo/player";

export default function EmployeeCenter() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      player.setVolume(0);
      setIsMuted(true);
      playerRef.current = player;

      player.on("loaded", () => {
        console.log("Employee Center video ready");
      });
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

  return (
    <div id="clients_feedbacks" className="clients-feedbacks section panel overflow-hidden">
      <div className="section-outer panel pt-4">
        <div className="container max-w-lg border rounded-2 bg-secondary">
          <div className="section-inner panel">
            <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, { start: 200 });">
              <div className="row child-cols-12 justify-center col-match g-2">

                <div className="panel vstack justify-between gap-3 rounded-2 overflow-hidden">
                  <div className="row child-cols-12 col-match g-0">

                    <div className="sm:col-6 py-6 px-2 bg-secondary lg:col-8">
                      <div className="panel vstack justify-between gap-3 px-3 lg:px-5 lg:py-6 h-100">
                        <h1 className="fs-1 text-black text-center">Life At Spacenos</h1>
                        <div className="panel vstack items-start gap-2">
                          <p className="fs-5 lg:fs-4 xl:fs-3 fw-medium text-dark">
                            <b>From our intern to CTO of a $1Mn startup. </b>
                            Know more about the leadership skills Aryaman learnt at Spacenos and how it is helping him in his startup.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-6 lg:col-4 bg-secondary d-flex align-items-center justify-content-center p-2">
                      <div style={{ width: "250px", maxWidth: "90vw" }} className="mx-auto rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg">
                        <div className="position-relative overflow-hidden rounded-2 rounded-lg-3 border border-2 border-white dark:border-gray-700">
                          <div className="position-relative" style={{ paddingBottom: "177.78%" }}>

                            <iframe
                              ref={iframeRef}
                              src="https://player.vimeo.com/video/1095555264?autoplay=1&muted=1&loop=1&background=1"
                              className="position-absolute top-0 start-0 w-100 h-100"
                              style={{ border: "none" }}
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                            ></iframe>

                            <div style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              zIndex: 10,
                              display: "flex",
                              gap: "6px"
                            }}>
                              <button
                                onClick={toggleMute}
                                style={{
                                  background: "rgba(0,0,0,0.6)",
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
                                  background: "rgba(0,0,0,0.6)",
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
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

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
