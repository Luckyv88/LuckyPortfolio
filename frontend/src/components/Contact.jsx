import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const styles = {
    section: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '4rem 1rem',
      background: 'linear-gradient(135deg, #0a192f, #1e3a8a)',
      minHeight: '90vh',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(12px)',
      borderRadius: '20px',
      padding: '2.5rem 3rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
      maxWidth: '600px',
      textAlign: 'center',
      color: '#fff',
      transition: 'transform 0.3s ease',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1rem',
      color: '#7dd3fc',
    },
    intro: {
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '2rem',
      color: '#e2e8f0',
    },
    details: {
      textAlign: 'left',
      margin: '0 auto 2rem',
      width: 'fit-content',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      fontSize: '1rem',
      color: '#f8fafc',
      gap: '10px',
    },
    icon: {
      color: '#38bdf8',
      fontSize: '1.2rem',
    },
    link: {
      color: '#93c5fd',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    buttonWrapper: {
      marginTop: '1.5rem',
    },
    button: {
      background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
      color: '#fff',
      border: 'none',
      padding: '0.8rem 2rem',
      borderRadius: '30px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'transform 0.3s, background 0.3s',
    },
  };

  return (
    <section style={styles.section}>
      <div
        style={styles.card}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <h2 style={styles.title}>Get in Touch</h2>
        <p style={styles.intro}>
          I’m always open to discussing new opportunities, creative collaborations,
          or tech ideas. Feel free to reach out through any of the channels below —
          let’s connect and create something great together.
        </p>

        <div style={styles.details}>
          <div style={styles.item}>
            <FaPhoneAlt style={styles.icon} />
            <span>+91 86410 53543</span>
          </div>

          <div style={styles.item}>
            <FaEnvelope style={styles.icon} />
            <span>luckyvishwkarma1011@gmail.com</span>
          </div>

          <div style={styles.item}>
            <FaLinkedin style={styles.icon} />
            <a
              href="https://www.linkedin.com/in/lucky-vishwakarma-520029260/"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
              onMouseEnter={(e) => (e.target.style.color = '#38bdf8')}
              onMouseLeave={(e) => (e.target.style.color = '#93c5fd')}
            >
              LinkedIn Profile
            </a>
          </div>

          <div style={styles.item}>
            <FaGithub style={styles.icon} />
            <a
              href="https://github.com/Luckyv88"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
              onMouseEnter={(e) => (e.target.style.color = '#38bdf8')}
              onMouseLeave={(e) => (e.target.style.color = '#93c5fd')}
            >
              GitHub Projects
            </a>
          </div>
        </div>

        <div style={styles.buttonWrapper}>
          <a
            href="mailto:luckyvishwkarma1011@gmail.com"
            style={styles.button}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = 'scale(1)')
            }
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
