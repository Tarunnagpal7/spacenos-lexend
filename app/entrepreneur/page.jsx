import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import EntreHero from "@/components/innerpages/EntreHero";
import EntreForm from "@/components/innerpages/EntreForm";
import EntreTestimonials from "@/components/innerpages/EntreTestimonials";
import EntreOverview from "@/components/innerpages/EntreOverview";
import EntreDetails from "@/components/innerpages/EntreDetails";
import EntrePricing from "@/components/innerpages/EntrePricing";
import EntreFaq from "@/components/innerpages/EntreFaq";
import { EntreFaq as Faq } from "@/data/faq";

export const metadata = {
  title:
    "Investors || Spacenos"
};
export default function CollaboratePage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
         <EntreHero />
         <EntreOverview />
         <EntreDetails />
         <EntrePricing />
         <EntreForm />
         <EntreFaq faqData={Faq}/>
         <EntreTestimonials />
        </div>
        <Footer5 />
      </div>
    </>
  );
}