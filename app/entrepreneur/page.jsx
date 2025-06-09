import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import EntreHero from "@/components/innerpages/EntreHero";
import EntreForm from "@/components/innerpages/EntreForm";
import EntreTestimonials from "@/components/innerpages/EntreTestimonials";


export const metadata = {
  title:
    "Investors || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function CollaboratePage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
         <EntreHero />
         <EntreForm />
         <EntreTestimonials />
        </div>
        <Footer5 />
      </div>
    </>
  );
}