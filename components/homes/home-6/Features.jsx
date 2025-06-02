import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div id="features" className="features section panel  scrollSpysection">
      <div className="section-outer panel pt-6 lg:pt-8 xl:pt-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase">
                  Main features
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                Never 
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                  code 
                </span>{" "}
                again.
              </h2>
              <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                Focus purely on strategy while we handle technical complexities.
              </p>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
