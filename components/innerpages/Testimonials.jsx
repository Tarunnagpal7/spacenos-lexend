"use client";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
import { useParallax } from "react-scroll-parallax";

const videoData = [
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
  const parallax = useParallax({
    scale: [0.8, 1],
  });

  const openModal = (src) => {
    setCurrentVideo(src);
    setOpen(true);
  };

  return (
    <>
      <div
        id="how_it_works"
        ref={parallax.ref}
        className="how-it-works section panel scrollSpysection"
      >
        <div
          className="section-outer panel pb-10"
          data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;"
        >
          <div className="container xl:max-w-6xl">
            <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 mx-auto">
              <h2
                className="h4 sm:h1 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Testimonails
              </h2>
             <div className="flex flex-wrap  gap-6 px-4"> 
                  {videoData.map((video, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]" 
                    >
                      <div className="overflow-hidden rounded-lg w-full aspect-video border-2 border-white dark:border-gray-700">
                        <video
                          src={video.videoSrc}
                          preload="none"
                          muted
                          loop
                          autoPlay
                          poster={video.thumbnail}
                          onClick={() => openModal(video.videoSrc)}
                          className="cursor-pointer w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="mt-2 text-sm text-center px-2">{video.title}</p>
                    </div>
                  ))}
                </div>
            </div>
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