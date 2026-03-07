export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">👤 About the Developer</h2>

      <div className="normal-card about-wrapper">

        <h3 className="about-name">Ujjwal Jain</h3>

        <p className="description">
          I'm an <strong>Artificial Intelligence & Machine Learning undergraduate</strong> at
          <strong> KIET Group of Institutions</strong> with a passion for building
          intelligent applications that solve real-world problems.
        </p>

        <p className="description">
          My work focuses on combining <strong>AI, data analysis, and full-stack
          development</strong>. I developed <strong>MoneyMINDER AI</strong>, a
          smart personal finance application that helps users visualize spending
          habits and predict future expenses using <strong>machine learning models
          like ARIMA</strong>.
        </p>

        <p className="description">
          I also presented my research on <strong>AI-Driven Personal Finance
          Systems</strong> at the <strong>International Conference on
          Computational Sciences (ICCSC 2026)</strong>, exploring the future of
          intelligent financial tools.
        </p>

        {/* TECH STACK */}

        <div className="tech-stack">
          <span>Python</span>
          <span>C++</span>
          <span>Flutter</span>
          <span>Firebase</span>
          <span>Android Development</span>
          <span>React</span>
          <span>Cybersecurity</span>
          <span>OpenCV</span>
        </div>

        {/* ACHIEVEMENTS */}

        <div className="about-highlights">
          <p>🏆 Solved <strong>400+ problems</strong> on LeetCode</p>
          <p>📄 Research Paper Presentation at ICCSC 2026</p>
          <p>🥇 Winner - Institute Level Billiards Tournament</p>
          <p>💡 Active participant in hackathons & tech competitions</p>
        </div>

        {/* CONTACT LINKS */}

        <div className="contact-info">

          <a href="mailto:jujjwal280@gmail.com">
            📧 Email
          </a>

          <a
            href="https://github.com/jujjwal280"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 Portfolio
          </a>

          <a
            href="https://x.com/UjjwalJain_2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐦 Twitter
          </a>

          <a
            href="https://instagram.com/j_ujjwal24"
            target="_blank"
            rel="noopener noreferrer"
          >
            📸 Instagram
          </a>

          <a
            href="https://github.com/jujjwal280"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>

          <a
            href="https://linkedin.com/in/ujjwal-jain-17a370247"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/jujjwal280"
            target="_blank"
            rel="noopener noreferrer"
          >
            🧠 LeetCode
          </a>

        </div>

      </div>
    </section>
  );
}