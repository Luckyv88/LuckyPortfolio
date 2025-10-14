import React from 'react';

const Education = () => {
  const education = [
    { level: "10th", school: "Naland Vidhya Niketan H.S", percent: "77%", board: "Madhya Pradesh Board", year: "2020" },
    { level: "12th", school: "Naland Vidhya Niketan H.S", percent: "77%", board: "Madhya Pradesh Board", year: "2022" },
    { 
      level: "B.Tech", 
      school: "Indore Institute of Science and Technology", 
      stream: "Computer Science", 
      sems: [
        { sem: '1st', sgpa: '7.29' }, 
        { sem: '2nd', sgpa: '6.95' },  
        { sem: '3rd', sgpa: '7.96' },  
        { sem: '4th', sgpa: '7.71' },  
        { sem: '5th', sgpa: '8.21' },  
        { sem: '6th', sgpa: '8.17' }
      ],
      cgpa: '7.74'
    }
  ];

  return (
    <section>
      <div className="card" style={{
        padding: '1.5rem',
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.05)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#ffd700', marginBottom: '1rem' }}>Education</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* 10th */}
          <div className="edu-card" style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem',
            borderRadius: '10px',
            background: '#1a1a1a',
            alignItems: 'center',
            transition: 'transform 0.3s ease'
          }}>
            <div>
              <h3 style={{ margin: 0, color: '#fff' }}>10th</h3>
              <p style={{ margin: '0.2rem 0', color: '#ccc' }}>{education[0].school}</p>
              <p style={{ margin: 0, color: '#aaa' }}>{education[0].board}</p>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #ff6a00, #ffcc00)',
              color: '#000',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}>
              {education[0].percent}
            </div>
          </div>

          {/* 12th */}
          <div className="edu-card" style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem',
            borderRadius: '10px',
            background: '#1a1a1a',
            alignItems: 'center',
            transition: 'transform 0.3s ease'
          }}>
            <div>
              <h3 style={{ margin: 0, color: '#fff' }}>12th</h3>
              <p style={{ margin: '0.2rem 0', color: '#ccc' }}>{education[1].school}</p>
              <p style={{ margin: 0, color: '#aaa' }}>{education[1].board}</p>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #ff6a00, #ffcc00)',
              color: '#000',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}>
              {education[1].percent}
            </div>
          </div>

          {/* B.Tech */}
          <div className="edu-card" style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            borderRadius: '10px',
            background: 'linear-gradient(145deg, #1c1c1c, #222)',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease'
          }}>
            <h3 style={{ margin: 0, color: '#fff' }}>B.Tech</h3>
            <p style={{ margin: '0.2rem 0', color: '#ccc' }}>{education[2].school}</p>
            <p style={{ margin: '0.2rem 0', color: '#aaa' }}>Stream: {education[2].stream}</p>

            {/* Year-wise grouping */}
            <div style={{ marginTop: '0.8rem' }}>
              {/* 1st Year */}
              <p style={{ color: '#ffd700', fontWeight: 'bold', marginBottom: '0.3rem' }}>1st Year:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={chipStyle}>1st Sem: 7.29</div>
                <div style={chipStyle}>2nd Sem: 6.95</div>
              </div>

              {/* 2nd Year */}
              <p style={{ color: '#ffd700', fontWeight: 'bold', margin: '0.8rem 0 0.3rem' }}>2nd Year:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={chipStyle}>3rd Sem: 7.96</div>
                <div style={chipStyle}>4th Sem: 7.71</div>
              </div>

              {/* 3rd Year */}
              <p style={{ color: '#ffd700', fontWeight: 'bold', margin: '0.8rem 0 0.3rem' }}>3rd Year:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={chipStyle}>5th Sem: 8.21</div>
                <div style={chipStyle}>6th Sem: 8.17</div>
              </div>

              {/* Overall CGPA */}
              <div style={{
                marginTop: '1rem',
                background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
                color: '#fff',
                padding: '0.6rem 1rem',
                borderRadius: '10px',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: '1rem',
                boxShadow: '0 3px 10px rgba(0, 114, 255, 0.4)'
              }}>
                Overall CGPA: {education[2].cgpa}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable chip style for SGPA badges
const chipStyle = {
  background: 'linear-gradient(45deg, #ffd700, #ffa500)',
  color: '#000',
  padding: '0.4rem 0.8rem',
  borderRadius: '6px',
  fontWeight: 'bold',
  boxShadow: '0 2px 5px rgba(255,215,0,0.3)',
  transition: 'transform 0.2s ease',
  cursor: 'default'
};

export default Education;
