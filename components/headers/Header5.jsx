"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { navItems } from "@/data/menu";

export default function Header5() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Memoize scroll handler to prevent recreation on every render
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const isScrolledPast = currentScrollPos >= 500;
    setScrolledPast(isScrolledPast);
  }, []);

  // Single effect for client-side initialization
  useEffect(() => {
    setIsClient(true);
    
    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Import and add scrollspy only when needed
    const initScrollspy = async () => {
      const { default: addScrollspy } = await import("@/utlis/addScrollSpy");
      const scrollspyHandler = () => addScrollspy();
      window.addEventListener("scroll", scrollspyHandler, { passive: true });
      
      return () => window.removeEventListener("scroll", scrollspyHandler);
    };
    
    const cleanup = initScrollspy();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanup.then(fn => fn && fn());
    };
  }, [handleScroll]);

  // Function to check if link is active
  const isLinkActive = useCallback((href) => {
    if (!href || !pathname) return false;
    
    // Exact match for home
    if (href === "/" && pathname === "/") return true;
    
    // Check if current path starts with the link path (excluding home)
    if (href !== "/" && pathname.startsWith(href)) return true;
    
    return false;
  }, [pathname]);

  // Memoize navigation items to prevent recreation
  const navigationItems = useMemo(() => {
    return navItems.map((item, index) => {
      const isActive = isLinkActive(item.href);
      const hasChildren = item.children && item.children.length > 0;
      
      return (
        <li key={index} className={hasChildren ? "has-dd-menu" : ""}>
          {hasChildren ? (
            <>
              <a
                role="button"
                aria-haspopup="true"
                className={`d-flex align-items-center text-decoration-none ${
                  isActive 
                    ? "text-primary" 
                    : "text-gray-900  dark:text-white hover:text-primary dark:hover:text-primary"
                }`}
                href={item.href}
              >
                {item.label}
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
              <div className="navbar-dropdown ">
                <ul>
                  {item.children.map((child, childIndex) => {
                    const childIsActive = isLinkActive(child.href);
                    return (
                      <li key={childIndex}>
                        <Link 
                          href={child.href}
                          className={childIsActive ? "text-primary" : "text-dark"}
                        >
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          ) : (
            <Link
              className={`text-decoration-none transition-colors ${
                isActive 
                  ? "text-primary" 
                  : "text-black dark:text-white hover:!text-gray-800  "
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          )}
        </li>
      );
    });
  }, [navItems, isLinkActive]);

  // Fixed CSS - proper dropdown positioning
  const headerStyles = useMemo(() => `
    .has-dd-menu {
      position: relative;
    }
    
    .navbar-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      transform: translateY(-10px);
      min-width: 220px;
      background: white;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 9999;
      margin-top: 8px;
    }
    
    .has-dd-menu:hover .navbar-dropdown {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
     .header-six .uc-navbar-nav > li:hover > a {
      color: inherit !important; /* No color change on hover */
  }

  .header-six .uc-navbar-nav > li > a[aria-expanded="true"] {
      color: #6b7280 !important; /* Change color when dropdown opens */
  }
    .navbar-dropdown::before {
      content: '';
      position: absolute;
      top: -8px;
      left: 24px;
      border: 8px solid transparent;
      border-bottom-color: white;
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
      text-decoration: none;
      font-weight: 500;
      font-size: 14px;
      transition: all 0.2s ease;
    }
    .uc-navbar-nav li a:hover {
    color: #6b7280 !important;
    }
    .navbar-dropdown li a:hover {
      background: #127158;
      color: #6b7280;
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
    
    @media (prefers-color-scheme: dark) {
      :global(.dark) .navbar-container {
        background: rgba(0, 0, 0, 0.8);
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
    }
  `, []);

  // Loading state - simplified without placeholder
  if (!isClient) {
    return (
      <header className="uc-header header-six uc-navbar-sticky-wrap uc-sticky" style={{ zIndex: 99999 }}>
        <nav className="navbar-container dark:bg-black lg:mt-3 rounded-0 lg:rounded-pill uc-navbar-float ft-tertiary" style={{ zIndex: 99998 }}>
          <div className="uc-navbar-main" style={{ "--uc-nav-height": "80px" }}>
            <div className="container max-w-lg lg:max-w-950px xl:max-w-xl">
              <div className="uc-navbar min-h-64px lg:min-h-80px px-2 lg:px-0 text-gray-900 dark:text-white">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  {/* Logo */}
                  <div className="navbar-left ">
                    <div className="uc-logo">
                      <Link className="panel text-none" href="/">
                        <Image
                          className="d-block dark:d-none"
                          alt="Spacenos"
                          src="/assets/images/apps/SPACENOS_LOGO_DARK.svg"
                          width={200}
                          height={40}
                          priority
                        />
                        <Image
                          className="d-none dark:d-block"
                          alt="Spacenos"
                          src="/assets/images/apps/SPACENOS_LOGO_LIGHT.svg"
                          width={200}
                          height={40}
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Placeholder for navigation to prevent layout shift */}
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <div style={{ height: '40px' }}></div>
                  </div>
                  
                  {/* Login Button */}
                  <div className=" navbar-right ">
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
      <style jsx>{headerStyles}</style>
      
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
                <div className="navbar-layout px-4 lg:px-8">
                  {/* Logo */}
                  <div className="navbar-left ">
                    <div className="uc-logo">
                      <Link className="panel text-none" href="/">
                        <Image
                          className="d-block dark:d-none"
                          alt="Spacenos"
                          src="/assets/images/apps/SPACENOS_LOGO_DARK.svg"
                          width={200}
                          height={40}
                          priority
                        />
                        <Image
                          className="d-none dark:d-block"
                          alt="Spacenos"
                          src="/assets/images/apps/SPACENOS_LOGO_LIGHT.svg"
                          width={200}
                          height={40}
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Navigation Items */}
                  <div className="navbar-center">
                    <ul className="uc-navbar-nav gap-3 xl:gap-5 d-none xl:d-flex fs-6 fw-medium mb-0 d-flex align-items-center">
                      {navigationItems}
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