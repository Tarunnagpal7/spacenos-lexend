import { resources } from "@/data/resources";
import React from "react";
import Link from "next/link";

export default function LeadMagnets() {
  return (
    <div
      id="lead_magnets"
      className="lead-magnets section panel overflow-hidden scrollSpysection"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10">
        <div className="container xl:max-w-lg">
          <div className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h3 lg:h2 xl:h1 m-0 px-2">
                Free Resources
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Valuable tools to accelerate your growth
              </p>
            </div>

            <div
              className="panel"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <div
                className="resources-items row child-cols-6 lg:child-cols-3 g-2 md:g-4 col-match"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
              >
                {resources.map((resource, index) => (
                  <div key={index}>
                    <div className="resource-item vstack justify-between gap-4 p-2 md:p-4 bg-secondary hover:bg-secondary-300 dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-150 rounded-1-5 md:min-h-250px position-relative">

                      {/* Resource Type (replacing icon) */}
                      <div className="icon-box   ">
                        <span className=" dark:text-primary fs-4 fw-bold">
                          {resource.type}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="vstack gap-2 text-center">
                        <h3 className="title h6 md:h5 m-0">{resource.title}</h3>
                        <p className="fs-7 text-dark dark:text-white text-opacity-70">
                          {resource.format}
                        </p>
                        <p className="fs-8 opacity-70 dark:opacity-80">
                          {resource.description}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSe_tki-JoZdZAv6FRHZ5YREJMqt9dVZ4Pha2hYeNInVAnHOwA/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-sm w-100 ${resource.leadFormRequired ? "btn-primary" : "btn-outline-primary"}`}
                      >
                        Get Access
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}