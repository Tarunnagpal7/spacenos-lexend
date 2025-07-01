"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks4, socialLinks } from "@/data/footer";

export default function Footer5() {
  
  const badges = [
    { name: "award 1", imgsrc: "/assets/images/awards/award3.svg", color: "bg-amber-50" },
    { name: "award 2", imgsrc: "/assets/images/awards/award6.svg", color: "bg-amber-50" },
    { name: "award 3", imgsrc: "/assets/images/awards/award7.svg", color: "bg-amber-50" },
  ];

  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
      <div className="footer-outer pb-4 lg:pb-6 dark:bg-gray-800 dark:text-white m-2 rounded-2 lg:rounded-3">
        <div className="uc-footer-content pt-6 lg:pt-8">
          <div className="container xl:max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  
                  <div className="col-12 lg:col-6">
                    <div className="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                      <div>
                        <Link href={`/`} style={{ width: 140 }}>
                          <Image
                            className="text-primary"
                            alt="Lexend"
                            src="/assets/images/apps/SPACENOS_LOGO_LIGHT.svg"
                            width="200"
                            height="40"
                          />
                        </Link>
                        <p className="mt-2">
                          Driven by obsession. Defined by excellence.
                        </p>

                        {/* Badges Start */}
                        <div className="panel hstack flex-wrap gap-2 mt-3">
                          {badges.map((badge, index) => (
                            <div key={index} className={`p-1 rounded `}>
                              <div className="badge-wrapper">
                                <Image 
                                  src={badge.imgsrc} 
                                  alt={badge.name} 
                                  fill 
                                  className="object-contain" 
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Badges End */}

                      </div>
                    </div>
                  </div>

                  {footerLinks4.map((section, index) => (
                    <div key={index} className={section.extraClass || ""}>
                      <ul className="nav-y gap-2 fw-medium">
                        <li className="fs-7 text-uppercase dark:text-gray-300">
                          {section.title}
                        </li>
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.isLink ? (
                              <Link href={link.href}>{link.text}</Link>
                            ) : (
                              <a href={link.href}>{link.text}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                </div>
              </div>

              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 border-top dark:text-white">
                <p className="opacity-60">
                  Spacenos© {new Date().getFullYear()}, All rights reserved.
                </p>
                <ul className="nav-x justify-center gap-2 text-gray-300">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Responsive Badge Size */}
      <style jsx>{`
        .badge-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
        }
        @media (min-width: 992px) {
          .badge-wrapper {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>
    </footer>
  );
}
