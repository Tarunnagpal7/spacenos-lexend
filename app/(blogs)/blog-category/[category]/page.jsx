import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs3 from "@/components/blog/Blogs3";
export const metadata = {
  title: "Blog Category || Spacenos",
  description:
    "Explore blogs and insights from Spacenos' expert authors on AI, startup growth, business automation, and global technology trends.",
  keywords:
    "Spacenos blogs, blog author, AI articles, startup insights, technology blogs, business growth, expert opinions",
};


export default async function BlogCategoryPage(props) {
  const params = await props.params;
  const category = params.category.split("%20").join(" ");
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <BreadCumb category={category} />
          <Blogs3 category={category} />
          <Newsletter />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
