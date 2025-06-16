import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import Hero from "@/components/innerpages/features/Hero";
import KeyFeatures from "@/components/innerpages/features/KeyFeatures";
import Faq from "@/components/homes/home-2/Faq";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Cta from "@/components/innerpages/features/Cta";
import Brands2 from "@/components/common/Brands2";
import VentureOverview from "@/components/innerpages/features/VenturesOverview";
export const metadata = {
  title:
    "Features || || Spacenos"
};
export default function FeaturesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <Hero />
         <VentureOverview />
          <Cta />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
