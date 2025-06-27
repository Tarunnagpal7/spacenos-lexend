"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Player from "@vimeo/player";

export default function MeetTheCeo() {
  const [isMuted, setIsMuted] = useState(true);
  const [isFloating, setIsFloating] = useState(false);
  const [floatingStopped, setFloatingStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      player.setVolume(0);
      player.play();
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
      const shouldFloat = (sectionBottom < 0 || sectionTop > windowHeight) && !isMuted;
      setIsFloating(shouldFloat);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMuted, floatingStopped]);

  useEffect(() => {
    const handleControl = (e) => {
      const { source, action } = e.detail;
      if (source !== "MeetTheCeo" && action === "muteOthers") {
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
        window.dispatchEvent(new CustomEvent("unmuteRequest", { detail: { source: "MeetTheCeo" } }));
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
        <div className="section-outer panel bg-secondary p-2 xl:p-6 rounded-2 lg:rounded-3">
          <h1 className="h3 lg:h2 xl:h1 m-0 text-black text-center mb-4">Big Dreams Deserve Bold Conversations</h1>

          <div className="panel vstack p-2 items-center gap-2">
            <p className="fs-6 xl:fs-4 text-black fw-bold text-opacity-70">
              Want a deep, unfiltered discussion about building, scaling, and solving real problems? Our CEO Venkatesh Devale is just a click away.
            </p>
          </div>

          <div className="container d-flex justify-content-center">
            <div style={{ width: "250px", maxWidth: "90vw" }} className={`mx-auto rounded border border-dark contrast-shadow-lg video-wrapper ${isFloating ? "floating-video" : ""}`}>
              <div className="position-relative overflow-hidden rounded-2 border border-2 border-white">
                <div className="position-relative" style={{ paddingBottom: "177.78%" }}>
                  <iframe ref={iframeRef} src="https://player.vimeo.com/video/1096805733?autoplay=1&muted=1&loop=1&background=1"
                    className="position-absolute top-0 start-0 w-100 h-100" style={{ objectFit: "cover" }}
                    frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy" />
                  <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10, display: "flex", gap: "6px" }}>
                    <button onClick={toggleMute} style={btnStyle}>{isMuted ? "Unmute" : "Mute"}</button>
                    <button onClick={togglePause} style={btnStyle}>{isPaused ? "Play" : "Pause"}</button>
                    {isFloating && <button onClick={stopFloating} style={closeStyle}>✕</button>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel vstack items-center gap-2 mt-2">
            <Link href={"/meet-the-ceo"}>
              <button className="btn btn-primary px-3 mt-2">Book a Coffee Chat</button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-video { position: fixed !important; top: 370px; right: 20px; z-index: 9999; width: 180px !important; max-width: 90vw; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); }
        .video-wrapper { transition: all 0.4s ease; }
      `}</style>
    </>
  );
}

const btnStyle = { background: "rgba(0,0,0,0.6)", color: "#fff", border: "none", padding: "6px 10px", borderRadius: "4px", cursor: "pointer", fontSize: "12px" };
const closeStyle = { ...btnStyle, background: "rgba(255, 0, 0, 0.7)" };
