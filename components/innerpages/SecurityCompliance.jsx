"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SecurityFeatures from "./SecurityFeatures";
import { ShieldCheck, Lock, Server, FileText, UserCheck, RefreshCcw } from "lucide-react";

export default function SecurityCompliance() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const securityData = [
    {
      name: "Certifications & Standards",
      shortDescription: "Industry-leading security certifications",
      fullDescription: "We adhere to the most stringent security frameworks including ISO 27001 Certified comprehensive ISMS, SOC 2 Type II demonstrating ongoing security controls, GDPR & CCPA Compliance for data privacy rights, and PCI DSS Level 1 readiness for payment processing.",
      icon: <ShieldCheck color="#12715B" size={40} />,
    },
    {
      name: "Data Protection & Privacy",
      shortDescription: "Multi-layered data safeguards",
      fullDescription: "We implement AES-256 encryption for stored data and TLS 1.2+ for all communications. Our access controls include role-based permissions and MFA. Choose data residency in India, USA, or Europe. Automated daily backups with geo-redundant storage ensure <24-hour RTO.",
      icon: <Lock color="#12715B" size={40} />,
    },
    {
      name: "Infrastructure Security",
      shortDescription: "Hardened infrastructure protection",
      fullDescription: "Real-time SIEM monitoring with anomaly detection. Secure SDLC embeds security in every sprint with automated code scans. Kubernetes hardening, network segmentation, and WAF protect against OWASP Top 10 threats with DDoS mitigation.",
      icon: <Server color="#12715B" size={40} />,
    },
    {
      name: "Audits & Reports",
      shortDescription: "Transparent compliance evidence",
      fullDescription: "Annual SOC 2 reports available under NDA. Quarterly penetration testing by CREST-accredited firms. Monthly internal scans plus third-party assessments with <30-day patch cycles. Download ISO certificates and policy summaries.",
      icon: <FileText color="#12715B" size={40} />,
    },
    {
      name: "Privacy & User Rights",
      shortDescription: "Complete data control",
      fullDescription: "Export personal data in machine-readable format. Submit deletion requests fulfilled within 30 days (subject to legal holds). Granular consent management for marketing, analytics, and cookies with easy opt-in/out controls.",
      icon: <UserCheck color="#12715B" size={40} />,
    },
    {
      name: "Continuous Improvement",
      shortDescription: "Evolving security posture",
      fullDescription: "Threat intelligence feeds from top vendors. Quarterly security awareness training with phishing simulations. Annual policy reviews incorporating new regulations. Security never sleeps at Spacenos.",
      icon: <RefreshCcw color="#12715B" size={40} />,
    },
  ];

  return (
    <div id="security_compliance" className="hero-header section panel overflow-hidden">
      <div className="section-outer panel pt-9 lg:pt-10 pb-6">
        
        <div className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
          data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});">
          
          <div className="position-absolute rotate-45" style={{ top: "30%", left: "18%" }}>
            <Image className="w-32px text-gray-900 dark:text-white" src="/assets/images/template/star-1.svg" width={193} height={216} alt="star-1" />
            <Image className="w-32px text-gray-900 dark:text-white" src="/assets/images/template/dark-star-1.svg" width={193} height={216} alt="star-1" />
          </div>
          
          <div className="position-absolute rotate-45" style={{ top: "15%", right: "18%" }}>
            <Image className="w-24px text-gray-900 dark:text-white" src="/assets/images/template/star-2.svg" width={69} height={95} alt="star-2" />
            <Image className="w-24px text-gray-900 dark:text-white" src="/assets/images/template/dark-star-1.svg" width={69} height={95} alt="star-2" />
          </div>
        </div>

        <div className="container">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Security and Compliance
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Trust Through Transparency - Enterprise-grade security with industry-leading certifications
              </p>
            </div>

            <SecurityFeatures />

            <div className="panel">
              <div className="col-match g-2 lg:g-4 justify-between"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
                
                {securityData.map((item, index) => (
                  <div key={index}>
                    <div className="panel vstack justify-between gap-4 p-3 m-3 rounded lg:rounded-2 border">
                      <div className="vstack gap-3">
                        <div className="hstack justify-between items-center">
                          <div className="vstack">
                            <h5 className="h5 m-0 text-dark dark:text-white">
                              {item.name}
                            </h5>
                          </div>
                          {item.icon}
                        </div>
                        <p className="fs-6 opacity-70 dark:opacity-80">
                          {item.shortDescription}
                        </p>

                        {expandedIndex === index && (
                          <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                            <p className="fs-6 opacity-80 dark:opacity-90">
                              {item.fullDescription}
                            </p>
                          </div>
                        )}
                      </div>

                      <button onClick={() => toggleExpand(index)}
                        className="uc-link fw-bold fs-7 d-inline-flex items-center gap-narrow text-left">
                        <span>{expandedIndex === index ? "Read less" : "Read more"}</span>
                        <i className={`icon icon-narrow unicon-arrow-right rtl:rotate-180 transition-transform ${expandedIndex === index ? "transform rotate-90" : ""}`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="vstack gap-4 items-center">
                <h3 className="h4 text-dark dark:text-white">Request Our Security Whitepaper</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  For detailed security architecture and compliance documentation.
                </p>
                <div className="hstack bg-primary gap-4 justify-center">
                  <Link href="#" className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                    Download Whitepaper
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
