"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NextFeatures() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div
            id="main_features"
            className="main-features section p-1 rounded-2 panel overflow-hidden"
        >
            <div className="section-outer bg-secondary dark:bg-primary-700   bg-gradient-to-b  from-transparent via-transparent to-white dark:to-black panel pb-6 xl:pb-9">
                <div className="container max-w-xl lg:max-w-lg">
                    <div
                        className="section-inner panel"
                        data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 100});"
                    >
                        <div className="panel vstack items-center gap-2 xl:gap-3 mt-4 mb-4 sm:mb-8 xl:mb-9 sm:max-w-600px xl:max-w-700px mx-auto text-center">
                            <h2 className="h3 lg:h2 xl:h1 m-0">
                                Where We're Going Next… Join the Movement Early.
                            </h2>
                            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">

                            </p>
                        </div>
                        <div className="panel vstack gap-4 xl:gap-6">
                            <div className="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
                                <ul
                                    className="main-features-nav hstack text-center overflow-auto"
                                    data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                                    role="tablist"
                                >
                                    <li
                                        className={`${activeTab == 1 ? "uc-active" : ""}`}
                                        onClick={() => setActiveTab(1)}
                                        role="presentation"
                                    >
                                        <a className="h6 lg:h5 text-nowrap m-0">Healthcare AI</a>
                                    </li>
                                    <li
                                        onClick={() => setActiveTab(2)}
                                        className={`${activeTab == 2 ? "uc-active" : ""}`}
                                        role="presentation"
                                    >
                                        <a className="h6 lg:h5 text-nowrap m-0">Predictive Technologies</a>
                                    </li>
                                    <li
                                        className={`${activeTab == 3 ? "uc-active" : ""}`}
                                        onClick={() => setActiveTab(3)}
                                        role="presentation"
                                    >
                                        <a className="h6 lg:h5 text-nowrap m-0">
                                            Education 3.0
                                        </a>
                                    </li>
                                    <li
                                        className={`${activeTab == 4 ? "uc-active" : ""}`}
                                        onClick={() => setActiveTab(4)}
                                        role="presentation"
                                    >
                                        <a className="h6 lg:h5 text-nowrap m-0">Defence & Intelligence</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="main-features-switcher uc-switcher overflow-hidden"
                                role="presentation"
                                style={{ touchAction: "pan-y pinch-zoom" }}
                            >
                                {activeTab == 1 && (
                                    <div className="uc-active">
                                        <div className="feature-item panel">
                                            <div className="row child-cols col-match justify-between g-4">
                                                <div className="col-12 sm:col-6">
                                                    <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                                                        <Image
                                                            className="media-cover image"
                                                            alt="Share tools quickly and confidently in minutes"
                                                            src="/assets/images/apps/health-next.png"
                                                            width="1200"
                                                            height="1200"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-12 sm:col-6">
                                                    <div className="panel">
                                                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                                            <div>
                                                                <div className="panel vstack gap-2">
                                                                    <h3 className="h4 sm:h3 lg:h2 m-0">
                                                                        Healthcare AI
                                                                    </h3>
                                                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                                                        We're redefining patient care through intelligent diagnostics, personalized treatment plans, and early disease detection. Our AI solutions aim to empower doctors and save lives through real-time, data-driven insights.
                                                                    </p>
                                                                    <div className="hstack gap-2 mt-2 sm:mt-1 lg:mt-2">
                                                                        <Link href={"/investors"} >
                                                                        <button className="btn btn-primary">
                                                                            Invest
                                                                        </button>
                                                                        </Link>
                                                                        <Link href={'/page-collaborate'}>
                                                                        <button className="btn btn-outline-primary">
                                                                            Partnership
                                                                        </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab == 2 && (
                                    <div className="uc-active">
                                        <div className="feature-item panel">
                                            <div className="row child-cols col-match justify-between g-4">
                                                <div className="col-12 sm:col-6">
                                                    <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                                                        <Image
                                                            className="media-cover image"
                                                            alt="Connect every part of your entire business"
                                                            src="/assets/images/apps/predictive.png"
                                                            width="1200"
                                                            height="1200"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-12 sm:col-6">
                                                    <div className="panel">
                                                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                                            <div>
                                                                <div className="panel vstack gap-2">
                                                                    <h3 className="h4 sm:h3 lg:h2 m-0">
                                                                        Predictive Technologies
                                                                    </h3>
                                                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                                                        Predictive Technologies
                                                                        Anticipate what's next — from consumer behavior to supply chain optimization. We're leveraging big data and machine learning to build systems that don't just react, but predict — enabling smarter decisions across industries.
                                                                    </p>
                                                                     <div className="hstack gap-2 mt-2 sm:mt-1 lg:mt-2">
                                                                        <Link href={"/investors"} >
                                                                        <button className="btn btn-primary">
                                                                            Invest
                                                                        </button>
                                                                        </Link>
                                                                        <Link href={'/page-collaborate'}>
                                                                        <button className="btn btn-outline-primary">
                                                                            Partnership
                                                                        </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab == 3 && (
                                    <div className="uc-active">
                                        <div className="feature-item panel">
                                            <div className="row child-cols col-match justify-between g-4">
                                                <div className="col-12 sm:col-6">
                                                    <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                                                        <Image
                                                            className="media-cover image"
                                                            alt="Maintain compliance and control your apps"
                                                            src="/assets/images/apps/education3.0.png"
                                                            width="1200"
                                                            height="1200"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-12 sm:col-6">
                                                    <div className="panel">
                                                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                                            <div>
                                                                <div className="panel vstack gap-2">
                                                                    <h3 className="h4 sm:h3 lg:h2 m-0">
                                                                        Education 3.0
                                                                    </h3>
                                                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                                                        A new wave of learning is here. With immersive, AI-powered platforms, we're personalizing education at scale — making it more engaging, inclusive, and accessible for all learners, anytime, anywhere.
                                                                    </p>
                                                                      <div className="hstack gap-2 mt-2 sm:mt-1 lg:mt-2">
                                                                        <Link href={"/investors"} >
                                                                        <button className="btn btn-primary">
                                                                            Invest
                                                                        </button>
                                                                        </Link>
                                                                        <Link href={'/page-collaborate'}>
                                                                        <button className="btn btn-outline-primary">
                                                                            Partnership
                                                                        </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab == 4 && (
                                    <div className="uc-active">
                                        <div className="feature-item panel">
                                            <div className="row child-cols col-match justify-between g-4">
                                                <div className="col-12 sm:col-6">
                                                    <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                                                        <Image
                                                            className="media-cover image"
                                                            alt="Review quickly and confidently"
                                                            src="/assets/images/apps/defense.png"
                                                            width="1200"
                                                            height="1200"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-12 sm:col-6">
                                                    <div className="panel">
                                                        <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                                                            <div>
                                                                <div className="panel vstack gap-2">
                                                                    <h3 className="h4 sm:h3 lg:h2 m-0">
                                                                        Defence & Intelligence
                                                                    </h3>
                                                                    <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                                                        Next-gen security starts with smart systems. From real-time threat analysis to autonomous surveillance, we're building powerful tools to support national defense, cyber intelligence, and mission-critical operations.
                                                                    </p>
                                                                     <div className="hstack gap-2 mt-2 sm:mt-1 lg:mt-2">
                                                                        <Link href={"/investors"} >
                                                                        <button className="btn btn-primary">
                                                                            Invest
                                                                        </button>
                                                                        </Link>
                                                                        <Link href={'/page-collaborate'}>
                                                                        <button className="btn btn-outline-primary">
                                                                            Partnership
                                                                        </button>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}