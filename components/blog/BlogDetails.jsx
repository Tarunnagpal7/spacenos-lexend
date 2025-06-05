"use client";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function BlogDetails({ blogItem }) {
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === 'string') {
          return <p key={index} className="mt-3">{item}</p>;
        } else if (item.subtitle) {
          return (
            <div key={index} className="mt-4">
              <h4 className="h4 xl:h3 mb-2 xl:mb-3">{item.subtitle}</h4>
              {renderContent(item.content)}
            </div>
          );
        } else if (item.subsection) {
          return (
            <div key={index} className="mt-3">
              <h5 className="h5 mb-2">{item.subsection}</h5>
              {renderContent(item.content)}
            </div>
          );
        } else if (item.subsubsection) {
          return (
            <div key={index} className="mt-2">
              <h6 className="h6 mb-1">{item.subsubsection}</h6>
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
          } else if (item.image) {
            return (
              <figure key={index} className="my-3 sm:my-4">
                <Item
                  original={item.image}
                  thumbnail={item.image}
                  width="1280"
                  height="853"
                >
                  {({ ref, open }) => (
                    <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                      <Image
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt={item.alt || blogItem.title}
                        src={item.image}
                        width="1280"
                        height="853"
                        ref={ref}
                      />
                      <a
                        onClick={open}
                        className="position-cover"
                        data-caption={item.alt || blogItem.title}
                      >   </a>
                    </figure>
                  )}
                </Item>
                {item.alt && (
                  <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                    {item.alt}
                  </figcaption>
                )}
              </figure>
            );
          }
        return null;
      });
    }
    return null;
  };

  return (
    <>
      <div
        style={{ marginTop: "80px" }}
        className="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
      >
        <div className="container max-w-xl">
          <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
            <li>
              <Image
                alt="icon"
                className="me-1"
                src="/assets/images/common/icons/home.svg"
                width="18"
                height="18"
              />
            </li>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/blog`}>Blog</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/blog-category/${blogItem.category}`}>{blogItem.category}</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">{blogItem.title}</span>
            </li>
          </ul>
        </div>
      </div>
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                  {blogItem.title}
                </h1>
                <ul className="post-share-icons nav-x gap-1 dark:text-white">
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-x-filled icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-pinterest icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-email icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-link icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt={blogItem.imgAlt || blogItem.title}
                    src={blogItem.imgSrc}
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-lg">
            <Gallery>
              <div className="post-content panel fs-6 md:fs-5" data-uc-lightbox="animation: scale">
                {/* Render intro content */}
                {blogItem.content?.intro?.map((paragraph, index) => (
                  <p key={index} className={index > 0 ? "mt-3" : ""}>{paragraph}</p>
                ))}

                {/* Render sections */}
                {blogItem.content?.sections?.map((section, index) => (
                  <div key={index} className={index > 0 ? "mt-6" : "mt-4"}>
                    <h3 className="h3 xl:h2 mb-3 xl:mb-4">{section.title}</h3>
                    {renderContent(section.content)}
                  </div>
                ))}
              </div>
            </Gallery>
            
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
              <ul className="nav-x gap-narrow text-primary">
                <li>
                  <span className="text-black dark:text-white me-narrow">
                    Tags:
                  </span>
                </li>
                <li>
                  <a href="#" className="gap-0">
                    {blogItem.category}
                  </a>
                </li>
              </ul>
              <ul className="post-share-icons nav-x gap-narrow">
                <li className="me-1">
                  <span className="text-black dark:text-white">Share:</span>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-facebook icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-x-filled icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-email icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-link icon-1" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
              <div className="row g-4 items-center">
                <div className="col-12 sm:col-5 xl:col-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt={blogItem.authorName}
                      src={blogItem.authorImg}
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h4 className="h5 m-0">{blogItem.authorName}</h4>
                    <p className="fs-6">
                      {blogItem.authorBio || "Creative and experienced content writer with years of experience eager to create unique content."}
                    </p>
                    <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                      <li>
                        <a href="#medium">
                          <i className="icon-2 unicon-logo-medium" />
                        </a>
                      </li>
                      <li>
                        <a href="#x">
                          <i className="icon-2 unicon-logo-x-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#instagram">
                          <i className="icon-2 unicon-logo-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation and related posts would need to be populated with actual related posts */}
            <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
              <h4 className="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h4>
              <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                <RelatedBlogs currentCategory={blogItem.category} currentId={blogItem.id} />
              </div>
            </div>
            
            <a
              href="#commont"
              className="btn h-56px w-100 mt-8 xl:mt-9 text-black dark:text-white border border-gray-200 dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span>Be the first to write a comment.</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}