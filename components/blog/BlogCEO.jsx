import { blogsPosts4 } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../common/Pagination";

export default function BlogCEO() {
  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 lg:py-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel vstack gap-3 sm:gap-6 lg:gap-9"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100);"
          >
            <div className="row child-cols-12 sm:child-cols-4 col-match gy-4 sm:gy-6 xl:gy-8 gx-2 xl:gx-4">
                <div className="col-12">
                  <article className="post type-post panel rounded-3 p-3 bg-secondary dark:bg-gray-800">
                    <div className="panel row child-cols-12 md:child-cols-6 items-center g-3">
                      <div>
                        <figure className="featured-image m-0 rounded ratio ratio-4x3 rounded lg:rounded-2 uc-transition-toggle overflow-hidden">
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src="/assets/images/blog/img-02.jpg"
                            width={1280}
                            height={853}
                            alt="Maximizing your reach with marketing strategies"
                          />
                          <Link
                            href={`/blog-details/ceo`}
                            className="position-cover"
                            data-caption="Maximizing your reach with marketing strategies"
                          ></Link>
                        </figure>
                      </div>
                      <div>
                        <div className="vstack items-center gap-2 lg:gap-3">
                          <Link
                            className="post-category text-primary fw-normal text-none fw-bold fs-7 bg-primary text-white py-narrow px-1 rounded"
                            href={`/blog-category/ceo`}
                          >
                            Insights from the Visionary.
                          </Link>
                          <h3 className="h4 xl:h2 m-0 text-center m-0 lg:w-500px lg:m-auto">
                            <Link
                              className="text-none"
                              href={`/blog-details/ceo`}
                            >
                              Weekly Founder Logs
                            </Link>
                          </h3>
                          <ul className="post-meta nav-x ft-tertiary justify-center fs-7 gap-1">
                            <li>
                              <div className="hstack gap-narrow ft-tertiary">
                                <Link
                                  href={`/blog-author/ceo`}
                                  className="text-none fw-bold text-dark dark:text-white"
                                >
                                  Venkatesh Devale
                                </Link>
                              </div>
                            </li>
                          </ul>
                          <Link
                            className="btn btn-text text-primary border-bottom d-inline-flex fs-7 lg:fs-6 sm:mt-2"
                            href={`/blog-detail/ceo`}
                          >
                            Read Blogs
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
