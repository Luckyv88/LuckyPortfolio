import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Certificates = () => {
  // We will try to fetch from backend; fallback to static list if not available.
  const [certs, setCerts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // try fetching from backend
    axios.get('http://localhost:5000/api/certificates').then(res => {
      if (res.data && res.data.length) setCerts(res.data);
      else setCerts(fallback());
    }).catch(() => {
      setCerts(fallback());
    });
  }, []);

  function fallback(){
    // 15 sample certificates - for now image paths in public/assets/certificates/cert1.jpg etc
    return Array.from({length:15}).map((_,i)=>({
      _id: i+1,
      title: `Certificate ${i+1}`,
      fileUrl: `/assets/certificates/cert${i+1}.jpg`,
      issuedBy: 'Platform',
      date: new Date()
    }));
  }

  return (
    <section>
      <div className="card">
        <h2>Certificates</h2>
        <div className="certs-grid" style={{marginTop:'1rem'}}>
          {certs.map(c => (
            <div key={c._id} className="cert-item" onClick={() => setSelected(c)}>
             <img src={c.fileUrl} alt={c.title} style={{ width: '100%', borderRadius: 8 }} />

              <div style={{paddingTop:'.5rem'}}>
                <strong>{c.title}</strong>
                <div style={{color:'#9aa4b2',fontSize:'.85rem'}}>{c.issuedBy}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal" onClick={()=>setSelected(null)}>
          <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <h3>{selected.title}</h3>
              <button onClick={()=>setSelected(null)} className="btn">Close</button>
            </div>
            <div style={{marginTop:'.8rem'}}>
              {/* use object/embed for pdfs; for images show img */}
              {selected.fileUrl?.endsWith('.pdf') ? (
                <iframe src={selected.fileUrl} width="100%" height="600px" title="cert"></iframe>
              ) : (
                <img src={selected.fileUrl} alt={selected.title} style={{width:'100%',borderRadius:8}} />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
