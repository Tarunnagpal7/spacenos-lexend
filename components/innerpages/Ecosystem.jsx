"use client";
import { Users, Handshake, Landmark, GitBranch } from "lucide-react";

export default function EcosystemSection() {
  const ecosystemItems = [
    {
      icon: <Users size={20} />,
      title: "Global Developer Network",
      description: "Developers across India and the U.S."
    },
    {
      icon: <Handshake size={20} />,
      title: "Professional Advisors",
      description: "Lawyers, startup mentors, investors"
    },
    {
      icon: <Landmark size={20} />,
      title: "Strategic Connections",
      description: "Political insiders and global research councils"
    },
    {
      icon: <GitBranch size={20} />,
      title: "Resources & Tools",
      description: "Automation kits, investor decks, and more"
    }
  ];

  return (
    <section className=" p-6 text-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold mb-3">Access Our Ecosystem</h2>
          <p className="fs-5 text-muted">
            Get mentored and supported by our extended network
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {ecosystemItems.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-secondary bg-secondary dark:bg-gray-800 text-light">
                <div className="card-body text-center p-4 d-flex flex-column">
                  <div className="mb-3 text-primary">{item.icon}</div>
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}