import { Stats as stats} from "@/data/facts";
import React from "react";
import Image from "next/image";

export default function Stats() {
  return (
    <div
      hidden=""
      id="about_values"
      className="about-values section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9  dark:bg-gray-800">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 lg:gap-6 xl:gap-8">
              <div
                className="panel vstack g-2 lg:gap-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <div
                  className="panel p-5 lg:py-9 rounded-2 bg-white dark:bg-gray-800"
                  style={{ transform: "translateY(0px)", opacity: 1 }}
                >
                  <div className="row child-cols-6 lg:child-cols-3 col-match g-4 text-center">
                    {stats.map((item) => (
                      <div key={item.id}>
                        <div className="panel vstack gap-1">
                          <h4 className="h4 xl:h1 m-0">
                            <span data-anime={item.animation}>
                              {item.year || item.count}
                            </span>
                            {item.suffix && item.suffix}
                          </h4>
                          <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                            {item.description}
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
    </div>
  );
}
