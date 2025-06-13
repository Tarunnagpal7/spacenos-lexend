
"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "@/components/common/ModalVideo";
export default function EmployeeCenter() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        id="clients_feedbacks"
        className="clients-feedbacks section panel overflow-hidden"
      >
        <div className="section-outer panel pt-4 ">
          <div className="container max-w-lg">
            <div className="section-inner panel">
              <div
                className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <div
                  className="row child-cols-12 justify-center col-match g-2 lg:g-3"
                  data-uc-grid=""
                >
                  <div>
                    <div className="panel vstack justify-between gap-3 rounded-2 overflow-hidden">
                      <div
                        className="row child-cols-12 col-match g-0"
                        data-uc-grid=""
                      >
                        <div className="sm:col-6 py-6 px-2 bg-secondary  lg:col-8">
                          <div className="panel vstack justify-between gap-3 px-3 py-4 lg:px-5 lg:py-6">
                        <h1 className="fs-1 text-black text-center ">
                          Life At Spacenos
                        </h1>
                            <div className="panel vstack items-start gap-2">
                              <p className="fs-5 lg:fs-4 xl:fs-3 fw-medium text-dark ">
                              <b>From our intern to CTO of a $1Mn startup. </b>Know more about the leadership skills Aryaman learnt at Spacenos and how it is helping him in his startup.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-6 lg:col-4">
                          <div
                            className="panel overflow-hidden h-100"
                            data-uc-lightbox="video-autoplay: true;"
                          >
                            <figure className="featured-image m-0  rounded ratio ratio-1x1 h-100 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="image"
                                src="/assets/images/common/login.webp"
                                width="1500"
                                height="1000"
                              />
                            </figure>
                            <a
                              onClick={() => setOpen(true)}
                              className="position-absolute top-50 start-50 translate-middle cstack w-48px lg:w-64px h-48px lg:h-64px rounded-circle shadow-xs text-none bg-white bg-opacity-80 text-primary"
                              style={{ backdropFilter: "blur(2px)" }}
                            >
                              <i className="icon-1 unicon-play fw-bold" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a
                  href="#"
                  className="uc-link dark:text-secondary fw-bold d-inline-flex items-center gap-narrow"
                >
                  <span>See all feedbacks</span>
                  <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        isOpen={isOpen}
        src="/assets/images/media/lexend_vid.webm"
        setIsOpen={() => setOpen(false)}
      />
    </>
  );
}
