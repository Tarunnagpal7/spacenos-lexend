"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PressMediaCoverage() {
  const mediaInfo = [
    {
      "id": 1,
      "publication": "TechCrunch",
      "headline": "Spacenos' Remote AI Teams Are Changing Startup Landscapes",
      "date": "May 5, 2025",
      "description": "TechCrunch explores how Spacenos' innovative Darkbase AI Teams are disrupting traditional development models, enabling startups to access top-tier AI talent at a fraction of the cost. The article highlights several success stories from early adopters.",
      "link": "https://techcrunch.com/spacenos-remote-ai-teams",
      "imageUrl": "/images/media/techcrunch-logo.svg",
      "imageAlt": "TechCrunch logo",
      "quote": "Spacenos has effectively democratized AI development, making what was once exclusive to tech giants accessible to bootstrapped startups."
    },
    {
      "id": 2,
      "publication": "Forbes",
      "headline": "How This Bangalore Startup Outcompetes Silicon Valley",
      "date": "April 10, 2025",
      "description": "Forbes India profiles Spacenos' unique approach to product development and talent acquisition that's allowing them to outperform much larger Silicon Valley competitors. The piece focuses on their hybrid AI-human development methodology.",
      "link": "https://forbes.com/spacenos-bangalore-silicon-valley",
      "imageUrl": "/images/media/forbes-logo.svg",
      "imageAlt": "Forbes logo",
      "quote": "With 60% lower development costs and 40% faster time-to-market, Spacenos is rewriting the rules of enterprise software."
    },
    {
      "id": 3,
      "publication": "YourStory",
      "headline": "Inside Spacenos' Secret R&D Lab",
      "date": "February 28, 2025",
      "description": "YourStory gets exclusive access to Spacenos' cutting-edge research facility where they're developing next-generation AI collaboration tools. The article reveals several upcoming products in their pipeline.",
      "link": "https://yourstory.com/spacenos-rd-lab",
      "imageUrl": "/images/media/yourstory-logo.svg",
      "imageAlt": "YourStory logo",
      "quote": "What sets Spacenos apart is their relentless focus on solving real business problems rather than chasing AI hype cycles."
    },
    {
      "id": 4,
      "publication": "Economic Times",
      "headline": "Spacenos Expands to Boston with New AI Hub",
      "date": "January 12, 2025",
      "description": "The Economic Times covers Spacenos' strategic expansion into the US market with a new AI innovation center in Boston's tech district. The facility will focus on enterprise AI solutions for financial services.",
      "link": "https://economictimes.com/spacenos-boston-expansion",
      "imageUrl": "/images/media/economic-times-logo.svg",
      "imageAlt": "Economic Times logo",
      "quote": "Boston's rich academic ecosystem makes it the perfect launchpad for Spacenos' North American ambitions."
    },
    {
      "id": 5,
      "publication": "Wired",
      "headline": "The Quiet Revolution in Distributed AI Development",
      "date": "March 18, 2025",
      "description": "Wired examines how Spacenos is pioneering a new model for AI development that leverages global talent pools while maintaining rigorous security standards, featuring an interview with CTO Priya Sharma.",
      "link": "https://wired.com/spacenos-distributed-ai",
      "imageUrl": "/images/media/wired-logo.svg",
      "imageAlt": "Wired logo",
      "quote": "Spacenos' ISO 27001-certified development framework proves that distributed teams can be more secure than traditional in-house operations."
    },
    {
      "id": 6,
      "publication": "Inc. Magazine",
      "headline": "From Bangalore to the World: Spacenos' Global Playbook",
      "date": "December 5, 2024",
      "description": "Inc. Magazine analyzes Spacenos' rapid international growth strategy, highlighting their partnerships with National Startup India and other government initiatives that helped fuel their expansion.",
      "link": "https://inc.com/spacenos-global-growth",
      "imageUrl": "/images/media/inc-logo.svg",
      "imageAlt": "Inc. Magazine logo",
      "quote": "Few startups have scaled as thoughtfully yet aggressively as Spacenos - their partnership-first approach offers lessons for any company going global."
    }
  ];

  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <div id="media_coverage" className="media-coverage section panel overflow-hidden">
      <div className="section-outer panel p-4 xl:p-8">
        <div className="container max-w-xl lg:max-w-lg">
          <div className="section-inner panel" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});">
            <div className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
              <h2 className="h3 lg:h2 xl:h1 m-0">Featured Media Coverage</h2>
              <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                Discover what leading publications are saying about our innovative solutions and industry impact.
              </p>
            </div>
            
            <div className="panel vstack gap-4 xl:gap-6">
              {/* Tab Navigation */}
              <div className="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
                <ul className="main-features-nav hstack text-center overflow-auto" role="tablist">
                  {mediaInfo.slice(0, 4).map((item) => (
                    <li
                      key={item.id}
                      className={`${activeTab === item.id ? "uc-active" : ""}`}
                      onClick={() => setActiveTab(item.id)}
                      role="presentation"
                    >
                      <a className="h6 lg:h5 text-nowrap m-0">{item.publication}</a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tab Content */}
              <div className="main-features-switcher uc-switcher overflow-hidden" role="presentation">
                {mediaInfo.slice(0, 4).map((item) => (
                  activeTab === item.id && (
                    <div key={item.id} className="uc-active">
                      <div className="feature-item panel">
                        <div className="row child-cols col-match justify-between g-4">
                          {/* Image Column */}
                          <div className="col-12 sm:col-6">
                            {/* <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden bg-white flex items-center justify-center p-8">
                              <Image
                                className="media-cover image object-contain"
                                alt={item.imageAlt}
                                src={item.imageUrl}
                                width={400}
                                height={400}
                              />
                            </figure> */}
                            <blockquote className="mt-4 p-4 rounded-lg italic">
                              "{item.quote}"
                            </blockquote>
                          </div>
                          
                          {/* Content Column */}
                          <div className="col-12 sm:col-6">
                            <div className="panel">
                              <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                <div className="panel vstack gap-2">
                                  <span className="text-sm font-semibold text-primary dark:text-secondary">
                                    {item.publication} • {item.date}
                                  </span>
                                  <h3 className="h4 sm:h3 lg:h2 m-0">
                                    {item.headline}
                                  </h3>
                                  <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                    {item.description}
                                  </p>
                                  <Link
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="uc-link fw-bold hstack gap-narrow mt-2 sm:mt-1 lg:mt-2"
                                  >
                                    <span>Read Article</span>
                                    <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
              
              {/* Additional Media Items Grid */}
              {/* <div className="row child-cols-12 sm:child-cols-6 col-match g-4">
                {mediaInfo.slice(4).map((item) => (
                  <div key={item.id} className="panel vstack justify-between gap-4 p-3 rounded lg:rounded-2 bg-white dark:bg-gray-800 text-dark dark:text-white">
                    <div className="vstack gap-3">
                      <div className="hstack justify-between items-center">
                        <div className="vstack">
                          <h5 className="h5 m-0">{item.publication}</h5>
                          <span className="fs-7 opacity-70 dark:opacity-80">{item.date}</span>
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                          <Image
                            src={item.imageUrl}
                            width={32}
                            height={32}
                            alt={item.imageAlt}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <h6 className="h6 m-0">{item.headline}</h6>
                      <p className="fs-6 opacity-70 dark:opacity-80 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow"
                    >
                      <span>Read more</span>
                      <i className="icon icon-narrow unicon-arrow-right rtl:rotate-180" />
                    </Link>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}