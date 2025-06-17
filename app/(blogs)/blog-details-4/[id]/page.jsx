import Header5 from "@/components/headers/Header5";
import Newsletter from "@/components/blog/Newsletter";
import Footer5 from "@/components/footers/Footer5";
import BlogDetails from "@/components/blog/BlogDetails";
import { blogsPosts8 } from "@/data/blogs";
export const metadata = {
  title:
    "Blog Details || Spacenos"
};
export default async function BlogDetailsPage1(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = blogsPosts8[id]
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <BlogDetails blogItem={blogItem} />
          <Newsletter />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
