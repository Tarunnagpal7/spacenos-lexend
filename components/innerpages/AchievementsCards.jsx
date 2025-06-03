"use client";
import Image from "next/image";
import { awards } from '@/data/awards'; // Adjust the import path as necessary

export default function AchievementsCards() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-8  pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h2
                className="h3 lg:h2 xl:h1 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Awards & Recognitions 
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Spacenos is more than a software firm. Our programming and development expertise tackles global challenges, shaping tomorrow's technology for future innovators. Explore how our sustainable and impactful solutions have garnered recognition.
              </p>
            </div>
            
            <div className="panel rounded-1 overflow-hidden">
              <div className="row g-4">
                {awards.map((award, index) => (
                  <div key={award.id} className="col-12 col-md-6">
                    <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800 h-100">
                      <div className="panel overflow-hidden rounded-3 h-100 min-h-350px position-relative">
                        <figure className="panel h-100 m-0 rounded">
                          <Image
                            className="media-cover image"
                            alt={award.title}
                            src={award.image}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </figure>
                        <div className="position-absolute bottom-0 start-0 end-0 text-white vstack justify-end p-4 lg:p-6 xl:p-8">
                          <div className="position-absolute bottom-0 start-0 end-0 h-100 bg-gradient-to-t from-black to-transparent opacity-50" />
                          <div className="position-relative z-1">
                            <div className="vstack gap-2">
                              <h3 className="fs-5 xl:fs-4 fw-bold mb-1">{award.title}</h3>
                              <div className="d-flex gap-3">
                                <span className="badge bg-primary p-1 rounded">{award.issuer}</span>
                                <span className="badge bg-dark p-1 rounded">{award.year}</span>
                              </div>
                              <p className="fs-6 opacity-90 mb-2">{award.description}</p>
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
    </div>
  );
}