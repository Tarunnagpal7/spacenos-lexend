"use client";
import { Users, Handshake, Landmark, GitBranch } from "lucide-react";

import React from "react";
import Link from "next/link";

export default function Ecosystem() {
   const ecosystemItems = [
    {
      icon: <Users size={20} />,
      title: "Global Developer Network",
      description: "Developers across India and the U.S."
    },
    {
      icon: <Handshake size={20} />,
      title: "Professional Advisors",
      description: "Lawyers, startup mentors, investors"
    },
    {
      icon: <Landmark size={20} />,
      title: "Strategic Connections",
      description: "Political insiders and global research councils"
    },
    {
      icon: <GitBranch size={20} />,
      title: "Resources & Tools",
      description: "Automation kits, investor decks, and more"
    }
  ];
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden "
    >
      <div className="section-outer panel pt-6 pb-8 ">
        <div className="container sm:max-w-md lg:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
              >
                Access Our Ecosystem
              </h2>
                <span className="text-primary h6 text-center"> Get mentor and supported by our extended network</span>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-6 col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {ecosystemItems.map((feature, index) => (
                    <div key={index}>
                      <div className="feature-item panel p-4 border rounded hover:bg-white dark:hover:bg-primary dark:text-white hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90" />
                          <div className="vstack justify-between gap-2 h-100">
                             <div className=" rounded-full w-20 h-20 flex items-center justify-center mb-6">
                              {feature.icon}
                            </div>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  {feature.title}
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                          <Link
                            href={`/page-features`}
                            className="position-cover"
                          ></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
