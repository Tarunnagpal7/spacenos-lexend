import Newsletter from "@/components/blog/Newsletter";
import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Awards from "@/components/homes/home-6/Awards";
import Blogs from "@/components/homes/home-6/Blogs";
import Brands from "@/components/homes/home-6/Brands";
import CareerCta from "@/components/homes/home-6/CareerCta";
import Cta from "@/components/homes/home-6/Cta";
import Elements from "@/components/homes/home-6/Elements";
import Faq from "@/components/homes/home-6/Faq";
import Features from "@/components/homes/home-6/Features";
import Features2 from "@/components/homes/home-6/Features2";
import GlobalFootprint from "@/components/homes/home-6/GlobalFootprint";
import Hero from "@/components/homes/home-6/Hero";
import JoinCirle from "@/components/homes/home-6/JoinCirlce";
import KeyFeatures from "@/components/homes/home-6/KeyFeatures";
import MediaMentions from "@/components/homes/home-6/MediaMention";
import MeetTheCeo from "@/components/homes/home-6/MeetTheCeo";
import NextFeatures from "@/components/homes/home-6/NextFeatures";
import Pricing from "@/components/homes/home-6/Pricing";
import Stats from "@/components/homes/home-6/Stats";
import Team from "@/components/homes/home-6/Team";
import Testimonials from "@/components/homes/home-6/Testimonials";
import VideoComponent from "@/components/homes/home-6/VideoComponent";
import ResourcesAccess from "@/components/homes/home-6/ResourcesAccess";
import AchievementsTestimonials from "@/components/innerpages/AchievementsTestinomials";
import LeadMagnets from "@/components/innerpages/LeadMagnets";
import { accordionItems } from "@/data/faq";
import React from "react";
import AwardsTestimonials from "@/components/homes/home-6/AwardsTestimonials";
export const metadata = {
  title:
    "Spacenos "
};
export default function HomePage6() {
  return (
    <>
      <div
        style={{ overflow: "clip" }}
        className="uni-body page-wrapper panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 home-6  bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready"
      >
        <Header5 />
        <div id="wrapper" className="wrap">
          <Hero />
          <VideoComponent />
          <Stats />
          <Awards />
          <Features2 />
          <MeetTheCeo />
          <KeyFeatures />
          <NextFeatures />
          <GlobalFootprint />
          {/* <AchievementsTestimonials/>  */}
          <AwardsTestimonials />
          {/* <ResourcesAccess /> */}
          <LeadMagnets />
          <CareerCta />
          {/* <MediaMentions /> */}
          <Blogs />
          <Cta />
          {/* <JoinCirle /> */}
        </div>
        <Footer5 />
      </div>
    </>
  );
}
