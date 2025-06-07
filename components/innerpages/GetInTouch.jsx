import Accordion3 from "@/components/common/Accordion3";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GetInTouch({ ctaParentClass = "section-outer panel" }) {
  return (
    <div id="faq" className="faq section panel">
      <div className={ctaParentClass}>
        <div className="container lg:max-w-lg">
          <div
            className="section-inner panel pb-6 xl:pb-10"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 col-match g-4">
              <div>
                <div className="panel vstack items-center justify-between gap-2 text-center rounded-2 p-3 lg:py-8 bg-primary text-white uc-dark">
                  <div className="panel">
                    <div className="vstack items-center gap-2">
                      <h2 className="h6 lg:h5 m-0">Still have questions?</h2>
                      <p className="lg:fs-5 text-dark dark:text-white text-opacity-70">
                        Can’t find the answer you’re looking for? <br />
                        Please chat to our friendly team.
                      </p>
                      <div className="hstack justify-center gap-0">
                        <Image
                          alt="Avatar-image"
                          className="w-48px h-48px rounded-circle border border-2 border-white dark:border-primary"
                          src="/assets/images/avatars/02.jpg"
                          width={96}
                          height={96}
                        />
                        <Image
                          alt="Avatar-image"
                          className="w-48px h-48px rounded-circle border border-2 border-white dark:border-primary ms-n2"
                          src="/assets/images/avatars/01.jpg"
                          width={96}
                          height={96}
                        />
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/page-contact`}
                    className="btn btn-md  text-tertiary dark:bg-tertiary btn-secondary fw-bold rounded-pill px-3 lg:px-5 mt-1 lg:mt-2"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
