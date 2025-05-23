// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Email: lmlilian702@gmail.com</p>
        <p>Phone: 0706051913</p>
        <p>Location: Kilifi, Kenya</p>
        <p>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> |
          <a href="https://x.com/Lilo_mutindi?t=tmZqTxYEJf64Of1wYJtbZA&s=09" target="_blank" rel="noopener noreferrer"> twitter</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;