import React from "react";
import Image from "next/image";

export default function Cta() {
  return (
    <div id="cta" className="cta section panel scrollSpysection">
      <div className="section-outer panel py-4 sm:py-6 xl:py-8 dark:text-white rounded-2 lg:rounded-3 mx-2 overflow-hidden">
        <div className="container xl:max-w-6xl"> 
          <div className="section-inner vstack lg:hstack items-center gap-4 lg:gap-8 text-center ltr:lg:text-start rtl:lg:text-end flex-sm-column home-6-cta">
            <div
              className="content panel vstack items-center lg:items-start justify-center gap-2 lg:max-w-1/2 px-4 lg:px-0" 
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h2 xl:display-5">
                Founders Round Table
              </h2>
              <p className="fs-5 my-0">
                 I started Spacenos because I was tired of seeing ideas die due to lack of money, mentorship, or courage. I come from humble beginnings, and today, our goal is to make sure no one with a dream is left behind. We’re here to back the underdogs, automate the impossible, and make legacy-building accessible to all.
                 </p>
                 <h1 className="fs-6">
                  – Venkatesh Devale, CEO of Spacenos
                 </h1>
              <a
                href="https://themeforest.net/user/elite-themes24"
                className="btn btn-md btn-primary min-w-150px px-3 mt-4"
              >
                <span>Request a Seat</span>
                <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
              </a>
            </div>
            <div
              className="image-wrap lg:max-w-1/2 mt-2 w-full" 
              data-anime="onview:-100; translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;"
            >
              <Image
                className="image w-full h-auto" 
                alt="builder-tools"
                src="/assets/images/template/home3.jpg"
                width={1280}
                height={800}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}