"use client";
import Image from "next/image";

export default function InvestorHero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
 
      <div className="section-outer panel pt-9 pt-lg-10 pb-6 pb-sm-8 bg-tertiary-300 dark:bg-primary-700  bg-gradient-to-b from-transparent via-transparent to-white dark:to-black pb-lg-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 mt-sm-4 mt-lg-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          > 
            <div className="text-center mb-4 mb-sm-6 mb-lg-8 mx-auto" style={{ maxWidth: '750px' }}>
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Invest in the Future: Partner with SpaceNOS.
              </h1>
            </div>

            <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
              <div className="panel overflow-hidden rounded-3 position-relative" style={{ height: '70vh', minHeight: '500px' }}>
                <Image
                  className="w-100 h-100 object-cover"
                  alt="Hero image"
                  src="/assets/images/avatars/venkatesh.jpeg"
                  width={1500}
                  height={1000}
                  style={{ objectPosition: 'center 30%' }}
                  priority
                />
                <div className="position-absolute bottom-0 start-0 end-0 text-white text-center p-4 p-lg-6 p-xl-9">
                  <div className="position-absolute bottom-0 start-0 end-0 h-100 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                  <div className="position-relative mx-auto" style={{ maxWidth: '750px' }}>
                    <p className="fs-5 fs-xl-4 fw-medium mb-3">
                      SpaceNOS was founded by Mr. Venkatesh Devale in 2015 with a mere $100 and a vision to grow into an evergreen tree. Today, we pride ourselves on becoming a part of major international companies and playing an indispensable role in their growth.
                    </p>
                    <div>
                      <p className="fs-6 fs-lg-5 fw-medium mb-0">Venkatesh Devale</p>
                      <span className="fs-7 opacity-80">Founder &amp; CEO</span>
                    </div>
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