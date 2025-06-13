import { Mail, Briefcase, Handshake, Phone, MessageSquare, User } from "lucide-react";
import React from "react";

export const contactMethods = [
  {
    id: 1,
    icon: Mail,
    title: "General Queries",
    description: "support@spacenos.com",
    linkText: "Email us",
    linkUrl: "mailto:support@spacenos.com",
  },
  // {
  //   id: 2,
  //   icon: User,
  //   title: "Careers",
  //   description: "talent@spacenos.com",
  //   linkText: "Apply now",
  //   linkUrl: "mailto:talent@spacenos.com",
  // },
  {
    id: 3,
    icon: Briefcase,
    title: "Business & Sales",
    description: "growth@spacenos.com",
    linkText: "Contact ",
    linkUrl: "mailto:growth@spacenos.com",
  },
  // {
  //   id: 4,
  //   icon: Handshake,
  //   title: "Partnerships",
  //   description: "connect@spacenos.com",
  //   linkText: "Partner with us",
  //   linkUrl: "mailto:connect@spacenos.com",
  // },
  {
    id: 5,
    icon: MessageSquare,
    title: "WhatsApp Support",
    description: "📲 Chat Now",
    linkText: "Start chat",
    linkUrl: "https://wa.me/",
  },
  {
    id: 6,
    icon: Phone,
    title: "Phone (IST)",
    description: "+91-XXXXXXXXXX",
    subDescription: "Mon–Fri, 10AM–6PM",
    linkText: "Call now",
    linkUrl: "tel:+91XXXXXXXXXX",
  },
];

export default function ContactLinks2() {
  return (
    <div id="helpful-links" className="section panel overflow-hidden">
      <div className="section-outer panel pb-6 pt-6">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <h2
                className="h4 sm:h3 lg:h2 m-0 text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                Other ways to reach us
              </h2>
              <div
                className="row child-cols-12 sm:child-cols-6 g-2 lg:g-4 justify-between col-match"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div key={method.id}>
                      <div className="panel hstack gap-2 lg:gap-3 items-center justify-between px-3 py-4 lg:p-4 rounded-2 bg-secondary dark:bg-gray-800 lg:hover:scale-105 duration-150 transition-all">
                        <div className="cstack w-64px h-64px lg:w-80px lg:h-80px rounded lg:rounded-2 bg-white dark:bg-gray-800 flex items-center justify-center">
                          <Icon className="w-32px lg:w-48px text-gray-800 dark:text-white" />
                        </div>
                        <div className="vstack justify-center">
                          <h5 className="h6 lg:h5 m-0">{method.title}</h5>
                          <p className="fs-7 lg:fs-6 opacity-70 dark:opacity-80">
                            {method.description}
                          </p>
                          {method.subDescription && (
                            <p className="fs-8 lg:fs-7 opacity-70 dark:opacity-80">
                              {method.subDescription}
                            </p>
                          )}
                        </div>
                        <a
                          href={method.linkUrl}
                          className="uc-link fw-bold hstack gap-narrow"
                        >
                          <span>{method.linkText}</span>
                          <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px" />
                        </a>
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