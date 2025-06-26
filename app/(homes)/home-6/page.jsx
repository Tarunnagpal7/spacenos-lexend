
import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Awards from "@/components/homes/home-6/Awards";
import Blogs from "@/components/homes/home-6/Blogs";
import CareerCta from "@/components/homes/home-6/CareerCta";
import Cta from "@/components/homes/home-6/Cta";
import Features2 from "@/components/homes/home-6/Features2";
import GlobalFootprint from "@/components/homes/home-6/GlobalFootprint";
import Hero from "@/components/homes/home-6/Hero";
import KeyFeatures from "@/components/homes/home-6/KeyFeatures";
import MeetTheCeo from "@/components/homes/home-6/MeetTheCeo";
import NextFeatures from "@/components/homes/home-6/NextFeatures";
import Stats from "@/components/homes/home-6/Stats";
import VideoComponent from "@/components/homes/home-6/VideoComponent";
import LeadMagnets from "@/components/innerpages/LeadMagnets";
import React from "react";
import AwardsTestimonials from "@/components/homes/home-6/AwardsTestimonials";

export const metadata = {
  title: "Spacenos – Build Your Empire with AI-Powered Innovation",
  description:
    "Spacenos empowers startups, businesses, and visionaries with world-class AI solutions, remote development teams, and future-proof digital products. Join the AI powerhouse of USA and India.",
  keywords:
    "AI for startups, remote dev teams, Spacenos, build MVP, business automation, tech startup India, AI products, empire building",
  alternates: {
    canonical: "https://spacenos.com/",
  },
  openGraph: {
    title: "Spacenos – Build Your Empire with AI",
    description:
      "Empowering startups & businesses with AI development, automation, and global growth tools.",
    url: "https://spacenos.com/",
    siteName: "Spacenos",
    images: [
      {
        url: "https://spacenos.com/assets/images/apps/hero.jpeg", // Ensure this image is publicly accessible
        width: 1200,
        height: 630,
        alt: "Spacenos AI-Powered Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
          <AwardsTestimonials />
          <LeadMagnets />
          <CareerCta />
          <Blogs />
          <Cta />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
