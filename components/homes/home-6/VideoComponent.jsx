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
          className="section-outer panel bg-secondary p-2 p-xl-6 rounded-2 rounded-lg-3"
          data-anime="onscroll: .how-it-works; onscroll-trigger: 1; translateY: [80, 0]; scale: [0.8, 1]; opacity: [0, 1]; easing: linear;"
        >
          <h1 className="h3 h-lg-2 h-xl-1 m-0 text-black text-center mb-4 mb-lg-6 mb-xl-8">
            Why We Exist
          </h1>

          <div className="container d-flex justify-content-center">
            {/* Responsive container for reel-style video */}
            <div style={{ width: '250px', maxWidth: '90vw' }} className="mx-auto">
              <div className="position-relative overflow-hidden rounded-2 rounded-lg-3 border border-2 border-white">
                {/* Video Thumbnail with 9:16 aspect ratio */}
                <div className="position-relative" style={{ paddingBottom: '177.78%' }}>
                  <img
                    src="/assets/images/apps/rocket-launching.jpg"
                    alt="Why We Exist Video Thumbnail"
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                  
                  {/* Overlay Play Button */}
                  <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.4)', top: '0', left: '0' }}>
                    <a
                      onClick={() => setOpen(true)}
                      className="position-absolute top-50 start-50 translate-middle rounded-circle"
                      style={{ 
                        width: '64px', 
                        height: '64px', 
                        backgroundColor: 'white',
                        color: 'var(--bs-primary)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        lineHeight: '1'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      <i className="icon-3 unicon-play fw-bold" style={{ fontSize: '24px', paddingLeft: '3px' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel d-flex flex-column align-items-center gap-2 mt-4 mt-lg-6 mt-xl-8">
            <p className="fs-6 fs-xl-4 text-black fw-bold text-center mx-auto" style={{ opacity: '0.7', maxWidth: '800px' }}>
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