import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CareerBenefits() {
  return (
    <div
      id="overview"
      className="overview section panel overflow-hidden uc-dark lg:m-2 lg:rounded-3 scrollSpysection"
    >
      <div className="position-cover bg-white dark:bg-gray-900" />
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
        <div className="container xl:max-w-xl">
          <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0">
              <div>
                <div
                  className="panel vstack justify-center items-center gap-3 max-w-600px lg:max-w-750px mx-auto px-2 lg:px-0 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h4 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text- p-3">
                    <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                      Build. Learn. Launch!
                    </span>
                    <br />
                     Your real-world startup journey starts here
                  </h1>
                
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
