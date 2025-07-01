"use client";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function BlogDetails({ blogItem }) {
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === "string") {
          return <p key={index} className="mt-3">{item}</p>;
        } else if (item.subtitle) {
          return (
            <div key={index} className="mt-4">
              <h4 className="h4 xl:h3 mb-2 xl:mb-3">{item.subtitle}</h4>
              {renderContent(item.content)}
            </div>
          );
        } else if (item.list) {
          return (
            <ul key={index} className="list-disc pl-5 mt-2">
              {item.list.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          );
        }
        return null;
      });
    }
    return null;
  };

  const { intro, sections } = blogItem.content || {};

  return (
    <>
      <div style={{ marginTop: "80px" }} className="breadcrumbs panel z-1 pt-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white">
        <div className="container py-3 max-w-xl">
          <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
            <li>
              <Image alt="icon" src="/assets/images/common/icons/home.svg" width="18" height="18" />
            </li>
            <li><Link href="/">Home</Link></li>
            <li><i className="unicon-chevron-right opacity-50" /></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><i className="unicon-chevron-right opacity-50" /></li>
            <li><Link href={`/blog-category/${blogItem.category}`}>{blogItem.category}</Link></li>
            <li><i className="unicon-chevron-right opacity-50" /></li>
            <li><span className="opacity-50">{blogItem.title}</span></li>
          </ul>
        </div>
      </div>

      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header text-center">
            <h1 className="h4 sm:h2 lg:h1 xl:display-6">{blogItem.title}</h1>
            <figure className="featured-image m-0 rounded ratio ratio-2x1 overflow-hidden">
              <Image className="media-cover" alt={blogItem.imgCaption || blogItem.title} src={blogItem.imgSrc} width="1280" height="853" />
            </figure>
          </div>

          <div className="post-content panel fs-6 md:fs-5 mt-6">
            <Gallery>
              {/* Intro Paragraphs */}
              {intro?.map((paragraph, index) => (
                <p key={index} className="mt-3">{paragraph}</p>
              ))}

              {/* Sections */}
              {sections?.map((section, index) => (
                <div key={index} className="mt-6">
                  <h3 className="h3 xl:h2 mb-3">{section.title}</h3>
                  {renderContent(section.content)}
                </div>
              ))}
            </Gallery>
          </div>

          <div className="post-footer panel mt-8 border-top pt-4">
            <ul className="nav-x gap-narrow text-primary">
              <li><span className="text-black dark:text-white">Tags:</span></li>
              <li><span>{blogItem.category}</span></li>
            </ul>
          </div>

          {/* Author Section */}
          <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded mt-6">
            <div className="row g-4 items-center">
              <div className="col-4 sm:col-3 xl:col-2">
                <figure className="featured-image m-0 rounded ratio ratio-1x1 overflow-hidden">
                  <Image className="media-cover" alt={blogItem.authorName} src={blogItem.authorImg} width="500" height="500" />
                </figure>
              </div>
              <div className="col">
                <h4 className="h5">{blogItem.authorName}</h4>
                <p className="fs-6">{blogItem.authorBio || "Experienced contributor passionate about business growth and strategy."}</p>
              </div>
            </div>
          </div>

          {/* Related Blogs */}
          {/* <div className="post-related panel border-top pt-4 mt-6">
            <h4 className="h5">Related to this topic:</h4>
            <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 mt-2">
              <RelatedBlogs currentCategory={blogItem.category} currentId={blogItem.id} />
            </div>
          </div> */}
        </div>
      </article>
    </>
  );
}
