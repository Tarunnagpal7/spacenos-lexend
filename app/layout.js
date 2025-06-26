"use client";
import Context from "@/context/Context";
import "../public/assets/css/main.scss";
import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import "../public/assets/custom.scss";

import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import Cart from "@/components/common/Cart";
import { useEffect } from "react";
import anime from "animejs";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/headers/component/MobileMenu";
import BacktoTop from "@/components/common/BacktoTop";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const dataAnime = element.getAttribute("data-anime");
          const modifieddataAnime = dataAnime.replace(
            /anime\.stagger\((\d+),\s*\{start:\s*(\d+)\}\)/,
            "$1,$2"
          );

          if (modifieddataAnime) {
            const parseAnimeData = (data) => {
              const settings = {};
              data.split(";").forEach((param) => {
                const [key, value] = param
                  .split(":")
                  .map((item) => item.trim());
                if (key && value) {
                  settings[key] = value;
                }
              });
              return settings;
            };

            const animeSettings = parseAnimeData(modifieddataAnime);

            let targets;
            if (animeSettings.targets === ">*") {
              targets = element.children;
            } else {
              targets = element?.querySelectorAll(animeSettings.targets);
            }

            anime({
              loop: animeSettings.loop ? true : false,
              targets: targets,
              translateX: JSON.parse(animeSettings.translateX || "[0, 0]"),
              translateY: JSON.parse(animeSettings.translateY || "[48, 0]"),
              opacity: [0, 1],
              easing: animeSettings.easing || "spring(1, 80, 10, 0)",
              duration: Number(animeSettings.duration) || 450,
              delay: animeSettings.delay
                ? animeSettings.delay.includes(",")
                  ? anime.stagger(animeSettings.delay.split(",")[0] / 1, {
                      start: animeSettings.delay.split(",")[1] / 1,
                    })
                  : animeSettings.delay / 1
                : 0,
            });

            observer.unobserve(element);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [pathname]);

  return (
    <html lang="en" dir="ltr">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Spacenos empowers startups and businesses with AI-driven innovation, remote teams, and scalable digital products."
        />
        <meta
          name="keywords"
          content="Spacenos, AI solutions, business automation, startup growth, tech teams, AI development, remote teams"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Spacenos – AI-Powered Innovation" />
        <meta
          property="og:description"
          content="Join Spacenos to unlock AI innovation, build scalable products, and drive global growth."
        />
        <meta property="og:url" content="https://spacenos.com" />
        <meta
          property="og:image"
          content="https://spacenos.com/assets/images/apps/1.home-hero-banner.mp4"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Spacenos",
            "url": "https://spacenos.com",
            "logo": "https://spacenos.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/spacenos",
              "https://twitter.com/spacenos",
              "https://github.com/spacenos"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "Customer Support"
            }
          })}
        </script>
      </Head>
      <body>
        <Context>
          <ParallaxProvider>{children}</ParallaxProvider>
          <MobileMenu />
          <BacktoTop />
        </Context>
      </body>
    </html>
  );
}
