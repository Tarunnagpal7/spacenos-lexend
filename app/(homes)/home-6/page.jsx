import Newsletter from "@/components/blog/Newsletter";
import Footer5 from "@/components/footers/Footer5";
import Header10 from "@/components/headers/Header10";
import Blogs from "@/components/homes/home-6/Blogs";
import Brands from "@/components/homes/home-6/Brands";
import Cta from "@/components/homes/home-6/Cta";
import Elements from "@/components/homes/home-6/Elements";
import Faq from "@/components/homes/home-6/Faq";
import Features from "@/components/homes/home-6/Features";
import Features2 from "@/components/homes/home-6/Features2";
import GlobalFootprint from "@/components/homes/home-6/GlobalFootprint";
import Hero from "@/components/homes/home-6/Hero";
import JoinCirle from "@/components/homes/home-6/JoinCirlce";
import KeyFeatures from "@/components/homes/home-6/KeyFeatures";
import Pricing from "@/components/homes/home-6/Pricing";
import Team from "@/components/homes/home-6/Team";
import Testimonials from "@/components/homes/home-6/Testimonials";
import VideoComponent from "@/components/homes/home-6/VideoComponent";
import { accordionItems } from "@/data/faq";
import React from "react";
export const metadata = {
  title:
    "Home 6 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function HomePage6() {
  return (
    <>
      <div
        style={{ overflow: "clip" }}
        className="uni-body page-wrapper panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 home-6  bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready"
      >
        <Header10 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          <Features2 />
          <GlobalFootprint />
          <VideoComponent />
          <KeyFeatures />
          <Testimonials />
          <Cta />
          <JoinCirle />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
