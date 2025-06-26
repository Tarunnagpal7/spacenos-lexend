import BlogSidebarRight from "@/components/blog/BlogSidebarRight";
import Breadcumb3 from "@/components/blog/Breadcumb3";
import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";

import React from "react";

export const metadata = {
  title: "Blog || Spacenos – AI, Startups, Innovation Insights",
  description:
    "Stay updated with Spacenos blogs covering AI, startup growth, business automation, and global tech innovations. Learn from experts and industry leaders.",
  keywords:
    "Spacenos blogs, AI articles, startup growth, business automation, technology insights, innovation blogs, Spacenos news",
  alternates: {
    canonical: "https://spacenos.com/blogs",
  },
  openGraph: {
    title: "Blog || Spacenos – AI, Startups, Innovation Insights",
    description:
      "Explore Spacenos blogs with expert insights on AI, business growth, technology trends, and innovation for startups and enterprises.",
    url: "https://spacenos.com/blogs",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },
};


export default function page() {
  return (
    <>
      <div className=" ">
        <div
          className="bp-xs page-wrapper bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 disable-cursor"
          style={{ overflowX: "clip" }}
        >
          <Header5  />
          <div id="wrapper" className="wrap">
            <Breadcumb3  />
            <BlogSidebarRight />
          </div>
          <Footer5 />
        </div>
      </div>
    </>
  );
}
