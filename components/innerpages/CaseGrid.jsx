import React from "react";
import Image from "next/image";
import {cases} from "@/data/casestudy";

export default function CaseGrid() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel py-4 md:py-6 xl:py-9 bg-secondary dark:bg-gray-800">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0">
                Case Studies
              </h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
              </p>
            </div>
            <div
              className="row child-cols-12 g-6 md:g-8 xl:g-6"
              data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
            >
              {cases.map((item, i) => (
                <div key={i}>
                  <div className="feature-item panel">
                    <div className="row child-cols items-center justify-between g-2 md:g-4">
                      <div
                        className={
                          item.reverseOrder
                            ? "col-12 md:col-6 lg:col-5 md:order-2"
                            : "col-12 md:col-6 lg:col-5"
                        }
                      >
                        <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <Image
                              className="media-cover image"
                              src={item.img}
                              width={1400}
                              height={1412}
                              alt={item.altText}
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        className={
                          item.reverseOrder
                            ? "col-12 md:col-6 lg:col-6 md:order-1"
                            : "col-12 md:col-6 lg:col-6"
                        }
                      >
                        <div className="panel">
                          <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                            <div>
                              <div className="panel vstack gap-2">
                                <h3 className="h4 sm:h3 xl:h2 m-0">
                                  {item.title}
                                </h3>
                                {item.clientName && (
                                  <h4 className="h5 text-primary dark:text-secondary">
                                    {item.clientName}
                                  </h4>
                                )}
                                
                                {item.summary && (
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    {item.summary}
                                  </p>
                                )}
                                
                                
                              
                                  <div className="space-y-4 mt-4">
                                      <div>
                                        <p className="fs-6 opacity-70 fw-bold dark:opacity-80">
                                          {item.industry}
                                        </p>
                                      </div>
                                  </div>
                            
                                
                                <a
                                  href="#contact"
                                  className="uc-link dark:text-secondary fw-bold hstack gap-narrow sm:mt-1 lg:mt-2"
                                >
                                  <span>Ready to Be Our Next Case Study?</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                </a>
                              </div>
                            </div>
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