"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { navItems } from "@/data/menu";
import addScrollspy from "@/utlis/addScrollSpy";

export default function Header5() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledPast = currentScrollPos >= 500;
      setScrolledPast(isScrolledPast);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isClient) {
      window.addEventListener("scroll", addScrollspy);
      return () => window.removeEventListener("scroll", addScrollspy);
    }
  }, [isClient]);

  // Don't render navigation items until client-side hydration is complete
  if (!isClient) {
    return (
      <header
        className="uc-header header-six uc-navbar-sticky-wrap uc-sticky"
        style={{ zIndex: 99999 }}
      >
        <nav
          className="navbar-container dark:bg-black lg:mt-3 rounded-0 lg:rounded-pill uc-navbar-float ft-tertiary"
          style={{ 
            zIndex: 99998,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            maxWidth: '1200px',
            margin: '0 auto',
            borderRadius: '50px'
          }}
        >
          <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
            <div className="container max-w-lg lg:max-w-950px xl:max-w-xl">
              <div className="uc-navbar min-h-64px lg:min-h-80px px-2 lg:px-0 text-gray-900 dark:text-white">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  {/* Logo */}
                  <div className="navbar-left">
                    <div className="uc-logo">
                      <Link className="panel text-none" href="/">
                        <Image
                          className="d-block dark:d-none"
                          alt="Spacenos"
                          src="/assets/images/apps/SPACENOS_LOGO_DARK.svg"
                          width="200"
                          height="40"
                        />
                        <Image
                          className="d-none dark:d-block"
                          alt="Spacenos"
                          src="/assets/images/apps/SPACENOS_LOGO_LIGHT.svg"
                          width="200"
                          height="40"
                        />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Placeholder for navigation to prevent layout shift */}
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ height: '40px' }}></div>
                  </div>
                  
                  {/* Login Button */}
                  <div className="navbar-right">
                    <Link
                      className="btn btn-sm btn-primary text-white text-none d-none xl:d-inline-flex hover:bg-blue-600"
                      href="/sign-in"
                    >
                      Login
                    </Link>
                    <a
                      className="d-block xl:d-none uc-icon uc-navbar-toggle-icon text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                      onClick={openMobileMenu}
                    >
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor">
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
          </div>
        </nav>
      </header>
    );
  }

  return (
    <>
      <style jsx>{`
        .navbar-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          min-width: 220px;
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 9999;
          margin-top: 8px;
        }
        
        .has-dd-menu {
          position: relative;
        }
        
        .has-dd-menu:hover .navbar-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        
        .navbar-dropdown::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid white;
        }
        
        .navbar-dropdown ul {
          list-style: none;
          margin: 0;
          padding: 12px 0;
        }
        
        .navbar-dropdown li a {
          display: flex;
          align-items: center;
          padding: 12px 24px;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.2s ease;
        }
        
        .navbar-dropdown li a:hover {
          background: #127158;
          color: white;
          transform: translateX(4px);
        }
        
        .navbar-container {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 50px;
          transition: background 0.3s ease;
        }
        
        /* Dark mode styles - Fixed */
        :global(.dark) .navbar-container {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        :global(.dark) .navbar-dropdown {
          background: #1f2937;
          border-color: #374151;
        }
        
        :global(.dark) .navbar-dropdown::before {
          border-bottom-color: #1f2937;
        }
        
        :global(.dark) .navbar-dropdown li a {
          color: #f3f4f6;
        }
        
        :global(.dark) .navbar-dropdown li a:hover {
          background: #127158;
          color: white;
        }
        
        .navbar-layout {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .navbar-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }
      `}</style>
      
      <header
        className={`uc-header header-six uc-navbar-sticky-wrap uc-sticky ${
          scrolledPast ? "uc-sticky-below uc-sticky-fixed headerFixed" : ""
        }`}
        style={{ zIndex: 99999 }}
      >
        <nav
          className={`navbar-container dark:bg-black lg:mt-3 rounded-0 lg:rounded-pill uc-navbar-float ft-tertiary ${
            scrolledPast ? "sticky" : ""
          }`}
          style={{ zIndex: 99998 }}
        >
          <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
            <div className="container max-w-lg lg:max-w-950px xl:max-w-xl">
              <div className="uc-navbar min-h-64px lg:min-h-80px px-2 lg:px-0 text-gray-900 dark:text-white">
                <div className="navbar-layout">
                  {/* Logo */}
                  <div className="navbar-left">
                    <div className="uc-logo">
                      <Link className="panel text-none" href="/">
                        <Image
                          className="d-block dark:d-none"
                          alt="Spacenos"
                          src="/assets/images/apps/SPACENOS_LOGO_DARK.svg"
                          width="200"
                          height="40"
                        />
                        <Image
                          className="d-none dark:d-block"
                          alt="Spacenos"
                          src="/assets/images/apps/SPACENOS_LOGO_LIGHT.svg"
                          width="200"
                          height="40"
                        />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Navigation Items */}
                  <div className="navbar-center">
                    <ul className="uc-navbar-nav gap-3 xl:gap-5 d-none  xl:d-flex fs-6 fw-medium mb-0 d-flex align-items-center">
                      {navItems.map((item, index) => (
                        <li key={index} className={item.children ? "has-dd-menu " : ""}>
                          {item.children ? (
                            <>
                              <a
                                role="button"
                                aria-haspopup="true"
                                className={`${
                                  item.active ? "uc-active" : ""
                                } d-flex align-items-center text-decoration-none  text-gray-900 dark:text-white`}
                                href={item.href}
                              >
                                {item.label}{" "}
                                <span className="uc-icon uc-navbar-parent-icon ms-1">
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
                              <div className="navbar-dropdown">
                                <ul>
                                  {item.children.map((child, childIndex) => (
                                    <li key={childIndex}>
                                      <a href={child.href}>{child.label}</a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          ) : (
                            <a
                              className={`${
                                item.active ? "uc-active" : ""
                              } text-decoration-none text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300`}
                              href={item.href}
                            >
                              {item.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Login Button */}
                  <div className="navbar-right">
                    <Link
                      className="btn btn-sm btn-primary text-white text-none d-none xl:d-inline-flex hover:bg-blue-600"
                      href="/sign-in"
                    >
                      Login
                    </Link>
                    <a
                      className="d-block xl:d-none uc-icon uc-navbar-toggle-icon text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                      onClick={openMobileMenu}
                    >
                      <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor">
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
          </div>
        </nav>
      </header>
    </>
  );
}