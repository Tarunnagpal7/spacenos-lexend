"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

export default function Awards() {
  const badges = [
    { name: "award 2", imgsrc: "/assets/images/awards/award1.svg", color: "bg-amber-50" },
    { name: "award 3", imgsrc: "/assets/images/awards/award2.svg", color: "bg-amber-50" },
    { name: "award 4", imgsrc: "/assets/images/awards/award3.svg", color: "bg-amber-50" },
    { name: "award 5", imgsrc: "/assets/images/awards/award4.svg", color: "bg-amber-50" },
    { name: "award 6", imgsrc: "/assets/images/awards/award5.svg", color: "bg-amber-50" },
    { name: "award 7", imgsrc: "/assets/images/awards/award6.svg", color: "bg-amber-50" },
    { name: "award 8", imgsrc: "/assets/images/awards/award7.svg", color: "bg-amber-50" },
  ];

  return (
    <div id="global_recognition" className="global-recognition section panel scrollSpysection">
      <div className="section-outer panel py-3 lg:py-4 xl:py-5 bg-secondary text-black rounded-2 lg:rounded-3 m-2">
        <div className="container xl:max-w-6xl">
          <div className="section-inner panel vstack items-center gap-2 md:gap-3 lg:gap-4 max-w-100"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);">
            <div className="panel vstack items-center p-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
              <p className="h4 xl:h3 xl:h1 m-0 px-2 text-black">
                Globally Recognized. <span className="text-primary">Relentlessly Driven.</span>
              </p>
            </div>

            {/* Slider with Autoplay + Manual Scroll */}
            <div className="panel w-100 mask-x">
              <Swiper
                className="swiper"
                slidesPerView={2}
                spaceBetween={24}
                loop={true}
                speed={5000}
                modules={[Autoplay]}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                allowTouchMove={true} // Manual drag/scroll enabled
                breakpoints={{
                  480: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                }}
              >
                {badges.map((badge, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className={`panel vstack items-center justify-center ${badge.color} text-black rounded-1-5 h-100`}
                      style={{ minHeight: "120px" }}>
                      <div className="panel vstack items-center gap-3">
                        <div className="icon-container rounded-full">
                          <Image src={badge.imgsrc} alt={badge.name} width={400} height={400} />
                        </div>
                        {/* <span className="fs-7 text-center font-medium">{badge.name}</span> */}
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
