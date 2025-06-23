"use client";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
import { useParallax } from "react-scroll-parallax";
export default function PersonalStory() {
    const [isOpen, setOpen] = useState(false);
    const parallax = useParallax({
        scale: [0.8, 1],
    });

    return (
        <>
            <div
                id="how_it_works"
                ref={parallax.ref}
                className="how-it-works section panel  scrollSpysection  "
            >
                <div
                    className="section-outer panel pb-2 xl:pb-6"
                    data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;"
                >
                    <div className="container xl:max-w-xl">
                        <div className="panel vstack justify-center items-center pb-4 gap-4 sm:gap-6 xl:gap-8 mx-auto">

                          <h1
                      className="h2 md:h1 lg:display-5 m-0"
                      data-anime="translateY: [10, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: 250;"
                    >
                       The Saga Begins
                    </h1>
                    </div>
             <div
                className="uc-video-scene"
                ref={parallax.ref}
                data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;"
              >
                
                       <div className="container xl:max-w-xl">
            <div className="panel overflow-hidden rounded-2 lg:rounded-3 border border-2 border-white dark:border-gray-700 relative">
              
              {/* Portrait/Vertical Video Container - Custom aspect ratio for vertical videos */}
              <div className="relative" style={{ paddingBottom: '75%', height: 0, overflow: 'hidden' }}>
                <img
                  src="/assets/images/apps/meet-the-ceo.png"
                  alt="Powerful Intentions: Unleash Your Entrepreneurial Power Now!"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
               
              </div>

              {/* Overlay Play Button */}
              <div className="position-cover bg-black bg-opacity-40">
                <a
                  onClick={() => setOpen(true)}
                  className="position-absolute top-50 start-50 translate-middle uc-link w-64px lg:w-100px h-64px lg:h-100px rounded-circle cstack bg-white bg-opacity-70 backdrop-2 text-primary cursor-pointer"
                >
                  <i className="icon-3 unicon-play fw-bold"></i>
                </a>
              </div>
          </div>
                </div>
              </div>
                            {/* <p  className="fs-6 xl:fs-4 fw-bold text-black dark:text-white text-opacity-70" >
                                From Spacenos intern to $1M startup CTO. Discover how Aryaman's leadership journey here shaped his success.
                            </p> */}
                        </div>
                    </div>
                </div>
         
             <ModalVideo
        isOpen={isOpen}
        src="https://player.vimeo.com/video/1095555264?h=da3b0740df"
        setIsOpen={() => setOpen(false)}
      />
        </>
    );
}
