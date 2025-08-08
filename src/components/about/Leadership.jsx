"use client";

export default function LeadershipSection() {
  return (
    <section className="leadership-section">
      <div className="leadership-container">
        {/* Left Text Box */}
        <div className="leadership-text">
          <h2>Our Leadership</h2>
          <p>
            Led by veterans in fleet operations, commercial logistics, and field
            execution, our four founders drive the business with hands-on
            commitment
          </p>
        </div>

        {/* Team Cards */}
        <div className="leadership-team">
          <div className="team-member">
            <img src="/team/raman.png" alt="Raman Deol" />
            <h3>Raman Deol</h3>
            <p>Strategy & Growth</p>
          </div>
          <div className="team-member">
            <img src="/team/ranjit.png" alt="Ranjit Khatra" />
            <h3>Ranjit Khatra</h3>
            <p>Fleet Operations</p>
          </div>
          <div className="team-member">
            <img src="/team/paul.png" alt="Paul Brar" />
            <h3>Paul Brar</h3>
            <p>Commercial Strategy</p>
          </div>
          <div className="team-member">
            <img src="/team/sunny.png" alt="Sunny Grewal" />
            <h3>Sunny Grewal</h3>
            <p>Field Logistics</p>
          </div>
        </div>
      </div>
    </section>
  );
}
