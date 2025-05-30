"use client";

export default function CareerButton() {
  return (
    <div id="Career-form" className="section panel">
      <div className="section-outer panel pb-6">
        <div className="container max-w-xl">
          <div className="text-center space-y-4">
            <h2
              className="h4 sm:h3 lg:h2 m-0"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
            >
              Ready to build your future with us?
            </h2>

            <a
              href="#"
              className="btn btn-sm lg:btn-md btn-primary px-3 mt-2 lg:mt-4 inline-flex items-center gap-2"
            >
              <span>Claim your seat now!</span>
              <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
            </a>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              We review applications weekly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
