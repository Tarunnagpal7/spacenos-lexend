import Header5 from "@/components/headers/Header5";

import Footer5 from "@/components/footers/Footer5";
import ToolHero from "@/components/innerpages/ToolHero";
import ToolsGrid from "@/components/innerpages/ToolsGrid";
import ResourceHero from "@/components/innerpages/ResourceHero";
import LeadMagnets from "@/components/innerpages/LeadMagnets";
export const metadata = {
  title:
    " Resources || Spacenos"
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
