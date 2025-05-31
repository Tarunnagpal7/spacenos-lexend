import React from "react";
import Image from "next/image";

export default function PricingCompare() {
    return (
        <div id="pricing_compare" className="pricing-compare section panel">
            <div className="section-outer panel pb-4 ">
                <div className="container">
                    <div
                        className="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8"
                        data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                    >
                        <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
                            <div className="container max-w-xl">
                                <div
                                    className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
                                    data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                                >
                                    <div className="panel rounded-3  overflow-hidden bg-secondary dark:bg-gray-800 p-2 md:p-6" >
                                        <div className="panel row child-cols-12 lg:child-cols-6 g-0">
                                            <div className=" order-1 lg:order-0 p-3 ">
                                                <div className="heading vstack gap-2  md:text-left">
                                                    <h2 className="title h3 m-0">
                                                        Our support center has 98% resolution rate.
                                                    </h2>
                                                </div>
                                                <h3 className="text-lg font-semibold mt-4">100% Privacy</h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    All your data is private, protected and GDPR compliant. Go
                                                    ahead and send us your query.
                                                </p>
                                                <h3 className="text-lg font-semibold mt-4">
                                                    Fast Response & Resolution
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    Our support center works 24x7 and would get back to you as
                                                    early as possible.
                                                </p>
                                                <a
                                                    href="#"
                                                    className="btn btn-sm lg:btn-md btn-primary px-3 mt-2 lg:mt-4 inline-flex items-center gap-2"
                                                >
                                                    <span>Support Center</span>
                                                    <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                                                </a>
                                            </div>

                                            <div className="panel row child-cols-12 lg:child-cols-6 g-0">
                                                <div className="order-0 lg:order-1 w-100">
                                                    <div className="panel overflow-hidden rounded-3 w-100 h-100 min-h-350px">
                                                        <figure className="relative w-full h-full m-0 rounded overflow-hidden">
                                                            <Image
                                                                src="/assets/images/template/contact.png"
                                                                alt="Hero image"
                                                                fill
                                                                style={{ objectFit: "cover" }}
                                                                className="image"
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
