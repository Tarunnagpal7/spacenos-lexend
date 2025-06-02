import { features14 } from "@/data/features";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function KeyFeatures() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden  scrollSpysection"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10">
        <div className="container xl:max-w-lg">
          <div className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h3 lg:h2 xl:h1 m-0 px-2">
                Our Ventures
              </h1>
            </div>
            <div
              className="panel"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <div
                className="features-items row child-cols-6 lg:child-cols-3 g-2 md:g-4 col-match"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
              >
                {features14.map((feature, index) => (
                  <div key={index}>
                    <div className="features-item vstack justify-between gap-4 p-2 md:p-4 bg-secondary hover:bg-secondary-300 dark:bg-gray-800 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-150 rounded-1-5 md:min-h-250px">
                      <div className="icon-box w-40px md:w-48px h-40px md:h-48px rounded-circle cstack bg-primary dark:bg-secondary">
                        <Image
                          className="w-20px xl:w-24px text-white dark:text-primary image-filter-white dark-image-filter-none"
                          src={feature.iconSrc}
                          width={24}
                          height={24}
                          alt={feature.alt}
                          data-uc-svg=""
                        />
                      </div>
                      <h3 className="title h6 md:h5 m-0">{feature.title}</h3>
                      <a href={feature.slug} className="position-cover"></a>
                    </div>
                  </div>
                ))}
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
