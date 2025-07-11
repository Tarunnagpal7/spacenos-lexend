"use client";
import React, { useState, useRef, useEffect } from "react";
import { AtomIcon, GlobeIcon, InspectionPanel, Rocket } from "lucide-react";
import { useParallax } from "react-scroll-parallax";
import Player from "@vimeo/player";

export default function Mission() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const parallax = useParallax({ scale: [0.85, 1.1] });

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      player.setVolume(0);
      playerRef.current = player;

      player.on("loaded", () => {
        console.log("Mission video ready");
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
    <div className="container py-5">
      <div className="row g-4">
        <div className="row child-cols col-match justify-between g-4">
          <div className="col-12 sm:col-6">
            <div className="uc-video-scene" ref={parallax.ref}>
              <div className="panel mx-auto overflow-hidden" style={{ width: "250px", maxWidth: "90vw" }}>
                <div className="position-relative overflow-hidden rounded-2 border border-2 border-white dark:border-gray-700">
                  <div className="position-relative" style={{ paddingBottom: "177.78%" }}>
                    <iframe
                      ref={iframeRef}
                      src="https://player.vimeo.com/video/1096805658?autoplay=1&muted=1&loop=1&background=1"
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{ objectFit: "cover", border: "none" }}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>

                    <div style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      zIndex: 10,
                      display: "flex",
                      gap: "6px",
                      flexWrap: "wrap"
                    }}>
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
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 sm:col-6">
            <div className="panel h-100">
              <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                <div>
                  <h3 className="fs-1 fw-bold text-primary  p-2">Our Mission</h3>
                  <p className="fs-6 lg:fs-5 p-2 opacity-70 dark:opacity-80">
                    <strong>To empower every founder—regardless of geography, capital, or background—to launch and scale their vision with cutting-edge AI and remote teams.</strong>
                    <br /><br />
                    We don't just write code; we engineer dreams. From automating supply chains in Africa to designing AI-driven therapy bots in Europe, our projects span every continent—each powered by our belief that the next unicorn could emerge from anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Section */}
        <div className="col-lg-6 rounded-2 p-4 p-md-5">
          <div className="p-4 p-md-5 bg-light  h-100">
            <h2 className="display-1 fw-bold text-primary mb-4">Four Pillars of Excellence</h2>

            <div className="panel">
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 items-center justify-center col-match g-3"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >

                <div
                  className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all `}
                >
                  <div className="vstack panel min-h-250px">
                    <div className="vstack items-center text-center justify-between gap-2 h-100">
                      <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                        <GlobeIcon />
                      </div>
                      <div className="panel">
                        <div className="vstack gap-1">
                          <h3 className="title h5 m-0 text-inherit">
                            Global Synergy
                          </h3>
                          <p className="desc fs-6 opacity-70">
                            Our teams across time zones don't slow us, they empower us to work around the clock.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all `}
                >
                  <div className="vstack panel min-h-250px">
                    <div className="vstack items-center text-center justify-between gap-2 h-100">
                      <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                        <AtomIcon />
                      </div>
                      <div className="panel">
                        <div className="vstack gap-1">
                          <h3 className="title h5 m-0 text-inherit">
                            Ethical AI
                          </h3>
                          <p className="desc fs-6 opacity-70">
                            We champion responsible AI that respects privacy, equity, and human uniqueness.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all `}
                >
                  <div className="vstack panel min-h-250px">
                    <div className="vstack items-center text-center justify-between gap-2 h-100">
                      <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                        <InspectionPanel />
                      </div>
                      <div className="panel">
                        <div className="vstack gap-1">
                          <h3 className="title h5 m-0 text-inherit">
                            Relentless Innovation
                          </h3>
                          <p className="desc fs-6 opacity-70">
                            We don't just build for clients; we build with them. Every partnership is a co-creation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all `}
                >
                  <div className="vstack panel min-h-250px">
                    <div className="vstack items-center text-center justify-between gap-2 h-100">
                      <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                        <Rocket />
                      </div>
                      <div className="panel">
                        <div className="vstack gap-1">
                          <h3 className="title h5 m-0 text-inherit">
                            Radical Empathy
                          </h3>
                          <p className="desc fs-6 opacity-70">
                            We challenge the status quo. If it's never been done, we're already prototyping it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section - Full Width */}
        <div className="col-12 mt-4">
          <div className="p-4 p-md-5 bg-success bg-opacity-10 rounded-4">
            <h2 className="display-2 fw-bold text-primary mb-4">Our Mythical Achievements</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 border  border-dark dark:border-light rounded-2 h-100">
                  <h5 className="fw-bold mb-3">🛰️ Zero-Gravity Code</h5>
                  <p className="mb-0">Teted our platform on the ISS (okay, we're in talks with NASA!).</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3  border  border-dark dark:border-light rounded-2 h-100">
                  <h5 className="fw-bold mb-3">🧠 AI That Dreams</h5>
                  <p className="mb-0">Our neural networks conjure original poetry—sometimes it's actually good.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3  border  border-dark dark:border-light rounded-2 h-100">
                  <h5 className="fw-bold mb-3">🔮 Digital Oracle</h5>
                  <p className="mb-0">Predicted the last three World Cup winners (after some model tweaking!).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
