"use client";
import Image from "next/image";

export default function CareerNewsletter() {
  return (
    <div
      id="blog_newsletter"
      className="blog-newsletter section panel overflow-hidden"
    >
      <div className="section-outer panel pb-4 lg:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel p-3 py-6 lg:p-6 xl:p-8 rounded-2 bg-secondary dark:bg-gray-800 overflow-hidden">
            <div
              className="row child-cols-12 md:child-cols g-6 justify-between items-center"
              data-uc-grid=""
            >
              <div>
                <div className="vstack gap-3 max-w-500px xl:max-w-600px">
                  <h2 className="h4 md:h3 lg:h2 m-0">
                    Join Our Talent Network and be the first to know about our
                    future opportunities
                  </h2>
                  
                  <form onSubmit={(e) => e.preventDefault()} className="vstack gap-3 mt-1 xl:mt-2">
                    {/* First row - Name and Phone */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          className="form-control form-control-lg bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="text"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          className="form-control form-control-lg bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="tel"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Second row - Email only */}
                    <div className="row">
                      <div className="col-12">
                        <input
                          className="form-control form-control-lg bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="email"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Third row - Button */}
                    <div className="row">
                      <div className="col-12">
                        <button className="btn btn-primary btn-lg w-100 text-white">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </form>
                  
                  <p className="fs-7 text-dark dark:text-white text-opacity-70 mb-0">
                    Don't worry, we don't spam.
                  </p>
                </div>
              </div>
              
              <div className="md:col-auto d-none md:d-block">
                <Image
                  className="w-250px lg:w-300px xl:w-400px d-block dark:d-none"
                  alt="newsletter"
                  src="/assets/images/template/newsletter.svg"
                  width="500"
                  height="372"
                />
                <Image
                  className="w-250px lg:w-300px xl:w-400px d-none dark:d-block"
                  alt="newsletter-dark"
                  src="/assets/images/template/newsletter-dark.svg"
                  width="500"
                  height="372"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}