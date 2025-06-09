import { features1 } from "@/data/features";
import React from "react";
import Image from "next/image";

export  function WhatNext() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 xl:pb-9">
        <div className="container max-w-lg">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div
              className="panel vstack items-center gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-650px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                What's Next for Spacenos?
              </h1>
            </div>
            <div className="sticky-scene panel vstack gap-4 sm:gap-6 xl:gap-8">
              {features1.map((feature) => (
                <div
                  key={feature.id}
                  className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-secondary "
                  data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                >
                  <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                    <div className="order-0 lg:order-1">
                      <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                        <Image
                          src={feature.imgSrc}
                          width={780}
                          height={728}
                          alt={feature.imgAlt}
                        />
                      </div>
                    </div>
                    <div className="order-1 lg:order-0 col-12 sm:col-5">
                      <div className="panel vstack justify-center gap-4 h-100">
                        <div>
                          <div className="panel text-black vstack gap-2">
                            <span className="fs-6 fw-bold m-0 text-primary">
                              {feature.id.toString().padStart(2, "0")}.
                              <span className="fs-2  p-1">{feature.heading}</span>
                            </span>
                            <h3 className="h4 text-black lg:h2 m-0">{feature.title}</h3>
                            <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                              {feature.description}
                            </p>
                            {feature.link && (
                              <a
                                href={feature.link.href}
                                className="uc-link fw-bold hstack gap-narrow"
                              >
                                <span>{feature.link.text}</span>
                                <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
