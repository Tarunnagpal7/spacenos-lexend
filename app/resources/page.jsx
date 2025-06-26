import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import ResourceHero from "@/components/innerpages/ResourceHero";
import LeadMagnets from "@/components/innerpages/LeadMagnets";
export const metadata = {
  title: "Resources || Spacenos",
  description:
    "Access expert resources from Spacenos, including guides, whitepapers, and insights to help startups and businesses harness AI innovation effectively.",
  keywords:
    "Spacenos resources, AI guides, business insights, whitepapers, startup resources, tech knowledge base, AI tools",
  alternates: {
    canonical: "https://spacenos.com/resources",
  },
  openGraph: {
    title: "Resources || Spacenos",
    description:
      "Explore Spacenos' library of resources designed to empower businesses and entrepreneurs with AI knowledge, tools, and insights.",
    url: "https://spacenos.com/resources",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage1() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
        <ResourceHero />
        <LeadMagnets />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
