export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">👤 About the Developer</h2>
      <div className="normal-card about-wrapper">
        <p className="description">
          Hi! I&apos;m <strong>Ujjwal Jain</strong>, a passionate <em>AI Developer</em> and <em>Tech Enthusiast</em>.
          I created <strong>MoneyMINDER AI</strong> as my major project to make expense management smarter and more
          intuitive using cutting-edge technology.
        </p>
        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i>{' '}
            <a href="mailto:jujjwal280@email.com">jujjwa280@gmail.com</a>
          </p>
          <p>
            <i className="fab fa-github"></i>{' '}
            <a href="https://github.com/jujjwal280" target="_blank" rel="noopener noreferrer">
              github.com/jujjwal280
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}