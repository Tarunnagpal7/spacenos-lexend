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
import AwardsTestimonials from "@/components/homes/home-6/AwardsTestimonials";

export const metadata = {
  title: "Be Entrepreneurs || Spacenos",
  description:
    "Spacenos empowers entrepreneurs to turn ideas into reality with AI-driven innovation, expert development teams, and scalable digital products.",
  keywords:
    "entrepreneurs, startup support, Spacenos for founders, AI for startups, product development, business scaling, tech for entrepreneurs",
  alternates: {
    canonical: "https://spacenos.com/entrepreneur",
  },
  openGraph: {
    title: "Entrepreneurs We Help You || Spacenos",
    description:
      "Spacenos helps entrepreneurs bring bold ideas to life with AI-powered solutions, product development, and global growth support.",
    url: "https://spacenos.com/entrepreneur",
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
         <EntreHero />
         <EntreOverview />
         <EntreDetails />
         <EntrePricing />
         <EntreForm />
         <EntreFaq faqData={Faq}/>
         {/* <EntreTestimonials /> */}
         <AwardsTestimonials />
        </div>
        <Footer5 />
      </div>
    </>
  );
}