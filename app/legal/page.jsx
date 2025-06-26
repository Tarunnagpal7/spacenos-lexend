
import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import LegalInformation from "@/components/innerpages/LegalInformation";

export const metadata = {
  title: "Legal Information || Spacenos",
  description:
    "Access Spacenos' legal information, including terms of service, privacy policies, and compliance details to ensure transparency and trust.",
  keywords:
    "Spacenos legal, terms of service, privacy policy, compliance, legal information, startup policies, AI compliance",
  alternates: {
    canonical: "https://spacenos.com/legal",
  },
  openGraph: {
    title: "Legal Information || Spacenos",
    description:
      "Review Spacenos' legal terms, privacy policies, and compliance information to understand our commitment to transparency and responsibility.",
    url: "https://spacenos.com/legal",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },
 
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
