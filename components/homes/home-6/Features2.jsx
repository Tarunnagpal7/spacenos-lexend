import React from "react";
import Image from "next/image";

export default function Features2() {
  return (
    <div id="features" className="features section panel  scrollSpysection">
      <div className="section-outer py-4 panel bg-tertiary-300 dark:bg-primary-700 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black   ">
        <div className="container xl:max-w-xl ">
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
          <div className="section-inner panel bg-tertiary-300 ">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8   max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
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
                      Spacenos for Startups:
                    </h1>
                    {/* <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                        Hire us as Virtual CTO.
                    </p> */}
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                       Darkbase AI Teams – Launch remote teams in a click. Build faster, save 60% on dev costs.
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
                      src="/assets/images/template/home4.png"
                       width="800"
                      height="620"
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
                    data-src="/assets/images/template/feature-06-bg.png"
                    data-uc-img=""
                  />
                  <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
                  <div className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-soft-light" />
                  <div className="panel p-3">
                    <Image
                      className="rounded-bottom-1-5 lg:rounded-bottom-3"
                      alt="dashboard-components"
                      src="/assets/images/template/home1.jpg"
                      width="800"
                      height="620"
                    />
                  </div>
                   <div
                    className="panel vstack items-start gap-2 p-3 lg:p-4 xl:p-6  dark:text-white"
                    data-anime="onview: -100; targets: >*; translateY: [16, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
                  >
                    <h1 className="fs-6 md:fs-5 lg:fs-4 m-0">
                     Spacenos for Businesses:
                    </h1>
                    {/* <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                       Top 1% Developers.
                    </p> */}
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                        Automate your operations and marketing with AI – 24/7 productivity without burnout.
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
                     Spacenos for Fertility & Health:
                    </h1>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                       On a mission to eliminate defective childbirth and improve intimacy through science.
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
                    Spacenos for Education:

                    </h1>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                        Redesigning education for an AI-first world – intuitive, inclusive, intelligent.
                    </p>
                    <a href="#" className="btn btn-sm btn-primary px-2 mt-2">
                      <span>Try it now</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    <Image
                      alt="builder-tools"
                      src="/assets/images/template/home2.jpg"
                     width="800"
                      height="620"
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
