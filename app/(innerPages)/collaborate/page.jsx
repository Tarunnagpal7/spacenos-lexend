import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import Cta from "@/components/innerpages/features/Cta";
import Integrations from "@/components/innerpages/Collaborate";

export const metadata = {
  title:
    "Collaborate || Spacenos",
  description:
    "Discover how Spacenos fosters collaboration between startups and enterprises through AI-driven solutions and expert support.",
  keywords:
    "Spacenos collaboration, AI partnerships, startup support, enterprise solutions, tech collaboration, business growth",
  alternates: {
    canonical: "https://spacenos.com/collaborate",
  },
  openGraph: {
    title: "Collaborate || Spacenos",
    description:
      "Explore how Spacenos enables seamless collaboration between startups and enterprises with AI-powered tools and resources.",
    url: "https://spacenos.com/collaborate",
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
          <Integrations />
          <Cta />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
