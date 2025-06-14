"use client";

export default function EntreForm() {
  return (
    <div id="entrepreneur_form" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 min-h-600px bg-secondary dark:bg-gray-800 z-0" />
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Start Your Journey
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Propagate your entrepreneurial skills globally to reach your milestones.
              </p>
            </div>

            {/* Process Steps */}
            <div className="panel mb-6 sm:mb-8 lg:mb-10">
              <div className="row g-4">
                {[
                  {
                    title: "Fill the Application Form",
                    description: "Brief idea description + goals",
                    // icon: (
                    //   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    //   </svg>
                    // )
                  },
                  {
                    title: "30-Minute Discovery Call",
                    description: "Meet your mentor, set expectations",
                    // icon: (
                    //   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    //   </svg>
                    // )
                  },
                  {
                    title: "Onboard & Kickoff",
                    description: "Get access to all program materials and community",
                    // icon: (
                    //   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    //   </svg>
                    // )
                  }
                ].map((step, index) => (
                  <div key={index} className="col-md-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg h-100">
                      <div className="flex items-center gap-3 mb-3">
                        {/* <div className="bg-primary-100 dark:bg-primary-700 w-10 h-10 rounded-full flex items-center justify-center text-primary dark:text-white">
                          {step.icon}
                        </div> */}
                        <h3 className="text-lg font-medium dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-dark dark:text-white opacity-80">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className="panel max-w-750px mx-auto">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="vstack gap-2 p-3 sm:p-6 xl:p-8 rounded-2 border bg-white dark:bg-gray-900 border-secondary dark:border-gray-300 dark:border-opacity-20"
              >
                <div>
                  <input
                    className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                    type="text"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div className="row child-cols-12 md:child-cols-6 g-2">
                  <div>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                      type="contact"
                      placeholder="Your contact number"
                      required
                    />
                  </div>
                </div>
                <input
                  className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                  type="text"
                  placeholder="Background"
                />
                <input
                  className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                  type="text"
                  placeholder="Motivation"
                />
                <textarea
                  className="form-control min-h-150px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                  placeholder="Program of interest"
                  required
                  defaultValue={""}
                />
                <button
                  className="btn btn-primary btn-md text-white mt-2"
                  type="submit"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}