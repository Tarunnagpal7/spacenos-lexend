"use client";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ModalVideo from "../common/ModalVideo";

// Fake video testimonials data
const videoTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO",
    company: "TechNova Solutions",
    quote: "Working with this team transformed our digital presence completely. Their innovative approach delivered results beyond our expectations.",
    video: "/assets/images/media/lexend_vid_home-6.webm",
    poster: "/assets/images/media/lexend_vid_home-6.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CTO",
    company: "DataSphere Inc.",
    quote: "The technical expertise and attention to detail made all the difference in our complex project. Truly exceptional service.",
    video: "/assets/images/media/lexend_vid_home-6.webm",
    poster: "/assets/images/media/lexend_vid_home-6.jpg"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Marketing Director",
    company: "Global Brand Partners",
    quote: "Our engagement metrics improved by 300% after implementing their solutions. A game-changer for our business.",
    video: "/assets/images/media/lexend_vid_home-6.webm",
    poster: "/assets/images/media/lexend_vid_home-6.jpg"
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Product Manager",
    company: "InnovateX",
    quote: "They delivered our product ahead of schedule with flawless execution. The team is simply outstanding.",
    video: "/assets/images/media/lexend_vid_home-6.webm",
    poster: "/assets/images/media/lexend_vid_home-6.jpg"
  },
  {
    id: 5,
    name: "Priya Patel",
    title: "Founder",
    company: "GreenTech Ventures",
    quote: "Their sustainable tech solutions aligned perfectly with our mission. A partnership we truly value.",
    video: "/assets/images/media/lexend_vid_home-6.webm",
    poster: "/assets/images/media/lexend_vid_home-6.jpg"
  },
  {
    id: 6,
    name: "Priya Patel",
    title: "Founder",
    company: "GreenTech Ventures",
    quote: "Their sustainable tech solutions aligned perfectly with our mission. A partnership we truly value.",
    video: "/assets/images/media/lexend_vid_home-6.webm",
    poster: "/assets/images/media/lexend_vid_home-6.jpg"
  },
  {
    id: 7,
    name: "Priya Patel",
    title: "Founder",
    company: "GreenTech Ventures",
    quote: "Their sustainable tech solutions aligned perfectly with our mission. A partnership we truly value.",
    video: "/assets/images/media/lexend_vid_home-6.webm",
    poster: "/assets/images/media/lexend_vid_home-6.jpg"
  },
  {
    id: 8,
    name: "Priya Patel",
    title: "Founder",
    company: "GreenTech Ventures",
    quote: "Their sustainable tech solutions aligned perfectly with our mission. A partnership we truly value.",
    video: "/assets/images/media/lexend_vid_home-6.webm",
    poster: "/assets/images/media/lexend_vid_home-6.jpg"
  },
  {
    id: 9,
    name: "Priya Patel",
    title: "Founder",
    company: "GreenTech Ventures",
    quote: "Their sustainable tech solutions aligned perfectly with our mission. A partnership we truly value.",
    video: "/assets/images/media/lexend_vid_home-6.webm",
    poster: "/assets/images/media/lexend_vid_home-6.jpg"
  },
  {
    id: 10,
    name: "Priya Patel",
    title: "Founder",
    company: "GreenTech Ventures",
    quote: "Their sustainable tech solutions aligned perfectly with our mission. A partnership we truly value.",
    video: "/assets/images/media/lexend_vid_home-6.webm",
    poster: "/assets/images/media/lexend_vid_home-6.jpg"
  },
];

export default function AchievementsTestimonials() {
  const [isOpen, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setOpen(true);
  };

  return (
    <div id="clients_feedback" className="clients-feedback section panel scrollSpysection">
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 bg-secondary text-black rounded-2 lg:rounded-3 m-2">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel vstack items-center gap-4 md:gap-6 lg:gap-8 max-w-100">
            <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
              <p className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                Voices of Success
              </p>
            </div>
            
            <div className="panel w-100 mb-4">
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
                {videoTestimonials.slice(0, 5).map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div 
                      className="panel position-relative h-full"
                      onClick={() => handleVideoClick(testimonial.video)}
                    >
                      <div className="panel overflow-hidden ratio ratio-4x3 rounded-2 lg:rounded-3 border-2 border-white dark:border-gray-700" style={{minHeight: '320px'}}>
                          <video
                          src={testimonial.video}
                          preload="none"
                          loop
                          autoPlay
                          muted
                          playsInline
                          className="w-100 h-100 object-cover"
                          poster={testimonial.poster}
                        />
                        <div className="position-cover bg-black bg-opacity-40 d-flex flex-column justify-end p-4 lg:p-6">
                          <div className="position-relative z-2 text-white">
                            <p className="fs-6 fw-medium mb-3">"{testimonial.quote}"</p>
                            <div className="d-flex align-items-center gap-3">
                              <div>
                                <h6 className="m-0 fs-5 lg:fs-4 fw-bold">{testimonial.name}</h6>
                                <p className="m-0 fs-6 opacity-80">
                                  {testimonial.title}, {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
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
                  reverseDirection: true
                }}
                breakpoints={{
                  768: { slidesPerView: 1.2 },
                  1024: { slidesPerView: 1.8 },
                  1200: { slidesPerView: 2.2 }
                }}
              >
                {videoTestimonials.slice(3).map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div 
                      className="panel position-relative h-full"
                      onClick={() => handleVideoClick(testimonial.video)}
                    >
                      <div className="panel overflow-hidden ratio ratio-4x3 rounded-2 lg:rounded-3 border-2 border-white dark:border-gray-700" style={{minHeight: '320px'}}>
                          <video
                          src={testimonial.video}
                          preload="none"
                          loop
                          autoPlay
                          muted
                          playsInline
                          className="w-100 h-100 object-cover"
                          poster={testimonial.poster}
                        />
                        <div className="position-cover bg-black bg-opacity-40 d-flex flex-column justify-end p-4 lg:p-6">
                          <div className="position-relative z-2 text-white">
                            <p className="fs-6 fw-medium mb-3">"{testimonial.quote}"</p>
                            <div className="d-flex align-items-center gap-3">
                              <div>
                                <h6 className="m-0 fs-5 lg:fs-4 fw-bold">{testimonial.name}</h6>
                                <p className="m-0 fs-6 opacity-80">
                                  {testimonial.title}, {testimonial.company}
                                </p>
                              </div>
                            </div>
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

      <ModalVideo
        isOpen={isOpen}
        src={currentVideo}
        setIsOpen={() => setOpen(false)}
      />
    </div>
  );
}