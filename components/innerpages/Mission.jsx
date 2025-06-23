import React from "react";
import Image from "next/image";
import { AtomIcon, GlobeIcon, InspectionPanel, Rocket } from "lucide-react";
export default function Mission() {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Mission Section */}


        <div className="row child-cols col-match justify-between g-4">
          <div className="col-12 sm:col-6">
            <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
              <Image
                className="media-cover image"
                alt="Review quickly and confidently"
                src="/assets/images/template/feature-image-01.jpg"
                width="1200"
                height="1200"
              />
            </figure>
          </div>
          <div className="col-12 sm:col-6">
            <div className="panel">
              <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                <div>
                  <div className="panel vstack gap-2">
                    <h3 className="h4 sm:h3 lg:h2 m-0 text-primary">
                      Our Mission
                    </h3>
                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                      <strong>To empower every founder—regardless of geography, capital, or background—to launch and scale their vision with cutting-edge AI and remote teams.</strong>
                      <br /><br />
                      We don't just write code; we engineer dreams. From automating supply chains in Africa to designing AI-driven therapy bots in Europe, our projects span every continent—each powered by our belief that the next unicorn could emerge from anywhere.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* Pillars Section */}
        <div className="col-lg-6 rounded-2 p-4 p-md-5">
          <div className="p-4 p-md-5 bg-light  h-100">
            <h2 className="display-1 fw-bold text-primary mb-4">Four Pillars of Excellence</h2>

            <div className="panel">
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 items-center justify-center col-match g-3"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >

                <div
                  className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all `}
                >
                  <div className="vstack panel min-h-250px">
                    <div className="vstack items-center text-center justify-between gap-2 h-100">
                      <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                        <GlobeIcon />
                      </div>
                      <div className="panel">
                        <div className="vstack gap-1">
                          <h3 className="title h5 m-0 text-inherit">
                            Global Synergy
                          </h3>
                          <p className="desc fs-6 opacity-70">
                            Our teams across time zones don't slow us, they empower us to work around the clock.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all `}
                >
                  <div className="vstack panel min-h-250px">
                    <div className="vstack items-center text-center justify-between gap-2 h-100">
                      <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                        <AtomIcon />
                      </div>
                      <div className="panel">
                        <div className="vstack gap-1">
                          <h3 className="title h5 m-0 text-inherit">
                            Ethical AI
                          </h3>
                          <p className="desc fs-6 opacity-70">
                            We champion responsible AI that respects privacy, equity, and human uniqueness.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all `}
                >
                  <div className="vstack panel min-h-250px">
                    <div className="vstack items-center text-center justify-between gap-2 h-100">
                      <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                        <InspectionPanel />
                      </div>
                      <div className="panel">
                        <div className="vstack gap-1">
                          <h3 className="title h5 m-0 text-inherit">
                            Relentless Innovation
                          </h3>
                          <p className="desc fs-6 opacity-70">
                            We don't just build for clients; we build with them. Every partnership is a co-creation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all `}
                >
                  <div className="vstack panel min-h-250px">
                    <div className="vstack items-center text-center justify-between gap-2 h-100">
                      <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                        <Rocket />
                      </div>
                      <div className="panel">
                        <div className="vstack gap-1">
                          <h3 className="title h5 m-0 text-inherit">
                            Radical Empathy
                          </h3>
                          <p className="desc fs-6 opacity-70">
                            We challenge the status quo. If it's never been done, we're already prototyping it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section - Full Width */}
        <div className="col-12 mt-4">
          <div className="p-4 p-md-5 bg-success bg-opacity-10 rounded-4">
            <h2 className="display-2 fw-bold text-primary mb-4">Our Mythical Achievements</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 border  border-dark dark:border-light rounded-2 h-100">
                  <h5 className="fw-bold mb-3">🛰️ Zero-Gravity Code</h5>
                  <p className="mb-0">Teted our platform on the ISS (okay, we're in talks with NASA!).</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3  border  border-dark dark:border-light rounded-2 h-100">
                  <h5 className="fw-bold mb-3">🧠 AI That Dreams</h5>
                  <p className="mb-0">Our neural networks conjure original poetry—sometimes it's actually good.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3  border  border-dark dark:border-light rounded-2 h-100">
                  <h5 className="fw-bold mb-3">🔮 Digital Oracle</h5>
                  <p className="mb-0">Predicted the last three World Cup winners (after some model tweaking!).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}