import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import Contact1 from "@/components/innerpages/Contact1";
import ContactLinks2 from "@/components/innerpages/ContactLinks2";
import SupportCenter from "@/components/innerpages/SupportCenter";
import WhatNext from "@/components/innerpages/WhatNext";
import GlobalFootprint from "@/components/homes/home-6/GlobalFootprint";
import CurrentOffice from "@/components/innerpages/CurrentOffice";
export const metadata = {
  title:
    "Contact 1 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <Contact1 />
          <CurrentOffice />
          <ContactLinks2 />
          <SupportCenter />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
