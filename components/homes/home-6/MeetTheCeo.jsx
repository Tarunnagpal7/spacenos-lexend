"use client";

import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
import { useParallax } from "react-scroll-parallax";
import Link from "next/link";

export default function MeetTheCeo() {
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
          <h1 className="h3 lg:h2 xl:h1 m-0 text-black text-center mb-4">
            Big Dreams Deserve Bold Conversations
          </h1>
          <div className="panel vstack p-2 items-center gap-2">
            <p className="fs-6 xl:fs-4 text-black fw-bold text-opacity-70">
              Want a deep, unfiltered discussion about building, scaling, and solving real problems? Our CEO Venkatesh Devale is just a click away.
            </p>
          </div>
          
          <div className="container xl:max-w-xl">
            <div className="panel overflow-hidden rounded-2 lg:rounded-3 border border-2 border-white dark:border-gray-700 relative">
              
              {/* Portrait/Vertical Video Container - Custom aspect ratio for vertical videos */}
              <div className="relative" style={{ paddingBottom: '75%', height: 0, overflow: 'hidden' }}>
                {/* Vimeo Thumbnail - Using vumbnail service */}
                
                
                {/* Alternative: If you have a custom thumbnail, use this instead */}
                
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
          
          <div className="panel vstack items-center gap-2 mt-4 lg:mt-6 xl:mt-8">
            <Link href={"/meet-the-ceo"}>
              <button className="btn btn-primary px-3 mt-2">
                Book a Coffee Chat
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Video - Updated with new Vimeo URL */}
      <ModalVideo
        isOpen={isOpen}
        src="https://player.vimeo.com/video/1095508409?h=70a556ecdf"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}