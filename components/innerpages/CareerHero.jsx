"use client";

import { useState, useEffect, useRef } from "react";
import TyperComponent from "@/components/common/TyperComponent";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";
import Player from "@vimeo/player";

export default function CareerHero() {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const parallax = useParallax({
    scale: [0.85, 1.1],
  });

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      player.setVolume(0); 
      playerRef.current = player;

      player.on("loaded", () => {
        console.log("Career video ready");
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

  return (
    <div
      id="hero_header"
      className="hero-header hero-seven-scene section panel overflow-hidden"
    >
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-tertiary-300 dark:bg-primary-700" />
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-gradient-to-b from-transparent via-transparent to-white dark:to-black" />

      {/* Your floating SVG Icons stay intact */}
      <div
        className="d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: anime.stagger(150, { start: 500 });"
      >
        <Image alt="Icon" className="d-inline-block position-absolute w-72px dark:d-none" style={{ top: "15%", left: "10%" }} width={85} height={73} src="assets/images/vectors/marketing.svg" />
        <Image alt="Icon" className="d-inline-block position-absolute w-72px dark:d-none" style={{ top: "15%", right: "10%" }} width={73} height={66} src="assets/images/vectors/charts-pc.svg" />
        <Image alt="Icon" className="d-inline-block position-absolute w-64px dark:d-none" style={{ top: "35%", right: "-1%", transform: "rotate(45deg)" }} width={69} height={70} src="assets/images/vectors/group.svg" />
        <Image alt="Icon" className="d-inline-block position-absolute w-48px dark:d-none" style={{ top: "40%", left: "15%" }} width={49} height={60} src="assets/images/vectors/idea.svg" />
        <Image alt="Icon" className="d-inline-block position-absolute w-64px dark:d-none" style={{ top: "30%", left: "-1%" }} width={69} height={70} src="assets/images/vectors/group.svg" />

        {/* Dark mode icons */}
        <Image alt="Icon" className="d-inline-block position-absolute w-72px d-none dark:d-block" style={{ top: "15%", left: "10%" }} width={85} height={73} src="assets/images/vectors/marketing-dark.svg" />
        <Image alt="Icon" className="d-inline-block position-absolute w-72px d-none dark:d-block" style={{ top: "15%", right: "10%" }} width={73} height={66} src="assets/images/vectors/charts-pc-dark.svg" />
        <Image alt="Icon" className="d-inline-block position-absolute w-64px d-none dark:d-block" style={{ top: "35%", right: "-1%", transform: "rotate(45deg)" }} width={69} height={70} src="assets/images/vectors/group-dark.svg" />
        <Image alt="Icon" className="d-inline-block position-absolute w-48px d-none dark:d-block" style={{ top: "40%", left: "15%" }} width={49} height={60} src="assets/images/vectors/idea-dark.svg" />
        <Image alt="Icon" className="d-inline-block position-absolute w-64px d-none dark:d-block" style={{ top: "30%", left: "-1%" }} width={69} height={70} src="assets/images/vectors/group-dark.svg" />
      </div>

      {/* Text + Video */}
      <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-2">
              
              <div className="lg:col-8">
                <div className="panel vstack items-center px-2 text-center">
                  <h1 className="h3 sm:h2 md:h1 lg:display-6 lh-lg mb-1 xl:mb-2 mt-2">
                    Build. Learn.
                    <span className="px-1 bg-primary text-tertiary dark:bg-tertiary">
                      <TyperComponent strings={["Launch", "launch", "Launch"]} />
                    </span>
                  </h1>
                  <p className="fs-6 xl:fs-3 xl:px-6">
                    We're not a company that hands out tasks. We hand out real responsibility. At Spacenos, internship features. Associates pitch to founders. Designers own products. If you're smart, hungry, and ready to build things that actually matter — then 
                    <b className="dark:text-white"> join our empire!</b>
                  </p>
                </div>
              </div>

              <div className="uc-video-scene" ref={parallax.ref}>
                <div className="panel max-w-1000px mx-auto overflow-hidden">
                  
                  {/* Reel Video Layout */}
                  <div className="container d-flex justify-content-center">
                    <div style={{ width: "250px", maxWidth: "90vw" }} className="mx-auto rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg">
                      <div className="position-relative overflow-hidden rounded-2 rounded-lg-3 border border-2 border-white dark:border-gray-700">
                        <div className="position-relative" style={{ paddingBottom: "177.78%" }}>
                          
                          <iframe
                            ref={iframeRef}
                            src="https://player.vimeo.com/video/1095551452?autoplay=1&muted=1&loop=1&background=1"
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
        </div>
      </div>

    </div>
  );
}
