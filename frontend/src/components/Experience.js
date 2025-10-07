import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Use relative path for deployment
    axios
      .get('/api/experience')
      .then((res) => {
        if (res.data && res.data.length) setExperiences(res.data);
      })
      .catch((err) => {
        console.error('Error fetching experiences:', err);
      });
  }, []);

  return (
    <section>
      <div
        className="card"
        style={{
          padding: '1.5rem',
          borderRadius: '12px',
          background: 'rgba(255,255,255,0.05)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        }}
      >
        <h2 style={{ color: '#ffd700', marginBottom: '1rem' }}>Experience</h2>

        <div
          className="certs-grid"
          style={{
            marginTop: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          {experiences.map((exp) => (
            <div
              key={exp._id}
              className="cert-item"
              onClick={() => setSelected(exp)}
              style={{
                background: '#1a1a1a',
                borderRadius: '10px',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(255,215,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {exp.certificateUrl && (
                <img
                  src={exp.certificateUrl}
                  alt={exp.organization}
                  style={{ width: '100%', borderRadius: '8px', marginBottom: '0.5rem' }}
                />
              )}
              <div>
                <strong style={{ color: '#fff' }}>{exp.organization}</strong>
                <div style={{ color: '#9aa4b2', fontSize: '.9rem' }}>{exp.position}</div>
                <div style={{ color: '#b3b8c2', fontSize: '.85rem' }}>{exp.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="modal"
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#222',
              padding: '1.5rem',
              borderRadius: '10px',
              width: '90%',
              maxWidth: '600px',
              color: '#fff',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <h3>{selected.organization}</h3>
              <button
                onClick={() => setSelected(null)}
                style={{
                  background: '#ff4500',
                  border: 'none',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>

            <p><strong>Position:</strong> {selected.position}</p>
            <p><strong>Duration:</strong> {selected.duration}</p>
            {selected.description && (
              <p><strong>Description:</strong> {selected.description}</p>
            )}

            {selected.certificateUrl && (
              selected.certificateUrl.endsWith('.pdf') ? (
                <iframe
                  src={selected.certificateUrl}
                  width="100%"
                  height="400px"
                  title="experience"
                  style={{ borderRadius: '8px' }}
                ></iframe>
              ) : (
                <img
                  src={selected.certificateUrl}
                  alt={selected.organization}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
