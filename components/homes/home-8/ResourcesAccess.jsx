"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ResourcesAccess() {
    const [isYearly, setIsYearly] = useState(false);
    const [showFullFeatures, setShowFullFeatures] = useState(false);
    return (
        <div id="pricing" className="pricing section panel overflow-hidden">
            <div className="section-outer panel py-6 xl:py-9 lg:mx-2 mt-2 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
                <div className="container">
                    <div className="section-inner panel">
                        <div
                            className="pricing-benefits panel vstack gap-2 lg:gap-3 mt-6 lg:mt-8"
                            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                        >
                            <h4
                                className="h4 text-black m-0"
                                style={{ transform: "translateY(0px)", opacity: 1 }}
                            >
                                Unlock a World of Possibilities.
                            </h4>
                            <div
                                className="row child-cols-6 lg:child-cols g-2 col-match"
                                style={{ transform: "translateY(0px)", opacity: 1 }}
                            >
                                <div>
                                    <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                                        <span className="icon mb-narrow">
                                            <Image
                                                className="w-40px"
                                                alt="icon"
                                                src="/assets/images/custom-icons/home-8-icon-01.svg"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <span className="fs-6 fw-medium mb-narrow text-inherit">
                                            Global Developer Network
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                                        <span className="icon mb-narrow">
                                            <Image
                                                className="w-40px"
                                                alt="icon"
                                                src="/assets/images/custom-icons/home-8-icon-08.svg"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <span className="fs-6 fw-medium mb-narrow text-inherit">
                                            Legal and IP Support
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                                        <span className="icon mb-narrow">
                                            <Image
                                                className="w-40px"
                                                alt="icon"
                                                src="/assets/images/custom-icons/home-8-icon-07.svg"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <span className="fs-6 fw-medium mb-narrow text-inherit">
                                            Investors and Funders
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                                        <span className="icon mb-narrow">
                                            <Image
                                                className="w-40px"
                                                alt="icon"
                                                src="/assets/images/custom-icons/home-8-icon-04.svg"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <span className="fs-6 fw-medium mb-narrow text-inherit">
                                            Government & Political Channels

                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                                        <span className="icon mb-narrow">
                                            <Image
                                                className="w-40px"
                                                alt="icon"
                                                src="/assets/images/custom-icons/home-8-icon-05.svg"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <span className="fs-6 fw-medium mb-narrow text-inherit">
                                            Automation Tools & AI Kits
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                                        <span className="icon mb-narrow">
                                            <Image
                                                className="w-40px"
                                                alt="icon"
                                                src="/assets/images/custom-icons/home-8-icon-05.svg"
                                                width={24}
                                                height={24}
                                            />
                                        </span>
                                        <span className="fs-6 fw-medium mb-narrow text-inherit">
                                            Research Grants & Startup Labs
                                        </span>
                                    </div>
                                </div>
                            </div>
                    <Link href="/resources" className="text-primary text-left">
                     Go to Ressources <ArrowRight />
                    </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    