"use client"
import React from "react";

export default function EntreOverview() {
  const programPhases = [
    {
      phase: "1. Ideation & Validation",
      duration: "4 weeks",
      focus: "Market research, problem validation, lean canvas",
      deliverables: "Validated idea, 3 customer interviews, lean canvas draft",
    },
    {
      phase: "2. MVP Build",
      duration: "8 weeks",
      focus: "Prototype development, UX/UI, testing",
      deliverables: "Clickable prototype, user feedback report",
    },
    {
      phase: "3. Growth Strategy",
      duration: "6 weeks",
      focus: "Go-to-market, marketing channels, growth loops",
      deliverables: "Marketing roadmap, 2 ad campaigns live, partnership outreach",
    },
    {
      phase: "4. Transition Planning",
      duration: "4 weeks",
      focus: "Financial runway, legal setup, team planning",
      deliverables: "Financial model, funding plan, co-founder matchmaking",
    },
  ];

  return (
    <section className="container my-8">
      <div className=" mb-4">
        <h2 className=" h1 fw-bold">Program Overview</h2>
        <p className="">Your startup journey, structured in four powerful phases.</p>
      </div>

      <div className="position-relative">
        <div className="table-wrapper">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle text-start mb-0">
              <thead className="table-dark">
                <tr>
                  <th style={{ minWidth: "180px" }}>Phase</th>
                  <th style={{ minWidth: "100px" }}>Duration</th>
                  <th style={{ minWidth: "220px" }}>Focus</th>
                  <th style={{ minWidth: "260px" }}>Deliverables</th>
                </tr>
              </thead>
              <tbody>
                {programPhases.map((phaseData, index) => (
                  <tr key={index}>
                    <td className="fw-semibold">{phaseData.phase}</td>
                    <td>{phaseData.duration}</td>
                    <td>{phaseData.focus}</td>
                    <td>{phaseData.deliverables}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>{`
        .table-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-bottom: 1rem;
        }
        
        @media (max-width: 767.98px) {
          .table-responsive {
            width: max-content;
            min-width: 100%;
          }
          
          .table th, 
          .table td {
            white-space: nowrap;
          }
        }
      `}</style>
    </section>
  );
}