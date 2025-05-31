import React from "react";
import Image from "next/image";

export default function Features2() {
  return (
    <div id="features" className="features section panel  scrollSpysection">
      <div className="section-outer panel pt-6 lg:pt-8 xl:pt-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
                  <h2 className="h2 m-0 p-3 lg:p-4 xl:p-6">
                    Why Spacenos?
                  </h2>
            </div>
            <div className="row child-cols-12 lg:child-cols-5 col-match g-2">
              <div className="lg:col-7">
                <div
                  className="panel overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 0;"
                >
                  <div
                    className="panel vstack items-start gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h1 className="fs-6 md:fs-5 lg:fs-4 m-0">
                     Future-proof your empire with AI: Launch Faster. Scale Smarter
                    </h1>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                        Hire us as Virtual CTO.
                    </p>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                        Don’t get replaced! Lead with AI-First solutions.
                    </p>
                    <a href="#" className="btn btn-sm btn-primary px-2 mt-2">
                      <span>Try it now</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                  <div className="panel ltr:ps-3 ltr:lg:ps-4 ltr:xl:ps-6 rtl:pe-3 rtl:lg:pe-4 rtl:xl:pe-6">
                    <Image
                      className="ltr:rounded-top-start-1-5 rtl:rounded-top-end-1-5"
                      alt=""
                      src="/assets/images/template/home-06-main-app.png"
                      width="1280"
                      height="837"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-primary-700 rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover"
                    style={{ backgroundPosition: "50% 85%" }}
                    data-src="/assets/images/template/feature-06-bg-masked.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="panel p-3">
                    <Image
                      className="rounded-bottom-1-5 lg:rounded-bottom-3"
                      alt="dashboard-components"
                      src="/assets/images/template/home-06-dashboard-components.png"
                      width="664"
                      height="496"
                    />
                  </div>
                   <div
                    className="panel vstack items-start gap-2 p-3 lg:p-4 xl:p-6  dark:text-white"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h1 className="fs-6 md:fs-5 lg:fs-4 m-0">
                     Elite network and resources:Work With the Top 1%
                    </h1>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                       Top 1% Developers.
                    </p>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                        Get your product reviewed by our CEO, the goddamn hackathon king.

                    </p>
                    <a href="#" className="btn btn-sm btn-secondary text-primary px-2 mt-2">
                      <span>Try it now</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="panel vstack items-start overflow-hidden bg-gray-800 rounded-2 lg:rounded-3 uc-dark"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 200;"
                >
                  <div
                    className="position-cover opacity-70 bg-cover"
                    style={{ backgroundPosition: "50% 85%" }}
                    data-src="/assets/images/template/feature-06-bg-masked-2.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="panel px-3 lg:px-4 xl:px-6">
                    <Image
                      className="rounded-bottom-1-5 border border-top-0"
                      alt="ui components"
                      src="/assets/images/template/home-06-components.png"
                      width="800"
                      height="620"
                    />
                  </div>
                  <div
                    className="panel vstack items-start gap-2 p-3 lg:p-4 xl:p-6  dark:text-white"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h1 className="fs-6 md:fs-5 lg:fs-4 m-0">
                     Your Growth, Funded
                    </h1>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                       Pay ₹50K/month and we match you with 1L to build and launch your product. 
                    </p>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                       70% - 30% Revenue Share.
                    </p>
                    <a href="#" className="btn btn-sm btn-secondary text-primary px-2 mt-2">
                      <span>Try it now</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-7">
                <div
                  className="panel vstack items-start overflow-hidden bg-secondary text-gray-900 dark:bg-gray-800 dark:text-white rounded-2 lg:rounded-3"
                  data-anime="onview: -100; translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 300;"
                >
                  <div
                    className="panel vstack items-start gap-2 p-3 lg:p-4 xl:p-6"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h1 className="fs-6 md:fs-5 lg:fs-4 m-0">
                    Future Blueprint
                    </h1>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                        Defense, healthcare, bio-tech.
                    </p>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                       AI research and dev center - USA and India. 
                    </p>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                       Global expansion and partnerships. 
                    </p>
                    <a href="#" className="btn btn-sm btn-primary px-2 mt-2">
                      <span>Try it now</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    <Image
                      alt="builder-tools"
                      src="/assets/images/template/home-06-builder-tools.png"
                      width="1280"
                      height="800"
                    />
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
