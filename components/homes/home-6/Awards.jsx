"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { 
  Landmark, // For Government
  Cpu, // For IBM/tech
  Globe, // For UN/global
  Rocket, // For startups
  Award, // For recognitions
  Flag // For Government of Karnataka
} from "lucide-react";
import Image from "next/image";

export default function Awards() {
  const badges = [
    { 
      name: "awrds 1", 
      imgsrc : "/assets/images/awards/award1.svg",
      color: "bg-amber-50" 
    },
    { 
      name: "awrds 1", 
      imgsrc : "/assets/images/awards/award1.svg",
      color: "bg-amber-50" 
    },
    { 
      name: "awrds 1", 
      imgsrc : "/assets/images/awards/award2.svg",
      color: "bg-amber-50" 
    },
    { 
      name: "awrds 1", 
      imgsrc : "/assets/images/awards/award3.svg",
      color: "bg-amber-50" 
    },
    { 
      name: "awrds 1", 
      imgsrc : "/assets/images/awards/award4.svg",
      color: "bg-amber-50" 
    },
    { 
      name: "awrds 1", 
      imgsrc : "/assets/images/awards/award5.svg",
      color: "bg-amber-50" 
    },
    { 
      name: "awrds 1", 
      imgsrc : "/assets/images/awards/award6.svg",
      color: "bg-amber-50" 
    },
    { 
      name: "awrds 1", 
      imgsrc : "/assets/images/awards/award7.svg",
      color: "bg-amber-50" 
    },
  ];

  return (
    <div
      id="global_recognition"
      className="global-recognition section panel scrollSpysection"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 bg-secondary text-black rounded-2 lg:rounded-3 m-2">
        <div className="container xl:max-w-6xl">
          <div
            className="section-inner panel vstack items-center gap-4 md:gap-6 lg:gap-8 max-w-100"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
          >
            <div
              className="panel vstack items-center gap-2 xl:gap-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                Globally Recognized. <span className="text-primary">Relentlessly Driven.</span>
              </p>
            </div>
            
            {/* First Slider */}
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
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                  reverseDirection: false,
                }}
                allowTouchMove={false}
                breakpoints={{
                  480: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                {badges.map((badge, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className={`panel vstack items-center justify-center ${badge.color} text-black rounded-1-5 h-100`}>
                      <div className="panel vstack items-center gap-3">
                        <div className="icon-container p-3 rounded-full">
                          <Image 
                           className=""
                           src= {badge.imgsrc}
                           alt = {badge.name}
                           width={200}
                           height={200}
                          />
                        </div>
                        {/* <span className="fs-7 text-center font-medium">{badge.name}</span> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Second Slider (reverse direction)
            <div className="panel w-100 mask-x mt-4">
              <Swiper
                className="swiper"
                slidesPerView={2}
                spaceBetween={24}
                loop={true}
                speed={5000}
                modules={[Autoplay]}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                  reverseDirection: true,
                }}
                allowTouchMove={false}
                breakpoints={{
                  480: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                {[...badges].reverse().map((badge, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className={`panel vstack items-center justify-center p-4 lg:p-5 ${badge.color} text-black rounded-1-5 h-100`}>
                      <div className="panel vstack items-center gap-3">
                        <div className="icon-container p-3 bg-white rounded-full">
                          {badge.icon}
                        </div>
                        <span className="fs-7 text-center font-medium">{badge.name}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}