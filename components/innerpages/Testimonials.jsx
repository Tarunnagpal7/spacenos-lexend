"use client";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
import { useParallax } from "react-scroll-parallax";

const videoData1 = [
  {
    title: "You know he got an offer in 3 hours.",
    thumbnail: "/assets/images/media/lexend_vid_home-6.jpg",
    videoSrc: "/assets/images/media/lexend_vid_home-6.webm",
  },
  {
    title: "From tier-3 college to Fortune 100 – Ex-Spacenos Intern.",
    thumbnail: "/assets/images/media/lexend_vid_home-6.jpg",
    videoSrc: "/assets/images/media/lexend_vid_home-6.webm",
  },
];

const videoData2 = [
  {
    title: "You won't believe what he has to say on our remote culture & flexible hours.",
    thumbnail: "/assets/images/media/lexend_vid_home-6.jpg",
    videoSrc: "/assets/images/media/lexend_vid_home-6.webm",
  },
  {
    title: "Why this intern stayed over 8 months with us?",
    thumbnail: "/assets/images/media/lexend_vid_home-6.jpg",
    videoSrc: "/assets/images/media/lexend_vid_home-6.webm",
  },
];

export default function VideoComponent() {
  const [isOpen, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const parallax = useParallax({ scale: [0.8, 1] });

  const openModal = (src) => {
    setCurrentVideo(src);
    setOpen(true);
  };

  const renderRow = (videos) => (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      {videos.map((video, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            width: "50%",
            verticalAlign: "top",
            padding: "0.5rem",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              borderRadius: "8px",
              aspectRatio: "16/9",
              border: "2px solid white",
            }}
          >
            <video
              src={video.videoSrc}
              muted
              loop
              autoPlay
              preload="none"
              poster={video.thumbnail}
              onClick={() => openModal(video.videoSrc)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </div>
          <h4 style={{ marginTop: "0.5rem", padding: "0.5rem" , fontSize: "1rem"}}>
            {video.title}
          </h4>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div
        id="how_it_works"
        ref={parallax.ref}
        className="how-it-works section panel scrollSpysection"
      >
        <div className="section-outer panel pb-10 bg-secondary dark:bg-gray-800">
          <div className="container xl:max-w-6xl mx-auto text-center">
            <h2 className="h4 sm:h1 pt-6 rounded-xl">Testimonials</h2>

            {renderRow(videoData1)}
            {renderRow(videoData2)}
          </div>
        </div>
      </div>

      <ModalVideo
        isOpen={isOpen}
        src={currentVideo}
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}
