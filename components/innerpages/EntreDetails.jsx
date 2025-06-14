"use client"
import React from "react";
import { Rocket, Users, LineChart, Handshake, Lightbulb, BookOpen, Presentation, BadgeCheck, CircleDollarSign } from "lucide-react";

export default function Entreetails() {

  return (
    <div className="program-details bg-tertiary-100 dark:bg-primary-800 py-8">
      <div className="container">
        {/* Who Should Join Section */}
        <section className="mb-6">
          <div className="text-center mb-6">
            <h2 className="h2 mb-3">
              Who Should Join
            </h2>
            <div className="divider mx-auto bg-primary dark:bg-tertiary-300 w-24 h-1 opacity-20"></div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 bg-white dark:bg-primary-700 p-4 rounded-lg shadow-sm">
                <div className="card-body text-center">
                  <div className="icon-wrapper  w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <p className="text-dark dark:text-white">
                    Full-time professionals with a startup idea they're passionate about
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 bg-white dark:bg-primary-700 p-4 rounded-lg shadow-sm">
                <div className="card-body text-center">
                  <div className="icon-wrapper  w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className=" w-6 h-6" />
                  </div>
                  <p className="text-dark dark:text-white">
                    Side hustlers ready to level up from spreadsheet to working prototype
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 bg-white dark:bg-primary-700 p-4 rounded-lg shadow-sm">
                <div className="card-body text-center">
                  <div className="icon-wrapper w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <p className="text-dark dark:text-white">
                    Innovators seeking structured guidance, technical execution, and growth support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="mb-6">
          <div className="text-center mb-6">
            <h2 className="h2  mb-3">
              What You Get
            </h2>
            <div className="divider mx-auto bg-primary dark:bg-tertiary-300 w-24 h-1 opacity-20"></div>
          </div>
          
          <div className="row g-4">
            {[
              { icon: <Users className="w-5 h-5" />, text: "Dedicated Spacenos Mentor (Bi-weekly 1:1 sessions)" },
              { icon: <Handshake className="w-5 h-5" />, text: "Remote AI & Dev Team Access (up to 60% cost savings)" },
              { icon: <Presentation className="w-5 h-5" />, text: "Peer Cohort Community (Weekly mastermind calls)" },
              { icon: <BookOpen className="w-5 h-5" />, text: "Investor Pitch Workshops (Pitch deck review + feedback)" },
              { icon: <BadgeCheck className="w-5 h-5" />, text: "Exclusive Tools & Templates (Lean canvas, financial models)" },
              { icon: <CircleDollarSign className="w-5 h-5" />, text: "Demo Day & Investor Showcase (Present to angel networks and VCs)" }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="bg-white dark:bg-primary-700 p-4 rounded-lg shadow-sm h-100">
                  <div className="d-flex align-items-start">
                    <div className="icon-circle bg-primary-100 dark:bg-primary-600 text-primary dark:text-tertiary-300 rounded-circle flex-shrink-0 me-3">
                      {item.icon}
                    </div>
                    <p className="text-dark dark:text-white mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Growth Strategy Section */}
        <section>
          <div className="text-center mb-6">
            <h2 className="h2 mb-3">
              Growth & Scaling Strategy
            </h2>
            <div className="divider mx-auto bg-primary dark:bg-tertiary-300 w-24 h-1 opacity-20"></div>
          </div>
          
          <div className="row g-4">
            {[
              {
                icon: <Handshake className="w-6 h-6" />,
                title: "Leverage Spacenos Network",
                desc: "Tap into our global developer community, investor contacts, and partner channels"
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Content & Thought Leadership",
                desc: "Publish case studies, blogs, and webinars to build authority"
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "AI-Powered Marketing",
                desc: "Use our AI automation toolkits for data-driven campaigns"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Strategic Partnerships",
                desc: "Co-market with complementary startups for cross-promotion"
              },
              {
                icon: <LineChart className="w-6 h-6" />,
                title: "Metrics & Iteration",
                desc: "Track key metrics (CAC, LTV) and pivot based on feedback"
              }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 bg-white dark:bg-primary-700 p-4 rounded-lg shadow-sm">
                  <div className="card-body">
                    <div className="icon-wrapper w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h4 className="h5 text-primary dark:text-tertiary-300 mb-2">{item.title}</h4>
                    <p className="text-dark dark:text-white mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .program-details {
          background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--bs-tertiary-100) 20%);
        }
        .dark .program-details {
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, var(--bs-primary-800) 20%);
        }
        .icon-wrapper {
          transition: all 0.3s ease;
        }
        .card:hover .icon-wrapper {
          transform: translateY(-5px);
        }
        .highlight-card {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .dark .highlight-card {
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .icon-circle {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-circle-sm {
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 0.8rem;
        }
        .divider {
          content: '';
          display: block;
        }
      `}</style>
    </div>
  );
}