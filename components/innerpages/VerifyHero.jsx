"use client";
import Image from "next/image";

export default function VerifyForm() {
  return (
    <div id="entrepreneur_form" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 min-h-600px bg-secondary dark:bg-gray-800  z-0" />
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Secure Document Verification
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
               For enhanced trust and security, our document verification portal allows you to securely upload required documents and track their processing status.
              </p>
            </div>
            <div className="panel max-w-750px mx-auto">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="vstack gap-2 p-3 sm:p-6 xl:p-8 rounded-2 border bg-white dark:bg-gray-900 border-secondary dark:border-gray-300 dark:border-opacity-20"
              >
                  <div>
                    <label className="p-1 fw-bold">Upload Your Documents</label>
                    <input
                      className="form-control h-48px w-full bg-white dark:border-white dark:bg-opacity-0 dark:border-opacity-15 dark:text-white"
                      type="file"
                      required
                    />
                  </div>
              
                <button
                  className="btn btn-primary btn-md text-white mt-2"
                  type="submit"
                >
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
