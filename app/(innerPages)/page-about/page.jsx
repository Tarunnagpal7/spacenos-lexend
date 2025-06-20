import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import About from "@/components/innerpages/About";
import Brands from "@/components/common/Brands2";
import About2 from "@/components/innerpages/About2";
import AboutValues from "@/components/innerpages/AboutValues";
import Feedback from "@/components/homes/home-2/Feedback";
// import Timeline from "@/components/homes/home-1/Timeline";
import Timeline from "@/components/innerpages/Timeline";
import Team from "@/components/innerpages/Team";
import Cta from "@/components/innerpages/Cta";
import { panelsData } from "@/data/plans";
import { WhatNext } from "@/components/innerpages/WhatNext";
import ArchitectureTeam from "@/components/innerpages/ArchitectureTeam";
import Mission from "@/components/innerpages/Mission";
export const metadata = {
  title:
    "About || Spacenos"
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
