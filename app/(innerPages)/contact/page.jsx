import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import Contact1 from "@/components/innerpages/Contact1";
import ContactLinks2 from "@/components/innerpages/ContactLinks2";
import SupportCenter from "@/components/innerpages/SupportCenter";
import ChooseYourIntent from "@/components/innerpages/ChooseYourIntent";
import GlobalFootprint from "@/components/homes/home-6/GlobalFootprint";
import LeadMagnets from "@/components/innerpages/LeadMagnets";

export const metadata = {
  title: "Contact Spacenos – Support for Clients, Investors & Applicants",
  description:
    "Reach out to Spacenos for business inquiries, partnerships, support, or to pitch your idea. We’re here to support your journey.",
  keywords:
    "Contact Spacenos, tech support, investor relations, startup inquiry, partnership",
  alternates: {
    canonical: "https://spacenos.com/contact",
  },
  openGraph: {
    title: "Contact Spacenos – Support for Clients, Investors & Applicants",
    description:
      "Reach out to Spacenos for business inquiries, partnerships, support, or to pitch your idea. We’re here to support your journey.",
    url: "https://spacenos.com/contact",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },

};


export default function ContactPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
          <Contact1 />
          {/* <ContactResource /> */}
          <ContactLinks2 />
          <ChooseYourIntent />
          <LeadMagnets />
          <GlobalFootprint />
          <SupportCenter />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
