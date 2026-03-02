import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Thank you for subscribing! We'll send updates to ${email}`);
    setEmail('');
  };

  return (
    <section id="newsletter" className="section">
      <h2 className="section-title">📧 Stay Updated</h2>
      <div className="newsletter-container">
        <p className="newsletter-description">
          Get the latest updates, financial tips, and feature announcements delivered to your inbox.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
        <p className="newsletter-privacy">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}