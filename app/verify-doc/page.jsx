
import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import VerifyHero from "@/components/innerpages/VerifyHero";
import VerifyCta from "@/components/innerpages/VerifyCta";

export const metadata = {
  title: "Verify Documents || Spacenos",
  description:
    "Easily verify your documents with Spacenos' secure AI-driven platform. Ensure authenticity, compliance, and fast processing for your business needs.",
  keywords:
    "Spacenos document verification, verify documents, AI verification, compliance, secure document processing, startup KYC, digital document check",
  alternates: {
    canonical: "https://spacenos.com/verify-doc",
  },
  openGraph: {
    title: "Verify Documents || Spacenos",
    description:
      "Quickly and securely verify your documents through Spacenos' AI-powered platform designed for businesses, startups, and compliance needs.",
    url: "https://spacenos.com/verify-doc",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },

};


export default function age() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
        <VerifyHero />
        <VerifyCta />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
