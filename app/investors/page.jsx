import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import InvestorHero from "@/components/innerpages/InvestorHero";
import InvestJourney from "@/components/innerpages/InvestJourney";
import InvestorPdf from "@/components/innerpages/InvestorPdf";
import RequestingCV from "@/components/innerpages/RequestingCV";

export const metadata = {
  title: "Investors || Spacenos",
  description:
    "Discover how Spacenos is creating value for investors by building scalable AI solutions, empowering global businesses, and driving digital transformation.",
  keywords:
    "Spacenos investors, investment opportunities, AI startup, tech investments, AI innovation, scalable business, investor relations",
  alternates: {
    canonical: "https://spacenos.com/investors",
  },
  openGraph: {
    title: "Investors || Spacenos",
    description:
      "Explore how Spacenos delivers scalable AI innovation and creates long-term value for investors and global partners.",
    url: "https://spacenos.com/investors",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },

};

export default function CollaboratePage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <InvestorHero />
          <InvestJourney />
          <InvestorPdf />
          <RequestingCV />
        </div>
        <Footer5 />
      </div>
    </>
  );
}