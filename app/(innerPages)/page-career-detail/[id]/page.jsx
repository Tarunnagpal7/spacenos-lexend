import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import JobDetails from "@/components/innerpages/JobDetails";
import CareerOpenings from "@/components/innerpages/CareerOpenings";
import Feedback from "@/components/homes/home-2/Feedback";
import Brands from "@/components/homes/home-3/Brands";
import { jobListings } from "@/data/career";

export const metadata = {
  title: "Career Details || Spacenos",
  description:
    "Explore detailed job openings at Spacenos. Find the right role, learn about responsibilities, requirements, and how you can build your future with AI-driven innovation.",
  keywords:
    "Spacenos jobs, career details, job descriptions, AI career, startup roles, tech jobs, work at Spacenos, job requirements",
  alternates: {
    canonical: "https://spacenos.com/page-career-detail",
  },
  openGraph: {
    title: "Career Details || Spacenos",
    description:
      "Discover detailed information about open positions at Spacenos. Learn how you can grow your career with our AI-powered mission.",
    url: "https://spacenos.com/page-career-detail",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },

};

export default async function CareerDetailsPage(props) {
  const params = await props.params;
  const id = params.id;
  const jobItem = jobListings[id-1]
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <div
            id="hero_header"
            className="hero-header section panel overflow-hidden"
          >
            <div className="section-outer panel pt-9 lg:pt-10 pb-4 sm:pb-6 xl:pb-9">
              <div className="container max-w-lg">
                <div className="section-inner panel">
                  <div className="vstack items-center text-center gap-2 lg:gap-4">
                    <span className="fs-6 fw-bold text-uppercase text-primary">
                      We are looking for a
                    </span>
                    <h1 className="h2 sm:h1 lg:display-6 xl:display-5 max-w-600px my-0 mx-auto">
                      {jobItem.title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <JobDetails job={jobItem} />
          <CareerOpenings />
          <Feedback />
          <Brands />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
