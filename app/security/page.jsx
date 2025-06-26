
import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import SecurityCompliance from "@/components/innerpages/SecurityCompliance";

export const metadata = {
  title: "Security and Compliance || Spacenos",
  description:
    "Learn how Spacenos prioritizes security, data privacy, and regulatory compliance to protect businesses and deliver trustworthy AI solutions.",
  keywords:
    "Spacenos security, compliance, data protection, privacy, AI security, startup compliance, technology regulations, secure AI solutions",
  alternates: {
    canonical: "https://spacenos.com/security",
  },
  openGraph: {
    title: "Security and Compliance || Spacenos",
    description:
      "Discover how Spacenos ensures data security, privacy, and full regulatory compliance while delivering AI-powered solutions globally.",
    url: "https://spacenos.com/security",
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
         <SecurityCompliance />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
