import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import Newsletter from "@/components/blog/Newsletter";
import Blogs from "@/components/blog/Blogs";
import BlogAuther from "@/components/blog/BlogAuther";
import BlogCEO from "@/components/blog/BlogCEO";
export const metadata = {
  title:
    "Blog || Spacenos"
};
export default function BlogPage1() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <Blogs />
          <BlogAuther />
          <BlogCEO />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
