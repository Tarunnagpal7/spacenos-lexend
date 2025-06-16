import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";

import Faq from "@/components/homes/home-2/Faq";
import Testimonials from "@/components/homes/home-3/Testimonials";
import Brands from "@/components/common/Brands2";
import Cta from "@/components/innerpages/features/Cta";
import Integrations from "@/components/innerpages/Collaborate";
export const metadata = {
  title:
    "Collaborate || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function CollaboratePage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <Integrations />
          <Cta />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
