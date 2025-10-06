import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' });
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', form);
      setStatus({type:'success', msg:'Message sent — I will get back soon.'});
      setForm({ name:'', email:'', phone:'', message:'' });
    } catch (err) {
      setStatus({type:'error', msg:'Could not send. Try again later.'});
    }
  };

  return (
    <section>
      <div className="card">
        <h2>Contact</h2>
        <p>Phone: +91-8641053543 • Email: luckyvishwkarma1011@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/lucky-vishwakarma-520029260/" target="_blank" rel="noreferrer">yourprofile</a> • GitHub: <a href="https://github.com/Luckyv88" rel="noreferrer">yourprofile</a></p>
      </div>

      <div className="card" style={{marginTop:'1rem'}}>
        <h3>Send a message</h3>
        <form className="contact-form" onSubmit={submit}>
          <input name="name" required value={form.name} onChange={handleChange} className="input" placeholder="Your name" />
          <input name="email" required value={form.email} onChange={handleChange} className="input" placeholder="Email" />
          <input name="phone" value={form.phone} onChange={handleChange} className="input" placeholder="Phone" />
          <textarea name="message" value={form.message} onChange={handleChange} rows="6" placeholder="Message" className="input"></textarea>
          <div>
            <button className="btn submit" type="submit">Send</button>
            {status && <span style={{marginLeft:12, color: status.type==='success' ? '#7ef7c1' : '#ff9b9b'}}>{status.msg}</span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
