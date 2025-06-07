import { panelsData } from "@/data/plans";
import React from "react";
import Image from "next/image";
import { CareerData } from "@/data/facts";
export default function AboutValues({
    data = panelsData
  }) {
  return (
    <div
      id="about_values"
      className="about-values section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-7 bg-secondary dark:bg-gray-800"> {/* Reduced py-9 to py-7 */}
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-6"> {/* Reduced xl:gap-8 to xl:gap-6 */}
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Our Values it's Simple!
              </h2>
              <div
                className="row child-cols-12 sm:child-cols-6 g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {data.map((panel) => (
                  <div key={panel.id}>
                    <div className="panel vstack gap-2 p-4 lg:py-6 rounded-2 bg-secondary dark:bg-gray-800">
                      <Image
                        className="w-64px lg:w-80px d-block dark:d-none"
                        src={panel.lightImgSrc}
                        width={100}
                        height={100}
                        alt={panel.altText}
                      />
                      <Image
                        className="w-64px lg:w-80px d-none dark:d-block"
                        src={panel.darkImgSrc}
                        width={100}
                        height={100}
                        alt={panel.altText}
                      />
                      <h5 className="h5 lg:h4 m-0">{panel.title}</h5>
                      <p className="fs-5 fw-bold opacity-70 dark:opacity-80">
                        {panel.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="panel w-100">
                <div className="row g-6 px-8 g-md-3 justify-content-center">
                  {CareerData.map((panel, index) => (
                    <div key={index} className="col-auto col-sm-4 col-md-3 col-lg-2">
                      <div className="panel vstack gap-1 align-items-center px-2 text-center"> {/* Added text-center */}
                        <h4 className="h2 xl:h1 m-0">
                          <span data-anime={panel.animationData}>
                            {panel.value}
                          </span>
                          {panel.suffix && panel.suffix}
                        </h4>
                        <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70 text-nowrap">
                          {panel.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}