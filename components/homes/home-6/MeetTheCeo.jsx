"use client";

import { useState, useEffect, useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import Link from "next/link";
import Player from "@vimeo/player";

export default function MeetTheCeo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isFloating, setIsFloating] = useState(false);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      player.setVolume(0); // Start muted
      playerRef.current = player;

      player.on("loaded", () => {
        console.log("Vimeo video ready");
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      
      // Float when the entire section has scrolled past the top of the viewport
      // Add some buffer to prevent glitching
      const shouldFloat = sectionRect.bottom < -50;

      if (shouldFloat !== isFloating) {
        setIsFloating(shouldFloat);
        
        // Only auto-mute when stopping floating (not when starting to float)
        if (!shouldFloat && !isMuted && playerRef.current) {
          playerRef.current.setVolume(0);
          setIsMuted(true);
        }
      }
    };

    // Throttle scroll events to prevent excessive calls
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [isFloating, isMuted]);

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
    <>
      <div
        id="how_it_works"
        ref={sectionRef}
        className="how-it-works section panel scrollSpysection"
      >
        <div
          className="section-outer panel bg-secondary p-2 xl:p-6 rounded-2 lg:rounded-3"
          data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;"
        >
          <h1 className="h3 lg:h2 xl:h1 m-0 text-black text-center mb-4">
            Big Dreams Deserve Bold Conversations
          </h1>

          <div className="panel vstack p-2 items-center gap-2">
            <p className="fs-6 xl:fs-4 text-black fw-bold text-opacity-70">
              Want a deep, unfiltered discussion about building, scaling, and solving real problems? Our CEO Venkatesh Devale is just a click away.
            </p>
          </div>

          <div className="container d-flex justify-content-center">
            <div
              style={{ width: "250px", maxWidth: "90vw" }}
              className={`mx-auto rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg video-wrapper ${isFloating ? "floating-video" : ""}`}
            >
              <div className="position-relative overflow-hidden rounded-2 rounded-lg-3 border border-2 border-white dark:border-gray-700">
                <div className="position-relative" style={{ paddingBottom: "177.78%" }}>

                  <iframe
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/1095508409?autoplay=1&muted=1&loop=1&background=1"
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ objectFit: "cover" }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>

                  {/* Mute/Unmute Button */}
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

          <div className="panel vstack items-center gap-2 mt-2 ">
            <Link href={"/meet-the-ceo"}>
              <button className="btn btn-primary px-3 mt-2">
                Book a Coffee Chat
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-video {
          position: fixed !important;
          top: 70px;
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