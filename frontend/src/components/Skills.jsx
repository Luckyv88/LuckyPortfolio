import React from 'react';

// create a logos folder with small icons named e.g. c.png, cpp.png, react.png etc.
// If you don't have logos, use text only.

const skills = [
  { name: 'C/C++', img: '/assets/logos/cpp.png' },
  { name: 'HTML', img: '/assets/logos/html.png' },
  { name: 'CSS', img: '/assets/logos/css.png' },
  { name: 'Java', img: '/assets/logos/java.png' },
  { name: 'Python', img: '/assets/logos/python.png' },
  { name: 'JavaScript', img: '/assets/logos/js.png' },
  { name: 'SQL', img: '/assets/logos/sql.png' },
  { name: 'MongoDB', img: '/assets/logos/mongodb.png' },
  { name: 'ReactJS', img: '/assets/logos/react.png' },
  { name: 'ExpressJS', img: '/assets/logos/express.png' },
  { name: 'Flask', img: '/assets/logos/flask.png' }
];

const softSkills = [
  'Adaptability', 'Communication', 'Hardworking', 'Good listener'
];

// Updated projects array with description (GitHub removed)
const projects = [
  {
    name: 'Krishi Agro',
    description: 'A farmer-businessman portal to connect sellers and buyers of agricultural products with multilingual support.'
  },
  {
    name: 'Text Editor',
    description: 'A lightweight text editor built with JavaScript, supporting syntax highlighting and basic editing features.'
  },
  {
    name: 'Job Portal',
    description: 'A job portal web application for freshers and experienced candidates to search and apply for jobs efficiently.'
  },
  {
    name: 'Text Summarization',
    description: 'An AI-powered text summarization tool that generates concise summaries from large documents.'
  }
];

const Skills = () => {
  return (
    <section>
      <div className="card">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map(s => (
            <div key={s.name} className="skill" title={s.name}>
              <img src={s.img} alt={s.name} onError={(e)=>e.target.style.filter='grayscale(0)'} />
              <h4>{s.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{marginTop:'1rem'}}>
        <h2>Soft Skills</h2>
        <div style={{display:'flex',gap:'0.6rem',flexWrap:'wrap',marginTop:'.6rem'}}>
          {softSkills.map(s => <div key={s} className="skill" style={{minWidth:'140px'}}>{s}</div>)}
        </div>
      </div>

      <div className="card" style={{marginTop:'1rem'}}>
        <h2 style={{marginBottom:'1rem'}}>Notable Projects</h2>
        <div className="projects-grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'1rem'}}>
          {projects.map(p => (
            <div 
              key={p.name} 
              className="project-card" 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '1rem',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                transition:'transform 0.3s',
                cursor:'pointer'
              }}
              onMouseEnter={e => e.currentTarget.style.transform='translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
            >
              <h3 style={{marginBottom:'0.5rem', color:'#ffd700'}}>{p.name}</h3>
              <p style={{flexGrow:1, marginBottom:'1rem', color:'#e0e0e0'}}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
