"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/config/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function BlogSidebarRight() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db,"v5",process.env.NEXT_PUBLIC_DOC_ID, "blogs"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedBlogs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="section panel">
      <div className="container">
        <div className="panel py-4 lg:py-6 xl:py-8">
          <div className="row child-cols-12 g-2 lg:g-4 xl:g-8">
            <div className="md:col-8">
              <div className="uc-main panel" role="main">
                <div className="row child-cols-12 sm:child-cols-4 col-match g-2 lg:g-4 xl:g-6">
                  {blogs.map((elm, i) => (
                    <div key={i} className="col-12">
                      <article className="post type-post panel rounded-2 p-2 lg:p-4 bg-gray-25 dark:bg-gray-800">
                        <div className="panel row child-cols-12 lg:child-cols g-2 lg:g-4">
                          <div className="lg:col-6 xl:col-4">
                            <div className="panel">
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 lg:ratio-1x1 rounded-1-5 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt={elm.title}
                                  src={elm.imgSrc}
                                  width="768"
                                  height="560"
                                />
                                <Link
                                  href={`/blog-details-4/${elm.id}`}
                                  className="position-cover"
                                  data-caption={elm.title}
                                />
                              </figure>
                              <Link
                                className="post-category text-primary fw-normal text-none fw-bold fs-7 py-narrow px-1 rounded bg-tertiary text-primary position-absolute top-0 start-0 m-2"
                                href={`/blog-category/${elm.category}`}
                              >
                                {elm.category}
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="vstack items-start gap-2">
                              <h3 className="h4 sm:h5 md:h4 lh-lg m-0 xl:max-w-3/4">
                                <Link
                                  className="text-none"
                                  href={`/blog-details-4/${elm.id}`}
                                >
                                  {elm.title}
                                </Link>
                              </h3>
                              <p className="fs-6 md:fs-5 text-truncate-3">
                                {elm.desc}
                              </p>
                              <Link
                                className="btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 mt-2 md:mt-4 dark:text-tertiary"
                                href={`/blog-details-4/${elm.id}`}
                              >
                                Read more
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-4 sticky-element3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
