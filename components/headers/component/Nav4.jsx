"use client";

import Link from "next/link";
import Image from "next/image";
import { pagesData } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Nav4() {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      <li className="has-dd-menu">
        <a role="button" aria-haspopup="true">
          Ventures{" "}
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>

        {/* Improved dropdown - smaller and better positioned */}
        <div className="uc-navbar-dropdown  uc-drop ventures-dropdown">
          <div className="dropdown-content m-1 p-1">
            <ul className="uc-nav uc-navbar-dropdown-nav ventures-nav  ">
              <li className="uc-nav-header">
                <Link href="#" className="venture-link">
                  Darkbase
                </Link>
              </li>
              <li className="uc-nav-header">
                <Link href="#" className="venture-link">
                  Astro360
                </Link>
              </li>
              <li className="uc-nav-header">
                <Link href="#" className="venture-link">
                  Dominus
                </Link>
              </li>
              <li className="uc-nav-header">
                <Link href="#" className="venture-link">
                  AI Tools
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <Link href={`#`}>Resources</Link>
      </li>
      <li>
        <Link href={`/page-career`}>Career</Link>
      </li>
      <li>
        <Link href={`/page-about`}>About Us</Link>
      </li>
      <li>
        <Link href={`/page-contact`}>Contact Us</Link>
      </li>

      <style jsx>{`
        .ventures-dropdown {
          width: auto !important;
          min-width: 140px;
          max-width: 180px;
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          z-index: 1000;
          padding: 4px 0;
          margin-top: 2px;
        }

        .dropdown-content {
          padding: 0;
        }

        .ventures-nav {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .ventures-nav .uc-nav-header {
          margin: 0;
          padding: 0;
          border-bottom: none;
        }

        .venture-link {
          display: block;
          padding: 8px 12px;
          color: #374151;
          text-decoration: none;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.4;
          transition: all 0.15s ease;
        }

        .venture-link:hover {
          background-color: #f1f5f9;
          color: #1d4ed8;
          padding-left: 16px;
        }

        /* Remove the grid and full width classes effect */
        .ventures-dropdown .uc-drop-grid,
        .ventures-dropdown .row,
        .ventures-dropdown .w-100 {
          width: auto !important;
          display: block !important;
        }

        /* Hide dropdown by default */
        .has-dd-menu .uc-navbar-dropdown {
          display: none;
        }

        /* Show dropdown on hover */
        .has-dd-menu:hover .uc-navbar-dropdown {
          display: block;
        }

        /* Position the dropdown relative to the parent */
        .has-dd-menu {
          position: relative;
        }
      `}</style>
    </>
  );
}