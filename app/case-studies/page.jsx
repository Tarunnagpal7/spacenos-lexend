import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import Newsletter from "@/components/blog/Newsletter";
import Blogs from "@/components/blog/Blogs";
import BlogAuther from "@/components/blog/BlogAuther";
import BlogCEO from "@/components/blog/BlogCEO";
import CaseHero from "@/components/innerpages/CaseHero";
import CaseGrid from "@/components/innerpages/CaseGrid";

export const metadata = {
  title: "Case Studies || Spacenos",
  description:
    "Explore real-world success stories where Spacenos empowered startups and enterprises with AI-driven innovation, automation, and global technology solutions.",
  keywords:
    "Spacenos case studies, success stories, AI innovation, startup growth, business automation, AI implementation, client success",
  alternates: {
    canonical: "https://spacenos.com/case-studies",
  },
  openGraph: {
    title: "Case Studies || Spacenos",
    description:
      "See how Spacenos delivers AI-powered solutions that drive growth, automation, and success for businesses worldwide.",
    url: "https://spacenos.com/case-studies",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage1() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <CaseHero />
          <CaseGrid />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
