import React from 'react';
import ThreeDCard from './ThreeDCard';

const Home = () => {
  return (
    <section className="home-grid">
      <div className="card">
        <ThreeDCard />
      </div>

      <div>
        <div className="card">
          <h2>About me</h2>
          <p className="bio">
          Aspiring Computer Science Engineer with hands-on knowledge in C/C++, Java, and SQL, as well as web development. Interested in problem-solving and technology, I have worked on projects that seamlessly integrate front-end and back-end technologies. With internship experience and certifications in multiple programming languages, I continuously strive to enhance my technical skills. Beyond academics, I maintain a balanced lifestyle by playing cricket and engaging in e-games, which help me stay active and focused. Currently pursuing a B.Tech in Computer Science & Engineering (Graduating in 2026), I am eager to contribute to innovative and impactful projects in the tech industry.
          </p>

          <h3 style={{marginTop:'1rem'}}>Highlights</h3>
          <ul>
            <li>Built Krishi Agro — a Farmer–Businessman portal (React + Java Servlets + MySQL)</li>
            <li>Created Plant Disease Detection using CNN + Flask + MySQL</li>
            <li>Experience with React, Node, Express, MongoDB, Python (ML)</li>
          </ul>
        </div>

        {/* <div className="card" style={{marginTop:'1rem'}}>
          <h3>Quick links</h3>
          <p style={{margin:0}}>Projects, Certifications, Contact — use the navbar above to explore. Recruiters: check Projects & Certificates for work samples and credentials.</p>
        </div> */}
      </div>
    </section>
  );
}

export default Home;
