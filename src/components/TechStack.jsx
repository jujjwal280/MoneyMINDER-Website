export default function TechStack() {
  const techs = [
    { name: 'Flutter', icon: 'flutter/flutter-original.svg' },
    { name: 'Dart', icon: 'dart/dart-original.svg' },
    { name: 'Firebase', icon: 'firebase/firebase-plain.svg' },
    { name: 'Python', icon: 'python/python-original.svg' },
    { name: 'Pandas', icon: 'pandas/pandas-original.svg' },
    { name: 'NumPy', icon: 'numpy/numpy-original.svg' },
    { name: 'HTML5', icon: 'html5/html5-original.svg' },
    { name: 'CSS3', icon: 'css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
    { name: 'GitHub', icon: 'github/github-original.svg' },
    { name: 'Git', icon: 'git/git-original.svg' },
  ];

  return (
    <section id="tech" className="section">
      <h2 className="section-title">👨‍💻 Tech Stack</h2>
      <div
        className="normal-cards"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}
      >
        {techs.map((tech, i) => (
          <div className="normal-card" key={i} data-tooltip={tech.name}>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
              alt={tech.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}