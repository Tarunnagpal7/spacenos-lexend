import React from "react";
import Image from "next/image";

export default function Features() {
  const features3 = [
    {
      title: " for Startups",
      description: "Darkbase AI Teams revolutionizes startup development by allowing you to launch fully functional remote teams in seconds. Our AI-driven platform automates talent matching, project management, and workflow optimization, helping you build MVPs 3x faster while cutting development costs by 60%. With integrated DevOps, real-time collaboration tools, and smart resource allocation, even non-technical founders can scale efficiently without traditional hiring headaches. Perfect for seed-stage companies looking to accelerate growth while maintaining lean operations.",
      imgSrc: "/assets/images/template/home4.png",
      imgAlt: "Spacenos for Startups",
      linkText: "Try it now",
      linkHref: "entrepreneur"
    },
    {
      title: " for Businesses",
      description: "Transform your enterprise operations with our end-to-end AI automation suite. From customer service bots that handle 80% of inquiries to predictive inventory management and AI-powered marketing campaigns, our platform delivers 24/7 productivity without human burnout. Advanced analytics track ROI across departments, while our neural networks continuously optimize processes. Case studies show average efficiency gains of 47% in the first 90 days, with seamless integration into existing ERP and CRM systems. Ideal for mid-sized businesses ready to compete with enterprise-grade tech.",
      imgSrc: "/assets/images/template/home1.jpg",
      imgAlt: "Spacenos for Businesses",
      linkText: "Try it now",
      linkHref: "entrepreneur"
    },
    {
      title: " for Fertility & Health",
      description: "Pioneering the future of reproductive health with our AI-powered fertility ecosystem. Combining genomic analysis, hormonal tracking, and machine learning, we've developed predictive models that identify potential complications 6-8 months earlier than conventional methods. Our intimacy algorithms personalize therapy plans while maintaining strict HIPAA compliance, with clinical trials showing 68% improvement in outcomes. The platform also offers telemedicine integration, smart device synchronization, and a global network of verified specialists - redefining care from preconception through postpartum.",
      imgSrc: "/assets/images/template/home-06-components.png",
      imgAlt: "Spacenos for Fertility & Health",
      linkText: "Try it now",
      linkHref: "page-features"
    },
    {
      title: " for Education",
      description: "Democratizing next-generation learning through our adaptive education platform. Using neuro-linguistic programming and real-time knowledge mapping, we create personalized curricula that evolve with each student's comprehension patterns. Teachers gain AI assistants that automate grading, detect learning gaps, and generate interactive content - reducing administrative workload by 75%. Our system supports 18 languages and integrates with standard LMS platforms, making it ideal for K-12 districts, universities, and corporate training programs seeking measurable improvement in engagement and retention rates.",
      imgSrc: "/assets/images/template/home2.jpg",
      imgAlt: "Spacenos for Education",
      linkText: "Try it now",
      linkHref: "resources"
    }
];
  return (
    <div id="main_features" className="main-features section panel">
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-md lg:max-w-lg xl:max-w-xl">
           <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                Spacenos 
                <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                   One Brand
                </span>{" "}
                 Multiple Missions.
              </h2>
              <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70">
                Focus purely on strategy while we handle technical complexities.
              </p>
            </div> 
          <div className="section-inner panel">
        <div className="panel vstack gap-4 sm:gap-6 lg:gap-8">
          {features3.map((feature, i) => (
            <React.Fragment key={i}>
              <div className="feature-item panel" data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;">
                <div className="row child-cols col-match justify-between g-4 lg:g-8 xl:g-10">
                  <div className="col-12 sm:col-6 order-0 lg:order-1">
                    <div className="panel w-100">
                      <Image
                        src={feature.imgSrc}
                        width={780}
                        height={728}
                        alt={feature.imgAlt}
                        className="rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-12 sm:col-6 order-1 lg:order-0">
                    <div className="panel vstack justify-between gap-4 sm:gap-6 h-100">
                      <div>
                        <div className="panel vstack gap-2">
                          <span className="fs-6 fw-bold m-0 text-primary">
                            {feature.step}
                          </span>
                          <h3 className="h2 m-0 flex items-center gap-2">
                            <div className="uc-logo">
                              <div className="panel text-none">
                                <Image
                                  className="d-block dark:d-none"
                                  alt="Spacenos"
                                  src="/assets/images/apps/SPACENOS_LOGO_DARK.svg"
                                  width="250"
                                  height="24"
                                />
                                <Image
                                  className="d-none dark:d-block"
                                  alt="Spacenos"
                                  src="/assets/images/apps/SPACENOS_LOGO_LIGHT.svg"
                                  width="250"
                                  height="24"
                                />
                              </div>
                            </div>
                            { feature.title}
                          </h3>
                          <p className="fs-6 xl:fs-5 opacity-70 dark:opacity-80">
                            {feature.description}
                          </p>
                          {feature.linkHref && (
                            <a
                              href={feature.linkHref}
                              className="uc-link fw-bold hstack gap-narrow"
                            >
                              <span>Learn More</span>
                              <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              {i !== features3.length - 1 && (
                <hr
                  className="border-gray-100 dark:border-opacity-15 m-0 opacity-100"
                  data-anime="onview: -200; width: [0, '100%']; easing: easeInOutExpo; duration: 750; delay: 100;"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
        </div>
      </div>
  );
}
