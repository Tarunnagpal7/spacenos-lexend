import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import ToolHero from "@/components/innerpages/ToolHero";
import ToolsGrid from "@/components/innerpages/ToolsGrid";

export const metadata = {
  title: "Tools || Spacenos",
  description:
    "Explore Spacenos' suite of AI-powered tools designed to accelerate startup growth, automate business processes, and drive global innovation.",
  keywords:
    "Spacenos tools, AI tools, business automation, startup growth tools, tech tools, AI solutions, digital products, innovation tools",
  alternates: {
    canonical: "https://spacenos.com/tools",
  },
  openGraph: {
    title: "Tools || Spacenos",
    description:
      "Discover Spacenos' AI tools that help businesses automate operations, scale rapidly, and leverage the power of advanced technology.",
    url: "https://spacenos.com/tools",
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
        <ToolHero />
        <ToolsGrid />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
