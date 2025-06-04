import React from "react";
import { BadgeCheck, Shield, DollarSign, Zap, Code, Globe } from "lucide-react";
import { pricingFeatures, qualityFeatures } from "@/data/features";
const PricingQualitySection = () => {
 

  return (
     <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
    
    <section className="py-10 py-md-5 bg-white dark:bg-black">
      <div className="container px-3 px-md-4">
        {/* Header */}
        <div className="text-center mb-4 mb-md-5">
          <h2 className="h3 lg:h2 xl:h1  fw-bold text-dark dark:text-white mb-2 mb-md-3">
            Pricing &<br className="d-none d-md-block" />  Quality Assurance
          </h2>
          <p className="lead fw-bold text-muted mx-auto" style={{maxWidth: "600px"}}>
            Clear costs with enterprise-grade quality assurance built into every engagement
          </p>
        </div>

       
        <div className="row justify-content-center mb-3 mb-md-4">
          <div className="col-md-10 col-lg-8">
            <div className="bg-light p-3 p-md-4 rounded-3 shadow-sm border h-100">
              <div className="d-flex align-items-center mb-3 mb-md-4">
                <div className="p-2 p-md-3 rounded bg-primary bg-opacity-10 text-primary me-3">
                  <DollarSign className="m-1" size={20} />
                </div>
                <h3 className="h4 fw-bold text-dark dark:text-white mb-0">Pricing Model</h3>
              </div>

              <ul className="list-unstyled mb-0">
                {pricingFeatures.map((feature, index) => (
                  <li 
                    key={index} 
                    className="d-flex align-items-start p-1 p-md-3 rounded mb-2"
                  >
                    <div className="p-2 rounded bg-white bg-opacity-50 text-dark me-3">
                      <feature.icon size={18} />
                    </div>
                    <div>
                      <h4 className="h6  text-dark dark:text-white mb-1">{feature.title}</h4>
                      <p className="small fw-bold text-muted mb-0">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Card */}
        <div className="row justify-content-center mb-3 mb-md-4">
          <div className="col-md-10 col-lg-8">
            <div className="bg-light p-3 p-md-4 rounded-3 shadow-sm border h-100">
              <div className="d-flex align-items-center mb-3 mb-md-4">
                <div className="p-2 p-md-3 rounded bg-success bg-opacity-10 text-success me-3">
                  <Shield className="m-1" size={20} />
                </div>
                <h3 className="h4 fw-bold text-dark dark:text-white mb-0">Quality Assurance</h3>
              </div>

              <ul className="list-unstyled mb-3 mb-md-4">
                {qualityFeatures.map((feature, index) => (
                  <li 
                    key={index} 
                    className="d-flex align-items-start p-1 p-md-3 rounded mb-2"
                  >
                    <div className="p-2 rounded bg-white bg-opacity-50 text-dark me-3">
                      <feature.icon size={18} />
                    </div>
                    <div>
                      <h4 className="h6  text-dark dark:text-white mb-1">{feature.title}</h4>
                      <p className="small text-muted fw-bold mb-0">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-white dark:bg-gray-800 p-3 p-md-4 rounded-3 border">
                <h4 className="h6 fw-bold text-dark dark:text-white mb-2 mb-md-3">Our QA Process:</h4>
                <ol className="ps-3 ps-md-4 small">
                  <li className="mb-1 mb-md-2">Requirement analysis & test planning</li>
                  <li className="mb-1 mb-md-2">Automated test case development</li>
                  <li className="mb-1 mb-md-2">Continuous integration testing</li>
                  <li className="mb-1 mb-md-2">Performance & security audits</li>
                  <li className="mb-1 mb-md-2">User acceptance testing</li>
                  <li className="mb-0">Post-deployment monitoring</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-4 mt-md-5">
          <button className="btn btn-primary px-3 px-md-4 py-1 shadow">
            Book a Free Consultation
          </button>
          <p className="small text-muted mt-2 mt-md-3 mb-0">
            No obligation.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default PricingQualitySection;