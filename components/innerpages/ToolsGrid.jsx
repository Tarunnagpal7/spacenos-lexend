import React from "react";
import Link from "next/link";
import { toolsdata } from "@/data/toolsdata"; // Assuming you've saved the JSON as ToolsData.js

export default function ToolsGrid() {
  return (
    <div id="tools_section" className="tools-section section panel overflow-hidden">
     
      <div className="section-outer panel pt-9 lg:pt-10 pb-6">
        <div className="container">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div
              className="vstack gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8  mx-auto  "
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Founder's Toolbox
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Boost your productivity with these essential tools and templates.
              </p>
            </div>
            
          
            <div className="panel">
              <div className="row g-4" 
                   data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
                {toolsdata.tools.map((tool, index) => (
                  <div key={index} className="col-md-6 col-lg-4">
                    <div className="h-100 panel vstack justify-between gap-3 p-4 rounded-2 border border-opacity-10 hover-shadow transition-all">
                      <div className="vstack gap-3">
                        <div className="hstack justify-between align-items-start">
                          <span className={`badge bg-primary p-1 rounded-1 text-white`}>
                            {tool.accessType}
                          </span>
                          <span className="badge bg-light text-dark dark:text-white">{tool.category}</span>
                        </div>
                        
                        
                        <div>
                          <h3 className="h5 mb-2 text-dark dark:text-white">{tool.name}</h3>
                          <p className="fs-6 opacity-70 dark:opacity-80 mb-3">
                            {tool.description}
                          </p>
                        </div>
                      </div>
               
                      <Link
                        href={tool.buttonLink}
                        className={`btn btn-primary w-100 mt-auto`}
                      >
                        {tool.buttonText}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}