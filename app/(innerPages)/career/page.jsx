// import Header2 from "@/components/headers/Header2";

import Footer5 from "@/components/footers/Footer5";
import CareerHero from "@/components/innerpages/CareerHero";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import EmployeeCenter from "@/components/innerpages/EmployeeCenter";
import AboutValues from "@/components/innerpages/AboutValues";
import { panelsDataCareers } from "@/data/plansCareers";
import Header5 from "@/components/headers/Header5";
import CareerFeedback from "../../../components/innerpages/CareerFeedback";
import Brands from "@/components/innerpages/Brands";
import GetInTouch from "@/components/innerpages/GetInTouch";
import CareerFaqs from "@/components/innerpages/CareerFaqs";
import { accordionItems3 } from "@/data/faq";
import EcosystemSection from "@/components/innerpages/Ecosystem";
import CareerMessage from "@/components/innerpages/CareerMessage";

export const metadata = {
  title: "Careers at Spacenos – Build an AI-Proof Future",
  description:
    "Join Spacenos and future-proof your career. Work on cutting-edge AI projects, grow fast, and become part of a mission to change the world.",
  keywords:
    "Spacenos jobs, AI career, tech jobs India, future of work, startup hiring, AI-proof career",
  alternates: {
    canonical: "https://spacenos.com/career",
  },
  openGraph: {
    title: "Careers at Spacenos – Build an AI-Proof Future",
    description:
      "Join Spacenos and future-proof your career. Work on cutting-edge AI projects, grow fast, and become part of a mission to change the world.",
    url: "https://spacenos.com/career",
    siteName: "Spacenos",
  },
 
};

export default function CareerPage() {
  return (
    <>
      <div className="page-wrapper  uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <CareerHero />
          <CareerMessage />
          <CareerFaqs faqData={accordionItems3}/>
          <CareerOpenings />
          <EmployeeCenter />
          <CareerFeedback />
          <AboutValues data={panelsDataCareers}/>
          <Brands />
          <EcosystemSection />
          <GetInTouch />
          
        </div>
        <Footer5 />
      </div>
    </>
  );
}
