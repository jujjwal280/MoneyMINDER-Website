export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h3>MoneyMINDER AI</h3>
          <p>
            Smart expense management powered by AI-driven predictions.
            Take control of your finances with intelligent insights.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#screens">Screens</a>
          <a href="#ai-model">AI Model</a>
          <a href="#tech">Tech Stack</a>
          <a href="#about">About</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <a href="mailto:jujjwa280@gmail.com">📧 jujjwa280@gmail.com</a>
          <a
            href="https://github.com/jujjwal280"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐙 GitHub
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MoneyMINDER AI. All rights reserved.
      </div>
    </footer>
  );
}