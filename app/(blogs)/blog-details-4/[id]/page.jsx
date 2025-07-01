import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import Header5 from "@/components/headers/Header5";
import Newsletter from "@/components/blog/Newsletter";
import Footer5 from "@/components/footers/Footer5";
import BlogDetails from "@/components/blog/BlogDetails";

export const metadata = {
  title: "Read Blogs || Spacenos",
  description:
    "Explore blogs and insights from Spacenos' expert authors on AI, startup growth, business automation, and global technology trends.",
};

export default async function BlogDetailsPage(props) {
  const { id } = props.params;

  const docRef = doc(db, "v5", process.env.NEXT_PUBLIC_DOC_ID, "blogs", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <div>Blog Not Found</div>;
  }

  const data = docSnap.data();

  // Convert Firestore timestamp to string
  const plainData = {
    ...data,
    id: docSnap.id,
    timestamp: data.timestamp?.toDate().toString() || null,
  };

  return (
    <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 overflow-x-hidden">
      <Header5 />
      <div id="wrapper" className="wrap">
        <BlogDetails blogItem={plainData} />
        <Newsletter />
      </div>
      <Footer5 />
    </div>
  );
}
