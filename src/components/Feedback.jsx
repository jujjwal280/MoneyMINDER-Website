import { useState } from 'react';

export default function Feedback() {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Thank you for your feedback!');
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <section id="feedback" className="section">
      <h2 className="section-title">📨 Try It. Tell Us.</h2>
      <div className="feedback-container">
        <div className="demo-box">
          <p>Ready to experience MoneyMINDER AI?</p>
          <a href="https://www.youtube.com/watch?v=pjY5KaxYVIE&t=3290s" target="_blank" rel="noopener noreferrer">
            <button className="download-btn ripple">Launch Live Demo 🚀</button>
          </a>
        </div>
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Feedback"
            rows="4"
            required
            value={formData.feedback}
            onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
          />
          <button type="submit">Send Feedback</button>
        </form>
      </div>
    </section>
  );
}