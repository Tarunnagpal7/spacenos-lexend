import Home6 from "./(homes)/home-6/page";

export const metadata = {
  title: "Spacenos – Build Your Empire with AI-Powered Innovation",
  description:
    "Spacenos empowers startups, businesses, and visionaries with world-class AI solutions, remote development teams, and future-proof digital products. Join the AI powerhouse of USA and India.",
  keywords:
    "AI for startups, remote dev teams, Spacenos, build MVP, business automation, tech startup India, AI products, empire building",
  alternates: {
    canonical: "https://spacenos.com/",
  },
  openGraph: {
    title: "Spacenos – Build Your Empire with AI",
    description:
      "Empowering startups & businesses with AI development, automation, and global growth tools.",
    url: "https://spacenos.com/",
    siteName: "Spacenos",
    images: [
      {
        url: "https://spacenos.com/assets/images/apps/hero.jpeg", // Ensure this image is publicly accessible
        width: 1200,
        height: 630,
        alt: "Spacenos AI-Powered Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function HomePage1() {
  return (
    <>
      <Home6 />
    </>
  );
}
