"use client";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
import { useParallax } from "react-scroll-parallax";
import Link from "next/link";

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
        className="how-it-works section panel scrollSpysection"
      >
        <div
          className="section-outer panel bg-secondary p-2 xl:p-6 rounded-2 lg:rounded-3"
          data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;"
        >
          <h1 className="h3 lg:h2 xl:h1 m-0 text-black text-center mb-4 lg:mb-6 xl:mb-8">
            Why We Exist
          </h1>

          <div className="container xl:max-w-xl">
            <div className="panel overflow-hidden ratio ratio-16x9 rounded-2 lg:rounded-3 border border-2 border-white dark:border-gray-700 relative">

              {/* Video Thumbnail */}
              <div className="relative pb-[56.25%] h-0 overflow-hidden bg-gray-900">
                {/* Vimeo Thumbnail - Replace with your actual thumbnail URL */}
                {/* Alternative: If you have a custom thumbnail, use this instead */}
                
                <img
                  src="/assets/images/apps/rocket-launching.jpg"
                  alt="Why We Exist Video Thumbnail"
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

          <div className="panel vstack items-center gap-2 mt-4 lg:mt-6 xl:mt-8">
            <p className="fs-6 xl:fs-4 text-black fw-bold text-opacity-70">
              Spacenos was born not in a boardroom, but on the battlefield of ideas — where we lost deals, hacked systems, and outworked giants to help those without capital build billion-dollar dreams.
            </p>
            {/* <Link href={"/meet-the-ceo"}>
              <button className="btn btn-primary px-3 mt-2">
                See How He's Helped Founders Like You
              </button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Modal Video */}
      <ModalVideo
        isOpen={isOpen}
        src="https://player.vimeo.com/video/1095499997"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}