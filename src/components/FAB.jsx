import { useState } from 'react';

export default function FAB() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fab-container">
      <button
        className={`fab-main${open ? ' active' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <i className="fas fa-plus"></i>
      </button>
      <div className={`fab-options${open ? ' active' : ''}`}>
        <button
          className="fab-option"
            onClick={() => { const link = document.createElement("a");
            link.href = "/myapp.apk";
            link.setAttribute("download", "MyApp.apk");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          title="Download App"
        >
  <i className="fas fa-download"></i>
</button>
        <button
          className="fab-option"
          onClick={() => scrollTo('newsletter')}
          title="Subscribe"
        >
          <i className="fas fa-envelope"></i>
        </button>
        <button
          className="fab-option"
          onClick={() => scrollTo('feedback')}
          title="Feedback"
        >
          <i className="fas fa-comment"></i>
        </button>
        <button
          className="fab-option"
          onClick={() => window.open('https://github.com/ujjwaljain', '_blank')}
          title="GitHub"
        >
          <i className="fab fa-github"></i>
        </button>
      </div>
    </div>
  );
}