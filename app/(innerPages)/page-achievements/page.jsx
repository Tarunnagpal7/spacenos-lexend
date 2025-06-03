// import Header2 from "@/components/headers/Header2";

import Footer5 from "@/components/footers/Footer5";
import Header10 from "@/components/headers/Header10";
import Testimonials from "@/components/homes/home-3/Testimonials";
import AchievementsCards from "@/components/innerpages/AchievementsCards";
import AchievementsHero from "@/components/innerpages/AchievementsHero";
import AchievementsTestimonials from "@/components/innerpages/AchievementsTestinomials";
export const metadata = {
  title:
    "Achievements and Testimonials || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function CareerPage() {
  return (
    <>
      <div className="page-wrapper  uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header10 />
        <div id="wrapper" className="wrap">
         <AchievementsHero />
          <AchievementsTestimonials />
          <AchievementsCards />
        </div>
        <Footer5 />
      </div>
    </>
  );
}
