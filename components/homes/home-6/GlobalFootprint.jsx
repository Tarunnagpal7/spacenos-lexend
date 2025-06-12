"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false
});

export default function GlobalFootprint() {
  return (
    <div className="container-fluid p-6">
      <div className="py-5 text-center">
        <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 mx-auto text-center" style={{ maxWidth: '750px' }}>
          <h2
            className="h3 lg:h2 xl:h1 m-0 text-center"
            data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
          >
            Our Global Footprint
          </h2>
          <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
            Expanding worldwide to serve you better with strategic locations across continents.
          </p>
        </div>
        <div className="w-100">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
