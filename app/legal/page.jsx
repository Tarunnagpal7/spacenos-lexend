
import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import LegalInformation from "@/components/innerpages/LegalInformation";

export const metadata = {
  title:
    "Legal Information || Spacenos"
};
export default function Page() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
         <LegalInformation />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
