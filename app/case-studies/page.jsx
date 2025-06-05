import Header10 from "@/components/headers/Header10";

import Footer5 from "@/components/footers/Footer5";
import Newsletter from "@/components/blog/Newsletter";
import Blogs from "@/components/blog/Blogs";
import BlogAuther from "@/components/blog/BlogAuther";
import BlogCEO from "@/components/blog/BlogCEO";
import CaseHero from "@/components/innerpages/CaseHero";
import CaseGrid from "@/components/innerpages/CaseGrid";
export const metadata = {
  title:
    " Case Studies || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function BlogPage1() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header10 />
        <div id="wrapper" className="wrap">
          <CaseHero />
          <CaseGrid />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
