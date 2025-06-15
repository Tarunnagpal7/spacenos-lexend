// import { pressReleases } from "@/data/pressReleases";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PressReleases() {
    const ReleasesInfo = [
  {
    "id": 1,
    "headline": "Spacenos Raises $10M in Series A",
    "date": "June 10, 2025",
    "description": "Our latest funding round led by Horizon Ventures will accelerate global expansion and R&D.",
    "downloadUrl": "#",
    "imageUrl": "/images/press/funding-icon.svg",
    "imageAlt": "Funding icon"
  },
  {
    "id": 2,
    "headline": "Launch of Darkbase AI Teams",
    "date": "March 1, 2025",
    "description": "Introducing an on-demand remote development model that cuts costs by 60%.",
    "downloadUrl": "#",
    "imageUrl": "/images/press/ai-icon.svg",
    "imageAlt": "AI icon"
  },
  {
    "id": 3,
    "headline": "Awarded ISO 27001 Certification",
    "date": "December 15, 2024",
    "description": "Demonstrating our commitment to security and compliance.",
    "downloadUrl": "#",
    "imageUrl": "/images/press/certification-icon.svg",
    "imageAlt": "Certification icon"
  },
  {
    "id": 4,
    "headline": "Spacenos Partners with National Startup India",
    "date": "August 20, 2024",
    "description": "Empowering 10,000 entrepreneurs with AI tools and mentorship.",
    "downloadUrl": "#",
    "imageUrl": "/images/press/partnership-icon.svg",
    "imageAlt": "Partnership icon"
  }
]
  return (
    <div
      id="press-releases"
      className="press-releases section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9 bg-secondary dark:bg-primary dark:text-white">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
            >
              <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
                <h2 className="h3 lg:h2 xl:h1 m-0">
                  Latest News & Announcements
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Stay updated with our recent achievements and milestones.
                </p>
              </div>
              <div
                className="row child-cols-12 sm:child-cols-6 lg:child-cols-6 col-match g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {ReleasesInfo.map((release) => (
                  <div key={release.id}>
                    <div className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white text-dark">
                      <div className="vstack gap-3">
                        <div className="hstack justify-between items-center">
                          <div className="vstack">
                            <h5 className="h5 m-0 text-dark">
                              {release.headline}
                            </h5>
                            <span className="fs-7 opacity-70 dark:opacity-80">
                              {release.date}
                            </span>
                          </div>
                          {/* <Image
                            className="w-32px lg:w-40px"
                            src={release.imageUrl}
                            width={40}
                            height={40}
                            alt={release.imageAlt}
                          /> */}
                        </div>
                        <p className="fs-6 opacity-70 dark:opacity-80">
                          {release.description}
                        </p>
                      </div>
                      <Link
                        href={release.downloadUrl}
                        className="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Download PDF</span>
                        <i className="icon icon-narrow unicon-arrow-right rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href={`/press-releases`}
                className="uc-link fw-bold d-inline-flex items-center gap-narrow dark:text-white"
              >
                <span>View all press releases</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}