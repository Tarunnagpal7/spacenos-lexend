import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import ForeignPodFeatures from "@/components/innerpages/ForeignPodFeatures";
import ForeignHero from "@/components/innerpages/ForeignHero";
import PricingQualitySection from "@/components/innerpages/PricingQualitySection";

export const metadata = {
  title: "Foreign Pod || Spacenos",
  description:
    "Spacenos' Foreign Pod model provides global businesses with dedicated remote teams, AI-driven solutions, and seamless international collaboration.",
  keywords:
    "Foreign Pod, remote teams, global workforce, Spacenos remote development, international collaboration, AI teams, offshore development",
  alternates: {
    canonical: "https://spacenos.com/foreign-pod",
  },
  openGraph: {
    title: "Foreign Pod || Spacenos",
    description:
      "Discover how Spacenos' Foreign Pod model helps businesses build dedicated remote teams and scale globally with AI expertise.",
    url: "https://spacenos.com/foreign-pod",
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
         <ForeignHero />
         <ForeignPodFeatures />
         <PricingQualitySection />
        </div>
        <Footer5 />
      </div>
    </>
  );
}