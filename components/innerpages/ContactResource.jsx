"use client"
import React from 'react';
import { BookOpen, Rocket, BarChart2 } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const resourceCards = [
  {
    id: 1,
    icon: BookOpen,
    title: "Resources Portal",
    description: "Access startup kits, automation blueprints, legal templates, AI tools, and more.",
    bgClass: "bg-secondary dark:bg-gray-800",
    textClass: "text-gray-900 dark:text-white",
    src : "/resources"
  },
  {
      id: 3,
      icon: BarChart2,
      title: "Case Studies",
      description: "Everything from team bios, traction, projections, roadmap, and case studies.",
      bgClass: "bg-secondary dark:bg-gray-800",
      textClass: "text-gray-900 dark:text-white",
      src : "/case-studies"
    },
    {
      id: 2,
      icon: Rocket,
      title: "Client Success Deck",
      description: "See how we've helped 50+ businesses scale with automation & AI.",
      bgClass: "bg-secondary dark:bg-gray-800",
      textClass: "text-gray-900 dark:text-white",
      src : "/page-achievements"
    },
];

export default function ResourceSwiper() {
  return (
    <div id="resource-swiper" className="section panel overflow-hidden py-6">
      <div className="section-outer panel">
        <div className="container">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6">
              <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
                Before you contact us, you might find your answer here:
              </h2>
              
              <div className="position-relative px-5">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                  }}
                  className="pb-5"
                >
                  {resourceCards.map((card) => (
                    <SwiperSlide key={card.id}>
                      <div className={`panel h-100 vstack gap-3 p-4 rounded-2 ${card.bgClass}`}>
                        <div className="cstack w-64px h-64px lg:w-80px lg:h-80px rounded lg:rounded-2 bg-white dark:bg-gray-900 flex items-center justify-center mx-auto">
                          <card.icon className={`w-32px h-32px lg:w-48px lg:h-48px text-gray-800 dark:text-white`} />
                        </div>
                        <h3 className={`h5 lg:h4 m-0 text-center ${card.textClass}`}>
                          {card.title}
                        </h3>
                        <p className={`fs-7 lg:fs-6 text-center ${card.textClass} opacity-80`}>
                          {card.description}
                        </p>
                        <a 
                          href={card.src} 
                          className={`uc-link fw-bold text-center ${card.textClass} opacity-90 hover:opacity-100 transition-opacity`}
                        >
                          Explore
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation buttons */}
                <div className="swiper-button-prev bg-gray-200 dark:bg-gray-700"></div>
                <div className="swiper-button-next bg-gray-200 dark:bg-gray-700"></div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        #resource-swiper {
          .swiper-button-prev,
          .swiper-button-next {
            color: var(--bs-gray-900);
            background-color: var(--bs-gray-200);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            &::after {
              font-size: 1rem;
              font-weight: bold;
            }
          }
          .swiper-pagination-bullet {
            background: var(--bs-gray-600);
            opacity: 0.5;
            &-active {
              opacity: 1;
              background: var(--bs-gray-900);
            }
          }
          .dark {
            .swiper-button-prev,
            .swiper-button-next {
              color: white;
              background-color: var(--bs-gray-700);
            }
            .swiper-pagination-bullet {
              background: var(--bs-gray-500);
              &-active {
                background: white;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}