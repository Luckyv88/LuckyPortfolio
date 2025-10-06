import React, { useRef } from 'react';
import profileImg from '../assets/profile.jpg'; // put your image here

// A lightweight 3D-like interactive card. For a true 3D model replace with react-three-fiber + GLTFLoader
const ThreeDCard = () => {
  const cardRef = useRef();

  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx; // -1..1
    const dy = (y - cy) / cy;
    const rotY = dx * 12; // degrees
    const rotX = -dy * 12;
    card.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(0)`;
    card.style.boxShadow = `${-rotY}px ${Math.abs(rotX*1.5)}px 40px rgba(6,12,20,0.6)`;
  };

  const reset = () => {
    const card = cardRef.current;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.boxShadow = `0 10px 30px rgba(0,0,0,0.6)`;
  };

  return (
    <div className="threed-wrap">
      <div
        className="threed-card"
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        <img src={profileImg} alt="profile" className="profile-img" />
        <h2 style={{margin:0}}>Lucky Vishwakarma</h2>
        <p className="bio">
         Hands-on knowledge in C/C++, Java, and SQL | Web Development | Interested in Problem-Solving & Technology | B.Tech CSE (2026)
        </p>
        <div className="cta">
          <button className="btn" onClick={() => window.location.href = '/contact'}>Hire me</button>
        </div>
      </div>
    </div>
  );
}

export default ThreeDCard;
