import React from "react";

export default function Mission() {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Mission Section */}
        <div className="col-lg-6">
          <div className="p-4 p-md-5 bg-light rounded-4 h-100">
            <span className=" text-primary text-uppercase fs-2 mb-3">Our Mission</span>
            <h2 className="display-2 fw-bold text-success mb-4">From Code to Cosmos</h2>
            <p className="lead mb-4">
              At Spacenos, we believe technology is the rocket fuel for human potential.
            </p>
            <p className="mb-0">
              <strong>To empower every founder—regardless of geography, capital, or background—to launch and scale their vision with cutting-edge AI and remote teams.</strong>
              <br /><br />
              We don't just write code; we engineer dreams. From automating supply chains in Africa to designing AI-driven therapy bots in Europe, our projects span every continent—each powered by our belief that the next unicorn could emerge from anywhere.
            </p>
          </div>
        </div>

        {/* Pillars Section */}
        <div className="col-lg-6">
          <div className="p-4 p-md-5 bg-light rounded-4 h-100">
            <span className="badge text-primary text-uppercase fs-2 mb-3">The Spacenos Way</span>
            <h2 className="display-2 fw-bold text-success mb-4">Four Pillars of Excellence</h2>
            
            <div className="row g-3">
              <div className="col-md-6 ">
                <div className="p-3  rounded-3 h-100">
                  <h5 className="fw-bold mb-3">🚀 Relentless Innovation</h5>
                  <p className="mb-0">We challenge the status quo. If it's never been done, we're already prototyping it.</p>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="p-3  rounded-3 h-100">
                  <h5 className="fw-bold mb-3">❤️ Radical Empathy</h5>
                  <p className="mb-0">We don't just build for clients; we build with them. Every partnership is a co-creation.</p>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="p-3  rounded-3 h-100">
                  <h5 className="fw-bold mb-3">🌍 Global Synergy</h5>
                  <p className="mb-0">Our teams across time zones don't slow us, they empower us to work around the clock.</p>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="p-3  rounded-3 h-100">
                  <h5 className="fw-bold mb-3">🤖 Ethical AI</h5>
                  <p className="mb-0">We champion responsible AI that respects privacy, equity, and human uniqueness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section - Full Width */}
        <div className="col-12 mt-4">
          <div className="p-4 p-md-5 bg-success bg-opacity-10 rounded-4">
            <h2 className="display-2 fw-bold text-success mb-4">Our Mythical Achievements</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-3 rounded-3 h-100">
                  <h5 className="fw-bold mb-3">🛰️ Zero-Gravity Code</h5>
                  <p className="mb-0">Tested our platform on the ISS (okay, we're in talks with NASA!).</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3  rounded-3 h-100">
                  <h5 className="fw-bold mb-3">🧠 AI That Dreams</h5>
                  <p className="mb-0">Our neural networks conjure original poetry—sometimes it's actually good.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3  rounded-3 h-100">
                  <h5 className="fw-bold mb-3">🔮 Digital Oracle</h5>
                  <p className="mb-0">Predicted the last three World Cup winners (after some model tweaking!).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}