import React from "react";
import Image from "next/image";

export default function CeoHero() {
  return (
     <div
      id="ceo_hero"
      className="overview section panel overflow-hidden uc-dark m-1 lg:rounded-3 scrollSpysection"
    >
    <div className="position-cover bg-white dark:bg-gray-900 " />
      <div
        className="position-cover opacity-70 bg-contain"
        style={{ backgroundPosition: "50% 85%" }}
        data-src="/assets/images/template/pricing-06-bg-masked.png"
        data-uc-img=""
      />
      <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
      <div
        className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-0 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-100 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div className="section-outer panel pt-9 xl:pt-10">
        <div
          className="position-absolute  rotate-45"
          style={{ top: "20%", left: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
      </div>
      <div className="section-outer panel pt-4 pb-4 sm:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-850px mx-auto text-center ">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-black dark:text-white">
                The Visionary, our CEO, Mr. Venkatesh Devale
              </h1>
              <p className="fs-6 sm:fs-5 text-black fw-bold text-opacity-70 dark:text-white"> 
               From a Hundred Bucks to a Billion-Dollar Dream.
               Help founders turn ideas into revenue — fast, fearless, and founder-first.

               </p>
            </div>
            <div className="panel">
              <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded lg:rounded-2 uc-transition-toggle overflow-hidden">
                <Image
                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                  alt="Career"
                  src="/assets/images/template/career.jpg"
                  width="1500"
                  height="1000"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}
