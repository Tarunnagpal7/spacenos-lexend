import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import CeoHero from "@/components/innerpages/CeoHero";
import PersonalStory from "@/components/innerpages/PersonalStory";
import Timeline from "@/components/innerpages/Timeline";
import CeoCalendly from "@/components/innerpages/CeoCalendly";

export const metadata = {
  title: "Meet the CEO || Spacenos",
  description:
    "Get to know the visionary behind Spacenos. Learn about our CEO's mission to drive global innovation through AI, technology, and future-focused leadership.",
  keywords:
    "Spacenos CEO, leadership, tech vision, AI innovation, startup founder, business leadership, Spacenos team",
  alternates: {
    canonical: "https://spacenos.com/meet-the-ceo",
  },
  openGraph: {
    title: "Meet the CEO || Spacenos",
    description:
      "Meet the visionary CEO of Spacenos and discover how we are shaping the future of AI and global technology innovation.",
    url: "https://spacenos.com/meet-the-ceo",
    siteName: "Spacenos",
    images: [
      {
        url: "https://spacenos.com/assets/images/avatars/venkatesh.jpeg", // Replace with your actual CEO banner image
        width: 1200,
        height: 630,
        alt: "Spacenos CEO – Driving AI Innovation",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
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
