import React from "react";
import Image from "next/image";
import { features3 } from "@/data/features";

export default function Features() {
  
  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
           <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                Spacenos 
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                   One Brand
                </span>{" "}
                 Multiple Missions.
              </h2>
              <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                Focus purely on strategy while we handle technical complexities.
              </p>
            </div> 
             <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 lg:gap-8">
              {features3.map((feature, i) => (
                <React.Fragment key={i}>
                  <div
                    className="feature-item panel"
                    data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                  >
                    <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                      <div className="col-12 lg:col-6 order-0 lg:order-1">
                        <div className="panel w-100">
                          <Image
                            src={feature.imgSrc}
                            width={450}
                            height={400}
                            alt={feature.altText}
                            className="rounded-2"
                          />
                        </div>
                      </div>
                      <div className="col-12 lg:col-6 order-1 lg:order-0">
                        <div className="panel vstack justify-between gap-4 sm:gap-6 h-100">
                          <div>
                            <div className="panel vstack gap-2">
                              <span className="fs-6 fw-bold m-0 text-primary">
                                {feature.step}
                              </span>
                              <h3 className="h4 lg:h3 xl:h2 m-0">
                                {feature.title}
                              </h3>
                              <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                                {feature.description}
                              </p>
                              {/* {feature.link && (
                                <a
                                  href={feature.link.href}
                                  className="uc-link fw-bold hstack gap-narrow"
                                >
                                  <span>{feature.link.text}</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              )} */}
                            </div>
                          </div>
                          <div>
                            <div className="p-3 panel vstack gap-3 rounded border">
                              <p className="fs-6 dark:text-white">
                                {feature.testimonial.quote}
                              </p>
                              <div className="panel hstack gap-1">
                                <Image
                                  className="w-40px rounded-circle"
                                  src={feature.testimonial.imgSrc}
                                  width={150}
                                  height={150}
                                  alt={feature.testimonial.name}
                                />
                                <div className="panel vstack items-start gap-0">
                                  <h6 className="h6 m-0">
                                    {feature.testimonial.name}
                                  </h6>
                                  <span className="fs-7 opacity-70">
                                    {feature.testimonial.role}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {i !== features3.length - 1 && (
                    <hr
                      className="border-gray-100 dark:border-opacity-15 m-0 opacity-100"
                      data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
    </div>
        </div>
      </div>
  );
}

