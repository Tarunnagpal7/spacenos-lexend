import SignIn from "@/components/otherPages/SignIn";

export const metadata = {
  title: "Signin || Spacenos",
  description:
    "Access your Spacenos account and explore AI-powered tools, business automation, and digital growth solutions tailored for startups and enterprises.",
  keywords:
    "Spacenos signin, login, account access, AI tools, startup platform, tech login, business automation",
  alternates: {
    canonical: "https://spacenos.com/sign-in",
  },
  openGraph: {
    title: "Signin || Spacenos",
    description:
      "Log in to your Spacenos account to manage projects, access AI-driven solutions, and accelerate your business growth.",
    url: "https://spacenos.com/sign-in",
    siteName: "Spacenos",
    locale: "en_US",
    type: "website",
  },
};

export default function SigninPage1() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <div id="wrapper" className="wrap">
          <SignIn />
        </div>
      </div>
    </>
  );
}
