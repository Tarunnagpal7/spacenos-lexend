import React from "react";
import Link from "next/link";
import { legalData } from "@/data/legalData"; // Assuming you have a separate file for legal data

export default function LegalInformation() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block bg-secondary dark:bg-primary"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        {/* Stars background elements */}
        <div
          className="position-absolute rotate-45"
          style={{ top: "20%", left: "18%" }}
        >
          <div className="w-6 h-6 text-gray-900 dark:text-white opacity-30">
            ✦
          </div>
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <div className="w-8 h-8 text-gray-900 dark:text-white opacity-30">
            ✦
          </div>
        </div>
      </div>

      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9 bg-secondary dark:bg-gray-800">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-4 mt-4 mb-4 sm:mb-6 lg:mb-8 max-w-850px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0 text-gray-900 dark:text-white">
                {legalData.title}
              </h1>
              <p className="fs-6 md:fs-5 text-gray-600 dark:text-gray-300">
                {legalData.description}
              </p>
            </div>

            {/* Policy Cards */}
            <div className="row g-4 mb-6">
              {legalData.policies.map((policy) => {
                const Icon = policy.icon;
                return (
                  <div key={policy.id} className="col-md-4">
                    <Link
                      href={`#${policy.id}`}
                      className="card h-100 text-decoration-none transition-all duration-300 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-gray-700/50 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                    >
                      <div className="card-body text-center p-4">
                        <div className="flex justify-center mb-3">
                          <Icon className={`w-12 h-12 ${policy.iconColor}`} />
                        </div>
                        <h3 className="h5 text-gray-900 dark:text-white">{policy.title}</h3>
                        <p className="text-muted dark:text-gray-400">{policy.description}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Legal Content */}
            <div className="legal-content bg-white dark:bg-gray-800 p-5 rounded-3 shadow-sm border border-gray-200 dark:border-gray-700">
              {legalData.policies.map((policy) => (
                <section key={policy.id} id={policy.id} className="mb-6 last:mb-0">
                  <h2 className="h3 fw-bold pb-2 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                    {policy.title}
                  </h2>
                  <p className="text-gray-500 fw-bold dark:text-gray-400 mb-4">Last updated: {policy.lastUpdated}</p>
                  
                  <div className="space-y-6 text-gray-700 dark:text-white">
                    {policy.sections.map((section, index) => (
                      <div key={index}>
                        <h3 className="h5 mt-4 text-gray-900 dark:text-white">{section.title}</h3>
                        {section.content.map((content, i) => {
                          if (typeof content === 'string') {
                            return <p key={i}>{content}</p>;
                          } else if (content.list) {
                            return (
                              <ul key={i} className="list-disc pl-5 space-y-1 mt-2">
                                {content.list.map((item, j) => (
                                  <li key={j}>{item}</li>
                                ))}
                              </ul>
                            );
                          }
                          return null;
                        })}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}