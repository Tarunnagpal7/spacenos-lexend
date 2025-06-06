
import React from "react";
import Image from "next/image";

export default function CaseHero() {
  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 lg:py-9">
        <div
          className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
          data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
        >
          <div
            className="position-absolute  rotate-45"
            style={{ top: "16%", left: "18%" }}
          >
            <Image
              className="w-32px text-gray-900 dark:text-white"
              width={193}
              height={216}
              alt="star-1"
              data-uc-svg=""
              src="/assets/images/template/star-1.svg"
            />
            <Image
              className="w-32px text-gray-900 dark:text-white dark:hidden"
              width={193}
              height={216}
              alt="star-1"
              data-uc-svg=""
              src="/assets/images/template/dark-star-1.svg"
            />
          </div>
          <div
            className="position-absolute  rotate-45"
            style={{ top: "5%", right: "18%" }}
          >
            <Image
              className="w-24px text-gray-900 dark:text-white"
              width={69}
              height={95}
              alt="star-2"
              data-uc-svg=""
              src="/assets/images/template/star-2.svg"
            />
            <Image
              className="w-32px text-gray-900 dark:text-white dark:hidden"
              width={193}
              height={216}
              alt="star-1"
              data-uc-svg=""
              src="/assets/images/template/dark-star-1.svg"
            />
          </div>
        </div>
        <div className="container max-w-xl">
          <div
            className="section-inner panel vstack gap-3 sm:gap-6 lg:gap-9"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100);"
          >
            <header className="page-header vstack justify-center items-center gap-2 md:gap-4 mt-6 text-center max-w-650px mx-auto">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Real challenges. Real results. Real proof.
              </h1>
              <p className="fs-6 sm:fs-5 text-black fw-bold text-opacity-70 dark:text-white">
                From solo founders in Australia to scaling startups in the UK and enterprise clients in the USA — we’ve helped transform raw ideas into fully functional products that have impacted over 850K+ users.
              </p>
              {/* <p className="fs-6 sm:fs-5 text-black fw-bold text-opacity-70 dark:text-white"> 
                Whether it’s Android apps, system automation, or full-stack custom solutions — our work speaks through outcomes. These stories highlight how we turn real-world problems into measurable wins.
               </p> */}
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}
