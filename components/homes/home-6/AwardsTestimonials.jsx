"use client";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { awardsTestimonials as awards} from "@/data/testimonials"; // Adjust path if needed

export default function AwardsTestimonials() {
  return (
    <div id="clients_feedback" className="clients-feedback section panel scrollSpysection">
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 bg-secondary text-black rounded-2 lg:rounded-3 m-2">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel vstack items-center gap-4 md:gap-6 lg:gap-8 max-w-100">
            <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">Narratives of Accomplishment</p>
            </div>

            <div className="panel w-100">
              <Swiper
                slidesPerView={1}
                spaceBetween={32}
                loop={true}
                speed={2000}
                modules={[Autoplay]}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection: false
                }}
                breakpoints={{
                  768: { slidesPerView: 1.2 },
                  1024: { slidesPerView: 1.8 },
                  1200: { slidesPerView: 2.2 }
                }}
              >
                {awards.map((award) => (
                  <SwiperSlide key={award.id}>
                    <div className="panel position-relative h-full">
                      <div
                        className="panel overflow-hidden ratio ratio-4x3 rounded-2 lg:rounded-3 border-2 border-white dark:border-gray-700"
                        style={{ minHeight: "320px" }}
                      >
                        <Image
                          src={award.image}
                          alt={award.company}
                          fill
                          className="w-100 h-100 object-cover"
                        />

                        <div className="position-cover bg-black bg-opacity-40 d-flex flex-column justify-end p-4 lg:p-6">
                          <div className="position-relative z-2 text-white">
                            <p className=" fs-6 fw-medium mb-3">"{award.quote}"</p>
                            <h6 className="m-0 fs-5 lg:fs-4 fw-bold">{award.company}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
