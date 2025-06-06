"use client";

import TyperComponent from "@/components/common/TyperComponent";
import Image from "next/image";
import { useEffect } from "react";
import { useParallax } from "react-scroll-parallax";

export default function CareerHero() {
  const parallax = useParallax({
    scale: [0.85, 1.1],
  });
  return (
    <div
      id="hero_header"
      className="hero-header hero-seven-scene section panel overflow-hidden"
    >
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-tertiary-300 dark:bg-primary-700" />
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-gradient-to-b from-transparent via-transparent to-white dark:to-black" />
      <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
        <div
          className="d-none lg:d-block"
          data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: anime.stagger(150, {start: 500});"
        >
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-72px dark:d-none"
            style={{ top: "15%", left: "10%" }}
            width={85}
            height={73}
            src="assets/images/vectors/marketing.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-72px dark:d-none"
            style={{ top: "15%", right: "10%" }}
            width={73}
            height={66}
            src="assets/images/vectors/charts-pc.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-64px dark:d-none"
            style={{ top: "35%", right: "-1%", transform: "rotate(45deg)" }}
            width={69}
            height={70}
            src="assets/images/vectors/group.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-48px dark:d-none"
            style={{ top: "40%", left: "15%" }}
            width={49}
            height={60}
            src="assets/images/vectors/idea.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-64px dark:d-none"
            style={{ top: "30%", left: "-1%" }}
            width={69}
            height={70}
            src="assets/images/vectors/group.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-72px d-none dark:d-block"
            style={{ top: "15%", left: "10%" }}
            width={85}
            height={73}
            src="assets/images/vectors/marketing-dark.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-72px d-none dark:d-block"
            style={{ top: "15%", right: "10%" }}
            width={73}
            height={66}
            src="assets/images/vectors/charts-pc-dark.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-64px d-none dark:d-block"
            style={{ top: "35%", right: "-1%", transform: "rotate(45deg)" }}
            width={69}
            height={70}
            src="assets/images/vectors/group-dark.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-48px d-none dark:d-block"
            style={{ top: "40%", left: "15%" }}
            width={49}
            height={60}
            src="assets/images/vectors/idea-dark.svg"
          />
          <Image
            alt="Icon"
            className="d-inline-block position-absolute w-64px d-none dark:d-block"
            style={{ top: "30%", left: "-1%" }}
            width={69}
            height={70}
            src="assets/images/vectors/group-dark.svg"
          />
        </div>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-8">
                <div
                  className="panel vstack items-center gap-2 px-2 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1
                    className="h3 sm:h2 md:h1 lg:display-6 lh-lg mb-1 xl:mb-2 mt-2"
                    style={{ transform: "translateY(0px)", opacity: 1 }}
                  >
                    Build. Learn. 
                    <span
                      className="px-1 bg-primary text-tertiary dark:bg-tertiary "
                      data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1500; loop: true;"
                    >
                      <TyperComponent
                        strings={["Launch", "launch", "Launch"]}
                      />
                    </span>
                  </h1>

                  <p className="fs-6 xl:fs-3 xl:px-6">
                    We’re not a company that hands out tasks. We hand out real responsibility. At Spacenos, internsship features. Associates pitch to founders. Designers own products. If you’re smart, hungry, and ready to build things that actually matter — then 
                    <b className="dark:text-white"> join our empire!</b>
                  </p>
                </div>
              </div>
              <div
                className="uc-video-scene"
                ref={parallax.ref}
                data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;"
              >
                <div
                  className="panel max-w-1000px mx-auto mt-2 rounded lg:rounded-1-5 xl:rounded-2 border border-dark contrast-shadow-lg overflow-hidden"
                  data-anime="onscroll: .hero-header; onscroll-trigger: 0.5; translateY: [-80, 0]; scale: [0.8, 1]; easing: linear;"
                >
                  <video
                    preload="auto"
                    data-uc-video="autoplay: true;"
                    playsInline
                    muted
                    loop
                    autoPlay
                    poster="assets/images/media/lexend-home-7.png"
                    src="/assets/images/media/lexend-home-7.webm"
                    title="Video title"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
