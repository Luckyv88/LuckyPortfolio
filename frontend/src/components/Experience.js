import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/experience')
      .then(res => {
        if (res.data && res.data.length) setExperiences(res.data);
      })
      .catch(err => {
        console.error("Error fetching experiences:", err);
      });
  }, []);

  return (
    <section>
      <div className="card">
        <h2>Experience</h2>
        <div className="certs-grid" style={{ marginTop: '1rem' }}>
          {experiences.map(exp => (
            <div key={exp._id} className="cert-item" onClick={() => setSelected(exp)}>
              {exp.certificateUrl && (
                <img src={exp.certificateUrl} alt={exp.organization} style={{ width: '100%', borderRadius: 8 }} />
              )}
              <div style={{ paddingTop: '.5rem' }}>
                <strong>{exp.organization}</strong>
                <div style={{ color: '#9aa4b2', fontSize: '.9rem' }}>{exp.position}</div>
                <div style={{ color: '#b3b8c2', fontSize: '.85rem' }}>{exp.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>{selected.organization}</h3>
              <button onClick={() => setSelected(null)} className="btn">Close</button>
            </div>
            <p><strong>Position:</strong> {selected.position}</p>
            <p><strong>Duration:</strong> {selected.duration}</p>
            {selected.description && <p><strong>Description:</strong> {selected.description}</p>}
            {selected.certificateUrl && (
              selected.certificateUrl.endsWith('.pdf') ? (
                <iframe src={selected.certificateUrl} width="100%" height="600px" title="experience"></iframe>
              ) : (
                <img src={selected.certificateUrl} alt={selected.organization} style={{ width: '100%', borderRadius: 8 }} />
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
