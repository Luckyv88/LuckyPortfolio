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
        { sem: '1st', cgpa: '7.29' }, 
        { sem: '2nd', cgpa: '7.12' }, 
        { sem: '3rd', cgpa: '7.50' }, 
        { sem: '4th', cgpa: '7.15' }, 
        { sem: '5th', cgpa: '7.65' }, 
        { sem: '6th', cgpa: '7.75' }
      ]
    }
  ];

  return (
    <section>
      <div className="card" style={{padding:'1.5rem', borderRadius:'12px', background:'rgba(255,255,255,0.05)', boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
        <h2 style={{color:'#ffd700', marginBottom:'1rem'}}>Education</h2>
        
        <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
          
          {/* 10th */}
          <div className="edu-card" style={{display:'flex', justifyContent:'space-between', padding:'1rem', borderRadius:'10px', background:'#1a1a1a', alignItems:'center'}}>
            <div>
              <h3 style={{margin:0, color:'#fff'}}>10th</h3>
              <p style={{margin:'0.2rem 0', color:'#ccc'}}>{education[0].school}</p>
              <p style={{margin:0, color:'#aaa'}}>{education[0].board}</p>
            </div>
            <div style={{background:'#ff4500', color:'#fff', padding:'0.5rem 1rem', borderRadius:'8px', fontWeight:'bold'}}>
              {education[0].percent}
            </div>
          </div>

          {/* 12th */}
          <div className="edu-card" style={{display:'flex', justifyContent:'space-between', padding:'1rem', borderRadius:'10px', background:'#1a1a1a', alignItems:'center'}}>
            <div>
              <h3 style={{margin:0, color:'#fff'}}>12th</h3>
              <p style={{margin:'0.2rem 0', color:'#ccc'}}>{education[1].school}</p>
              <p style={{margin:0, color:'#aaa'}}>{education[1].board}</p>
            </div>
            <div style={{background:'#ff4500', color:'#fff', padding:'0.5rem 1rem', borderRadius:'8px', fontWeight:'bold'}}>
              {education[1].percent}
            </div>
          </div>

          {/* B.Tech */}
          <div className="edu-card" style={{display:'flex', flexDirection:'column', padding:'1rem', borderRadius:'10px', background:'#1a1a1a'}}>
            <h3 style={{margin:0, color:'#fff'}}>B.Tech</h3>
            <p style={{margin:'0.2rem 0', color:'#ccc'}}>{education[2].school}</p>
            <p style={{margin:'0.2rem 0', color:'#aaa'}}>Stream: {education[2].stream}</p>
            
            <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem', marginTop:'0.5rem'}}>
              {education[2].sems.map(s => (
                <div key={s.sem} style={{background:'#ffd700', color:'#000', padding:'0.4rem 0.8rem', borderRadius:'6px', fontWeight:'bold'}}>
                  {s.sem}: {s.cgpa}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
