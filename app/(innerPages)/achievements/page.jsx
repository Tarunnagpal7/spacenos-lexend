// import Header2 from "@/components/headers/Header2";

import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import AwardsTestimonials from "@/components/homes/home-6/AwardsTestimonials";
import AchievementsHero from "@/components/innerpages/AchievementsHero";
import CareerFeedback from "@/components/innerpages/CareerFeedback";

export const metadata = {
  title: "Achievements || Spacenos",
  description:
    "Explore Spacenos' achievements, global impact, and milestones in AI innovation, startup growth, and technology leadership.",
  keywords:
    "Spacenos achievements, milestones, awards, AI success, startup accomplishments, technology innovation, global recognition",
  alternates: {
    canonical: "https://spacenos.com/achievements",
  },
  openGraph: {
    title: "Achievements || Spacenos",
    description:
      "Discover Spacenos' journey of achievements, global milestones, and contributions to AI innovation and business success.",
    url: "https://spacenos.com/achievements",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },
};
export default function CareerPage() {
  return (
    <>
      <div className="page-wrapper  uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header5 />
        <div id="wrapper" className="wrap">
         <AchievementsHero />
         <AwardsTestimonials />
         <CareerFeedback />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
