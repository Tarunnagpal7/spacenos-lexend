"use client";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
import { useParallax } from "react-scroll-parallax";
export default function VideoComponent() {
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
                    className="section-outer panel pb-6"
                    data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;"
                >
                    <div className="container xl:max-w-xl">
                        <div className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8 mx-auto">

                            <h2
                                  className="h3 lg:h2 xl:h1 m-0  text-center  "
                                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                            >
                                Life at Spacenos
                            </h2>
                            <div className="panel overflow-hidden ratio ratio-16x9 rounded-2 lg:rounded-3 border border-2 border-white dark:border-gray-700">
                                <video
                                    src="/assets/images/media/lexend_vid_home-6.webm"
                                    preload="none"
                                    loop
                                    autoPlay
                                    poster="/assets/images/media/lexend_vid_home-6.jpg"
                                    muted
                                    playsInline
                                    data-uc-cover
                                    data-uc-video="autoplay: true;"
                                ></video>
                                <div className="position-cover bg-black bg-opacity-40">
                                    <a
                                        onClick={() => setOpen(true)}
                                        className="position-absolute top-50 start-50 translate-middle uc-link w-64px lg:w-100px h-64px lg:h-100px rounded-circle cstack bg-white bg-opacity-70 backdrop-2 text-primary"
                                    >
                                        <i className="icon-3 unicon-play fw-bold"></i>
                                    </a>
                                </div>
                            </div>
                            <p  className="fs-6 xl:fs-4 fw-bold text-black dark:text-white text-opacity-70" >
                                From Spacenos intern to $1M startup CTO. Discover how Aryaman's leadership journey here shaped his success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo
                isOpen={isOpen}
                src="/assets/images/media/lexend_vid_home-6.webm"
                setIsOpen={() => setOpen(false)}
            />
        </>
    );
}
