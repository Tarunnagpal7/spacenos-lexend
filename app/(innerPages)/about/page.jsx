import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import About from "@/components/innerpages/About";
import Timeline from "@/components/innerpages/Timeline";
import Team from "@/components/innerpages/Team";
import Cta from "@/components/innerpages/Cta";
import { WhatNext } from "@/components/innerpages/WhatNext";
import ArchitectureTeam from "@/components/innerpages/ArchitectureTeam";
import Mission from "@/components/innerpages/Mission";

export const metadata = {
  title: "About || Spacenos",
  description:
    "Learn about Spacenos' mission, global presence, and how we empower startups and businesses through AI innovation, remote teams, and cutting-edge technology.",
  keywords:
    "About Spacenos, AI company, startup support, global presence, AI innovation, tech leadership, remote development teams, Spacenos mission",
  alternates: {
    canonical: "https://spacenos.com/about",
  },
  openGraph: {
    title: "About || Spacenos",
    description:
      "Discover Spacenos' vision, values, and how we help businesses leverage AI-driven solutions and global tech expertise.",
    url: "https://spacenos.com/about",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },
};


export default function AboutPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <About />
          <Timeline />
          <Mission />
          <ArchitectureTeam />
          <Team />
          <WhatNext />
          <Cta />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
