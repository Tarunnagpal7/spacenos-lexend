import Signup from "@/components/otherPages/Signup";
export const metadata = {
  title: "Signup || Spacenos",
  description:
    "Create your Spacenos account and unlock access to cutting-edge AI solutions, expert development teams, and business growth tools.",
  keywords:
    "Spacenos signup, create account, AI platform access, join Spacenos, startup solutions, tech signup, AI products",
  alternates: {
    canonical: "https://spacenos.com/sign-up",
  },
  openGraph: {
    title: "Signup || Spacenos",
    description:
      "Sign up to access Spacenos' AI-powered solutions and start your journey towards innovation and business growth.",
    url: "https://spacenos.com/sign-up",
    siteName: "Spacenos",
    
    locale: "en_US",
    type: "website",
  },
};

export default function SignupPage1() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <div id="wrapper" className="wrap">
          <Signup />
        </div>
      </div>
    </>
  );
}
