"use client";
import Image from "next/image";

export default function AchievementsHero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen bg-tertiary-300 dark:bg-primary-700  bg-gradient-to-b from-transparent via-transparent to-white dark:to-black overflow-hidden  lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{ top: "30%", left: "18%" }}
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
          style={{ top: "15%", right: "18%" }}
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
      <div className="section-outer panel pt-9 lg:pt-10 pb-8 sm:pb-4">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Achievements & Testimonials
              </h1>
              <p className="fs-6 sm:fs-5  text-dark dark:text-white text-opacity-70">
                With a vast client base across Australia, the UK, and USA, we're driven to unearth 'gems' and consistently exceed expectations. This page is a testament to our proven skills and the partners who've fueled our achievements.
              </p>
            </div>
            <div>
              <Image
                className="img-fluid rounded-3 shadow-lg"
                width={1200}
                height={800}
                alt="hero-image"
                data-uc-svg=""
                src="/assets/images/team/09.jpeg"
              >
              </Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
