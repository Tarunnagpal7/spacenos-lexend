import React from "react";
import { Briefcase, UserSquare, Landmark, User, Handshake } from "lucide-react";

const intents = [
  {
    id: 1,
    icon: Briefcase,
    title: "💼 Career Applicant",
    links: [
      { text: "See Open Roles", url: "/page-career" },
    ]
  },
  {
    id: 3,
    icon: Landmark,
    title: "🏦 Investor",
    links: [
      { text: "View Pitch Deck", url: "/investors" },
    ]
  },
//   {
//     id: 4,
//     icon: User,
//     title: "🧍‍♂️ B2C Customer",
//     links: [
//       { text: "Open Support Ticket", url: "/support" },
//     ]
//   },
  {
    id: 5,
    icon: Handshake,
    title: "🤝 Affiliate / Partner",
    links: [
      { text: "Partnership Opportunities", url: "/page-collaborate" }
    ]
  }
];

export default function ChooseYourIntent() {
  return (
    <div id="choose-intent" className="section panel overflow-hidden">
      <div className="section-outer panel pt-6">
        <div className="container">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Choose your Intent
              </h2>
              <div
                className="row gx-3 gx-md-4 justify-content-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {intents.map((intent) => {
                  const Icon = intent.icon;
                  return (
                    <div key={intent.id} className="col-sm-6 col-md-4 col-lg-3 mb-3 d-flex">
                      <div className="panel w-100 vstack gap-3 items-center p-3 py-4 rounded-2 bg-secondary dark:bg-gray-800 lg:hover:scale-105 duration-150 transition-all text-center" style={{ height: "100%" }}>
                        <div className="cstack w-64px h-64px lg:w-80px lg:h-80px rounded lg:rounded-2 bg-white dark:bg-gray-800 flex items-center justify-center mx-auto">
                          <Icon className="w-32px h-32px lg:w-48px lg:h-48px text-gray-800 dark:text-white" />
                        </div>
                        <h5 className="h6 lg:h5 m-0">{intent.title}</h5>
                        <div className="vstack gap-2">
                          {intent.links.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              className="uc-link fs-7 lg:fs-6 opacity-70 dark:opacity-80 hover:opacity-100 transition-opacity"
                            >
                              {link.text}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}