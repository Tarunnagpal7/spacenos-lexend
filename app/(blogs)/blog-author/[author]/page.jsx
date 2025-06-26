import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import Newsletter from "@/components/blog/Newsletter";
import BreadCumb from "@/components/blog/BreadCumb";
import Blogs4 from "@/components/blog/Blogs4";

export const metadata = {
  title: "Blog Author || Spacenos",
  description:
    "Explore blogs and insights from Spacenos' expert authors on AI, startup growth, business automation, and global technology trends.",
  keywords:
    "Spacenos blogs, blog author, AI articles, startup insights, technology blogs, business growth, expert opinions",
};


export default async function BlogAuthorPage(props) {
  const params = await props.params;
  const author = params.author.split("%20").join(" ");
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <BreadCumb category={author} />
          <Blogs4 author={author} />
          <Newsletter />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
