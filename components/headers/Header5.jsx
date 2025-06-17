"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { navItems } from "@/data/menu";
import addScrollspy from "@/utlis/addScrollSpy";

export default function Header5() {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledPast = currentScrollPos >= 500;

      setScrolledPast(isScrolledPast);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", addScrollspy);

    return () => {
      window.removeEventListener("scroll", addScrollspy);
    };
  }, []);
  // const lightModeHeader = scrolledPast ? "/assets/images/common/logo-light.svg" : "/assets/images/common/logo-dark.svg"


  return (
    <header
      className={`uc-header header-six uc-navbar-sticky-wrap uc-sticky ${scrolledPast ? " uc-sticky-below uc-sticky-fixed headerFixed" : ""
        }`}
      style={{ zIndex: 99999 }}
      data-uc-sticky="start: 1200px; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
    >
      <nav
        className={`uc-navbar-container lg:mt-3 rounded-0 lg:rounded-pill uc-navbar-float ft-tertiary ${scrolledPast ? "uc-navbar-sticky" : "uc-navbar-sticky"
          } `}
        style={{ zIndex: 99998 }}
        data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
      >
        <div className="uc-navbar-main " style={{ "--uc-nav-height": "80px" }}>
          <div className="container max-w-lg lg:max-w-950px xl:max-w-xl">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px px-2 lg:px-0 text-gray-900 dark:text-white"
              data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo">
                  <Link className="panel text-none" href={`/`}>
                    <Image
                      className="d-block dark:d-none"  // Show in light mode, hide in dark mode
                      alt="Lexend"
                      src="/assets/images/apps/SPACENOS_LOGO_DARK.svg"
                      width="200"
                      height="40"
                    />
                    <Image
                      className="d-none dark:d-block"  // Hide in light mode, show in dark mode
                      alt="Lexend"
                      src="/assets/images/apps/SPACENOS_LOGO_LIGHT.svg"
                      width="200"
                      height="40"
                    />
                  </Link>
                </div>
              </div>
              <div className="uc-navbar-center">
                <ul className="uc-navbar-nav gap-3 xl:gap-5 d-none lg:d-flex fs-6 fw-medium scrollSpyLinks">
                  {navItems.map((item, index) => (
                    <li key={index} className={item.children ? "has-dd-menu" : ""}>
                      {item.children ? (
                        <>
                          <a
                            role="button"
                            aria-haspopup="true"
                            className={item.active ? "uc-active" : ""}
                            href={item.href}
                          >
                            {item.label}{" "}
                            <span
                              data-uc-navbar-parent-icon=""
                              className="uc-icon uc-navbar-parent-icon"
                            >
                              <svg width={12} height={12} viewBox="0 0 12 12">
                                <polyline
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.1"
                                  points="1 3.5 6 8.5 11 3.5"
                                />
                              </svg>
                            </span>
                          </a>
                          <div className="uc-navbar-dropdown uc-drop" style={{ zIndex: 9999 }}>
                            <ul className="uc-nav uc-navbar-dropdown-nav">
                              {item.children.map((child, childIndex) => (
                                <li key={childIndex}>
                                  <a href={child.href} className="fs-6 py-2">
                                    {child.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <a
                          className={item.active ? "uc-active" : ""}
                          href={item.href}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="uc-navbar-right">
                <Link
                  className="btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex ml-4 hover:text-gray-300"
                  href={`/sign-in`}
                >
                 Login
                </Link>
                <a
                  className="d-block lg:d-none uc-icon uc-navbar-toggle-icon text-white hover:text-gray-300"
                  onClick={openMobileMenu}
                >
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '.uc-navbar-toggle-icon svg>[class*="line-"]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uc-navbar-toggle-icon svg>.line-3{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{opacity:1}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-2{transform:rotate(45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-3{transform:rotate(-45deg)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1,.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{opacity:0}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-1{transform:translateY(6px) scaleX(0)}.uc-navbar-toggle-animate[aria-expanded="true"] svg>.line-4{transform:translateY(-6px) scaleX(0)}',
                      }}
                    />
                    <rect className="line-1" y={3} width={20} height={2} />
                    <rect className="line-2" y={9} width={20} height={2} />
                    <rect className="line-3" y={9} width={20} height={2} />
                    <rect className="line-4" y={15} width={20} height={2} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
