import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import CeoHero from "@/components/innerpages/CeoHero";
import PersonalStory from "@/components/innerpages/PersonalStory";
import Timeline from "@/components/innerpages/Timeline";
import CeoCalendly from "@/components/innerpages/CeoCalendly";
export const metadata = {
  title:
    "Meet the CEO || Spacenos",
};
export default function CollaboratePage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <CeoHero />
          <PersonalStory />
          <Timeline />
          <CeoCalendly />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
