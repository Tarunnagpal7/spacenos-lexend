import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import PressHero from "@/components/innerpages/PressHero";
import PressReleases from "@/components/innerpages/PressRelease";
import PressMediaCoverage from "@/components/innerpages/PressMediaCoverage";
import ArchitectureTeam from "@/components/innerpages/ArchitectureTeam";
import PressMediaKit from "@/components/innerpages/PressMediaKit";
import ContactPRTeam from "@/components/innerpages/ContactPRTeam";


export const metadata = {
  title:
    "Press and Media || Spacenos"
};
export default function CollaboratePage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
         <PressHero />
         <PressMediaCoverage />
         <PressReleases />
         <PressMediaKit />
         <ArchitectureTeam />
         <ContactPRTeam />
        </div>
        <Footer5 />
      </div>
    </>
  );
}