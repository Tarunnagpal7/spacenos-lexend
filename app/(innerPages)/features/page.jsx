import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import Hero from "@/components/innerpages/features/Hero";
import Cta from "@/components/innerpages/features/Cta";
import VentureOverview from "@/components/innerpages/features/VenturesOverview";

export const metadata = {
  title: "Features || Spacenos",
  description:
    "Discover the powerful features of Spacenos designed to accelerate your startup growth, automate business processes, and harness AI innovation.",
  keywords:
    "Spacenos features, AI tools, business automation, startup growth, AI solutions, remote development, digital products",
  alternates: {
    canonical: "https://spacenos.com/features",
  },
  openGraph: {
    title: "Features || Spacenos",
    description:
      "Explore Spacenos' AI-driven features built to automate, scale, and future-proof businesses globally.",
    url: "https://spacenos.com/features",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <Hero />
         <VentureOverview />
          <Cta />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
