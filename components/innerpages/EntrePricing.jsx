import React from "react";
import Link from "next/link";
import Image from "next/image";

const pricingTiers = [
  {
    title: "Starter",
    description: "Perfect for early-stage validation",
    price: "₹75,000",
    priceInfo: "One-time payment",
    features: [
      "Phases 1 & 2",
      "Group mentorship",
      "Community access"
    ],
    buttonLabel: "Get Started",
    popular: false
  },
  {
    title: "Pro",
    description: "Complete startup launch package",
    price: "₹1,50,000",
    priceInfo: "One-time payment",
    features: [
      "All 4 phases",
      "1:1 mentor",
      "Dev team hours (100 hrs)",
      "Pitch workshop"
    ],
    buttonLabel: "Choose Pro",
    popular: true,
  },
  {
    title: "Founders Circle",
    description: "Premium support for scaling",
    price: "₹3,00,000",
    priceInfo: "One-time payment",
    features: [
      "Pro benefits +",
      "Ongoing support (6 months)",
      "Investor introductions",
      "Co-founder matchmaking"
    ],
    buttonLabel: "Join Circle",
    popular: false
  }
];

export default function EntrePricing() {
  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden bg-tertiary-100 dark:bg-primary-800"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="heading panel vstack items-center gap-2 xl:gap-3 text-center">
                <h2 className="title h3 lg:h2 xl:h1 m-0 text-primary dark:text-tertiary-300">
                  Pricing & Payment Plans
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  No extra charges. No hidden fees.
                </p>
              </div>
              <div className="panel w-100 lg:max-w-900px border rounded-3 overflow-hidden">
                <div className="row child-cols-12 sm:child-cols-4 col-match justify-between g-0">
                  {pricingTiers.map((tier, index) => (
                    <div key={index}>
                      <div
                        className={`tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded-0 ${
                          tier.popular ? "bg-secondary dark:bg-gray-800" : "bg-white dark:bg-primary-700"
                        }`}
                      >
                        {tier.popular && (
                          <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">
                            Popular
                          </span>
                        )}
                        <div className="panel">
                          <h3 className="title h5 sm:h4 dark:text-white">
                            {tier.title}
                          </h3>
                          <p className="desc text-dark dark:text-white opacity-70 dark:opacity-80">
                            {tier.description}
                          </p>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-narrow">
                            <h5 className="title h3 sm:h2 m-0 dark:text-white">
                              {tier.price}
                            </h5>
                            <span className="fs-7 opacity-70 dark:text-white">
                              {tier.priceInfo}
                            </span>
                            <div className="vstack gap-1 justify-center text-center mt-3">
                              <Link
                                href={"/sign-up"}
                                className="btn btn-md sm:btn-sm lg:btn-md btn-primary text-white"
                              >
                                {tier.buttonLabel}
                              </Link>
                              <span className="fs-7 opacity-70 min-h-24px dark:text-white">
                                No credit card required
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="panel vstack gap-2">
                            <span className="fs-6 fw-bold dark:text-white">
                              {tier.popular
                                ? "Everything in Starter, plus:"
                                : "Key features:"}
                            </span>
                            {tier.features.map((feature, idx) => (
                              <div key={idx} className="hstack gap-1 fs-7 dark:text-white">
                                <i className="cstack w-16px h-16px bg-primary text-white rounded-circle unicon-checkmark fw-bold" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-muted dark:text-white fs-7">
                Note: Installment plans available — split across 3 or 6 months with zero interest.
              </p>
              {/* <Link
                href={`/page-pricing`}
                className="uc-link fw-bold d-inline-flex items-center gap-narrow text-primary dark:text-tertiary-300"
              >
                <span>More detailed pricing</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}