// import Header2 from "@/components/headers/Header2";

import Footer5 from "@/components/footers/Footer5";
import CareerHero from "@/components/innerpages/CareerHero";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import EmployeeCenter from "@/components/innerpages/EmployeeCenter";
//import Blogs from "@/components/homes/home-2/Blogs";
import Faq from "@/components/homes/home-2/Faq";
import Testimonials from "@/components/innerpages/Testimonials";
import { accordionItemsCareer } from "@/data/faqCareers";
import AboutValues from "@/components/innerpages/AboutValues";
import { panelsDataCareers } from "@/data/plansCareers";
import CareerNewsletter from "@/components/innerpages/CareerNewsletter";
import CareerButton from "@/components/innerpages/CareerButton";
import Header5 from "@/components/headers/Header5";
import CareerFeedback from "../CareerFeedback";
import Timeline from "@/components/innerpages/Timeline";
import Brands from "@/components/homes/home-3/Brands";
import GetInTouch from "@/components/innerpages/GetInTouch";
export const metadata = {
  title:
    "Career || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function CareerPage() {
  return (
    <>
      <div className="page-wrapper  uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <CareerHero />
          <AboutValues data={panelsDataCareers}/>
          <CareerButton />
          <CareerOpenings />
          <EmployeeCenter />
          {/* <Testimonials /> */}
          <CareerFeedback />
          {/* <Blogs /> */}
          <Timeline />
          <Brands />
          <Faq faqData={accordionItemsCareer} /> 
          <GetInTouch />
          <CareerNewsletter />
          
        </div>
        <Footer5 />
      </div>
    </>
  );
}
